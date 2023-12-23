# TKH-gotta-fetch-em-all
The project allows users to build their own Pokemon team. 
## About
This project uses Vite as the build tool and Axios to make API calls. Users can add, remove, sort Pokemons in alphabetical order, reverse alphabetical order, lowest base EXP, or highest base EXP, and filter by type. The project fetches and displays Pokemon information from the Poke API.
* addPokemon(pokemonTeam) adds the pokemon that user inputs to pokemonTeam, which is an array of pokemon objects
* displayPokemons(pokemonTeam) takes in pokemonTeam as a parameter and using DOM displays the Pokemon image, name, and base EXP onto the screen
* fetchData(name) take in Pokemon name as a parameter, makes a call to API, and returns the data
* filter(pokemonTeam) takes in pokemonTeam as a paramter and filters by pokemon type
* removePokemon(pokemonTeam) removes pokemon that user selects from pokemonTeam
* sort(pokemonTeam) takes in pokemonTeam as a parameter and sort by alphabetical order, reverse alphabetical order, lowest base EXP, or highest base EXP
## Built With
* Vite
* Axios
## Getting Started
### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation
* Install vite to set up web application project.
  ```sh
  npm create vite@latest
  ```
* Install axios to make API calls.
  ```sh
  npm install -save axios
  ```
* Run the file
  ```sh
  npm run dev
  ```
