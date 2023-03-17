import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MovieTable from '../components/MovieTable';
import { useMovieContext } from '../contexts/MovieContext';

export default function Liked() {
    const { likedMovies } = useMovieContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (likedMovies.length === 0) {
            localStorage.setItem('movie-liked', JSON.stringify([]));
            navigate('/');
        }
    }, [likedMovies]);

    return <MovieTable />;
}