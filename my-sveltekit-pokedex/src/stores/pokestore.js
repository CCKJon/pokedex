import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemon = async (num) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
				index + 1
			}.gif`
		};
	});
	pokemon.set(loadedPokemon);
};

fetchPokemon();
