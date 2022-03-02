const hero = {
    name: 'Tony Stark',
    powers: 'Genius-level intellect, weaponised tech suit',
    alterEgo: 'Iron man'
}

function showHeroDetails(team, universe){
    console.log(`Hero name: ${this.name} has powers: ${this.powers} and belongs to team: ${team} and universe: ${universe}`)
}

Function.prototype.polyCall = function(context, ...args){
    context.fn = this
    return context.fn(...args)
}

showHeroDetails.polyCall(hero, 'Avengers', 'Marvel')
// showHeroDetails.call(hero, 'Avengers', 'Marvel')