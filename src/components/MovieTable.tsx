import MovieList from './MovieList';
import { useScreenWidth } from '../hooks/useScreenWidth';

export default function MovieTable() {
    const [screenWidth] = useScreenWidth();
    
    return (
        <table className="table table-striped mt-5">
            {screenWidth >= 768 && (
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
                        <th>導演</th>
                        <th>演員</th>
                    </tr>
                </thead>
            )}
            <tbody>
                <MovieList />
            </tbody>
        </table>
    );
}