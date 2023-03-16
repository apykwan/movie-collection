import { createContext, useContext, ReactNode, useState } from "react";

import { movieCollection, Movie } from '../assets/movieCollection';

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
    allMovies: () => void;
    filteredMovie: (query: string | undefined, state: State1) => void;
    filteredMovieByActorOrTag: (query: string | undefined, state: State2) => void;
    movieCount: () => number;
}



const MovieContext = createContext({} as MovieContext);

export const useMovieContext = () => useContext(MovieContext);

export function MovieProvider({ children }: MovieProviderProps) {
    const [movies, setMovie] = useState<Movie[]>(movieCollection);

    const filteredMovie = (query: string | undefined, state: State1) => {
        const filtered =  movieCollection.filter((movie: any) => {
            if(movie[state] === query) return movie;
        });
        setMovie(filtered);
    };

    // find by actors or tags
    const filteredMovieByActorOrTag = (query: string | undefined, state: State2) => {
        const filtered =  movieCollection.filter((movie: any) => {
            if(movie[state].findIndex((actor:string) => actor === query) > -1) return movie;
        });
        setMovie(filtered);
    };

    const movieCount = () => movies.length;
    const allMovies = () => setMovie(movieCollection);

    return (
        <MovieContext.Provider value={{ movies, allMovies, filteredMovie, movieCount }}>
            {children}
        </MovieContext.Provider>
    );
}