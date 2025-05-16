// import arrForSort;
import arrForSort from "./arrays";


function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i+1]) {
            [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
        }
    }
}

console.log(arrForSort)