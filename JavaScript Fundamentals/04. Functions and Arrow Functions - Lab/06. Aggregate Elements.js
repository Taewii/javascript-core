function aggregateElements(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, startValue, func) {
        let result = startValue;
        for (let i = 0; i < arr.length; i++) {
            result = func(result, arr[i]);
        }

        console.log(result);
    }
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);