import { useEffect } from 'react';

import MovieTable from '../components/MovieTable';
import { useMovieContext } from '../contexts/MovieContext';


export default function Home() {
    const { reRenderHomePageMovies } = useMovieContext();
   
    
    useEffect(() => {
        reRenderHomePageMovies();
    }, []);

    return <MovieTable />;
}