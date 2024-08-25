import {useEffect} from 'react';

//b2abe3d8

const API_URL = 'http://www.omdbapi.com?apikey=b2abe3d8';

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
    <h1>App</h1>
  );
}

export default App;