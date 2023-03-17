// Code your solution in this file!
function distanceFromHqInBlocks(blockStreet) {
    const scuberHq = 42;
    return Math.abs(blockStreet - scuberHq)
}
//2
function distanceFromHqInFeet(blockStreet) {
    const blocksInFeet = 264;
    return distanceFromHqInBlocks (blockStreet) * blocksInFeet
}
//3
function distanceTravelledInFeet(startStreet, destinationStreet){
    return Math.abs(destinationStreet - startStreet)* 264;
}
distanceTravelledInFeet(34,38)

function calculatesFarePrice (startStreet, destinationStreet){
    const distance = Math.abs((destinationStreet-startStreet)* 264)
        let fare 
        if (distance <=400) {
            return fare = 0;
        } else if (distance >=400 && distance <=2000){
            return fare = (distance - 400)*0.02;
    } else if (distance >2000 && distance <=2500){
        return fare = 25;
    }else if (distance >2500){
        return 'cannot travel that far';
    } return fare;
}