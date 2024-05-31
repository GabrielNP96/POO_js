import { Hero } from "./Hero.js"

const heroes = []

const captainAmerica = new Hero('Steve Rogers','Captão Ámerica', 'Vingadores', "Estadunidense")
heroes.push(captainAmerica)
const ironMan= new Hero('Anthony Stark', 'Homem de Ferro', 'Vingadores', 'Estadunidense')
heroes.push(ironMan)

for(let i = 0; i < heroes.length; i++) {
    heroes[i].CharacterSheet()
}

