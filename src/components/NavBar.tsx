import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TfiWrite, TfiHome, TfiBackLeft } from "react-icons/tfi";

import { useMovieContext } from '../contexts/MovieContext';

export default function NavBar() {
    const { movieCount, likedMovieCount } = useMovieContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <nav className="row navbar-custom bg-dark text-light p-1">
                <div className="col-3 display-5">
                    <NavLink to="/" className="navbar-brand mx-5">
                        <TfiHome size="35" />
                    </NavLink>
                </div>
                
                <div className="col-3 display-5">
                    <NavLink to="/favorites" className="navbar-brand">
                        <TfiWrite
                            className={`${likedMovieCount > 0 ? "text-info" : "text-secondary"}`} 
                            size="35" 
                        />
                    </NavLink>
                </div>
                
                <div className="col-3 display-5">
                    <span className="navbar-brand text-light mx-5 cursor">
                        <TfiBackLeft 
                            className={`${pathname !== "/" ? "text-info" : "text-secondary"}`} 
                            size="35" 
                            onClick={() => {
                                if (pathname !== "/") navigate(-1);
                            }} 
                        />
                    </span>
                </div>

                <div className="col-3 navbar-brand">
                    <span className="col-3 text-info text-left display-6">
                        {pathname !== '/favorites' ? movieCount : likedMovieCount}
                    </span>
                </div>
            </nav>
        </>
    );
}