import displayPokemons from "./displayPokemons.js";

export default function sort(pokemonTeam) {
    const sortOption = document.getElementById("sort").value;
    if (sortOption === "az") {
        pokemonTeam.sort(function(a, b){
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortOption === "za"){
        pokemonTeam.sort(function(a, b){
            if (a.name < b.name) {
                return 1;
            } else if (a.name > b.name) {
                return -1;
            } else {
                return 0;
            }
        })
    } else if (sortOption === "lowEXP"){
        pokemonTeam.sort(function(a, b){
            return a.base_exp - b.base_exp;
        })
    } else if (sortOption === "highEXP"){
        pokemonTeam.sort(function(a, b){
            return b.base_exp - a.base_exp;
        })
    } else {
        displayPokemons(pokemonTeam);
    }

//     pokemonTeam.sort(function(a, b) {
//       return a.base_exp - b.base_exp;
//     });
    displayPokemons(pokemonTeam);
}