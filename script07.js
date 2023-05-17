function repeatStringNumTimes(str, num) {
  let string = ''
  if(num <= 0) {
    str = " "
  } else {
    
    for(let i = 0; i < num; i++) {
      string += str
    }
  }
  return string;
}

repeatStringNumTimes("abc", 3);