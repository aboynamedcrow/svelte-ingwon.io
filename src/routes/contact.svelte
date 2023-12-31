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
		<p class="sticky-centered-1">
			i prefer by <a class="pulse-link" href="https://www.etsy.com/market/owl_post_stamp" target="_blank">owl</a> or email.
		</p>
		<br>
	</div>
	<div class="content"
	id = "contact-info">
		<h2><a href="https://ingwon.substack.com?utm_source=affiliate&utm_medium=landing_page&utm_campaign=ingwon_io&utm_content=output&referrer=ingwon_io" target="_blank">substack</a></h2>
		<br>
		<h2><a href="https://linkedin.com/in/ingwon" target="_blank">linkedin</a></h2>
		<br>
		<h2><input type="checkbox" id="onlyFans-checkbox"/>
			<label for="onlyFans-checkbox" id="onlyFans">onlyfans</label>
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

	.sticky-centered-1 {
		position: sticky;
		top: 100px;
		padding-bottom: 0.5em;
		text-align: center;
		opacity: 1;
		width: 100%;
		z-index: 1;
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
		content: "wtf u actually clicked? relax..";
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

	.pulse-link {
	/* Button default styles, customize them to match your button */
	display: inline-block;
	border: none;
	/* Apply the pulse animation */
	animation: pulse 3.14s infinite;
	z-index: -1;
	}


	@keyframes pulse {
	  0% {
		transform: scale(1);
	  }
	  25% {
		transform: scale(1.025);
		color: rgb(89,255,0,0.7)
	  }
	  49% {
		transform: scale(1.05);
		color: rgb(89,255,50)
	  }
	  50% {
		transform: scale(1.05);
	  }
	  51% {
		transform: scale(1.05);
		color: rgb(89,255,50)
	  }
	  75% {
		transform: scale(1.025);
		color: rgb(89,255,0,0.7)
	  }
	  100% {
		transform: scale(1);
	  }
	}



	</style>
