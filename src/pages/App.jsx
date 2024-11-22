import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies, setPage } from '../store/movieRedux';
import Header from '../components/Header';
import Movie from '../components/Movie';

function App() {
  const { movies, keyword, page } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ keyword, page }));
  }, [keyword, page, dispatch]);

  const pagesChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-wrap justify-content-center" style={{ padding: '20px' }}>
        {movies.map((movie) => (
          <Movie key={movie.imdbID} title={movie.Title} year={movie.Year} type={movie.Type} poster={movie.Poster} />
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-info me-2" onClick={() => pagesChange(page - 1)}>
          Previous
        </button>
        <button className="btn btn-info ms-2" onClick={() => pagesChange(page + 1)}>
          Next Pages
        </button>
      </div>
    </>
  );
}

export default App;
