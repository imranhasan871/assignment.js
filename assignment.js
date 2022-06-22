/**
 * First Assignment
 * @function kilometerToMeter
 */

function kilometerToMeter(km) {
    return km * 1000;
}

let result = kilometerToMeter(45);

/**
 * Second Assignment
 *@func budgetCalculator
 */

function budgetCalculator(watch, phone, laptop) {
    let totalWatchPrice = watch * 50;
    let totalPhonePrice = phone * 100;
    let totalLaptopPrice = laptop * 500;
    return totalLaptopPrice + totalPhonePrice + totalWatchPrice;
}

let totalMoney = budgetCalculator(2, 3, 4);

/**
 * Third Function
 * @func hotelCost
 * 1-10  per day 100
 * 11 - 20 80tk kore dete hobe per day 80
 * else per day 50 tk
 */

function hotelCost(days) {
    if (days <= 10) {
        return days * 100;
    }
    if (days <= 20) {
        let extra = days % 10;
        let cost = extra * 80;
        return cost + 1000;
    } else {
        return days * 50;
    }
}

/**
 * Forth Function
 *@func megaFriend
 */

function megaFriend(friendList) {
    let firstName = friendList[0];
    for (let i = 0; i < friendList.length; i++) {
        let currentName = friendList[i];
        if (currentName.length > firstName.length) {
            prevName = currentName;
        }
    }
    return prevName;
}
