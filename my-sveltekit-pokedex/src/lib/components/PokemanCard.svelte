<script>
	export let pokeman;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokeman/${pokeman.id}`}
>
	<img src={pokeman.image} alt={pokeman.name} />
	<div>{pokeman.id}. {pokeman.name}</div>
</a>
