<script context= "module" lang="ts">
	export const prerender = true;
</script>


<svelte:head>
	<title>ingwon.io</title>
</svelte:head>

<div class="content">
	<h2>
		welcome. click my name to navigate
	</h2>
	<br>
	<br><br>

	<div class="welcome">
		<picture>
			<img src= "../build/drive.jpg" alt="welcome" />
			
		</picture>
	</div>

	
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
		height: auto;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		margin-bottom: 50vh;
	}


	img {
		width: 100%;
		height: auto;
		align-items: center;
	}

	


</style>
