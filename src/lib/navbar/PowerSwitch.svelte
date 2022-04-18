<script lang="ts">
import {onMount} from "svelte";
import theme from '$lib/navbar/theme';

let powerOn = false;
let rendered = false;

onMount(() =>{
    if ($theme =="dark-theme") {
        powerOn = true;
        document.body.classList.add("dark-theme");
        console.log("classlist: "+document.body.classList);
        console.log("dark theme is true");
        console.log("powerOn: "+powerOn);
    } 
    rendered = true;    
    });

$: if (rendered) {
    if(powerOn){
        theme.set("dark-theme");
        document.body.classList.add("dark-theme");
        console.log(".");
        console.log("dark theme is true");
        console.log("classlist: "+document.body.classList);
        console.log("$theme: "+$theme);
        console.log("powerOn: "+powerOn);
    } else if (!powerOn){
        console.log(".");
        theme.set("");
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        console.log("dark theme is false");
        console.log("classlist: "+document.body.classList);
        console.log("$theme: "+$theme);
        console.log("powerOn: "+powerOn);
    }
}


</script>




  <div class="power-switch">
    <input type="checkbox" bind:checked={powerOn} />
    <div class="button">
      <svg class="power-off">
        <use xlink:href="#line" class="line" />
        <use xlink:href="#circle" class="circle" />
      </svg>
      <svg class="power-on">
        <use xlink:href="#line" class="line" />
        <use xlink:href="#circle" class="circle" />
      </svg>
    </div>
  </div>

  <!-- SVG -->
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="line">
      <line x1="75" y1="34" x2="75" y2="83"/>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="circle">
      <circle cx="75" cy="80" r="35"/>
    </symbol>
  </svg>

  <style>

    :global(.dark-theme) {

    --font: 'Fira Code' !important;
    font-size: 9px !important;
    --font-size: 9px;
	--primary-color: #152028 !important;

	--secondary-color: #152028 !important;
	--tertiary-color: #152028 !important;
	--background-color: #152028 !important;
	--accent-color: rgb(216, 242, 202) !important;
	--heading-color: rgb(89,255,0,0.7) !important;
	--text-color: rgb(89,255,0) !important;
	--background-without-opacity: rgba(255, 255, 255, 0.7) !important;;
}


  .power-switch {
    --color-invert: rgb(89, 255, 50);
    --width: 55px;
    --height: 63px;
    margin-left: -12px;
    padding-left: 0;
    position: relative;
    z-index: 1001;
    display: flex;
    justify-content: left;
    width: var(--width);
    height: var(--height);  
  }


  .power-switch .button {
    width: 100%;
    height: 100%;
    display: flex;
    margin-left:0;
    padding-left: 0;
    justify-content: left;
    position: relative;
  }

  .power-switch .button:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: radial-gradient(circle closest-side, var(--color-invert), transparent);
    /*filter: blur(0px);*/
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
    transform: perspective(1px) translateZ(0);
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
  }
  .power-switch .button .power-on,
  .power-switch .button .power-off {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    fill: none;
    stroke-width: 10px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

    .power-switch .button .power-on {
        stroke: var(--color-invert);
    }

    .power-switch .button .power-off {
        stroke: var(--text-color);
    }

    .power-switch :hover .power-off svg {
      stroke: #222 !important;
      opacity: 1 !important;
    }

    .power-switch .button .power-off :hover {
        stroke: #222;
        opacity: 1;
    }

  .power-switch .button .power-on .line,
  .power-switch .button .power-off .line {
    opacity: 0.25;
  }
  .power-switch .button .power-on .circle,
  .power-switch .button .power-off .circle {
    opacity: 0.25;
    transform: rotate(-58deg);
    transform-origin: center 33px;
    stroke-dasharray: 220;
    stroke-dashoffset: 40;
  }
  .power-switch .button .power-on {
    filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 1)); 
  }

  .power-switch .button .power-on .line {
    opacity: 0;
    transition: opacity 0.3s ease 1s;
  }
  .power-switch .button .power-on .circle {
    opacity: 1;
    stroke-dashoffset: 220;
    transition: transform 0s ease, stroke-dashoffset 1s ease 0s;
  }
  .power-switch input {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
  }
  .power-switch input:checked + .button:after {
    opacity: 0.20;
    transform: scale(2) perspective(1px) translateZ(0);
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .power-switch input:checked + .button .power-on,
  .power-switch input:checked + .button .power-off {
    -webkit-animation: click-animation 0.3s ease forwards;
            animation: click-animation 0.3s ease forwards;
    transform: scale(1);
  }
  .power-switch input:checked + .button .power-on .line,
  .power-switch input:checked + .button .power-off .line {
    -webkit-animation: line-animation 0.8s ease-in forwards;
            animation: line-animation 0.8s ease-in forwards;
  }
  .power-switch input:checked + .button .power-on .circle,
  .power-switch input:checked + .button .power-off .circle {
    transform: rotate(302deg);
  }
  .power-switch input:checked + .button .power-on .line {
    opacity: 1;
    transition: opacity 0.05s ease-in 0.55s;
  }
  .power-switch input:checked + .button .power-on .circle {
    transform: rotate(302deg);
    stroke-dashoffset: 40;
    transition: transform 0.4s ease 0.2s, stroke-dashoffset 0.4s ease 0.2s;
  }
  
  @-webkit-keyframes line-animation {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(10px);
    }
    40% {
      transform: translateY(-25px);
    }
    60% {
      transform: translateY(-25px);
    }
    85% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  @keyframes line-animation {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(10px);
    }
    40% {
      transform: translateY(-25px);
    }
    60% {
      transform: translateY(-25px);
    }
    85% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @-webkit-keyframes click-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes click-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
</style>