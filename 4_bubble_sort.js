// import arrForSort;
import arrForSort from "./arrays.js";

function bubbleSort(arr) {
    // console.log(arr[i] , arr[i+1]);
    let end = arr.length - 1;

    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < end; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];

            }
        } end--;
    }
    return arr;
}

console.log(bubbleSort(arrForSort));