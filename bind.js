const hero = {
    name: 'Tony Stark',
    powers: 'Genius-level intellect, weaponised tech suit',
    alterEgo: 'Iron man'
}

function showHeroDetails(team, universe){
    console.log(`Hero name: ${this.name} has powers: ${this.powers} and belongs to team: ${team} and universe: ${universe}`)
}

Function.prototype.polyBind = function(...args){
    return (...innerArgs) => this.call(...args, ...innerArgs)
}

const showDetails = showHeroDetails.polyBind(hero, 'Avengers')
// const showDetails = showHeroDetails.bind(hero, 'Avengers')

showDetails('Marvel')