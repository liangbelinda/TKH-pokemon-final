import fetchData from "./fetchPokemonAPI.js";
import displayPokemons from "./displayPokemons.js";

//adds pokemon that user inputs to pokemonTeam, which is an array of pokemon objects
export default async function addPokemon(pokemonTeam) {
    const userInput = prompt('Name of Pokemon:');
    if (pokemonTeam.find((pokemon) => pokemon.name === userInput.toLowerCase())){
        alert("This pokemon is already on your team.");
    } else {
        const data = await fetchData(userInput.toLowerCase());
        const pokemonType = data.types["0"].type.name;
        
        //if pokemon type does not exist in pokemon array, add type to the list of options to filter by
        let typeExist = false;
        if (pokemonTeam.find((pokemon) => pokemon.type === pokemonType)){
            typeExist = true;
        }
        if (typeExist === false){
            const typeOption = document.createElement("option");
            typeOption.innerText = pokemonType;
            typeOption.value = pokemonType;
            const filterSelect = document.getElementById("filter");
            filterSelect.append(typeOption);
        }
        
        //add pokemon info as an object to the pokemonTeam array
        const pokemonObj = {name: data.name,
                            img: data.sprites.front_default,
                            base_exp: data.base_experience,
                            type: data.types["0"].type.name,
        };
        pokemonTeam.push(pokemonObj);
        const pokemonList = document.getElementById("team");
        pokemonList.innerText = "";
        displayPokemons(pokemonTeam);
    }
  }