// https://gist.github.com/razen7/7933dfcad6ba185cc8a0cbaf9276a115

function fizz() {
    for (let index = 1; index < 101; index++) {
        console.log(index % 3 === 0 ? "fizz" : index);
    }
}
fizz()