import axios from "axios"

export default async function fetchData(name) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (response.status !== 200){
            throw new Error("There was an error.")
        }
        return response.data;
    } catch (error) {
        console.error("Error: ", error);
        alert("This pokemon does not exist. Try again.");
    }
    
    
}