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
			<br><br>
			<h3>
				<a href="https://www.lightspeedmagazine.com/fiction/exhalation/" target="_blank">
				Exhalation - Ted Chiang</a>
			</h3>
			<br><br>
			<h3>
				<a href="https://raley.english.ucsb.edu/wp-content/uploads/Reading/Chiang-story.pdf" target="_blank">
				Story of Your Life - Ted Chiang</a>
			</h3>
			<br><br>
			<h3>
				<a href="https://web.archive.org/web/20140527121332/http://www.infinityplus.co.uk/stories/under.htm" target="_blank">
				Understand - Ted Chiang</a>
			</h3>
			<br><br>
			<h3>
				<a href="https://www.newyorker.com/magazine/2013/02/11/the-embassy-of-cambodia" target="_blank">
				The Embassy of Cambodia - Zadie Smith</a>
			</h3>
			<br><br>
			<h3>
				<a href="https://www.online-literature.com/james_joyce/958/" target="_blank">
				The Dead - James Joyce</a>
			</h3>
			<br><br><br><br>
		<h2>poems</h2>
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
				<a href="https://www.reddit.com/r/Poetry/comments/fwdn90/poem_go_to_the_limits_of_your_longing_by_rainer/"target="_blank">Go to the Limits of Your Longing - Rainer Maria Rilke</a>
			</h3>
			<br><br>
			<h3>
				<a href="https://www.poetryfoundation.org/poems/46473/if---" target="_blank">If - Rudyard Kipling</a>
			</h3>
		<br><br><br><br>
		<h2>essays</h2>
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
					<a href="https://www.youtube.com/watch?v=3aQuvPlcB-8" target="_blank">Dazed and Confused</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=DQ8Q6VuyB74" target="_blank">Before Sunrise</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=ip9PgKmil0s" target="_blank">Before Sunset</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=Kv6JWoVKlGY" target="_blank">Before Midnight</a>
				</h3>
			<br><br><br><br>
			<h2>Lee Chang Dong</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=rtxZOpu_YNk" target="_blank">Poetry</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=PIuN3gfyGcY" target="_blank">Peppermint Candy</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=456ZpoRaRWI" target="_blank">Burning</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=yFt-i-LTXpo" target="_blank">Secret Sunshine</a>
				</h3>
			<br><br><br><br>
			<h2>Park Chan Wook</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=Bmoy73lhs-s" target="_blank">Decision to Leave</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=whldChqCsYk" target="_blank">The Handmaiden</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=j9XMJJ5DZso" target="_blank">Thirst</a>
				</h3>
			<br><br><br><br>
			<h2>Bong Joon Ho</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=isOGD_7hNIY" target="_blank">Parasite</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=0n_HQwQU8ls" target="_blank">Memories of Murder</a>
				</h3>
			<br><br><br><br>
			<h2>Mark Waters</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=4EY2Q_07iUw" target="_blank">Mean Girls</a>
				</h3>
			<br><br><br><br>
			<h2>Hayao Miyazaki</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=eyBLufDkPyc" target="_blank">Spirited Away</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=4OiMOHRDs14" target="_blank">Princess Mononoke</a>
				</h3>
			<br><br><br><br>
			<h2>Sofia Coppola</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=W6iVPCRflQM" target="_blank">Lost in Translation</a>
				</h3>
			<br><br><br><br>
			<h2>Wong Kar Wai</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=m8GuedsQnWQ" target="_blank">In the Mood for Love</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=OPCug9jyG9k" target="_blank">Chungking Express</a>
				</h3>
			<br><br><br><br>
			<h2>Akira Kurosawa</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=Zqoyl2p8_lw" target="_blank">Rashomon</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=YwP_kXyd-Rw" target="_blank">Ran</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=bPHsu5NaVfM" target="_blank">Dreams</a>
				</h3>
			<br><br><br><br>
			<h2>Mary Harron</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=cISYzA36-ZY" target="_blank">American Psycho</a>
				</h3>
			<br><br><br><br>
			<h2>Zhang Yimou</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=x8kwb4qFrT4" target="_blank">Raise the Red Lantern</a>
				</h3>
			<br><br><br><br>
			<h2>Keenen Ivory Wayans</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=-RNG_tTXXcg" target="_blank">White Chicks</a>
				</h3>
			<br><br><br><br>
			<h2>Sam Mendes</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=Ly7rq5EsTC8" target="_blank">American Beauty</a>
				</h3>
			<br><br><br><br>
			<h2>Barry Jenkins</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=9NJj12tJzqc" target="_blank">Moonlight</a>
				</h3>
			<br><br><br><br>
			<h2>Damien Chazelle</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=0pdqf4P9MB8" target="_blank">La La Land</a>
				</h3>
			<br><br><br><br>
			<h2>Greta Gerwig</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=cNi_HC839Wo" target="_blank">Lady Bird</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://youtu.be/AST2-4db4ic" target="_blank">Little Women</a>
				</h3>
			<br><br><br><br>
			<h2>Denis Villeneuve</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=tFMo3UJ4B4g" target="_blank">Arrival</a>
				</h3>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=G8tlEcnrGnU" target="_blank">Sicario</a>
				</h3>
			<br><br><br><br>
			<h2>Alex Garland</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=bggUmgeMCdc" target="_blank">Ex-Machina</a>
				</h3>
			<br><br><br><br>
			<h2>Spike Lee</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=jc6_XgtOQgI" target="_blank">Do the Right Thing</a>
				</h3>
			<br><br><br><br>
			<h2>Bob Persichetti, Peter Ramsey, and Rodney Rothman</h2>
			<br><br>
				<h3>
					<a href="https://www.youtube.com/watch?v=g4Hbz2jLxvQ" target="_blank">Spiderman: Into the Spiderverse</a>
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
