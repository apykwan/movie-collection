import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import MovieTable from '../components/MovieTable';
import { useMovieContext } from '../contexts/MovieContext';
import { createLocalStroage } from '../helpers/utils';

export default function Liked() {
    const { likedMovieCount } = useMovieContext();
    const navigate = useNavigate();

    useEffect(() => {
        if(likedMovieCount === 0) {
            toast.success("請加入電影");
            navigate("/");
        }
    }, [likedMovieCount]);

    useEffect(() => {
        if (localStorage.getItem('movie-liked') === null) createLocalStroage('movie-liked');
    }, []);

    return <MovieTable />;
}