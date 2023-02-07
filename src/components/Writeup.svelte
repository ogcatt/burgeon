<script>
    import Markdown from "./Markdown.svelte";

    export let title = "Untitled";
    export let subtitle = "";
    export let image = "";
    export let md;
    export let notitles = false;

    mixpanel.init('69f9e45d45df5706a4dda82222fb4141', {debug: true, ignore_dnt: true});
    mixpanel.identify(ls_id);
    mixpanel.track(`Writeup`);
    mixpanel.track(`Writeup: ${title}`);
</script>

<main>
    <title>Writeup - {title}</title>
    {#if image != ""}
        <img src="../images/{image}" style="max-width: 400px;" alt="banner">
    {/if}
    {#if !notitles}
        <h1>{title}</h1>
        {#if subtitle != ""}
            <h2>{subtitle}</h2>
        {/if}
    {/if}
    <div class="cent-container">
        <div class="writeup">
        <Markdown markdown={md}/>
        </div>
    </div>
</main>