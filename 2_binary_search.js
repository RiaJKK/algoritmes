const array = [1, 3, 4, 6, 7, 8, 10, 23, 25, 27, 29, 30, 31, 34]


console.log(binarySearch(array, 10, "res"))

function binarySearch(array, item) {
    let position = Math.floor(array.length / 2);
    console.log(array.length, position, "arr lenght")
    let half = position;


    count = 10

    while (count > 0) {
         count--;
        console.log(position, item, "hjhj")
        if (array[position] === item) { return position; }
        else if (array[position] > item) {
            console.log("array[position] > item")
            console.log(array[position], position, half )
            if (half !== 1) {
                half = Math.floor(half / 2);
            }

            position = position - half  - 1;
            console.log("after calc", position, half )

        }
        else if (array[position] < item) {
            console.log("array[position] < item")
            console.log(array[position], position, half )
            if (half !== 1) {
                half = Math.floor(half / 2);
            }
            position = half + position;

        }}

}