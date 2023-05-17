function mutation(arr) {
    let arr1  = arr[0].toUpperCase()
    arr1.split("")[0]
    // console.log(arr1)
    
    let arr2  = arr[1].toUpperCase()
    arr2.split("")[1]
    // console.log(arr2)
    
    // for(let i = 0; i < arr1.length; i++) {
    //     for(let j = 0; j < arr2.length; j++) {
    //         if(arr[i].includes(arr[j])) {
    //             return true
    //         }
    //     }
    // }
    // return false
    for(let i = 0; i < arr2.length; i++) {
      if(arr1.indexOf(arr2[i]) === -1) {
        return false
      }
    }
    return true
}

console.log(mutation(["hello", "hey"]))
console.log(mutation(["hello", "Hello"]))