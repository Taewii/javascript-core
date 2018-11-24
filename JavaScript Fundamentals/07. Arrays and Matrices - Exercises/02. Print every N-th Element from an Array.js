function printEveryNthElementFromArray(arr) {
    const step = arr.pop();

    for (let i = 0; i < arr.length; i += +step) {
        console.log(arr[i]);
    }
}

printEveryNthElementFromArray(['5', '20', '31', '4', '20', '2']);
printEveryNthElementFromArray(['dsa', 'asd', 'test', 'tset', '2']);
printEveryNthElementFromArray(['1', '2', '3', '4', '5', '6']);
