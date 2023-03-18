import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BiHome, BiMovie } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

import { useMovieContext } from '../contexts/MovieContext';

export default function NavBar() {
    const { movieCount, likedMovieCount, likedMovies } = useMovieContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <nav className="display-6 bg-dark text-light p-2 navbar-custom d-sm-inline-flex d-md-flex justify-content-between d-flex-wrap">
                <div className="">
                    <NavLink to="/" className="navbar-brand mx-5">
                        <BiHome size="29" />
                    </NavLink>
                    
                    {likedMovies.length > 0 && <NavLink to="/favorites" className="navbar-brand mx-5">
                        <TfiWrite size="25" />
                    </NavLink>}
                    
                </div>
                <div className="mx-5">
                    {(pathname.includes('filtered-by') || pathname === '/favorites') && (
                        <span className="text-light mx-5 cursor">
                            <BsArrowReturnLeft size="25" onClick={() => navigate(-1)} />
                        </span>
                    )}
                    <span className="text-info">
                        {pathname !== '/favorites' ? movieCount : likedMovieCount}
                    </span>
                </div>
            </nav>
        </>
    );
}