export default function displayPokemons(pokemonTeam) {
    const pokemonList = document.getElementById("team");
    pokemonList.innerText = "";
    if (pokemonTeam.length === 0){
        const text = document.createElement("p");
        text.innerText = "You have no Pokemons on your team.";
        pokemonList.append(text);
    }
    pokemonTeam.forEach((pokemon) => {
        const pokemonImg = pokemon.img;
        const pokemonImgElement = document.createElement("img");
        pokemonImgElement.src = pokemonImg;
        pokemonImgElement.className = "image";
        pokemonList.append(pokemonImgElement);
        const pokemonName = pokemon.name;
        const pokemonElement = document.createElement("p");
        pokemonElement.innerText = pokemonName;
        pokemonElement.className = "pokemon";
        pokemonList.append(pokemonElement);
        const pokemonEXP = pokemon.base_exp;
        const pokemonEXPElement = document.createElement("p");
        pokemonEXPElement.innerText = pokemonEXP;
        pokemonEXPElement.className = "exp";
        pokemonList.append(pokemonEXPElement);
    })
}