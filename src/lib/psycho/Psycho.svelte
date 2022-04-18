<script  lang="ts">
  

  import {
        site_card_mapping, //readable
        card_values, //readable
          whose_card, //writable
          first_name, //writable
          last_name, //writable
          company, //writable
          title, //writable
          phone_number, //writable
          bottom_info, //writable
          murders_and_executions, //writable
          watermark //writable
      } from "$lib/stores/psycho-map.js";
    import { page } from '$app/stores';
    import {onMount} from 'svelte';
  
    

  /*onMount(async () => { */

     for(let i=0; i< $site_card_mapping.length; i++) {
                
        if ($page.url.pathname == $site_card_mapping[i]?.section) {

           $whose_card = $site_card_mapping[i].whose_card;
            
            for(let j=0; j < $card_values.length; j++) {

                if ($card_values[j].whose_card == $whose_card){
                        
                    $first_name = $card_values[j].first_name;
                    $last_name = $card_values[j].last_name;
                    $company = $card_values[j].company;
                    $title = $card_values[j].title;
                    $phone_number = $card_values[j].phone_number;
                    $bottom_info = $card_values[j].bottom_info;
                    $murders_and_executions = $card_values[j].murders_and_executions;
                    $watermark = $card_values[j].watermark;
                    break;
                }

            }
            break;

          }

      }

 /*     if ( $(window).width() >= 600 ) {
    function rotate(event) {
        var x = event.clientX;
        var w = window.innerWidth;
        var midpoint = w / 2;
        var pos = x - midpoint;
        var val = (pos / midpoint) * 20;
        var card = document.getElementById("business-card");
        card.style.transform = "perspective(550px) rotateY(" + val + "deg) rotateY(" + val + "deg)";
    }
    
    document.addEventListener("mousemove", function (event)
    {
        rotate (event)
    }, false);
  }*/
    
/*  });*/


</script>






<main>

  {#key $page.url.pathname}
    <div class="container-card">
       <div class="business-card" id={$whose_card}>
            <p class="phone-number">{$phone_number}</p>
		    <div class="company-section">
			    <p class="company">{$company}</p>
			    <p class="murders-and-executions">{$murders_and_executions}</p>
		    </div>
		    <div class="name-and-title">
			    <div class="names">
				    <p class="first-name">{$first_name}</p>
				    <p class="last-name">{$last_name}</p>
			    </div>
			    <p class="title">{$title}</p>
		    </div>
		    <p class="bottom-info">
                {$bottom_info}</p>
		    <div class="watermark">
			    {$watermark}
		    </div>
		    <p></p>
        </div>
    </div>
    {/key}
  </main>



<style>

    * {
    --patrick-color: #e3dac9;
    --patrick-font: 'EB Garamond';
    --patrick-text-transform: uppercase;
    --ingwon-color: #ffefd2;
    --ingwon-font: 'EB Garamond';
    --ingwon-text-transform: uppercase;
    --van-patten-color: #f0ead6;
    --van-patten-font: 'Old Standard TT';
    --van-patten-text-transform: uppercase;
    --bryce-color: white;
    --bryce-font: 'Roboto';
    --bryce-text-transform: uppercase;
    --allen-color: #fdfdfd;
    --allen-font: 'Alegreya SC', sans-serif;
    --allen-text-transform: uppercase;
    }

    .container-card{
        display: flex;
        flex-direction: column;
        height: 100%;
        color: inherit;
        background-color: inherit;
        padding-top: 5px;
    }

    .business-card {
      position: relative;
      margin: auto;
      margin-bottom: 2%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 350px;
      height: 200px;
      min-width: 36.297828vw;
      min-height: 20.78119924vw;
    }

    .business-card p {
      color: #000;
      font-size: 0.95em;
      margin: 0;
    }

    .phone-number {
      position: absolute;
      top: 20px;
      left: 25px;
    }
    .murders-and-executions {
      font-size: 0.52em;
    }
    .company-section {
      position: absolute;
      top: 20px;
      right: 25px;
    }
    .company-section p {
      margin: 0;
    }
    .name-and-title {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
    }
    .first-name {
      display: inline-block;
    }
    .last-name {
      display: inline-block;
    }
    .title {
      text-align: center;
      font-size: 0.8em;
    }
    .bottom-info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 0.62em;
      padding: 10px;
    }
    .watermark {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 10px;
      opacity: 0.1;
      color: black;
      font-size: 1.2vw;
    }

    #patrick-card, #patrick-alt-card {
      background-color: var(--patrick-color);
      font-family: var(--patrick-font);
      text-transform: var(--patrick-text-transform);
    }

    #ingwon-card {
      background-color: var(--ingwon-color);
      font-family: var(--ingwon-font);
      text-transform: var(--ingwon-text-transform);
    }

    #patrick-card .bottom-info,
    #patrick-alt-card .bottom-info,
    #ingwon-card .bottom-info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 0.62em;
      padding: 10px;
      font-family: inherit;
      text-transform: inherit;
    }
    #patrick-card .phone-number,
    #patrick-alt-card .phone-number,
    #ingwon-card .phone-number {
      position: absolute;
      top: 20px;
      left: 25px;
      font-size: 0.95em;
      margin: 0;
      font-family: inherit;
      text-transform: inherit;
    }
    #patrick-card .company,
    #patrick-alt-card .company
     {
      font-size: 0.95em;
      font-family: inherit;
      text-transform: inherit;
    }

    #ingwon-card .company {
      font-size: 0.95em;
      font-family: inherit;
      text-transform: inherit;
      text-align: center;
    }

    #ingwon-card .company-section {
      text-align: center;
    }

    #patrick-card .murders-and-executions,
    #patrick-alt-card .murders-and-executions,
    #ingwon-card .murders-and-executions {
      font-size: 0.52em;
      font-family: inherit;
      text-transform: inherit;
    }
    #patrick-card .first-name,
    #patrick-alt-card .first-name,
    #ingwon-card .first-name {
      font-size: 0.75em;
      font-family: inherit;
      text-transform: inherit;
    }
    #patrick-card .last-name,
    #patrick-alt-card .last-name,
    #ingwon-card .last-name {
      font-size: 0.9em;
      font-family: inherit;
      text-transform: inherit;
    }
    #patrick-card .title,
    #patrick-alt-card .title,
    #ingwon-card .title {
      font-size: 0.76em;
      font-family: inherit;
      text-transform: inherit;
    }
    #patrick-card .watermark,
    #patrick-alt-card .watermark,
    #ingwon-card .watermark {
      display: none;
      font-family: inherit;
      text-transform: inherit;
    }

    #van-patten-card {
      background-color: var(--van-patten-color);
      font-family: var(--van-patten-font);
      text-transform: var(--van-patten-text-transform);
    }
    #van-patten-card .bottom-info {
      font-size: 0.5em;
      padding-bottom: 15px;
      font-family: var(--van-patten-font);
      text-transform: var(--van-patten-text-transform);
    }
    #van-patten-card .phone-number {
      font-size: 0.76em;
      font-family: inherit;
      text-transform: inherit;
    }
    #van-patten-card .company {
      font-size: 0.76em;
      font-family: inherit;
      text-transform: inherit;
    }
    #van-patten-card .murders-and-executions {
      font-size: 0.61em;
      text-transform: none;
      font-family: inherit;
      text-transform: none;
    }
    #van-patten-card .first-name {
      font-size: 0.7em;
      font-weight: bold;
      font-family: inherit;
      text-transform: inherit;
    }
    #van-patten-card .last-name {
      font-size: 0.75em;
      font-weight: bold;
      font-family: inherit;
      text-transform: inherit;
    }
    #van-patten-card .title {
      font-size: 0.8em;
      text-transform: none;
      font-family: inherit;
      text-transform: inherit;
    }
    #van-patten-card .watermark {
      display: none;
      font-family: inherit;
      text-transform: inherit;
    }
    #bryce-card {
      background-color: var(--bryce-color);
      font-family: var(--bryce-font);
      text-transform: var(--bryce-text-transform);
    }
    #bryce-card .bottom-info {
      font-size: 0.5em;
      padding-bottom: 15px;
      font-family: inherit;
      text-transform: inherit;
    }
    #bryce-card .phone-number {
      font-size: 0.76em;
      font-family: inherit;
      text-transform: inherit;
    }
    #bryce-card .company {
      font-size: 0.76em;
      font-family: inherit;
      text-transform: inherit;
    }
    #bryce-card .murders-and-executions {
      font-size: 0.51em;
      text-transform: none;
      font-family: inherit;
      text-transform: inherit;
    }
    #bryce-card .first-name {
      font-size: 0.7em;
      font-family: inherit;
      text-transform: inherit;
    }
    #bryce-card .last-name {
      font-size: 0.75em;
      font-family: inherit;
      text-transform: inherit;
    }
    #bryce-card .title {
      font-size: 0.65em;
      text-transform: none;
      font-family: inherit;
      text-transform: inherit;
    }
    #bryce-card .watermark {
      display: none;
    }

    #allen-card {
      background-color: var(--allen-color);
      font-family: var(--allen-font);
      text-transform: var(--allen-text-transform);
    }
    #allen-card .bottom-info {
      font-size: 0.7em;
      padding-bottom: 15px;
      font-family: inherit;
      text-transform: inherit;
    }
    #allen-card .phone-number {
      font-size: 0.9em;
      font-family: inherit;
      text-transform: inherit;
    }
    #allen-card .company {
      font-size: 0.9em;
      font-family: inherit;
      text-transform: inherit;
    }
    #allen-card .murders-and-executions {
      font-size: 0.51em;
      font-family: inherit;
      text-transform: inherit;
    }
    #allen-card .first-name {
      font-size: 0.8em;
      font-weight: bold;
      font-family: inherit;
      text-transform: inherit;
    }
    #allen-card .last-name {
      font-size: 0.9em;
      font-weight: bold;
      font-family: inherit;
      text-transform: inherit;
    }
    #allen-card .title {
      font-size: 0.6em;
      font-family: inherit;
      text-transform: inherit;
    }

    @media (min-width: 1100px) {
      .business-card p {
        font-size: 1.6vw;
      }
      .murders-and-executions {
        font-size: 0.87vw;
      }
      .title {
        font-size: 1.4vw;
      }
      .bottom-info {
        font-size: 1vw;
      }
      #patrick-card .phone-number,
      #patrick-alt-card .phone-number,
      #ingwon-card .phone-number {
        font-size: 1.6vw;
      }
      #patrick-card .company,
      #patrick-alt-card .company,
      #ingwon-card .company {
        font-size: 1.6vw;
      }
      #patrick-card .murders-and-executions,
      #patrick-alt-card .murders-and-executions,
      #ingwon-card .murders-and-executions {
        font-size: 0.87vw;
      }
      #patrick-card .bottom-info,
      #patrick-alt-card .bottom-info,
      #ingwon-card .bottom-info {
        font-size: 1vw;
      }
      #patrick-card .title,
      #patrick-alt-card .title,
      #ingwon-card .title {
        font-size: 1.1vw;
      }
      #patrick-card .first-name,
      #patrick-alt-card .first-name,
      #ingwon-card .first-name {
        font-size: 1.25vw;
      }
      #patrick-card .last-name,
      #patrick-alt-card .last-name,
      #ingwon-card .last-name {
        font-size: 1.6vw;
      }

      #van-patten-card .phone-number {
        font-size: 1.1vw;
      }
      #van-patten-card .company {
        font-size: 1.1vw;
      }
      #van-patten-card .murders-and-executions {
        font-size: 0.89vw;
        text-transform: none;
      }
      #van-patten-card .bottom-info {
        font-size: 0.8vw;
        padding-bottom: 35px;
      }
      #van-patten-card .title {
        font-size: 1.5vw;
        text-transform: none;
      }
      #van-patten-card .first-name {
        font-size: 1.4vw;
      }
      #van-patten-card .last-name {
        font-size: 1.6vw;
        font-weight: bold;
      }
      #bryce-card .phone-number {
        padding-top: 20px;
        font-size: 1.1vw;
      }
      #bryce-card .company {
        padding-top: 20px;
        font-size: 1.1vw;
      }
      #bryce-card .murders-and-executions {
        font-size: 0.74vw;
        text-transform: none;
      }
      #bryce-card .bottom-info {
        font-size: 0.9vw;
        padding-bottom: 20px;
      }
      #bryce-card .title {
        font-size: 1.2vw;
        text-transform: none;
      }
      #bryce-card .first-name {
        font-size: 1.4vw;
      }
      #bryce-card .last-name {
        font-size: 1.6vw;
      }
      #allen-card .phone-number {
        font-size: 1.2vw;
      }
      #allen-card .company {
        font-size: 1.2vw;
      }
      #allen-card .murders-and-executions {
        font-size: 0.685vw;
      }
      #allen-card .bottom-info {
        font-size: 1.2vw;
        padding-bottom: 20px;
      }
      #allen-card .title {
        font-size: 1.2vw;
      }
      #allen-card .first-name {
        font-size: 1.6vw;
        font-weight: bold;
      }
      #allen-card .last-name {
        font-size: 1.8vw;
        font-weight: bold;
      }
    }

</style>