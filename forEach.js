const avengers = ['Iron man', 'Captain America', 'Thor', 'Black Widow', 'Hulk', 'Hawkeye']

Array.prototype.polyForEach = function(callback){
    for(var i=0; i<this.length; i++){
        callback(this[i], i, this)
    }
}

avengers.polyForEach(ele => console.log(ele))
// avengers.forEach(ele => console.log(ele))