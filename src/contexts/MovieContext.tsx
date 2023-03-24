import { 
    createContext, 
    useContext, 
    ReactNode, 
    useState, 
    useEffect, 
    useCallback 
} from "react";

import { movieCollection, Movie } from '../assets/movieCollection';
import { 
    getMovieIndex, 
    updateMovieListWithLiked, 
    getLikedMoviesFromStorage, 
    createLocalStroage,
    sortList 
} from '../helpers/utils';

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
    movieCount: number;
    likedMovieCount: number;
    handleLiked: (movie: Movie) => void;
    reRenderHomePageMovies: () => void;
    likedMovies: Movie[]
}

const MovieContext = createContext({} as MovieContext);

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }: MovieProviderProps) => {
    const [movies, setMovies] = useState<Movie[]>(() => {
        if(localStorage.getItem('movie-liked') !== null) return updateMovieListWithLiked(movieCollection);
        return movieCollection;
    });
    const [likedMovies, setLikedMovies] = useState<Movie[]>(getLikedMoviesFromStorage);

    // find by genre, language or director
    const filteredMovie = useCallback((query: string, state: State1) => {
        const filtered =  movieCollection.filter((movie: any) => {
            if(movie[state] === query) return movie;
        });

        const updatedMovies = updateMovieListWithLiked(filtered);
        setMovies(prev => sortList(updatedMovies));
    }, []);

    // find by actors or tags
    const filteredMovieByActorOrTag = useCallback((query: string, state: State2) => {
        const filtered =  movieCollection.filter((movie: any) => {
            if(movie[state].findIndex((actor:string) => actor === query) > -1) return movie;
        });
        const updatedMovies = updateMovieListWithLiked(filtered);
        setMovies(prev => sortList(updatedMovies));
    }, []);

    // lieked a movie
    const handleLiked = (selected: Movie): void => {
        // check the like movie list
        const selectedMovieIdx = getMovieIndex(likedMovies, selected);
        const movieIdx = getMovieIndex(movies, selected);

        if(selectedMovieIdx === -1) {
            const updated = [...likedMovies, { ...selected, liked: true }];
            
            setLikedMovies(prev => updated);
            localStorage.setItem('movie-liked', JSON.stringify(updated));
            
            setMovies(prev => {
                prev[movieIdx]["liked"] = true;
                return prev;
            });
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
            
            setMovies(prev => {
                prev[movieIdx]["liked"] = false;
                return prev;
            });
        }
    };

    const reRenderHomePageMovies = (): void => {
        const updatedMovies = updateMovieListWithLiked(movieCollection);
        setMovies(prev => updatedMovies);
    };

    const movieCount = movies?.length;
    const likedMovieCount = likedMovies?.length;

    useEffect(() => {
        createLocalStroage();
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