import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Filter from '../pages/Filter';
import Liked from '../pages/Liked';

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filtered-by/:query" element={<Filter />} />
            <Route path="/favorites" element={<Liked />} />
        </Routes>
    );
}