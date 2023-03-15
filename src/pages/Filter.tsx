import { useState, useEffect, ReactElement } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import MovieTable from '../components/MovieTable';
import { movieCollection, Movie } from '../assets/movieCollection';

export default function Filter(): ReactElement {
    const { query } = useParams();
    const { state } = useLocation();
    const [movies, setMovies] = useState<Movie[]>([]);

    const filteredMovie = (query: string | undefined, state: string): Array<Movie> => {
        const filteredMovie =  movieCollection.filter((movie: any) => {
            if(movie[state] === query) return movie;
        });
        return filteredMovie;
    };

    useEffect(() => {
        setMovies(filteredMovie(query, state));
    }, []);

    // if(movies.length === 0) return;
    return (
        <MovieTable movies={movies} />
    );
}