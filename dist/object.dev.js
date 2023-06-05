"use strict";

var pokémon = Object.freeze([{
  "id": 1,
  "name": "Bulbasaur",
  "types": ["poison", "grass"]
}, {
  "id": 5,
  "name": "Charmeleon",
  "types": ["fire"]
}, {
  "id": 9,
  "name": "Blastoise",
  "types": ["water"]
}, {
  "id": 12,
  "name": "Butterfree",
  "types": ["bug", "flying"]
}, {
  "id": 16,
  "name": "Pidgey",
  "types": ["normal", "flying"]
}, {
  "id": 23,
  "name": "Ekans",
  "types": ["poison"]
}, {
  "id": 24,
  "name": "Arbok",
  "types": ["poison"]
}, {
  "id": 25,
  "name": "Pikachu",
  "types": ["electric"]
}, {
  "id": 37,
  "name": "Vulpix",
  "types": ["fire"]
}, {
  "id": 52,
  "name": "Meowth",
  "types": ["normal"]
}, {
  "id": 63,
  "name": "Abra",
  "types": ["psychic"]
}, {
  "id": 67,
  "name": "Machamp",
  "types": ["fighting"]
}, {
  "id": 72,
  "name": "Tentacool",
  "types": ["water", "poison"]
}, {
  "id": 74,
  "name": "Geodude",
  "types": ["rock", "ground"]
}, {
  "id": 87,
  "name": "Dewgong",
  "types": ["water", "ice"]
}, {
  "id": 98,
  "name": "Krabby",
  "types": ["water"]
}, {
  "id": 115,
  "name": "Kangaskhan",
  "types": ["normal"]
}, {
  "id": 122,
  "name": "Mr. Mime",
  "types": ["psychic"]
}, {
  "id": 133,
  "name": "Eevee",
  "types": ["normal"]
}, {
  "id": 144,
  "name": "Articuno",
  "types": ["ice", "flying"]
}, {
  "id": 145,
  "name": "Zapdos",
  "types": ["electric", "flying"]
}, {
  "id": 146,
  "name": "Moltres",
  "types": ["fire", "flying"]
}, {
  "id": 148,
  "name": "Dragonair",
  "types": ["dragon"]
}]);
var divisibleBy3 = pokémon.filter(function (p) {
  return p.id % 3 === 0;
});
console.log(divisibleBy3);
var typePokemon = pokémon.filter(function (p) {
  return p.types.includes("fire");
});
console.log(typePokemon);
morePokémon = pokémon.filter(function (p) {
  return p.types.length > 1;
});
console.log(morePokémon);
onlyPokémon = pokémon.map(function (p) {
  return p.name;
});
console.log(onlyPokémon);
var greaterThan = pokémon.filter(function (p) {
  return p.id > 99;
}).map(function (p) {
  return p.name;
});
console.log(greaterThan);
var typePoison = pokémon.filter(function (p) {
  return p.types == 'poison';
}).map(function (p) {
  return p.name;
});
console.log(typePoison);
var namesWithOnlyFlyingType = pokémon.filter(function (p) {
  return p.types.length === 2 && p.types[1] === "flying";
}).map(function (p) {
  return p.name;
});
console.log(namesWithOnlyFlyingType);
var countNumber = pokémon.filter(function (p) {
  return p.types.includes == 'normal';
}).length;
console.log(countNumber);
var normalTypeCount = pokémon.filter(function (p) {
  return p.types.includes("normal");
}).length;
console.log(normalTypeCount);