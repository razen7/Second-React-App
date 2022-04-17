function sortDigits(num, order = "asc") {
    order = /\basc\b/i.test(order); // true if ASC
    num = String(num);
    let sorted = num.split('').sort(
        (n1, n2) => {
            // 1	sort b before a
            if (n1 > n2)
                return order ? 1 : -1;
            // -1	sort a before b
            if (n1 < n2)
                return order ? -1 : 1;
            return 0;
        }
    )
    return Number(sorted.join(''));
}

function reorderDigits(arr, order) {
    return arr.reduce((accu, cur) => {
        accu.push(sortDigits(cur, order))
        return accu;
    }, [])
}
console.log(
    reorderDigits([515, 341, 98, 44, 211], "asc"),// ➞ [155, 134, 89, 44, 112]

    reorderDigits([515, 341, 98, 44, 211], "desc"),// ➞ [551, 431, 98, 44, 211]

    reorderDigits([63251, 78221], "asc"),// ➞ [12356, 12278]

    reorderDigits([63251, 78221], "desc"),// ➞ [65321, 87221]

    reorderDigits([1, 2, 3, 4], "asc"),// ➞ [1, 2, 3, 4]

    reorderDigits([1, 2, 3, 4], "desc"),// ➞ [1, 2, 3, 4]
)