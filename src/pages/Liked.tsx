import { useEffect } from 'react';

import MovieTable from '../components/MovieTable';
import { createLocalStroage } from '../helpers/utils';

export default function Liked() {
    useEffect(() => {
        if (localStorage.getItem('movie-liked') === null) createLocalStroage('movie-liked');
    }, []);

    return <MovieTable />;
}