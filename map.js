const avengers = ['Iron man', 'Captain America', 'Thor', 'Black Widow', 'Hulk', 'Hawkeye']

Array.prototype.polyMap = function(callback){
    let resultArray = []
    for(var i=0; i<this.length; i++){
        resultArray[i] = callback(this[i], i, this)
    }
    return resultArray
}

console.log(avengers.polyMap(ele => ({
    name: ele,
    team: 'Avengers'
})))
// console.log(avengers.map(ele => ({
//     name: ele,
//     team: 'Avengers'
// })))