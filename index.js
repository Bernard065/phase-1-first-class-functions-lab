// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers) {
    //const length = drivers.length
    return [drivers[(drivers.length)-2], drivers[(drivers.length)-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare){
        return integer * fare
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}


const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, either ) {
    return either(arrayOfDrivers)
}