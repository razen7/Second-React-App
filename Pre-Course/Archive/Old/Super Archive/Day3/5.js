let animals = ['dog', 'cat', 'mouse', 'cow', 'monkey', 'cat'];
// Write a statement to print the first occurence of the 'cat'
// Write a statement to print the second occurence of the 'cat'

let idx1, idx2;
idx1 = animals.indexOf('cat');
idx2 = animals.indexOf('cat', idx1+1);
console.log(idx1, idx2);