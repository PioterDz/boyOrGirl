// Zadanie 1.

function rand7() {
    const randomNumber = Math.random();
    if(randomNumber < (5/7)) return rand5();
    else return sixOrSeven();
}

function sixOrSeven() {
    const randomNumber = Math.random();
    if(randomNumber < 0.5) return 6;
    else return 7;
}

rand7();

// Zadanie 2.

function girlOrBoy(startYear, endYear, totalBirthAmount) { 
    const numberOfYears = endYear - startYear;
    let result = [getNumberOfParentsAtStartYear(numberOfYears, totalBirthAmount) / 2];
    for(let i = 0; i < numberOfYears; i++) {
        result.push(result[i] / 2);
    }
    return Math.floor(result.reduce((prev, curr) => prev + curr));
}

function getNumberOfParentsAtStartYear(numberOfYears, totalBirthAmount) {
    return (totalBirthAmount / numberOfParentsAtTheEnd(numberOfYears)) * Math.pow(2, numberOfYears);
}

function numberOfParentsAtTheEnd(numberOfYears) {
    let result = [1];
    for(let i = 0; i < numberOfYears; i++) {
        result.push(result[i] * 2);
    }
    return result.reduce((prev, curr) => prev + curr);
}

girlOrBoy(2012, 2018, 892345);