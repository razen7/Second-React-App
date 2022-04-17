// Create a function that takes an array of names in the format "First Name Last Name" (e.g. "John Doe"), and returns an array of these names sorted by the length of their last names. If the length of multiple last names are the same, then proceed to sort alphabetically by last name.

console.log(
    lastNameLensort([
        "Jennifer Figueroa",
        "Heather Mcgee",
        "Amanda Schwartz",
        "Nicole Yoder",
        "Melissa Hoffman"
    ]) // ["Heather Mcgee", "Nicole Yoder", "Melissa Hoffman", "Jennifer Figueroa", "Amanda Schwartz"]
)

function lastNameLensort(arr) {
    return sortContacts(arr);
}

function sortContacts(contacts, order = "ASC") {
    let sorted = contacts.sort(
        (name1, name2) => {
            last1 = name1.split(' ')[1].length;
            last2 = name2.split(' ')[1].length;
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