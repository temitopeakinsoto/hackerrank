function getSecondLargestNum(arr){
    if(arr.length < 3) return "Array too short"

    let largestNum = 0;
    let secondLargestNum = 0;
    const lent = arr.length;

    for(let i=0; i < lent; i++){
        if(arr[i] > largestNum) largestNum = arr[i];
    }

    for(let i=0; i < arr.length; i++){
        if(arr[i] === largestNum) continue
        if(arr[i] > secondLargestNum) secondLargestNum = arr[i]
    }

    return secondLargestNum;
}

console.log(getSecondLargestNum([4, 6, 77, 200, 2, 4]))