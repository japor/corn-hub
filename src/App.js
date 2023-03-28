import './App.scss';
import Header from './Components/Header';
import Movies from './Components/Movies';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios("https://raw.githubusercontent.com/japor/dot-Theory-JS-Training/main/list_movies.json")
      .then(response => setMovies(response.data.data.movies))
      .catch(error => console.log('Error fetching and parsing data', error))
  }, []);

  return (
    <>
      <Header />
      <Movies movies={movies} />
    </>
  );
}

export default App;
