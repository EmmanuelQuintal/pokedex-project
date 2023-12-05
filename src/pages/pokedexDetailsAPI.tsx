async function pokedexDetailsAPI(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("error trying to fetch", error);
    }
}

export default pokedexDetailsAPI;
