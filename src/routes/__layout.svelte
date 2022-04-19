<svelte:head>
	<script>
		let powerOn = false;
		let rendered = false;

		if ($theme =="dark-theme") {
        powerOn = true;
        document.body.classList.add("dark-theme");
    } 
	</script>
</svelte:head>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import '../app.css';
</script>


<Header />


<main>
	<Navbar />
	<slot />
</main>

<!--<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>-->

<style>


	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1 em;
		min-width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: var(--background-color);
		
	}


	/*footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		background-color: var(--background-color);
	}

	footer a {
		font-weight: bold;
	}*/

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
