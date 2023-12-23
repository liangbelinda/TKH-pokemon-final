import displayPokemons from "./displayPokemons.js";
import filter from "./filter.js";

//removes pokemon that user selects from pokemonTeam, which is an array of pokemon objects
export default function removePokemon(pokemonTeam) {
    let pokemonType = false;
    //display instruction to tell user to select the pokemon to remove from team
    const message = document.getElementById("message");
    message.innerText = "Click on the pokemon you want to remove from your team.";
    const pokemons = document.querySelectorAll(".pokemon");
    //for every pokemon in team, give them "active" class and if clicked will remove pokemon from pokemonTeam
    pokemons.forEach((pokemon) => {
        pokemon.classList.add("active");
        pokemon.addEventListener("click", function (){
            const pokemonToRemove = document.getElementById(this.id);
            pokemonToRemove.remove();
            for (let i = 0; i < pokemonTeam.length; i++){
                if (pokemonTeam[i].name === this.id) {
                    pokemonType = pokemonTeam[i].type;
                    pokemonTeam.splice(i,1);
                    displayPokemons(filter(pokemonTeam));
                    message.innerText = "";
                    pokemon.classList.remove("active");
                }
            }
            //after removing selected pokemon, if pokemon type is no longer in pokemonTeam, remove the type from filter list
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