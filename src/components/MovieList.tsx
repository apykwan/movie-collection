import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

import { Movie } from '../assets/movieCollection';
import { useMovieContext } from '../contexts/MovieContext';
import { langConvert} from '../helpers/utils';

export default function MovieList() {
    const { movies, handleLiked, likedMovies } = useMovieContext();
    const [render, setRender] = useState<Movie []>(movies);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const listActors = (actors: string[]) => {
        return actors.map((actor, index) => (
            <span key={actor + (Math.random() * 10000)}>
                <Link 
                    className="link--query text-dark mx-1" 
                    to={`/filtered-by/${actor}`} 
                    state="actors"
                >
                    {actor}
                </Link>
                {index === (actors.length - 1) ? "" : "、"}
            </span>
        ));
    };
    
    useEffect(() => {
        if(pathname === "/favorites") {
            setRender(likedMovies);
        } else {
            setRender(movies);
        }
    }, [pathname, movies, likedMovies]);
    
    return (
        <>
            {render?.map((movie: Movie, index: number) => (
                <tr key={index + movie.name_en + movie.year}>
                    <td className="cursor" onClick={() => {
                        handleLiked(movie);
                        navigate("/favorites");
                    }}>
                        {!movie.liked ? <GrCheckbox size="20" /> : <GrCheckboxSelected size="20" />}
                    </td>
                    <td>{movie.name_zh}</td>
                    <td>{movie.name_en}</td>
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
                    <td>
                        <Link
                            className="link--query text-dark" 
                            to={`/filtered-by/${movie.director}`} 
                            state="director"
                        >
                            {movie.director}
                        </Link> 
                    </td>
                    <td>{listActors(movie.actors)}</td>
                </tr>
            ))}
        </>
    );
}