const findTheOldest = function(people) {
    let oldest = people[0];
    for (let person of people) {
        if (person.yearOfDeath === undefined || person.yearOfDeath === null) {
            person.yearOfDeath = new Date().getFullYear();
        }
        if (person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
