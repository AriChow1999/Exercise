
const countStudents = function (students, sandwiches) {

    let counts = { 0: 0, 1: 0 };

    for (let preference of students) {
        counts[preference]++;
    }


    for (let sandwich of sandwiches) {

        if (counts[sandwich] === 0) {
            break;
        }

        counts[sandwich]--;
    }


    return counts[0] + counts[1];
};


console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); 