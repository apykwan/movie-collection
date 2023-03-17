import { createContext, useContext, ReactNode, useState, useEffect, useCallback } from "react";

import { movieCollection, Movie } from '../assets/movieCollection';
import { getMovieIndex } from '../helpers/utils';

type MovieProviderProps = {
    children: ReactNode;
}

enum State1 {
    genre,
    language,
    director
}

enum State2 {
    actors,
    tags,
}

type MovieContext = {
    movies: Movie[];
    filteredMovie: (query: string, state: State1) => void;
    filteredMovieByActorOrTag: (query: string, state: State2) => void;
    movieCount: () => number;
    likedMovieCount: () => number;
    handleLiked: (movie: Movie) => void;
    reRenderHomePageMovies: () => void;
    likedMovies: Movie[]
}

const MovieContext = createContext({} as MovieContext);

export const useMovieContext = () => useContext(MovieContext);

export function MovieProvider({ children }: MovieProviderProps) {
    const [movies, setMovies] = useState<Movie[]>(movieCollection);
    const [likedMovies, setLikedMovies] = useState<Movie[]>([]);

    // find by genre, language or director
    const filteredMovie = (query: string, state: State1) => {
        const filtered =  movies.filter((movie: any) => {
            if(movie[state] === query) return movie;
        });
        setMovies(filtered);
    };

    // find by actors or tags
    const filteredMovieByActorOrTag = (query: string, state: State2) => {
        const filtered =  movies.filter((movie: any) => {
            if(movie[state].findIndex((actor:string) => actor === query) > -1) return movie;
        });
        setMovies(filtered);
    };

    // lieked a movie
    const handleLiked = (selected: Movie): void => {
        // check the like movie list
        const selectedMovie = getMovieIndex(likedMovies, selected);
        const selectedOriginal = getMovieIndex(movies, selected);

        if(selectedMovie === -1) {
            const updated = [...likedMovies, { ...selected, liked: true }];
            movies[selectedOriginal]["liked"] = true;

            setLikedMovies(prev => updated);
            localStorage.setItem('movie-liked', JSON.stringify(updated));
        } else {
            const filteredLikedMovies = likedMovies?.filter(movie => {
                if (
                    movie.name_en !== selected.name_en &&
                    movie.name_zh !== selected.name_zh &&
                    movie.year !== selected.year
                ) return movie;
            });
            movies[selectedOriginal]["liked"] = false;

            setLikedMovies(prev => filteredLikedMovies);
            localStorage.setItem('movie-liked', JSON.stringify(filteredLikedMovies));
        }
    };

    const reRenderHomePageMovies = useCallback((): void => {
        const getLikedMoviesFromStorage = JSON.parse(localStorage.getItem('movie-liked') || '{}');
        if (!getLikedMoviesFromStorage) {
            setMovies(movieCollection);
            return;
        }

        const updatedMovies = movieCollection.map(movie => {
            const likedMovieIdx = getMovieIndex(getLikedMoviesFromStorage, movie);
            if (likedMovieIdx === -1) return movie;
            
            return { ...movie, liked: true };
        });
        setMovies(prev => updatedMovies);
    }, []);

    const movieCount = () => movies?.length;
    const likedMovieCount = () => likedMovies?.length;

    useEffect(() => {
        const getLikedMovies = JSON.parse(localStorage.getItem('movie-liked') || '{}');
        setLikedMovies(prev => getLikedMovies);
    }, []);

    return (
        <MovieContext.Provider 
            value={{ 
                movies, 
                filteredMovie,
                movieCount,
                likedMovieCount, 
                filteredMovieByActorOrTag,
                handleLiked,
                likedMovies,
                reRenderHomePageMovies
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}