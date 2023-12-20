import fetchData from "./fetchPokemonAPI.js";
import displayPokemons from "./displayPokemons.js";

export default async function addPokemon(pokemonTeam) {
    const userInput = prompt('Name of Pokemon:');
    if (pokemonTeam.find((pokemon) => pokemon.name === userInput.toLowerCase())){
        alert("This pokemon is already on your team.");
    } else {
        const data = await fetchData(userInput.toLowerCase());
        const pokemonType = data.types["0"].type.name;
        
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