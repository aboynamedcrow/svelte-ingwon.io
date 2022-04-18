<script lang="ts">

import Psycho from '$lib/header/psycho.svelte';
	
</script>

<header>
	<div class="corner">
	</div>

	<Psycho/>

	<div class="corner">
	</div>
</header>

<style>
	header {
		background-color: var(--background-color);
    	color: var(--text-color);
		font-family: var(--font);
		display: flex;
		justify-content: space-between;
	}

	/*.corner {
		width: 3em;
		height: 3em;
	}*/

	/*.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}*/

	div {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0);
	}


</style>
