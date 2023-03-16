import MovieList from './MovieList';
import { Movie } from '../assets/movieCollection';

type MovieTableProps = {
    movies: Movie[];
}

export default function MovieTable({ movies }: MovieTableProps) {
    return (
        <table className="table table-striped mt-5">
            <thead className="thead-dark thead-custom">
                <tr>
                    <th>名稱</th>
                    <th></th>
                    <th>年份</th>
                    <th>類別</th>
                    <th>語言</th>
                    <th>導演</th>
                    <th>演員</th>
                    <th>標籤</th>
                </tr>
            </thead>
            <tbody>
                <MovieList movies={movies} />
            </tbody>
        </table>
    );
}