import { useState } from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";

import { Movie } from '../assets/movieCollection';
import { useMovieContext } from '../contexts/MovieContext';

interface RenderPageBtnProps {
    limit: number;
}

export default function RenderPageBtn ({ limit }: RenderPageBtnProps) {
    const { currentPage, setCurrentPage, movies } = useMovieContext();
    const [changeClassName, setchangeClassName] = useState(false);

    const totalPages = Math.ceil(movies?.length / limit);
    
    let buttons = [];
    for(let i = 1; i <= totalPages; i++ ) {
        buttons.push(
            <button
                key={`pageBtn__${i}`}
                className={`btn btn-dark p-3 mx-2 ${currentPage === i ? 'text-info': 'text-secondary' }`}
                onClick={() => setCurrentPage(i)}
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
                className="btn btn-dark p-3 mx-1 text-warning"
                onClick={() => {
                    setCurrentPage(
                        type === 'next' 
                            ? currentPage + 1 
                            : currentPage - 1
                        );
                    }}
                >
                {type === 'next' ? <FcNext /> : <FcPrevious />}
            </button>
        );
    };

    if (currentPage === 1 && totalPages > 1) {
        buttons.push(pageBtn('next'));
    } else if (currentPage < totalPages) {
        buttons.unshift(pageBtn('prev'));
        buttons.push(pageBtn('next'));
    } else if (currentPage === totalPages && totalPages > 1) {
        buttons.unshift(pageBtn('prev'));
    }
        return (
            <div className="text-center my-4 d-flex justify-content-center">
                {buttons}
            </div>
        );
};

export function renderByPage (movies: Movie[], limit: number, currentPage: number) {
    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;

    return movies?.slice(start, end);
};