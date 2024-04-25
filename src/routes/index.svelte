<script context= "module" lang="ts">
	export const prerender = true;
</script>


<svelte:head>
	<title>ingwon.io</title>
</svelte:head>

<div class="content">
	<h2>
		welcome.
	</h2>
	<h2>
		어서오시오.
	</h2>
	<h2>
		인권.<a class="pulse-link" href=#/ >이오</a>
	</h2>
	<h2>
		인권이오.
	</h2>
	<h2>
		click my name to navigate
	</h2>
	<br>
	

	
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		text-align: center;
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		padding-bottom: 100vh;
		margin-bottom: 0;
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
