import { useEffect } from 'react';

import MovieTable from '../components/MovieTable';
import { useMovieContext } from '../contexts/MovieContext';

export default function Home() {
    const { allMovies, movies } = useMovieContext();
    
    useEffect(() => {
        allMovies();
    }, []);

    return (
        <>
            <MovieTable movies={movies} />
        </>
    );
}