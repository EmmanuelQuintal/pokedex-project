import React from "react";
import { PokemonDetails } from "../components/shared/IpokemonDetails";
import PokebolaEmpty from "../assets/pokebola-empty.jpeg";
import Pokebola from "../assets/pokebola.png";
import styles from "../pages/pokedexUI.module.css";

interface PokebolaEmptyComponentProps {
    pokemonDetails?: PokemonDetails;
}

const PokebolaEmptyComponent: React.FC<PokebolaEmptyComponentProps> = ({
    pokemonDetails,
}) => {
    return (
        <div
            className={styles.pokedexContainer}
            style={{ position: "relative" }}
        >
            {pokemonDetails ? (
                <img
                    src={PokebolaEmpty}
                    alt="Pokeball"
                    className={styles.pokeballImage}
                />
            ) : (
                <img
                    src={Pokebola}
                    alt="Pokeball"
                    className={styles.pokeballImage}
                />
            )}
            {pokemonDetails && (
                <img
                    src={
                        pokemonDetails.sprites.other["official-artwork"]
                            .front_default
                    }
                    alt="Pokemon"
                    style={{
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        height: "60%",
                    }}
                />
            )}
        </div>
    );
};

export default PokebolaEmptyComponent;
