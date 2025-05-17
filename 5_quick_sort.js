const arr = [2, 43, 2, 5, 7 ,8, 3, 8, 2, 3, 23, 2222, 546, 5,4]

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor((arr.length)/2);
    let pivot = arr[pivotIndex];
    let less = []
    let more = []
    for (let i=0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else if (arr[i] > pivot) {
            more.push(arr[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(more)]
}

console.log(quickSort(arr))