<script context="module" lang="ts">
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
	<title>ingwon.io | about</title>
</svelte:head>

<div class="content">
	<h1>about this place</h1>

	<div class="content-inner">
		<br>
		<br>
		<br>
		<p id="center">
		  this site was created in april 2022 by ingwon chae.
		</p>
		<br>
		<div class="about">
			<picture>
				<img src='static/images/standing.jpeg' alt="it-me" />
			</picture>
		</div>
		<br>
		<p id="center">
			it me, in נָצְרַת|النَّاصِرَة|nazareth, august 2021
		  </p>
		<br>
		<br>
		<br>
		<p>
		  pay <a class="pulse-link" href=/about >
			attention</a> 👀 as you explore. 
		</p>
		<br><br><br>
		<p>
		  its design and contents reflect the things i enjoy and that matter to me, including, among other things: memories, secrets, thoughts, feelings and <a class="pulse-link" href="https://www.youtube.com/watch?v=lJtHNEDnrnY" target="_blank">
			jokes</a>.
		</p>
		<br><br><br>
		<p>
		  welcome, and i hope you enjoy your stay on this tiny way station in the unfathomably vast expanse of outer space that is the internet.
		</p>
		<br>
	  </div>
</div>

<style>
	.content {
		width: 100%;
		height: auto;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		margin-bottom: 50vh;
	}

	#center {
		text-align: center;
	}

	h1 {
		position: sticky;
		top: 60px;
		padding-bottom: 0.5em;
		opacity: 1;
		width: 100%;
		background-color: var(--background-color);
		transition: background-color 1s ease;
		
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

	img {
		width: 100%;
		height: auto;
		align-items: center;
	}
</style>
