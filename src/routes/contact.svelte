<script context="module">
	import { browser, dev } from '$app/env';


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
	<title>ingwon.io | contact</title>
</svelte:head>

<div class="container-content"
	id = "contact">
	<div class="content"
	id = "contact-me">
		<h1>contact me</h1>
		<p>
		</p>
	</div>
	<div class="content"
	id = "contact-info">
		<h2><a href="https://ingwon.substack.com" target="_blank">substack</a></h2>
		<br>
		<h2><a href="https://linkedin.com/in/ingwon" target="_blank">linkedin</a></h2>
		<br>
		<h2><input type="checkbox" id="onlyFans-checkbox"/>
			<label for="onlyFans-checkbox" id="onlyFans">onlyFans</label>
		</h2>
		<br>
		<h2><a href="https://instagram.com/ingwonstagram" target="_blank">insta</a></h2>
		<br>
		<h2><a href="https://tiktok.com/@aboynamedcrow" target="_blank">tiktok</a></h2>
		<br>
		<h2><a href="https://letterboxd.com/aboynamedcrow/" target="_blank">letterboxd</a></h2>
		<br>
	</div> <!--closes class: content id: contact-info-->
		<br>
		
	
	
</div><!--closes class: container-content-->



<style>
	.container-content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		background-color: var(--background-color);
		height: auto;
		margin-bottom: 50vh;
	}

	h1 {
		position: sticky;
		top: 60px;
		padding-bottom: 1em;
		opacity: 1;
		width: 100%;
		background-color: var(--background-color);
		transition: background-color 1s ease;
	}

	h2 {
		text-align: center;
		opacity: 1;
		width: 100%;
		background-color: var(--background-color);
		transition: background-color 1s ease;
	}

	#onlyFans {
		display: block;
		z-index: 1;
		cursor: pointer;
  	}

	  #onlyFans-checkbox :hover input {
		color: var(--accent-color);
  	}

	  #onlyFans :hover label {
		color: var(--accent-color);
  	}

	  #onlyFans :hover h2 {
		color: var(--accent-color);
  	}

  	#onlyFans-checkbox {
    	display: none;
  	}

	#onlyFans-checkbox:checked + #onlyFans:after {
		content: "w u actually clicked? relax..";
		position: relative;
		top: 0;
		left: 0;
		bottom: 0;
		display: block;
		z-index: 1;
		overflow: hidden;
		background-color: var(--background-color);
		color: var(--text-color);
		transition: background-color 1s ease;
		cursor: pointer;
	}



	</style>
