function bouncer(arr) {
    let nextArr = []
      for(let char of arr) {
          if(Boolean(char)) {
              nextArr.push(char)
          }
      }
    return nextArr;
  }
  
  bouncer([7, "ate", "", false, 9]);