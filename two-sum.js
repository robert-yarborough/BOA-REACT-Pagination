// two-sum

let nums = [3, 2, 4];
let target = 6;


function twoSum(integers, t){
  for(let i = 0; i < integers.length; i++){
    for(let j = 1; j < integers.length; j++){
      if(integers[i] + integers[j] === t){
        console.log(integers[i]);
        return [i, j]
      }
    }
  }
}


twoSum(nums, target);
console.log(twoSum(nums, target));