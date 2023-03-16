import { useEffect, ReactElement } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useMovieContext } from '../contexts/MovieContext';
import MovieTable from '../components/MovieTable';

export default function Filter() {
    const { query } = useParams();
    const { state } = useLocation();
    
    const { filteredMovie, filteredMovieByActorOrTag, movies } = useMovieContext();

    useEffect(() => {
        if (state === "actors" || state === "tags") {
            filteredMovieByActorOrTag(query, state);
        } else {
            filteredMovie(query, state);
        }
    }, [query, state]);

    return (
        <MovieTable movies={movies} />
    );
}