<script>
    import MarkdownIt from "markdown-it";
    import "highlight.js/styles/an-old-hope.css";

    // Support code markdown (for whatever reason lol)
    import highlight from "highlight.js";

    export let markdown = "";

    // Initialize `markdown-it`
    const md = new MarkdownIt({
      html: true,
    	highlight: function (str, lang) {
    		if (lang && highlight.getLanguage(lang)) {
    			try {
    				return highlight.highlight(lang, str).value;
    			} catch (e) {
    				// eslint-disable-next-line no-console
    				console.error("Failed to highlight string");
    			}
    		}
    		return ""; // use external default escaping
    	}
    });

    // Render to an html string
    const rendered = md.render(markdown);

    export let translation_index = {};
    let ti = translation_index;
    export let language_info = {};
    let lshort = language_info.short_name;

    function handle_load() {
        if (lshort == "ar") {
            let eee = document.getElementById("ee");
            eee.style.textAlign = "right";
            eee.dir="rtl";
            eee.lang="ar";
        }
    }
</script>

<svelte:window on:load="{()=>handle_load()}"/>

<!-- Render with the `@html` directive -->
<div id="ee">
  {@html rendered}
</div>