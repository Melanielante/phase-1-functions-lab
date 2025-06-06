// Code your solution in this file!
const hqLocation = 42;
function distanceFromHqInBlocks(pickUpLocation) {

    return Math.abs(pickUpLocation - hqLocation);
}
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(pickUpLocation) {
    distanceFromHqInBlocks(pickUpLocation);
    const block = distanceFromHqInBlocks(pickUpLocation);
    return Math.abs(block * 264);
}
console.log(distanceFromHqInFeet(42));

function distanceTravelledInFeet(startLocation, destinationBlock){

    const travel = (destinationBlock - startLocation);
    return Math.abs(travel * 264);
}
console.log(distanceTravelledInFeet(34, 38));

function calculatesFarePrice(startLocation, destinationBlock) {
    const distance = distanceTravelledInFeet(startLocation, destinationBlock);
    
    if (distance <= 400) {
        return 0;
    }
    else if (distance >400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if(distance > 2500) {
        return 'cannot travel that far';
    }
}