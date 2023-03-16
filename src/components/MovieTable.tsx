import MovieList from './MovieList';

export default function MovieTable() {
    return (
        <table className="table table-striped mt-5">
            <thead className="thead-dark thead-custom">
                <tr>
                    <th></th>
                    <th>名稱</th>
                    <th></th>
                    <th>年份</th>
                    <th>類別</th>
                    <th>語言</th>
                    <th>導演</th>
                    <th>演員</th>
                </tr>
            </thead>
            <tbody>
                <MovieList />
            </tbody>
        </table>
    );
}