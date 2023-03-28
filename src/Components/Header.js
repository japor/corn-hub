const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <h1>Corn HUB</h1>
        </div>
        <div className="search-form">
          <input className="form-input" type="text" placeholder="search movies here..." />
          <button>Search</button>
        </div>
        <div className="filter-form">
          <div className="filter-item">
            <label htmlFor="quality">Quality</label>
            <select className="form-input" name="quality" id="quality">
              <option value="all">All</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="quality">Genre</label>
            <select className="form-input" name="genre" id="genre">
              <option value="all">All</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="rating">Rating</label>
            <select className="form-input" name="rating" id="rating">
              <option value="all">All</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="year">Year</label>
            <select className="form-input" name="year" id="year">
              <option value="all">All</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="year">Language</label>
            <select className="form-input" name="language" id="language">
              <option value="all">All</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="year">Order By</label>
            <select className="form-input" name="order_by" id="order_by">
              <option value="all">All</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
