const hero = {
    name: 'Tony Stark',
    powers: 'Genius-level intellect, weaponised tech suit',
    alterEgo: 'Iron man'
}

function showHeroDetails(team, universe){
    console.log(`Hero name: ${this.name} has powers: ${this.powers} and belongs to team: ${team} and universe: ${universe}`)
}

Function.prototype.polyApply = function(context, args){
    context.fn = this
    return context.fn(...args)
}

showHeroDetails.polyApply(hero, ['Avengers', 'Marvel'])
// showHeroDetails.apply(hero, ['Avengers', 'Marvel'])