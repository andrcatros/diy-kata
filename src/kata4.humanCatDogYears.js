const humanCatDogYears = number => {
    let catYears=0;
    let dogYears=0;
    if (number<=1){
        catYears=15;
        dogYears=15;}
    else if (number===2){
        catYears=15+9;
        dogYears=15+9;

    }
    else {
        let howManyYears = number-2;
        catYears=15+9+howManyYears*4;
        dogYears=15+9+howManyYears*5;
    }   
    return [number,catYears,dogYears]
};

module.exports = humanCatDogYears;
