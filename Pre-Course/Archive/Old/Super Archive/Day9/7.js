// Part 1
let dimensions = [[2, 4], [5, 5], [6, 3], [12, 5]];
// Given the array of dimensions (width and height) of rectangles, create a new list which consist of areas of the rectangles.
let areaArr = dimensions.map(v => v[0] * v[1])
// Part 2
// Use the map method to generate a new list which consist of areas of the rectangles. 
areaArr = dimensions.map(v => v[0] * v[1])

// Part 3
// Use destructuring and map method to generate a new list which consist of areas of the rectangles.
areaArr = dimensions.map(v => {
    let [a, b] = [v[0], v[1]]
    return a * b;
})

// Part 4
let users = [{ firstName: 'Akhil', lastName: 'Gupta', age: 33 }, { firstName: 'John', lastName: 'Davis', age: 25 }, { firstName: 'Kimiko', lastName: 'Yamaguchi', age: 64 }];
// Given the list of users, create a new list consisting of firstName and lastName.
// e.g. list should contain 'Akhil Gupta', 'John Davis', 'Kimiko Yamaguchi'
let list = users.map(v => {
    return v.firstName + ' ' + v.lastName;
})
// console.log(list)
