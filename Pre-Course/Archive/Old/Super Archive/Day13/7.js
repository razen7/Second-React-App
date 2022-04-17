// Exercise 2
function sortContacts(contacts, order) {
    let sorted = contacts.sort(
        (name1, name2) => {
            last1 = name1.split(' ')[1];
            last2 = name2.split(' ')[1];
            // 1	sort b before a
            if (last1 > last2)
                return order === "ASC" ? 1 : -1;
            // -1	sort a before b
            if (last1 < last2)
                return order === "ASC" ? -1 : 1;
            return 0;
        }
    )
    return sorted;
}
console.log(
    sortContacts([
        "John Locke",
        "Thomas Aquinas",
        "David Hume",
        "Rene Descartes"
    ], "ASC")
    // should return [
    //   "Thomas Aquinas",
    //   "Rene Descartes",
    //   "David Hume",
    //   "John Locke"
    // ]
)