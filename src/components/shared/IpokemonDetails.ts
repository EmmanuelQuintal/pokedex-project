interface sprites {
    back_default: string;
    other: other;
}
interface officialArtwork {
    front_default: string;
}
interface other {
    "official-artwork": officialArtwork;
}
export interface PokemonDetails {
    sprites: sprites;
}
