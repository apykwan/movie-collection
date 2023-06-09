import { Movie } from '../assets/movieCollection';

export const langConvert = (lang: string = ""): string => {
    if(lang === "zh-m") {
        return "國語";
    } else if(lang === "zh-c") {
        return "粵語";
    } else if(lang === "en") {
        return "英語";
    } else if(lang === "fr") {
        return "法語";
    } else if(lang === "ge") {
         return "德語";
    } else if(lang === "jp") {
        return "日語"
    } else if(lang === "kr") {
        return "韓語";
    } else if(lang === "th") {
         return "泰語";
    } else if (lang === "vi") {
         return "越語";
    } else {
        return "從缺";
    }
};

export const getLikedMoviesFromStorage = JSON.parse(localStorage.getItem('movie-liked') || '{}');

// return the index of the movie list
export const getMovieIndex = (movieLists: Movie[], selectedMovie: Movie): number => {
    return movieLists?.findIndex(movie => {
        if (
            movie.name_en === selectedMovie.name_en &&
            movie.name_zh === selectedMovie.name_zh &&
            movie.year === selectedMovie.year
        ) return movie;
    });
};

export const updateMovieListWithLiked = (movieLists: Movie[]): Movie[] => {
    return movieLists.map(movie => {
        const likedMovieIdx = getMovieIndex(getLikedMoviesFromStorage || [], movie);
        if (likedMovieIdx === -1) return movie;
        
        return { ...movie, liked: true };
    });
};

// create localStorage if storage does not exist
export const createLocalStroage = (key: string = 'movie-liked') => {
    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, JSON.stringify([]));
        location.reload();
    } 
}

export const sortList = (list: Movie[]): Movie[] => {
    return list.sort((a, b): any => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;

        return 0;
    });
};