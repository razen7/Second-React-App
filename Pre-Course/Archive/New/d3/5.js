function fixObject(obj) {
    // write your code here
    let result = {};
    for (const [key, val] of Object.entries(obj)) {
        result[key + 's'] = val;
    }
    return result;
}

let obj = {
    sibling: 3,
    fav_movie: ['The Matrix', 'Titanic', 'Iron man', 'Avatar'],
    phone_number: [7872300000, 9012312312],
    friend: ['Raj', 'Kunal', 'Akash']
}

let newObject = fixObject(obj);

console.log(newObject);
  /*
Output:
 
{
siblings: 3,
fav_movies: ['The Matrix', 'Titanic', 'Iron man', 'Avatar'],
phone_numbers: [7872300000, 9012312312],
friends: ['Raj', 'Kunal', 'Akash']
}
*/