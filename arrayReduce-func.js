const students = [
    {
        name: 'Harry',
        score: 0,
    },
    {
        name: 'James',
        score: 0,
    },
    {
        name: 'Ron',
        score: 0,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];


const sumAllIndex = students.reduce((acc, student) => acc + student.score, 0);
// acc itu accumulator, nah yang 0 itu initial value




console.log(sumAllIndex);