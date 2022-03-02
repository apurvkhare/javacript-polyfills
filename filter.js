const avengers = ['Iron man', 'Captain America', 'Thor', 'Black Widow', 'Hulk', 'Hawkeye']

Array.prototype.polyFilter = function(callback){
    let resultArray = []
    for(var i=0; i<this.length; i++){
        if(callback(this[i], i, this))
            resultArray.push(this[i])  
    }
    return resultArray
}

console.log(avengers.polyFilter(ele => ele.includes('a')))
// console.log(avengers.filter(ele => ele.includes('a')))