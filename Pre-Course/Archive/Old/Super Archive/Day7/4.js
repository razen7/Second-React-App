function filterList(numbers, filterFunction) {
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;
}
let numbers = [4, 12, 54];

//call the function
filterList(numbers, isAbove80);
filterList(numbers, isEvenNumber);
filterList(numbers, isSingleDigit);

/*
Line 14
filterList(numbers, isAbove80);
    isAbove80(4)
        return false;
    isAbove80(12)
        return false;
    isAbove80(54)
        return false;
    return []

Line 15
filterList(numbers, isEvenNumber);
    isAbove80(4)
        return true;
    isAbove80(12)
        return true;
    isAbove80(54)
        return true;
    return [4, 12, 54]

Line 16
filterList(numbers, isSingleDigit);
    isAbove80(4)
        return true;
    isAbove80(12)
        return false;
    isAbove80(54)
        return false;
    return [4]

*/