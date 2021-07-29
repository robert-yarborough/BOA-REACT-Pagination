function get(url){
  const requestConfiguration = {
    method: 'GET'
  };
  return fetch(url, requestConfiguration).then(handleResponse);
}


// handle response
function handleResponse(response){
  return response.json().then((jsonResponse) => {
    if(!response.ok){
      const error = response.message || response.statusText;
      return  Promise.reject(error);
    }
  });
}

export const fetchMovies = {
  get,
}