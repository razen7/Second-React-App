function error(err) {
    let errors = {
        1: "Check the fan: e1",
        2: "Emergency stop: e2",
        3: "Pump Error: e3",
        4: "c: e4",
        5: "Temperature Sensor Error: e5"
    }
    return errors[err] ? errors[err] : 101;
}
console.log(
    error(1),
    error(2),
    error(3),
    error(4),
    error(5),
    error(),
)