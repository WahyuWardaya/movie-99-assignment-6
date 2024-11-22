import Search from './Search';

function Header() {
  return (
    <>
      <div>
        <nav className="navbar bg-warning text-dark">
          <div className="container">
            <a className="navbar-brand">Movie99</a>
            <Search />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
