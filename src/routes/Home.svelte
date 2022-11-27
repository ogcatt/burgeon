<main>
	<title>Burgeon</title>
	
	<img src="images/fluer1.svg" class="circle-light-up" style="filter: invert(100%); border: none;" title="{ti["name-info"][lshort]}" height=200px alt="logo banner">
	<h1 class="light-up-underline" title="{ti["name-info"][lshort]}" style="margin-top:5px;">burgeon</h1>
	<p style="margin-top: 3px;">
		{ti["description-p1"][lshort]}<br>
		{ti["description-p2"][lshort]}<br>
		We are part of the <a href="">neuroregen collective</a>.
	</p>
	{#each ["us", "fr", "ru"] as lang}
	<img class="mini-flag" src="images/flags/{lang}.svg" alt="{lang}" title="{ti["lang-disclaim"][lshort]}">
	{/each}<br>
	<!--<p><b>New <u><a href="/writeups">Writeups</a></u> section!</b></p>--><br>
	
	
	<a href="/chapter/1"><button class="button">{ti["read-the-book"][lshort]}</button></a><br><br>
	<a on:click={() => send_to_mix("Physical Book")} href="" target="_blank" rel="noreferrer" title="{ti["physical-info"][lshort]}">{ti["physical-copy"][lshort]}</a> ✧
	<!-- <a on:click={() => send_to_mix("Audiobook")} href="https://odysee.com/ppmo_audiobook_v3:e" rel="noreferrer" title="{ti["audiobook-info"][lshort]}">{ti["audiobook"][lshort]}</a> ✧ -->
	<!-- <a on:click={() => send_to_mix("Donate")} href="https://opencollective.com/ppmo-collective-fund" target="_blank" rel="noreferrer" title="{ti["donate-info"][lshort]}">{ti["donate"][lshort]}</a> ✧ --> 
	<a on:click={() => send_to_mix("Writeups")} href="writeups">Writeups</a>
	<br>
	<div style="margin-top:3px;">
	✧ <a>About</a> ✧ 
	<a>Promo</a>
	</div>
	
</main>

<script>
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

	mixpanel.init('c5cad05270531f641b33c1e4809d7485', {debug: true, ignore_dnt: true});
	mixpanel.identify(ls_id);

	function send_to_mix(text) {
		mixpanel.track(text);
	}

</script>
