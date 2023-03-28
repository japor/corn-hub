import MovieItem from "./MovieItem";

const Movies = ({ movies }) => {
  return (
    <div className="movies">
      <div className="container">
        {movies.map(movie => <MovieItem key={movie.id} {...movie} />)}

      </div>
    </div>
  );
}

export default Movies;
