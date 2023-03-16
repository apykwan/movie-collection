import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useMovieContext } from '../contexts/MovieContext';
import MovieTable from '../components/MovieTable';

export default function Filter() {
    const { query } = useParams();
    const { state } = useLocation();
    
    const { filteredMovie, filteredMovieByActorOrTag } = useMovieContext();

    useEffect(() => {
        if (state === "actors" || state === "tags") {
            filteredMovieByActorOrTag(query as string, state);
        } else {
            filteredMovie(query as string, state);
        }
    }, [query, state]);

    return <MovieTable />;
}