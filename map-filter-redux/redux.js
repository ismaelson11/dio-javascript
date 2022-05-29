function somaArray(arr){
    return arr.reduce(function(prev, currrent){
        console.log({prev});
        console.log({currrent});
        return prev + currrent;
    })
}

const nums = [1, 2, 3, 4];

console.log(somaArray(nums))