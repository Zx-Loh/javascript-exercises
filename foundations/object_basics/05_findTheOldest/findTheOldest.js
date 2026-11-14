const findTheOldest = function(people) {
    people
    .forEach(person => {
        if (!"yearOfDeath" in person)
        {
            person.yearOfDeath = 
        }
    })
    .sort((a, b) => {
        let age1 = a.yearOfDeath - a.yearOfBirth;
        let age2 = b.yearOfDeath - b.yearOfBirth;

        if (age1 - age2 > 0)
        {
            return -1;
        }
        else if (age1 - age2 < 0)
        {
            return 1;
        }
        else 
        {
            return 0;
        }
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
