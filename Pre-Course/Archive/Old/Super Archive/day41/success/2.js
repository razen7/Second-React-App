class BookingCalendar {
    constructor(rate) {
        this.rate = rate;
        this.hrs = {};
        this.totalMins = 0;
    }

    getRange(start, end) { // returns array
        let range = [];
        while (start < end) {
            range.push(start++);
        }
        return range;
    }

    bookingAvail(startHr, startMin, endHr, endMin) {
        let alreadyBooked = (allMins) => {
            let t1 = this.hrs[startHr] && this.hrs[startHr].includes(allMins[0]);
            let t2 = this.hrs[startHr] && this.hrs[startHr].includes(allMins[allMins.length - 2]);

            return t1 || t2;
        }
        if (startHr === endHr) {
            let allMins = this.getRange(startMin, endMin);
            let checking = alreadyBooked(allMins);
            if (checking) return false;
        } else {
            let i = 0;
            while (startHr <= endHr) {
                if (i === 0) { // for 1st hr
                    let allMins = this.getRange(startMin, 60);
                    let checking = alreadyBooked(allMins);
                    if (checking) return false;
                    ++i; ++startHr;
                } else if (startHr < endHr) {
                    let allMins = this.getRange(0, 60);
                    let checking = alreadyBooked(allMins);
                    if (checking) return false;
                    ++startHr;
                } else {
                    let allMins = this.getRange(0, endMin);
                    let checking = alreadyBooked(allMins);
                    if (checking) return false;
                    ++startHr;
                }
            }
        }
        return true;
    }

    book(start, end) {
        let [startHr, startMin] = start.split(':')
        let [endHr, endMin] = end.split(':')

        if (!this.bookingAvail(startHr, startMin, endHr, endMin)) {
            return false
        }

        if (!this.hrs[startHr]) this.hrs[startHr] = []

        let allMins;
        if (startHr === endHr) {
            allMins = this.getRange(startMin, endMin);
            this.hrs[startHr].push(...allMins);
            this.totalMins += allMins.length;
        } else {
            let i = 0;
            while (startHr <= endHr) {
                if (!this.hrs[startHr]) this.hrs[startHr] = []

                if (i === 0) { // for 1st hr
                    allMins = this.getRange(startMin, 60);
                    this.hrs[startHr].push(...allMins);
                    ++i;
                    ++startHr;
                } else if (startHr < endHr) {
                    allMins = this.getRange(0, 60);
                    this.hrs[startHr].push(...allMins);
                    ++startHr;
                } else {
                    allMins = this.getRange(0, endMin);
                    this.hrs[startHr].push(...allMins);
                    ++startHr;
                }
                this.totalMins += allMins.length;
            }
        }
        return true;
    }

    earnings() {
        return this.totalMins / 60 * this.rate;
    }
}

let bookings = new BookingCalendar(600);
console.log(bookings.book('10:10', '11:20')) // returns true
console.log(bookings.book('11:15', '12:25')); // returns false
console.log(bookings.book('11:30', '12:30')); // returns true
console.log(bookings.earnings()); // should return 1300 because total hours worked is 2hr 10 mins.
