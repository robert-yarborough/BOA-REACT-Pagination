function get(url){
  const requestConfiguration = {
    method: 'GET'
  };
  return fetch(url, requestConfiguration).then(handleResponse);
}


function handleResponse(response){
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if(!response.ok){
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  })
}

export const fetchMovies = {
  get,
}