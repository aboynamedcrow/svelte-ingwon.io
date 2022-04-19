<script context = "module" lang="ts">
	import { page } from '$app/stores';

	import PowerSwitch from '$lib/navbar/PowerSwitch.svelte';

	function handleClick() {

  document.getElementById("handleDropdown").classList.toggle("show");
	console.log(document.getElementById("handleDropdown").classList);
	console.log(this.classList);

  	};

	function collapse(event) {
		if (!event.target.matches('.dropdown-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
    	}
    	}
	};

</script>

<!-- Close the dropdown menu if the user clicks outside of it-->
<svelte:window on:click = {collapse}/>

<header class = "navbar">
	
	<nav class="dropdown">
		<button 
			id="ingwon"
			type="submit"
			class="dropdown-button"
			on:click = {handleClick}>ingwon.
      
			
		</button>
		
		<nav id = 'handleDropdown' class="dropdown-content">
			<a id = 'cd' class:active={$page.url.pathname === '/'} sveltekit:prefetch href="/">cd ~</a>

			<a id = 'about' class:active={$page.url.pathname === '/about'} sveltekit:prefetch href="/about">about</a>

			<a id = 'input' class:active={$page.url.pathname === '/input'} sveltekit:prefetch href="/input">input</a>

			<a id = 'output' class:active={$page.url.pathname === '/output'} sveltekit:prefetch href="/output">output</a>

			<a id = 'contact' class:active={$page.url.pathname === '/contact'} sveltekit:prefetch href="/contact">contact</a>

			<a id = 'resume' class:active={$page.url.pathname === '/resume'} sveltekit:prefetch href="/resume">resumé</a>
		</nav>
	</nav>

	<PowerSwitch/>

</header>

<style>
	.navbar {
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    margin: auto;
    margin-left: auto;
    margin-right: auto;
    position: -webkit-sticky;
    position: sticky;
    justify-content: safe center;
    background-color: var(--background-color);
    color: var(--text-color);
    opacity: 1;
	
  }


  .dropdown {
    top: 0;
    /*overflow: hidden;*/
    background-color: var(--background-color);
    color: var(--text-color);
    opacity: 1;
    justify-content: right;
    margin-right: 0;
    padding-right: 0;

  }

  .dropdown-button {
    font-size: 36px;
    background-color: var(--background-color);
    color: var(--text-color);
    opacity: 1;
    border: none;
    font-family: var(--font);
    padding-left: 18px;
    padding-right: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: right;
    margin-right: 0;
    cursor: pointer;
	
  }

  .dropdown-button:hover {
	color: var(--accent-color);
	transition: color 1s linear;
	
  }



   .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--background-color);
    color: var(--text-color);
	  font-family: var(--font);
    margin: auto;
    margin-left: auto;
    margin-right: auto;
	/*transition: height 1s opacity 1s ease-out;*/
  }

  .dropdown-content a {
    background-color: var(--background-color);
    color: var(--text-color);
    text-decoration: none;
    display: block;
    font-size: 2.5rem;
	  text-indent: 1.2rem;
    padding-left: 1.5rem;
    padding-right: 3rem;
    padding-bottom: 1.5rem;
    margin-left: 2rem;
	  margin-right: 1.5rem;
  }


  


  :global(.show) {
    display:block !important;
    opacity: 0.9 !important;
    overflow:visible !important;
    /*transition: height 1s 0s opacity 1s ease-out;*/
  }

  a:hover {
		color: var(--accent-color);
	}
	
</style>
