import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BiHome, BiMovie } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

import { useMovieContext } from '../contexts/MovieContext';

export default function NavBar() {
    const { movieCount, likedMovieCount } = useMovieContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom">
                <div className="">
                    <NavLink to="/" className="navbar-brand mx-5">
                        <BiHome size="25" />
                    </NavLink>
                    <span className="text-light">
                        <BiMovie size="25" /> 
                        {pathname !== '/favorites' ? movieCount() : likedMovieCount()}
                    </span>
                    
                    {(pathname.includes('filtered-by') || pathname === '/favorites') && (
                        <span className="text-light mx-5 cursor">
                            <BsArrowReturnLeft size="25" onClick={() => navigate(-1)} />
                        </span>
                    )}
                    <NavLink to="/favorites" className="navbar-brand mx-5">
                        <TfiWrite size="25" />
                    </NavLink>
                </div>
            </nav>
        </>
    );
}