import { useDispatch } from 'react-redux';
import { setKeyword, setPage } from '../store/movieRedux';

function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.elements.search.value.trim();
    if (keyword) {
      dispatch(setKeyword(keyword));
      dispatch(setPage(1));
    }
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input name="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
