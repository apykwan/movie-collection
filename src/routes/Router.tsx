import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Filter from '../pages/Filter';

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filtered-by/:query" element={<Filter />} />
        </Routes>
    );
}