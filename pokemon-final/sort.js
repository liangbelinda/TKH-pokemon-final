import displayPokemons from "./displayPokemons.js";

//take in pokemonTeam, an array of pokemon objects, as a parameter and sort by alphabetical order, reverse alphabetical order, lowest base EXP, or highest base EXP
export default function sort(pokemonTeam) {
    const sortOption = document.getElementById("sort").value;
    //sort by alphabetical order
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
    //sort by reverse alphabetical order
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
    //sort by lowest base EXP
    } else if (sortOption === "lowEXP"){
        pokemonTeam.sort(function(a, b){
            return a.base_exp - b.base_exp;
        })
    //sort by highest base EXP
    } else if (sortOption === "highEXP"){
        pokemonTeam.sort(function(a, b){
            return b.base_exp - a.base_exp;
        })
    } else {
        displayPokemons(pokemonTeam);
    }
    displayPokemons(pokemonTeam);
}