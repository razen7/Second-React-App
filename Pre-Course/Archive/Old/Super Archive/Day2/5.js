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

console.log(
    chatroomStatus([]) // should return "no one online"
    ,'\n',
    chatroomStatus(["paRIE_to"]) // should return "paRIE_to online"
    ,'\n',
    chatroomStatus(["s234f", "mailbox2"]) // should return "s234f and mailbox2 online"
    ,'\n',
    chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
    // should return "pap_ier44, townieBOY and 4 more online"
)