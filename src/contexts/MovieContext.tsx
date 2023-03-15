import { createContext, useContext, ReactNode, useState } from "react";

import { movieCollection, Movie } from '../assets/movieCollection';

type MovieContext = {
    movies: Movie[];
}

const MovieContext = createContext({} as MovieContext);

export const useMovieContext = () => useContext(MovieContext);

export function MovieProvider() {
  
}