import React from 'react'

export default function Waste() {
    
const nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);

const names = ["alice", "bob", "charlie", "danielle"];
const nameCap = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(nameCap);

const pokemon = ["Bulbasaur", "Charmander", "Squirttle"];
const pokemonPara = pokemon.map((poke) => `<p>${poke}</p>`);
console.log(pokemonPara);

let isGoingOut=false
  return (
    <div>
        <h1>{isGoingOut? "YES" : "NO"}</h1>
</div>
  )
}

