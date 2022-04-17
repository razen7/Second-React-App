let str= "0 1 12.345 7890 2.000 3";

//Write an expression to find all the floating point values from the string. i.e 12.345, 2.000
console.log(str.match(/\d*\.\d*/g));