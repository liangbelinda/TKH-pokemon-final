//takes in pokemonTeam, an array of pokemon objects, as a parameter and using DOM displays onto screen
export default function displayPokemons(pokemonTeam) {
    const pokemonList = document.getElementById("team");
    pokemonList.innerText = "";
    //if the pokemon array is empty, display that there are no pokemons.
    if (pokemonTeam.length === 0){
        const text = document.createElement("p");
        text.innerText = "You have no Pokemons on your team.";
        pokemonList.append(text);
    }
    //for every pokemon in array, display the pokemon image, name, and base EXP
    pokemonTeam.forEach((pokemon) => {
        const pokemonDiv = document.createElement("div");
        pokemonDiv.className = `pokemon inactive ${pokemon.type}`;
        const pokemonName = pokemon.name;
        pokemonDiv.id = pokemonName;
        pokemonList.append(pokemonDiv);
        const pokemonImg = pokemon.img;
        const pokemonImgElement = document.createElement("img");
        pokemonImgElement.src = pokemonImg;
        pokemonImgElement.className = "image";
        pokemonDiv.append(pokemonImgElement);
        const pokemonElement = document.createElement("p");
        pokemonElement.innerText = pokemonName;
        pokemonElement.className = "name";
        pokemonDiv.append(pokemonElement);
        const pokemonEXP = pokemon.base_exp;
        const pokemonEXPElement = document.createElement("p");
        pokemonEXPElement.innerText = pokemonEXP;
        pokemonEXPElement.className = "exp";
        pokemonDiv.append(pokemonEXPElement);
    })
}