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
	<title>ingwon.io | input</title>
</svelte:head>

<div class="container-content"
	id = "input">
	<div class="content"
	id = "about-input">
		<br>
		<h1>input (io)</h1>
		<br>
		<p>
			input/output (io) is a fundamental concept in computing. inputs - the signals and data received by the system - determine outputs. here are some collections of particularly meaningful inputs throughout my life.
		</p>
		<br>
	</div>
		<br>
	<div class="content"
	id = "writing">
	<br><br><br><br><br><br>
		<h1>writing</h1>
		<br><br>
		<h2>short stories</h2>
		<br><br>
			<h3>
				<a href="https://wordsunlimited.typepad.com/files/bullet.pdf" target="_blank">Bullet in the Brain - Tobias Wolff</a>
			</h3>
		<br><br>
			<h3>
				<a href="https://www.youmightfindyourself.com/post/22131227213/on-seeing-the-100-perfect-girl-one-beautiful" target="_blank">
				On Seeing the 100% Perfect Girl One Beautiful April Morning - Haruki Murakami</a>
			</h3>
			<br><br>
			<h3>
				<a href="https://americanliterature.com/author/virginia-woolf/short-story/a-haunted-house" target="_blank">
				A Haunted House - Virginia Woolf</a>
			</h3>
			<br><br><br><br>
		<h2>Poems</h2>
		<br><br>
			<h3>
				<a href="https://www.vanderbilt.edu/olli/class-materials/2017Summer.MindfulnessWk1.pdf" target="_blank">Wild Geese - Mary Oliver</a>
			</h3>
		<br><br>
			<h3>
				<a href="https://poets.org/poem/will-you" target="_blank">Will You? - Carrie Fountain</a>
			</h3>
		<br><br>
		<h3>
				<a href="https://www.reddit.com/r/Poetry/comments/fwdn90/poem_go_to_the_limits_of_your_longing_by_rainer/">Go to the Limits of Your Longing - Rainer Maria Rilke</a>
			</h3>
			<br><br><br><br>
		<h2>Essays</h2>
		<br><br>
			<h3>
				<a href="http://writing.upenn.edu/library/Sontag-Susan-Photography.pdf" target="_blank">
				On Photography - Susan Sontag
				</a>
			</h3>
		<br><br>
			<h3>
				<a href="http://s.spachman.tripod.com/Woolf/streethaunting.htm" target="_blank">
			Street Haunting: A London Adventure (1930) - Virginia Woolf
				</a>
			</h3>
		<br><br>         
			<h3>
				<a href="http://art.arts.usf.edu/content/articlefiles/2330-Excerpt%20from%20Remembrance%20of%20Things%20Past%20by%20Marcel%20Proust.pdf" target="_blank">
				The One About the Madeleine - Marcel Proust
				</a>
			</h3>
		<br><br>
	</div> <!--closes class: content id: writing-->
		<br>
		<div class="content"
		id = "films">
			<br><br><br><br>
			<h1>films</h1>
			<br><br>
			<h2>Richard Linklater</h2>
			<br><br>
				<h3>
					<a href=/ target="_blank">Dazed and Confused</a>
				</h3>
			<br><br>
				<h3>
					<a href=/ target="_blank">Before Sunrise</a>
				</h3>
			<br><br>
				<h3>
					<a href=/ target="_blank">Before Sunset</a>
				</h3>
			<br><br>
				<h3>
					<a href=/ target="_blank">Before Midnight</a>
				</h3>
			<br><br><br><br>
			<h2>Lee Chang Dong</h2>
			<br><br>
				<h3>
					<a href=/ target="_blank">Poetry</a>
				</h3>
			<br><br>
				<h3>
					<a href=/ target="_blank">Peppermint Candy</a>
				</h3>
			<br><br>
				<h3>
					<a href=/ target="_blank">Burning</a>
				</h3>
			<br><br>
				<h3>
					<a href=/ target="_blank">Secret Sunshine</a>
				</h3>
			<br><br>
		</div> <!--closes class: content id: film-->

	
	
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
