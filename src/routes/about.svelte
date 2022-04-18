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
		  this site was created in april 2022 by Ingwon Chae.
		</p>
		<br>
		<div class="about">
			<picture>
				<img src="static/images/standing.jpeg" alt="it-me" />
			</picture>
		</div>
		<br>
		<p id="center">
			it me!
		  </p>
		<br>
		<br>
		<br>
		<p>
		  its design and contents reflect the things i enjoy and that matter to me, including, among other things: memories, secrets, thoughts, feelings and jokes.
		</p>
		<br>
		<p>
		  welcome again, and i hope you enjoy your stay on this tiny way station in the unfathomably vast expanse of outer space that is the internet.
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

	img {
		width: 100%;
		height: auto;
		align-items: center;
	}
</style>
