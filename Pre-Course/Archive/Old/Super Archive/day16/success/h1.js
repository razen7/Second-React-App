class IceCream {
    constructor(flavorString, numSprinkles) {
        let flavors = {
            Plain: 0,
            Vanilla: 5,
            ChocolateChip: 5,
            Strawberry: 10,
            Chocolate: 10,
        }
        this.sweetness = flavors[flavorString] + numSprinkles;
    }
    getSweetness() {
        return this.sweetness;
    }
}

function sweetestIcecream(iceCreams) {
    let iceCreamsArr = iceCreams;
    return iceCreamsArr.reduce((accu, cur) => {
        return accu.getSweetness() > cur.getSweetness() ? accu : cur;
    }).getSweetness();

}
ice1 = new IceCream("Chocolate", 13)         // value of 23
ice2 = new IceCream("Vanilla", 0)           // value of 5
ice3 = new IceCream("Strawberry", 7)        // value of 17
ice4 = new IceCream("Plain", 18)             // value of 18
ice5 = new IceCream("ChocolateChip", 3)      // value of 8

console.log(
    sweetestIcecream([ice1, ice2, ice3, ice4, ice5]), // should return 23

    sweetestIcecream([ice3, ice1]), // should return 23

    sweetestIcecream([ice3, ice5]) // should return 17
)