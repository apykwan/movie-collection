import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TfiWrite, TfiHome, TfiBackLeft } from "react-icons/tfi";
import toast from 'react-hot-toast';

import { useMovieContext } from '../contexts/MovieContext';

export default function NavBar() {
    const { movieCount, likedMovieCount } = useMovieContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <nav className="row navbar-custom bg-dark text-light pb-1">
                <div className="col-4 col-sm-3 display-5 text-center">
                    <NavLink to="/" className="navbar-brand">
                        <TfiHome
                            className={`${pathname === "/" ? "text-info" : ""}`}  
                            size="40" 
                        />
                    </NavLink>
                </div>
                
                <div className="col-4 col-sm-3 display-5 text-center">
                    <NavLink to="/favorites" className="navbar-brand">
                        <TfiWrite
                            className={`${likedMovieCount > 0 ? "text-warning" : "text-secondary"}`} 
                            size="40" 
                        />
                    </NavLink>
                </div>
                
                <div className="d-none d-sm-block col-sm-3 display-5 text-center">
                    <span className="navbar-brand text-light cursor">
                        <TfiBackLeft 
                            className={`${pathname !== "/" ? "text-info" : "text-secondary"}`} 
                            size="40" 
                            onClick={() => {
                                if (pathname !== "/") {
                                    navigate(-1);
                                } else {
                                    toast.success("已在主頁");
                                }
                            }} 
                        />
                    </span>
                </div>

                <div className="col-4 col-sm-3 navbar-brand text-center">
                    <span className={`display-5 ${pathname !== "/favorites" ? "text-info" : "text-warning"}`}>
                        {pathname !== '/favorites' ? movieCount : likedMovieCount}
                    </span>
                </div>
            </nav>
        </>
    );
}