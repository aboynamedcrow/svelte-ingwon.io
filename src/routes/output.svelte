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
		<br><br><br><br><br><br>
		<h1>selected writing</h1>
		<p class="sticky-centered-1">from 2024 i'll be publishing my writing</p>
		<p class="sticky-centered-2"> to which you can subscribe <a class="pulse-link" href="https://ingwon.substack.com?utm_source=affiliate&utm_medium=landing_page&utm_campaign=ingwon_io&utm_content=output&referrer=ingwon_io" target="_blank">
			here</a></p>
		<br><br><br><br>
		<h2>essays</h2>
		<br><br>
			<h3>
				<a href="https://medium.com/@ingwon/for-father-e5197b764d95" target="_blank">
					For Father</a>
			</h3>
		<br><br>
			<h3>
				<a href="https://medium.com/@ingwon/for-mother-5dda20e13e6c" target="_blank">
					For Mother</a>
			</h3>
		<br><br><br><br>
		<h2>poems</h2>
		<br><br>
			<h3>
				<a href="https://medium.com/@ingwon/requiem-for-notre-dame-4db44e70ba8a" target="_blank">
					Requiem For Notre Dame</a>
			</h3>
		<br><br><br><br>
		<h2>short stories</h2>
		<br><br>
			<h3>
				<a href="https://medium.com/@ingwon/replication-error-46f91c8b576e" target="_blank">
					Replication Error</a>
		  	</h3>
		<br><br><br><br><br>
	</div> <!--closes class: content id: selected writing-->
		<br>
		<div class="content"
		id = "selected-photos">
			<br>
			<h1>selected photos</h1>
			<br>
			<br><br>

			<div class="photo">
				<picture>
					<img src= "static/images/drive.jpeg" alt="roadtrip" />
					
				</picture>
			</div>
			<br><br><br><br><br><br>
			<div class="photo">
				<picture>
					<img src= "static/images/nazareth.jpeg" alt="nazareth" />
					
				</picture>
			</div>
			<br><br><br><br><br><br>
			<div class="photo">
				<picture>
					<img src= "static/images/fudturism.jpeg" alt="fudturism" />
					
				</picture>
			</div>

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
		z-index: 1;
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

	.sticky-centered-2 {
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
		position: sticky;
		top: 130px;
		padding-bottom: 0.5em;
		text-align: center;
		opacity: 1;
		width: 100%;
		z-index: 1;
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
