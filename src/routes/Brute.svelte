<main>
	<title>{ti["bruteforce-method"][lshort]} - Burgeon</title>
	<img src="images/fluer1.svg" class="circle-light-up" style="filter: invert(100%); border: none;" title="{ti["name-info"][lshort]}" height=200px alt="logo banner">
	<h2 class="light-up-underline" title="{ti["name-info"][lshort]}" style="margin-top:5px;margin-bottom:0">{ti["bruteforce-method"][lshort]}</h2>
	<div class="cent-container">
	<div style="max-width:600px;margin-top:15px;" class="amogus">
		<p style="margin-top:0">P.S you can change the language of the entire site in the Online Book settings.</p>
		<p>If everything else fails, follow these steps. This is basically a last-resort stratergy for those batshit addicted to pornography. This may seem completely unorthidox, but this will work. This strat uses the combination of nootropic compounds with burgeon to heal the brain from damage.</p>
		<p>For most people, they can gain the understandings they need from just burgeon alone, which is great. Some people also require intervention in this sort with LDN/Neboglamine to aid in repair. Either are great, and neither have downsides.</p>
		<p>Both LDN and Neboglamine (nootropic/supplementary compounds) are safe, well tolerated, and have passed clinical trials. They are compounds that modulate the brain and body to change the dichotomy of control within a human.</p>
		<p>The process essentially uses both of these on top of education to make quitting easy for those whose brain chemistry seems obliterated beyond repair.</p>
		<p>For how the two work, LDN (Low-Dose Naltrexone) works by blocking the opiod receptors in the body while increasing endogenous production. Neboglamine works through NMDA (Not to be confused with MDMA lol) Glycine Site Modulation, and it has been shown in studies to have anti-hedonistic effects.</p>
		<div>For this method, you will need to purchase 2 compounds, named LDN (Low Dose Naltrexone) and Neboglamine. Doseage must be started simultaneously, regardless if one arrives first.</div>
		<div>This method costs ~90-140$. If you do not have this money, don't complain. If you care enough, sell something you don't need. Cut somebodies lawn. Work online. If you want freedom bad enough, you will find some money. If worst comes to worst, and you cannot get this whole sum, just LDN alone can do, but both is highly preferable.</div>
		<div>Purchase 1.5g Neboglamine <a target="_blank" href="https://everychem.com/product/neboglamine-powder-1-5g/">[Source]</a> and purchase 10x50mg Naltrexone (or 5x 1x50mg capsules) <a target="_blank" href="https://cosmicnootropic.com/products/naltrexone/">[Source 1]</a> <a target="_blank" href="https://agelessrx.com/ldn/">[Source 2]</a>. Do this only if you can buy both at the same time. ALSO buy a pippette if you do not have one (one that measures >10ml).</div>
		<div>While these items are on their way, have patience.</div>
		<div>Once they both arrive, distill one Naltrexone capsule into 50ml of water. This is enough for 10 doses (5ml/dose), and repeat this process when you run out of liquid.</div>
		<div>Now once you have both available, put 5ml (5mg) Naltrexone into a water-filled glass and put 2-3 overfilled heaping scoops of Neboglamine into the glass also.</div>
		<div>The Neboglamine won't dissolve, so fill (and drink from) the glass a few extra times to get rid of all the powder.</div>
		<div>Do this exact routine once a day until the Neboglamine runs out. After the Neboglamine runs out, continue with LDN (Naltrexone).</div>
		<div>Now this is where things get unorthidox. <b>Exactly 2 hours</b> after dosing Naltrexone and Neboglamine for the first time, you should have a 3 consecutive porn sessions.</div>
		<div>Now when you have these sessions, watch everything that previously attracted you. Force yourself to go through with this process.</div>
		<div>After you do this (grueling, I know) process of 3 consecutive porn sessions, read the entire book of burgeon in one go. <a href="/chapter/1">Visit here</a></div>
		<div>Reading the book should take under 2 hours max. Once you have read the book, return to this page and continue. This is an important step because then you can leave and understand the process.</div>
		<div>When these steps are completed, continue dosing Neboglamine and LDN until they run out. You may feel like you don't need them anymore, but trust the process, keep taking them until the supply ends.</div>
		<p>If you do all of these steps, you will likely never have to worry about porn addiction again. Call it unorthodox, call it artificial, call it dumb. But it is something with a high success.</p>
		<p>Most people will read these steps, and continue being enslaved to porn for the rest of their lives. Will you be the one who is different from the many? I challenge you. Do you want to leave your addiction?</p>
	</div>
	</div>
</main>

<style>
	.amogus > div {
		margin-bottom: 20px;
		background-color:rgb(54, 9, 9);
		padding:8px;
		padding-left:16px;
		padding-right:16px;
		margin-bottom:8px;
		border-radius:8px;
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
