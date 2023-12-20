export default function displayPokemons(pokemonTeam) {
    const pokemonList = document.getElementById("team");
    pokemonList.innerText = "";
    if (pokemonTeam.length === 0){
        const text = document.createElement("p");
        text.innerText = "You have no Pokemons on your team.";
        pokemonList.append(text);
    }
    pokemonTeam.forEach((pokemon) => {
        const pokemonDiv = document.createElement("div");
        pokemonDiv.className = "pokemon inactive";
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