console.log(dashed("Edabit")); // should return "-E-d-a-b-i-t"

dashed("Carpe Diem"); // should return "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!"); // should return "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"

function dashed(str) {
    let result='';
    for (const char of str) {
        if(['a','e','i','o','u'].includes(char.toLowerCase())){
            result+='-'+char+'-'
        }else 
        result+=char
    }
    return result
}