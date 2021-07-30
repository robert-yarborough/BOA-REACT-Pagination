function get(url){
  const requestConfiguration = {
    method: 'GET'
  };
  return fetch(url, requestConfiguration).then(handleResponse);
}


// handle response
// function handleResponse(response){
//   return response.json().then((jsonResponse) => {
//     if(!jsonResponse.ok){
//       const error = jsonResponse.message || jsonResponse.statusText;
//       return  Promise.reject(error);
//     }
//   });
// }


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