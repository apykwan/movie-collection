import { useEffect } from 'react';

import MovieTable from '../components/MovieTable';
import { useMovieContext } from '../contexts/MovieContext';

export default function Liked() {
    return <MovieTable />;
}