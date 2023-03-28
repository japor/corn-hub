const MovieItem = ({ medium_cover_image, title_english, url, year, genres }) => {
  return (
    <div className="movie-item">
      <div className="movie-thumbnail">
        <img src={medium_cover_image} alt="movie thumbnail" />
      </div>
      <div className="movie-sub-info">
        <div className="genres">
          {genres.map(genre => <span>{genre}</span>)}
        </div>
        <div className="year">
          <span>{year}</span>
        </div>
      </div>
      <div className="movie-title">
        <a href={url}>{title_english}</a>
      </div>
    </div>
  );
}

export default MovieItem;
