import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BiHome, BiMovie } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";

import { useMovieContext } from '../contexts/MovieContext';

export default function NavBar() {
    const { movieCount } = useMovieContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    console.log(pathname.includes('filtered-by'));
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom">
                <div className="">
                    <NavLink to="/" className="navbar-brand mx-5">
                        <BiHome size="25" />
                    </NavLink>
                    <span className="text-light">
                        <BiMovie size="25" /> {movieCount()}
                    </span>
                    {pathname.includes('filtered-by') && (
                        <span className="text-light mx-5 go-back">
                            <BsArrowReturnLeft size="25" onClick={() => navigate(-1)} />
                        </span>
                    )}
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </nav>
        </>
    );
}