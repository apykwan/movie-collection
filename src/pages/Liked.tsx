import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import MovieTable from '../components/MovieTable';
import { useMovieContext } from '../contexts/MovieContext';

export default function Liked() {
    const { likedMovieCount } = useMovieContext();
    const navigate = useNavigate();

    useEffect(() => {       
        if(!likedMovieCount) {
            toast.success("請重新加入電影");
            navigate("/");
            location.reload();
        }
    }, [likedMovieCount]);

    return <MovieTable />;
}