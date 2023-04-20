<main>
    <title>About - Burgeon</title>
    <h3>{ti["about-the-project"][lshort]}</h3>
    <img src="images/fluer1.svg" style="filter: invert(100%); border: none;" height=120px alt="logo banner">
    <div class="cent-container">
    <p style="max-width:650px;" id="eee">{ti["about-p1"][lshort]}
    <br><br>
    {ti["about-p2"][lshort]}
    <br><br>
    {ti["about-p3"][lshort]}
    <br><br>
    {ti["about-p4"][lshort]}
    <br><br>
    {ti["about-p5"][lshort]}
    <br><br>
    <span>Our twitter: <a href="https://twitter.com/burgeonbook">@burgeonbook</a></span>
    </p>
    </div>
    <br>
    <img alt="onion" src="images/onion.png" height="300px">
    <p>{ti["contact-business"][lshort]}: burgeonbook@protonmail.com</p>
    <br><br>
</main>
<svelte:window on:load="{()=>handle_load()}"/>

<script>
    export let translation_index = {};
	let ti = translation_index;
	export let language_info = {};
	let lshort = language_info.short_name;

    function handle_load() {
        if (lshort == "ar") {
            let eee = document.getElementById("eee");
            eee.style.textAlign = "right";
            eee.dir="rtl";
            eee.lang="ar";
        }
    }
    
</script>