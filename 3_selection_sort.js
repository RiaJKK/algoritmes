arr = [4, 6, 8, 2, 9, 7, 2, 4]

function selectionSort(arr) {
    let start = 0;
    let end = arr.length - 1;
    let min_num_index = Infinity;
    while (start !== end) {
        let min_num = Infinity;
        for (let i = start; i <= end; i++) {
            if (arr[i] < min_num) {
                min_num = arr[i];
                min_num_index = i;
            }
        }
        [arr[start], arr[min_num_index]] = [arr[min_num_index], arr[start]];
        start++;

    }
    return arr;
}
console.log(selectionSort(arr))