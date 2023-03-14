import { movieCollection } from '../assets/movieCollection';
import { langConvert} from '../helpers/utils';

interface Movie {
    name_zh: string;
    name_en: string;
    genre: string;
    language: string;
    director: string;
    year: number;
    actors: [string],
    tags: [string]
}

export default function MovieList() {
    return (
        <>
        {movieCollection.map((movie: Movie) => (
            <tr key={movie.name_en}>
                <td>{movie.name_zh}</td>
                <td>{movie.name_en}</td>
                <td>{movie.genre}</td>
                <td>{langConvert(movie.language)}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td>{movie.actors?.join("、 ")}</td>
                <td>{movie.tags?.join("、 ")}</td>
            </tr>
        ))}
        </>
    );
}