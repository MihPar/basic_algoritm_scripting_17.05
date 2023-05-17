function titleCase(str) {
    const arr = str.split(" ")
      let newArr = []
      for(let char of arr) {
          newArr.push(char[0].toUpperCase() + char.slice(1).toLowerCase())
      }
    return str = newArr.join(" ")
  }
  
  titleCase("I'm a little tea pot");