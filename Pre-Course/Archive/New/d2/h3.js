// Exercise 3
function chatroomStatus(members) {
    let msg = "";
    let count = members.length;
    switch (count) {
        case 0: msg = "no one online"; break;
        case 1: msg = members[0] + " online"; break;
        case 2: msg = members[0] + " and " + members[1] + " online"; break;
        default: msg = members[0] + ", " + members[1] + " and " + (count - 2) + " more online"; break;
    }
    return msg;
}