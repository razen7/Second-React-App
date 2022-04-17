let schedules = [
    [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
    [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
    [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
]

console.log(appointmentScheduler(schedules, 60));
console.log(appointmentScheduler(schedules, 90));

function appointmentScheduler(schedules, duration) {
    // convert to mins
    sArr = schedules.map(v => {
        return v.map(v => {
            return v.map(v => {
                let arr = v.split(':').map(v => Number(v))
                return arr[0] * 60 + arr[1];
            })

        })
    })

    let [startT, endT] = [540, 1140];

    for (let t = startT; t <= endT; t++) {
        let checker = sArr.every(v => { // all ppl
            return v.every(v => { // calender slots
                let curStart = v[0];
                let curEnd = v[1];

                let test1 = t < curStart || t >= curEnd;
                let test2 = (duration + t < curStart || duration + t > curEnd)
                let test3 = duration + t <= endT && t >= startT;
                //&& duration + t != endT;
                return test1 && test2 && test3;
            })
        })
        if (checker) {
            let timeInMins = t / 60;
            let tArr = timeInMins.toString().split('.')
            // console.log(tArr);
            // let hr=hrs
            return tArr[0] + ':' + ('.' + tArr[1]) * 60;
        }
    }
    return undefined;
}