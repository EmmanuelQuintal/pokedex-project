import React, { useEffect, useState } from "react";
import pokedexAPI from "./PokedexAPI";
import { Pokemon } from "../components/shared/IpokedexTypes";
import styles from "./pokedexUI.module.css";
import pokedexDetailsAPI from "./pokedexDetailsAPI";
import { PokemonDetails } from "../components/shared/IpokemonDetails";
import PokebolaEmptyComponent from "../components/pokebolaEmpty";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";

function PokedexUI() {
    const [pokemonState, setPokemonState] = useState<Pokemon[]>([]);
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

    useEffect(() => {
        pokedexAPI().then((response) => {
            setPokemonState(response.results);
        });
    }, []);

    const onButtonClick = async (pokemonUrl: string) => {
        setIsLoading(true);
        await waitFor(100);
        pokedexDetailsAPI(pokemonUrl).then((response) => {
            setPokemonDetails(response);
            console.log("responsee ", response);
            setIsLoading(false);
            setSelectedPokemon(response.name.toString());
        });
    };
    useEffect(() => {
        console.log(
            "details",
            pokemonDetails?.sprites.other["official-artwork"].front_default
        );
    }, [pokemonDetails]);

    if (isLoading || !pokedexAPI) {
        return <LoadingScreen />;
    }
    return (
        <div className={styles.pokedexContainer}>
            <div>
                <PokebolaEmptyComponent pokemonDetails={pokemonDetails} />
            </div>

            <div className={styles.pokemonButtonContainer}>
                {pokemonState.slice(0, 151).map((pokemon) => {
                    const capitalizedPokemonName =
                        pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1);
                    return (
                        <button
                            key={pokemon.name}
                            onClick={() => onButtonClick(pokemon.url)}
                            className={`${styles.pokemonButton} ${
                                selectedPokemon === pokemon.name.toString()
                                    ? styles.selected
                                    : ""
                            }`}
                        >
                            {capitalizedPokemonName}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default PokedexUI;
