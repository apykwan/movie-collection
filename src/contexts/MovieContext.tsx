import { createContext, useContext, ReactNode, useState, useEffect } from "react";

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
    const [movies, setMovie] = useState<Movie[]>(movieCollection);
    const [searched, setSearch] = useState<Movie[]>([]);
    const [likedMovies, setLikedMovies] = useState<Movie[]>([]);

    // find by genre, language or director
    const filteredMovie = (query: string, state: State1) => {
        const filtered =  movieCollection.filter((movie: any) => {
            if(movie[state] === query) return movie;
        });
        setMovie(filtered);
    };

    // find by actors or tags
    const filteredMovieByActorOrTag = (query: string, state: State2) => {
        const filtered =  movieCollection.filter((movie: any) => {
            if(movie[state].findIndex((actor:string) => actor === query) > -1) return movie;
        });
        setMovie(filtered);
    };

    // lieked a movie
    const handleLiked = (selected: Movie): void => {
        const selectedMovie = likedMovies?.findIndex(movie => {
            if (
                movie.name_en === selected.name_en &&
                movie.name_zh === selected.name_zh &&
                movie.year === selected.year
            ) return movie;
        });
        
        if(selectedMovie === -1) {
            const updated = [...likedMovies, { ...selected, liked: true }];
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
            setLikedMovies(prev => filteredLikedMovies);
            localStorage.setItem('movie-liked', JSON.stringify(filteredLikedMovies));
        }
    };

    // removed the liked movies from the home page list
    const reRenderHomePageMovies = (): void => {
        const getLikedMovies = JSON.parse(localStorage.getItem('movie-liked') || '{}');
        if (!getLikedMovies) {
            setMovie(movieCollection);
            return;
        }

        const filtered = movieCollection.filter(movie => {
            const liked = getLikedMovies.findIndex((selected: any) => {
                if (
                    movie.name_en === selected.name_en &&
                    movie.name_zh === selected.name_zh &&
                    movie.year === selected.year
                ) return selected;
            });
            if (liked === -1) return movie;
        });
        setMovie(prev => filtered);
    };

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