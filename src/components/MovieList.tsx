import { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

import { renderByPage } from './Pagination';
import { Movie } from '../assets/movieCollection';
import { useMovieContext } from '../contexts/MovieContext';
import { useScreenWidth } from '../hooks/useScreenWidth';
import { langConvert} from '../helpers/utils';

export default function MovieList() {
    const { movies, handleLiked, likedMovies, currentPage } = useMovieContext();
    const [render, setRender] = useState<Movie []>(movies);
    const { pathname } = useLocation();
    const [screenWidth] = useScreenWidth();

    const renderMovieRow = useMemo(() => {
        return render?.map((movie: Movie, index: number) => (
            <tr key={index + movie.name_en + movie.year}>
                <td className="cursor" onClick={() => handleLiked(movie)}>
                    {!movie.liked 
                        ? <GrCheckbox size="20" /> 
                        : <GrCheckboxSelected size="20" />
                    }
                </td>
                <td>{movie.name_zh}</td>
                <td>{movie.name_en}</td>
                {screenWidth >= 970 && (
                    <>
                        <td>{movie.year}</td>
                        <td>
                            <Link
                                className="link--query text-dark" 
                                to={`/filtered-by/${movie.genre}`} 
                                state="genre"
                            >
                                {movie.genre}
                            </Link>
                        </td>
                        <td>
                            <Link
                                className="link--query text-dark" 
                                to={`/filtered-by/${movie.language}`} 
                                state="language"
                            >
                                {langConvert(movie.language)}
                            </Link>
                        </td>
                    </>
                )}
                {screenWidth >= 768 && <>
                    <td>
                        <Link
                            className="link--query text-dark" 
                            to={`/filtered-by/${movie.director}`} 
                            state="director"
                        >
                            {movie.director}
                        </Link> 
                    </td>
                    <td>{movie.actors
                        .filter((item, idx) => {
                            if(screenWidth >= 992) {
                                return item;
                            } else {
                                if (idx < 1) return item;
                            }
                        })
                        .map((actor, index) => (
                            <span key={actor + (Math.random() * 10000)}>
                                <Link 
                                    className="link--query text-dark mx-1" 
                                    to={`/filtered-by/${actor}`} 
                                    state="actors"
                                >
                                    {actor}
                                </Link>
                                {index !== (movie.actors.length - 1) && screenWidth >= 992
                                    ? "、"
                                    : ""
                                }
                            </span>
                        ))}
                    </td>
                </>}
            </tr>
        ));
    }, [pathname, render, likedMovies, movies, screenWidth]);
    
    useEffect(() => {
        if(pathname === "/favorites") {
            setRender(likedMovies);
        } else {
            setRender(renderByPage(movies, 50, currentPage));
        }
    }, [pathname, movies, likedMovies, currentPage]);

    return <>{renderMovieRow}</>;
}