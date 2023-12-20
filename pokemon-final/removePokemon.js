import displayPokemons from "./displayPokemons.js";
import filter from "./filter.js";

export default function removePokemon(pokemonTeam) {
    let pokemonType = false;
    const message = document.getElementById("message");
    message.innerText = "Click on the pokemon you want to remove from your team.";
    const pokemons = document.querySelectorAll(".pokemon");
    pokemons.forEach((pokemon) => {
        pokemon.addEventListener("click", function (){
            const pokemonToRemove = document.getElementById(this.id);
            pokemonToRemove.remove();
            for (let i = 0; i < pokemonTeam.length; i++){
                if (pokemonTeam[i].name === this.id) {
                    pokemonType = pokemonTeam[i].type;
                    pokemonTeam.splice(i,1);
                    displayPokemons(filter(pokemonTeam));
                    message.innerText = "";
                }
            }
            let typeExist = false;
            if (pokemonTeam.find((pokemon) => pokemon.type === pokemonType)){
                typeExist = true;
            }
            if (typeExist === false){
                const typeOption = document.querySelectorAll("option");
                for (let i = 0; i < typeOption.length; i++){
                    if (typeOption[i]. value === pokemonType){
                        typeOption[i].remove();
                    }
                }
            }
        })
    })
    return pokemonTeam;
}