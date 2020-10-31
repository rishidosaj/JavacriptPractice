const boxes = ['a', 'b', 'c', 'd', 'e', 'f'];

function LogAllPairs(array) {
  
  for (let i = 0; i < array.length; i++) {
      //console.log(array[i]);
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] , array[j]);
    }
    
  }

  

}

LogAllPairs(boxes);