<script>
	import { browser, dev } from '$app/env';
	import {fade} from 'svelte/transition';

	let password = '';
	let clicked = false;

  	let hash = s =>
    s.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0)
      return a & a
    }, 0)

	if (password == ''){
		clicked = false;
	}

	function submitHandler() {
			clicked = true;
		if ((hash(password) === -1289476913
				|| hash(password) === 2089357551
				|| hash(password) === -1923248972
				|| hash(password) === -10098508
				|| hash(password) === -990662784
				|| hash(password) === -1505760416)) {
		} else {
			alert("hint: what do patrick bateman and i have in common?");
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
			<h1>resumé</h1>
			<br><br>
			{#if (clicked == true &&
				(hash(password) === -1289476913
				|| hash(password) === 2089357551
				|| hash(password) === -1923248972
				|| hash(password) === -10098508
				|| hash(password) === -990662784
				|| hash(password) === -1505760416
				))}
				
			<h3>last updated: April 2022</h3>
			{/if}
			
	</div>
	<br><br>	
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
		{#key clicked}			
			{#if clicked == true &&
			(hash(password) === -1289476913
			|| hash(password) === 2089357551
			|| hash(password) === -1923248972
			|| hash(password) === -10098508
			|| hash(password) === -990662784
			|| hash(password) === -1505760416
			)}

				<!--<object title = "pdf" data="Ingwon Chae Resume 2022.03.pdf" type="application/pdf" frameborder="0" width="100%" height="1000px" style="padding: 20px;">-->
    				<embed src="https://drive.google.com/file/d/1uUL8W6PhkXfFxfcCUnCq5J3JtX5kP09Q/preview?usp=sharing"/> 
				<!--</object>-->
				
	  		{/if}
		{/key}
	</div>
	
	
</div><!--closes class: container-content-->


<style>

	embed {
		width: 100%;
		height: 600px;
	}

	@media(min-width: 1000px)  {
		embed {
			width: 100%;
			height: 1000px;
		}
		
	}



	.container-content {
		width: 100%;
		height: auto;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		background-color: var(--background-color);
		margin-bottom: 100vh;
	}

	input, button {
		font-family: var(--font);
		background-color: rgba(255, 255, 255, 0.5);
		color: var(--text-color);
		border-radius: 3px;
		box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
		padding: 0.5em;
	}

	input:focus {
		outline: none;
	}

	button {
		font-family: var(--font);
		background-color: rgb(205, 204, 204);
		color: #222;
	}




	</style>
