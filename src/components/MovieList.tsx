import { Link } from 'react-router-dom';

import { Movie } from '../assets/movieCollection';
import { langConvert} from '../helpers/utils';

export default function MovieList({ movies }: Movie[]) {
    return (
        <>
            {movies.map((movie: Movie, index: number) => (
                <tr key={index + movie.name_en + movie.year}>
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
                    <td>{movie.director}</td>
                    <td>{movie.actors?.join("、 ")}</td>
                    <td>{movie.tags?.join("、 ")}</td>
                </tr>
            ))}
        </>
    );
}