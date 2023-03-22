const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (multiplyFare) {
    return function (fare) {
        return multiplyFare * fare;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (nameArray, firstTwoLastTwoDrivers) {
    return firstTwoLastTwoDrivers(nameArray);
}
