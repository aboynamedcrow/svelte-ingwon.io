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
	<title>ingwon.io | output</title>
</svelte:head>

<div class="container-content"
	id = "output">
	<div class="content"
	id = "about-output">
		<br>
		<h1>output (io)</h1>
		<br>
		<p>
			drawing from the concept of input/output (io) in computing, here are some of my outputs, which reflect all the inputs (people, experiences, ideas) that i have processed throughout my life.
		</p>
		<br>
	</div>
		<br>
	<div class="content"
	id = "selected-writing">
		<br>
		<h1>Selcted Writing</h1>
		<br>
		<h2>Essays</h2>
		<br>
			<h3>
				<a href="https://medium.com/@ingwon/for-father-e5197b764d95" target="_blank">
					For Father</a>
			</h3>
		<br>
			<h3>
				<a href="https://medium.com/@ingwon/for-mother-5dda20e13e6c" target="_blank">
					For Mother</a>
			</h3>
		<br>
			<h3>
				<a href="https://medium.com/@ingwon/requiem-for-notre-dame-4db44e70ba8a" target="_blank">
					Requiem For Notre Dame</a>
			</h3>
		<br>
			<h3>
				Under Construction...
			</h3>
		<br>
		<h2>Poems</h2>
		<br>
			<h3>Under Construction...</h3>
		<br>
		<h2>Short Stories</h2>
			<h3>
				Under Construction..
		  	</h3>
		<br>
	</div> <!--closes class: content id: selected writing-->
		<br>
		<div class="content"
		id = "selected-photos">
			<br>
			<h1>Selected Photos</h1>
			<br>
			<h2>.</h2>
			<br>
				<h3>
					Under Construction...
				</h3>
			<br>
			<h2>.</h2>
		</div> <!--closes class: content id: selected photos-->

	
	
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
		padding-bottom: 0.5em;
		opacity: 1;
		width: 100%;
		background-color: var(--background-color);
		transition: background-color 1s ease;
	}

	h2 {
		position: sticky;
		top: 100px;
		padding-bottom: 0.5em;
		text-align: center;
		opacity: 1;
		width: 100%;
		background-color: var(--background-color);
		transition: background-color 1s ease;
	}


</style>
