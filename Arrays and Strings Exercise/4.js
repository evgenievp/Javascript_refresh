function sortNumbers(array) {

    let result = [];
    let left = 0;

    let arr = array.sort((a, b) => a - b);
    let right = arr.length - 1;
    while (left <= right) {
        if (left <= right) result.push(arr[left++]);  
        if (left <= right) result.push(arr[right--]); 
    }


    return result;

}


sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
