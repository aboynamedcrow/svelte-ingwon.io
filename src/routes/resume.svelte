<script>
	import { browser, dev } from '$app/env';

	//password is 'exeter'
	let password = '';
	let clicked = false;
  let hash = s =>
    s.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0)
      return a & a
    }, 0)

	function submitHandler() {
		clicked = true;
		if (password === 'exeter') {
			return
		} else {
			alert('Incorrect password.\nFor a copy of the resumé, please contact Ingwon.');
		}
	}

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

</script>

<svelte:head>
	<title>ingwon.io | resumé</title>
</svelte:head>

<div class="container-content"
	id = "contact">
	
	<div class="content"
		id = "resume">
			<h1>download resumé</h1>
			<h3>last updated: March 2022</h3>
			<br>
	</div>
		
	<div class="content"
		id = "password">
		<div>
			<br>
			<form on:submit|preventDefault={submitHandler}>
			  <h2><label for="password">password:</label>
			  <input id="password" bind:value={password} type="password" />
			<button>Submit</button>
			</h2>
			</form>
			<br><br><br><br>
		</div>
			{#if clicked && hash(password) === -1289476913}
				<embed src="Ingwon Chae Resume 2022.03.pdf" type="application/pdf"/>			
	  		{/if}
	</div>
	
	
</div><!--closes class: container-content-->



<style>



	embed{
		width: 100%;
		height: 100vh;
	}


	.container-content {
		width: 100%;
		height: 100vh;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		background-color: var(--background-color);
	}

	input, button {
		font-family: var(--font);
		background-color: rgba(255, 255, 255, 0.45);
		color: var(--text-color);
		border-radius: 3px;
		box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
		padding: 0.5em;
	}

	button {
		font-family: var(--font);
		background-color: rgb(205, 204, 204);
		color: #222;
	}



	</style>
