function getIndexToIns(arr, num) {
    // return arr.concat(num).sort((a, b) => a - b).indexOf(num)
    arr.sort(function(a, b) {
      return a - b
    })
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] >= num) {
        return i
      }
    }
    return arr.length
  }
  
  
  getIndexToIns([40, 60], 50);