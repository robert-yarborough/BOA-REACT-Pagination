let arr1 = [1,2,3,4,5,6,7,8,9,10];


function operatorFn(arr){
  // filter out even numbers
  const filterEven = arr.filter((n) => {
    return n %  2 === 0;
  }).map((number) => {
    let randomMultiplied = number * Math.floor(Math.random() * (100 - 0));
    return randomMultiplied;
  }).sort();


  filterEven.map((n) => {
    // if(n === ){
    //
    // }
  })

  console.log(filterEven);
}


operatorFn(arr1);