import MovieList from './MovieList';

export default function MovieTable() {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>中文</th>
                        <th>英文</th>
                        <th>年份</th>
                        <th>類別</th>
                        <th>語言</th>
                        <th>導演</th>
                        <th>演員</th>
                        <th>標籤</th>
                    </tr>
                </thead>
                <tbody>
                    <MovieList />
                </tbody>
            </table>
        </div>
    );
}