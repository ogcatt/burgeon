<main>
	<title>Burgeon</title>
	<img src="images/fluer1.svg" class="circle-light-up" style="filter: invert(100%); border: none;" title="{ti["name-info"][lshort]}" height=200px alt="logo banner">
	<h2 class="light-up-underline" title="{ti["name-info"][lshort]}" style="margin-top:5px;margin-bottom:0">THE BURGEON BRUTEFORCE METHOD</h2>
	<div class="cent-container">
	<ol style="max-width:450px;">
		<p style="margin-top:0">If you want to quit porn forever, follow these steps. This may seem completely unorthidox, but this will work. The question is, what are you willing to sacrifice to get what you want?</p>
		<p>Both LDN and Neboglamine are safe, well tolerated, and have passed clinical trials. They are compounds that modulate the brain and body to change the dichotomy of control within a human.</p>
		<li>For this method, you will need to purchase 2 compounds, named LDN (Low Dose Naltrexone) and Neboglamine. Doseage must be started simultaneously, regardless if one arrives first.</li>
		<li>This method costs ~90-140$. If you do not have this money, don't be a bitch about it. If you care enough, sell something you don't need. Cut somebodies lawn. Work online. If you want freedom bad enough, you will find some money.</li>
		<li>Purchase 1.5g Neboglamine <a target="_blank" href="https://everychem.com/product/neboglamine-powder-1-5g/">[Source]</a> and purchase 10x50mg LDN (or 5x 1x50mg capsules) <a target="_blank" href="https://cosmicnootropic.com/products/naltrexone/">[Source 1]</a>. Do this only if you can buy both at the same time. ALSO buy a pippette if you do not have one (one that measures >10ml).</li>
		<li>While these items are on their way, have patience.</li>
		<li>Once they both arrive, distill one LDN capsule into 50ml of water. This is enough for 10 doses (5ml/dose), and repeat this process when you run out of liquid.</li>
		<li>Now once you have both available, put 5ml (5mg) Naltrexone into a water-filled glass and put 2-3 overfilled heaping scoops of Neboglamine into the glass also.</li>
		<li>The Neboglamine won't dissolve, so fill (and drink from) the glass a few extra times to get rid of all the powder.</li>
		<li>Do this exact routine once a day until the Neboglamine runs out. After the Neboglamine runs out, continue with LDN (Naltrexone).</li>
		<li>Now this is where things get unorthidox. <b>Exactly 2 hours</b> after dosing Naltrexone and Neboglamine for the first time, you should have a 3 consecutive porn sessions.</li>
		<li>Now when you have these sessions, watch everything that previously attracted you. Force yourself to go through with this process.</li>
		<li>After you do this (grueling, I know) process of 3 consecutive porn sessions, read the entire book of burgeon in one go. <a href="/chapter/1">Visit here</a></li>
		<li>NOW AFTER THIS, YOU MUST GO FOR THE PLUNGE. The plunge is a 15 minute cold shower. This is not a choice, this is something you must do.</li>
		<li>Go in this shower, and turn your shower to the coldest available setting. Step right in to this coldest available setting. Time the 15 minutes you stay in the cold.</li>
		<li>After these 15 minutes is up, when you step out, a large weight will be released off of your shoulders. This practice is mostly sentimental but it marks a point of memory, to show you actually want this.</li>
		<li>When these steps are completed, continue dosing Neboglamine and LDN until they run out. You may feel like you don't need them anymore, but trust the process, keep taking them until the supply ends.</li>
		<p>If you do all of these steps, I have complete confidence that you will never have to worry about porn ever again. Call it unorthidox, call it artificial, call it dumb. But it works.</p>
		<p>Most people will read these steps, and continue being enslaved to porn for the rest of their lives. Will you be the one who is different from the many? I challenge you. I don't think you have the guts to do this. I don't think you want to leave bad enough. Do you? Prove me wrong.</p>
	</ol>
	</div>
</main>

<style>
	ol > li {
		margin-bottom: 20px;
		background-color:rgb(54, 9, 9);
		padding:8px;
		padding-left:16px;
		padding-right:16px;
	}
</style>

<script>
	import Snow from '../components/Snow.svelte';

	export let translation_index = {};
	let ti = translation_index;
	export let language_info = {};
	let lshort = language_info.short_name;

	let ls_id = localStorage.getItem("usr_id");
		if(ls_id == undefined) {
			let date = Date.now()
			localStorage.setItem("usr_id", date);
			ls_id = date;
		}

	mixpanel.init('69f9e45d45df5706a4dda82222fb4141', {debug: true, ignore_dnt: true});
	mixpanel.identify(ls_id);

	function send_to_mix(text) {
		mixpanel.track(text);
	}

</script>
