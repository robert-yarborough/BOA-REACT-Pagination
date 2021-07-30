import React, { useState, useEffect } from 'react';
import {fetchMovies} from './_service/fetchMoviesAPI';
import Table from './components/Table';
// import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const api_key = process.env.REACT_APP_API_KEY;



  useEffect(() => {
    fetchMovies.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`).then((data) => {
        if(data){
          setLoading(true);
          setItems(data.results);
          setLoading(false);
        }
    }).catch((error) => console.log(error));
  }, [api_key]);

  console.log('App: items', items)
  return (
    <div className="App">
      <Table items={items}/>
    </div>
  );
}

export default App;
