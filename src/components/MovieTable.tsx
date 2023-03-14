import MovieList from './MovieList';

export default function MovieTable() {
    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <td>中文</td>
                        <td>英文</td>
                        <td>類別</td>
                        <td>語言</td>
                        <td>年份</td>
                        <td>導演</td>
                        <td>演員</td>
                        <td>標籤</td>
                    </tr>
                </thead>
                <tbody>
                    <MovieList />
                </tbody>
            </table>
        </div>
    );
}