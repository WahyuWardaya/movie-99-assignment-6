import 'bootstrap/dist/css/bootstrap.min.css';

function Movie({ title, year, type, poster }) {
  return (
    <div className="card" style={{ width: '21rem', margin: '10px' }}>
      <img src={poster} className="card-img-top" alt={title} />
      <div className="card-body" style={{ backgroundColor: '#ffaf33' }}>
        <p className="card-text text-dark text-center fw-bold">{title}</p>
        <div className="d-flex flex-row gap-2 justify-content-center">
          <p className="card-title text-dark">{year}</p>
          <p className="card-title text-dark">|</p>
          <p className="card-title text-dark mb-0">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
