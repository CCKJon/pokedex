<script>
	import { pokemon } from '../stores/pokestore';
	import PokemanCard from '../lib/components/PokemanCard.svelte';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			//search the pokemon
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<div>
	<title class="border rounded-xl textx-5xl">Svelted Kit Pokedex</title>
</div>

<h1>Svelte Kit Pokedex</h1>
<input type="text" placeholder="Search Pokemon" bind:value={searchTerm} />

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1" />

{#each filteredPokemon as pokeman}
	<PokemanCard {pokeman} />
{/each}
