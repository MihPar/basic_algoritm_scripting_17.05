function scramble(str1, str2) {
    const arr1 = str1.split("")
    const arr2 = str2.split("")
    for(let i = 0; i < arr1.length; i++) {
      for(let j = 0; j < arr2.length; j++) {
        if(arr2[j].includes(arr1[i])) {
          return false
        } else {
          return true
        }
      }
    }
    
    // for(let i = 0; i < arr2.length; i++) {
    //   if(arr1.indexOf(arr2[i]) === -1) {
    //     return false
    //   }
    // }
    // return true
  }
  console.log(scramble('jscripts',          'javascript' )) // false
  console.log(scramble('rkqodlw',           'world'      )) // true
  console.log(scramble('sammoc',            'commas'     )) // true