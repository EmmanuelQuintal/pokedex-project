async function pokedexAPI() {
    try {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("error trying to fetch", error);
    }
}

export default pokedexAPI;
