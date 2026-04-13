let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* function repeatElement() {
    for (let i = 0; i < arr.length; i++) {
        console.log("" + arr[i] + arr[i])
    }
} */


function repeatElement() {
    for (let i = 0; i < arr.length; i++) {
        console.log(String(arr[i]) + String(arr[i]))
    }
}

repeatElement()