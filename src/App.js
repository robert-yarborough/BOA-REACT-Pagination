import React, { useState, useEffect } from 'react';
import {fetchMovies} from './_service/fetchMoviesAPI';
import Table from './components/Table';
// import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    fetchMovies.get(`https://api.themoviedb.org/3/movie/popular?${api_key}`).then((data) => {
        setItems(data.results);
    }).catch((error) => console.log(error));
  }, [api_key]);



  return (
    <div className="App">
      <Table items={items}/>
    </div>
  );
}

export default App;
