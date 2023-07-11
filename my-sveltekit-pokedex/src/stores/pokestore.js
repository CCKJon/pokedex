import { writable } from "svelte/store"; 2.1K(gzipped: 1K)
export const pokemon = writable()

const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2';
	const res = await fetchPokemon(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image:
				'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png'
		};
    });
    pokemon.set(loadedPokemon)
};
fetchPokemon();
