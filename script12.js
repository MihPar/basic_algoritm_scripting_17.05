function frankenSplice(arr1, arr2, n) {
    arr2 = arr2.slice(0, n).concat(arr1, arr2.slice(n))
    return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);