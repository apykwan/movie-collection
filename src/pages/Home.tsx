import { movieCollection, Movie } from '../assets/movieCollection';
import MovieTable from '../components/MovieTable';

export default function Home() {
    return (
        <>
            <MovieTable movies={movieCollection} />
        </>
    );
}