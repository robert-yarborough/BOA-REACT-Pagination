import React, { useState, useEffect } from 'react';
import {fetchMovies} from './_service/fetchMoviesAPI';
import Table from './components/Table';
import Pagination from "./components/Pagination";

function App(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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


  // get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);


  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="App">
      <Table loading={loading} items={items} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate} />
    </div>
  );
}

export default App;
