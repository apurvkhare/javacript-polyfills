const avengers = [
    {
        name: 'Iron man',
        movies: 3,
    },
    {
        name: 'Captain America',
        movies: 3,
    },
    {
        name: 'Thor',
        movies: 4,
    },
    {
        name: 'Black Widow',
        movies: 1,
    },
    {
        name: 'Hulk',
        movies: 2,
    },
    {
        name: 'Hawkeye',
        movies: 0,
    },
]

Array.prototype.polyReduce = function (callback, initialValue = 0) {
    let accumulator = initialValue
    for (var i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}

console.log(avengers.polyReduce((acc, ele) => acc + ele.movies, 0))
// console.log(avengers.reduce((acc, ele) => acc + ele.movies))
