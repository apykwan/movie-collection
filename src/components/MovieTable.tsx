import MovieList from './MovieList';
import { useScreenWidth } from '../hooks/useScreenWidth';
import { useMovieContext } from '../contexts/MovieContext';

export default function MovieTable() {
    const [screenWidth] = useScreenWidth();
    const { likedMovieCount } = useMovieContext();
    
    return (
        <table className="table table-striped mt-5">
            <thead className="thead-dark thead-custom">
                <tr>
                    <th></th>
                    <th>名稱</th>
                    <th></th>
                    {screenWidth >= 992 && (
                        <>
                            <th>年份</th>
                            <th>類別</th>
                            <th>語言</th>
                        </>
                    )}
                    {screenWidth >= 768 && <>
                        <th>導演</th>
                        <th>演員</th>
                    </>}
                </tr>
            </thead>
            <tbody>
                <MovieList />
            </tbody>
        </table>
    );
}