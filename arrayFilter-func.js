
// const array = [1, 2, 3, 0, 0, 2, 2];

// const filterArrayKosong = array.filter((callback) => Boolean(callback));

// // console.log(filterArrayKosong);



const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];


const filterByScore = students.filter((student) => student.score > 85);


console.log(filterByScore);
