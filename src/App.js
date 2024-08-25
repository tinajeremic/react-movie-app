import {useEffect} from 'react';

import './App.css';

//b2abe3d8

const API_URL = 'http://www.omdbapi.com?apikey=b2abe3d8';

const movie1 = {
  
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"

};

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value='Superman'
          onChange={() => {}}
        />
        <img 
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg" 
          alt='search' 
          onClick={() => {}}
        />
      </div>

      <div className='container'>
          <div className='movie'>
            <div>
              <p>{movie1.Year}</p>
            </div>

            <div>
              <img 
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} 
              alt={movie1.Title}
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;