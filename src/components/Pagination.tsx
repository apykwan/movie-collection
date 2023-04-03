import { useState } from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";

import { Movie } from '../assets/movieCollection';
import { useMovieContext } from '../contexts/MovieContext';

interface RenderPageBtnProps {
    limit: number;
}

export default function RenderPageBtn ({ limit }: RenderPageBtnProps) {
    const { currentPage, setCurrentPage, movies } = useMovieContext();

    const totalPages = Math.ceil(movies?.length / limit);
    
    let buttons = [];
    for(let i = 1; i <= totalPages; i++ ) {
        buttons.push(
            <button
                key={`pageBtn__${i}`}
                className={`bg-dark mx-2 pagination-btn ${currentPage === i ? 'text-info': 'text-secondary' }`}
                onClick={() => {
                    setCurrentPage(i);
                    window.scrollTo(0, 0);
                }}
            >
                {i}
            </button>
        );
    };
    
    // render prev, next buttons
    const pageBtn = (type: string) => {
        return (
            <button
                key={`pageBtn__${type}`}
                className="btn btn-outline-dark p-2 mx-1 text-danger"
                disabled={currentPage === 1 && type === 'prev' || currentPage === totalPages && type === 'next'}
                onClick={() => {
                    setCurrentPage(
                        type === 'next' 
                            ? currentPage + 1 
                            : currentPage - 1
                    );
                    window.scrollTo(0, 0);
                }}
            >
                {type === 'next' ? <FcNext /> : <FcPrevious />}
            </button>
        );
    };

    if(totalPages > 1) {
        buttons.unshift(pageBtn('prev'));
        buttons.push(pageBtn('next'));
    }
    
    return (
        <div className="text-center my-4 text-center pagination-container">
            {buttons}
        </div>
    );
};

export function renderByPage (movies: Movie[], limit: number, currentPage: number) {
    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;

    return movies?.slice(start, end);
};