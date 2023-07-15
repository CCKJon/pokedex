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

<div class="text-3xl text-center mx-auto">Svelte Kit Pokedex</div>

<div class="text-2xl text-center mx-auto border-2 bg-slate-400">
	<input class="text-center" type="text" placeholder="Search Pokemon" bind:value={searchTerm} />
</div>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
