<script>
    import Typewriter from "svelte-typewriter";
    import Markdown from "./Markdown.svelte";

    export let chapter = 0;
    export let title = "";
    export let subtitle = "";
    export let md = "";

    export let chapters = [];
    export let themes = [];
    export let fonts = [];
    export let aligns = [];
    export let languages = {};
    // Language naming information
    export let language_info = {};
    // Language Shortcode
    let lshort = language_info.short_name;
    // Translation Index
    export let translation_index = {};
    let ti = translation_index;

    let completion_disabled = true;
    let mark_done_disabled = false;

    let completed = false;
    let boogoodled = false;
    let completed_all = false;
    let mobile_menu_open = false;
    let temp_completed;

    let popup_type = "settings";

    let selected_theme;
    let selected_font;
    let selected_align;
    let selected_nocuss;
    let selected_language = language_info.name;

    let next_chapter = {};

    if (chapter != chapters.length) {
        next_chapter = chapters[chapter];
    }

    let completed_chapters = JSON.parse(
        localStorage.getItem("completed_chapters")
    );

    const complete_chapter = () => {
        completion_disabled = false;
        mark_done_disabled = true;

        for (let i = 0; i <= chapter; i++) {
            completed_chapters[i] = true;
        }
        localStorage.setItem(
            "completed_chapters",
            JSON.stringify(completed_chapters)
        );

        completed = true;
        completed_all = completed_chapters.every((element) => element);
    };

    const generate_completed_chapters = () => {
        completed_chapters = [];
        for (let i = 0; i < chapters.length; i++) {
            completed_chapters[i] = false;
        }
    };

    const reset_completed = () => {
        localStorage.removeItem("completed_chapters");
        window.location.replace("/chapter/0");
    };

    const toggle_popup = () => {
        let settings = document.getElementsByClassName("settings-container")[0];
        let overlay = document.getElementsByClassName("overlay")[0];
        if (settings.style.display == "") {
            settings.style.display = "flex";
            overlay.style.display = "block";
        } else {
            settings.style.display = "";
            overlay.style.display = "";
        }
    };

    const update_theme = () => {
        localStorage.setItem("theme", selected_theme.real);
        for (let i = 0; i < themes.length; i++) {
            document.documentElement.classList.remove(
                themes[i].real + "-theme"
            );
        }
        document.documentElement.classList.add(selected_theme.real + "-theme");
    };

    const update_font = () => {
        localStorage.setItem("font", selected_font.real);
        for (let i = 0; i < fonts.length; i++) {
            document.documentElement.classList.remove(fonts[i].real + "-font");
        }
        document.documentElement.classList.add(selected_font.real + "-font");
    };

    const update_align = () => {
        localStorage.setItem("align", selected_align.real);
        for (let i = 0; i < aligns.length; i++) {
            document.documentElement.classList.remove(
                aligns[i].real + "-align"
            );
        }
        document.documentElement.classList.add(selected_align.real + "-align");
    };

    const update_language = () => {
        localStorage.setItem("active_language", selected_language);
        if (selected_language == "arabic") {
            localStorage.setItem("align", "right");
            for (let i = 0; i < aligns.length; i++) {
                document.documentElement.classList.remove(
                    aligns[i].real + "-align"
                );
            }
            document.documentElement.classList.add(selected_align.real + "-align");
        } else if (selected_language == "english") {
            localStorage.setItem("align", "left");
            for (let i = 0; i < aligns.length; i++) {
                document.documentElement.classList.remove(
                    aligns[i].real + "-align"
                );
            }
            document.documentElement.classList.add(selected_align.real + "-align");
        }
        location.reload();
    };

    const toggle_mobile_menu = () => {
        let side_nav = document.getElementsByClassName("side-nav")[0];
        let chap_header = document.getElementsByClassName("chapter-header")[0];

        if (!mobile_menu_open) {
            side_nav.style.display = "block";
            chap_header.style.marginLeft = "0px";
            chap_header.style.filter = "opacity(40%)";
        } else {
            side_nav.style.display = "none";
            chap_header.style.marginLeft = "0px";
            chap_header.style.filter = "";
        }
        mobile_menu_open = !mobile_menu_open;
    };

    const toggle_settings = () => {
        popup_type = "settings";
        toggle_popup();
    };

    const toggle_languages = () => {
        popup_type = "languages";
        toggle_popup();
    };

    const toggle_downloads = () => {
        popup_type = "downloads";
        toggle_popup();
    };

    if (completed_chapters == undefined) {
        generate_completed_chapters();
    }

    if (chapter != 0 && completed_chapters[chapter - 1] == false) {
        mark_done_disabled = true;
        boogoodled = true;
    }

    if (completed_chapters[chapter] == true && !boogoodled) {
        complete_chapter();
    }

    // Update theme selection
    let ls_theme = localStorage.getItem("theme");
    if (ls_theme != undefined) {
        for (let i = 0; i < themes.length; i++) {
            if (themes[i].real == ls_theme) {
                selected_theme = themes[i];
                break;
            }
        }
    }

    // Update font selection
    let ls_font = localStorage.getItem("font");
    if (ls_font != undefined) {
        for (let i = 0; i < fonts.length; i++) {
            if (fonts[i].real == ls_font) {
                selected_font = fonts[i];
                break;
            }
        }
    }

    // Update alignment
    let ls_align = localStorage.getItem("align");
    if (ls_align != undefined) {
        for (let i = 0; i < aligns.length; i++) {
            if (aligns[i].real == ls_align) {
                selected_align = aligns[i];
                break;
            }
        }
    }

    // Analytics

    let ls_id = localStorage.getItem("usr_id");
    if (ls_id == undefined) {
        let date = Date.now();
        localStorage.setItem("usr_id", date);
        ls_id = date;
    }

    mixpanel.init("69f9e45d45df5706a4dda82222fb4141", {
        debug: true,
        ignore_dnt: true,
    });
    mixpanel.identify(ls_id);
    mixpanel.track(`Chapter ${chapter}`);
    mixpanel.track(`Language ${language_info.title_name}`);

    function send_to_mix(text) {
        mixpanel.track(text);
    }

    function handle_load() {
        if (lshort == "ar") {
            let eee = document.getElementById("eee");
            eee.style.textAlign = "right";
            eee.dir="rtl";
            eee.lang="ar";
        }
    }
</script>

<svelte:window on:load="{()=>handle_load()}"/>
<main>
    <header>
        <title>{ti["chapter"][lshort]} {chapter} - {title} (Burgeon)</title>
    </header>

    {#if !mobile_menu_open}
        <div class="menu-container" on:click={() => toggle_mobile_menu()}>
            <div class="linkify menu-inner">{ti["menu"][lshort]}</div>
        </div>
    {/if}

    <div class="middlefy">
        <div
            class="overlay"
            on:click={() => toggle_popup()}
            on:keypress={() => toggle_popup()}
        />

        <div class="settings-container">
            <div class="settings">
                <div
                    on:click={() => toggle_popup()}
                    on:keypress={() => toggle_popup()}
                >
                    <img
                        src="../images/close-outline.svg"
                        class="close-settings linkify invert-color"
                        alt={ti["trol"][lshort]}
                        title={ti["trol"][lshort]}
                    />
                </div>
                {#if popup_type == "settings"}
                    <h1>{ti["settings"][lshort]}</h1>
                    <label for="select">{ti["theme"][lshort]}</label>
                    <select
                        class="select"
                        bind:value={selected_theme}
                        on:change={() => update_theme()}
                    >
                        {#each themes as t}
                            <option value={t}>
                                {t.title}
                            </option>
                        {/each}
                    </select>
                    <br /><br />
                    <label for="select">{ti["font"][lshort]}</label>
                    <select
                        class="select fontify-pls"
                        bind:value={selected_font}
                        on:change={() => update_font()}
                    >
                        {#each fonts as f}
                            <option value={f}>
                                {f.title}
                            </option>
                        {/each}
                    </select>
                    <br /><br />
                    <label for="select">{ti["alignment"][lshort]}</label>
                    <select
                        class="select"
                        bind:value={selected_align}
                        on:change={() => update_align()}
                    >
                        {#each aligns as a}
                            <option value={a}>
                                {a.title}
                            </option>
                        {/each}
                    </select>
                    <!--
                <br><br>
                <label for="select">CussTest</label>
                <select class="select" bind:value={selected_nocuss} on:change={() => {}}>
                    <option value={false}>
                        NoTest
                    </option>
                    <option value={true}>
                        YesTest
                    </option>
                </select> 
                -->

                    <br /><br />
                    <!--
                    <a
                        href="https://eu.mixpanel.com/p/KYZL3Q3ABCd3yuKLTnbcTX"
                        target="_blank"
                        rel="noreferrer">{ti["stats"][lshort]}</a
                    >
                    | -->{ti["current-b-version"][lshort]}: {language_info[
                        "tsn"
                    ]}-{language_info["version"]}
                {:else if popup_type == "languages"}
                    <h1>{ti["languages"][lshort]}</h1>
                    <label for="select">{ti["language"][lshort]}</label>
                    <select
                        class="select"
                        bind:value={selected_language}
                        on:change={() => update_language()}
                    >
                        {#each Object.entries(languages) as l}
                            <option value={l[0]}>
                                {l[1].native_title_name} ({l[1].title_name})
                            </option>
                        {/each}
                    </select>
                    <p>{ti["choose-your-language"][lshort]}</p>
                    <p>Planned Translations:</p>
                    <div>
                        <div>
                            • Spanish
                        </div>
                        <div>
                            • German
                        </div>
                        <div>
                            • Porteguese
                        </div>
                        <div>
                            • Japanese
                        </div>
                        <div>
                            • Chinese
                        </div>
                    </div>
                    <br>
                {:else}
                    <h1>{ti["downloads"][lshort]}</h1>
                    <span>
                        <a
                            href="/offline/COMPLETE/pdf/A5-burgeon-en-4.1-main.pdf"
                            target="_blank"
                            rel="noreferrer"
                            title={ti["pdf-info"][lshort]}
                            ><button class="button">PDF [A5]</button></a
                        >
                        <!--
                        <a
                            href="/offline/COMPLETE/epub/en-4.0-main.md.epub"
                            target="_blank"
                            rel="noreferrer"
                            title={ti["epub-info"][lshort]}
                            ><button class="button">EPUB</button></a
                        >
                        <a
                            href="/offline/COMPLETE/epub/en-4.0-main.md-dark.epub"
                            target="_blank"
                            rel="noreferrer"
                            title={ti["epub-dark-info"][lshort]}
                            ><button class="button">EPUB (Dark)</button></a
                        >
                        -->
                        <a
                            href="/offline/COMPLETE/zip/en-4.1-main-markdown.zip"
                            download
                            target="_blank"
                            rel="noreferrer"
                            title={ti["zip-info"][lshort]}
                            ><button class="button">ZIP</button></a
                        >
                        <a
                            href="/offline/COMPLETE/pdf/A5-ppmo-en-3.0-main.pdf"
                            download
                            target="_blank"
                            rel="noreferrer"
                            title="Archive copy of ppmo"
                            ><button class="button">OLD (PPMO A5 PDF)</button></a
                        >
                        <br />
                        <p style="padding-left:10px;padding-right:10px;">
                            {ti["doc-info"][lshort]}
                        </p>
                        <a
                            on:click={() => send_to_mix("Physical Book")}
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.lulu.com/shop/neuroregen-collective/burgeon/paperback/product-vvd854.html"
                            >{ti["physical-copy"][lshort]}</a
                        >
                    </span>
                {/if}
            </div>
        </div>
    </div>

    <div class="side-nav">
        {#if mobile_menu_open}
            <img
                src="../images/close-outline.svg"
                class="side-icon linkify link"
                style="width: 30px; padding-left: 11px;"
                title={ti["close-menu"][lshort]}
                alt={ti["close-menu"][lshort]}
                on:click={() => toggle_mobile_menu()}
            />
        {/if}
        <img
            src="../images/download-outline.svg"
            class="side-icon linkify link"
            style="width: 30px; padding-left: 11px;"
            title={ti["download-the-book"][lshort]}
            alt={ti["downloads"][lshort]}
            on:click={() => toggle_downloads()}
        />
        <a href="/" title={ti["visit-home"][lshort]}
            ><img
                src="../images/home-outline.svg"
                class="side-icon linkify link"
                style="width: 26px; padding-left: 13px;"
                alt="home"
            /></a
        >
        {#each chapters as chap, i}
            {#if completed_chapters[i + 1] == true}
                <span class="dot" style="background-color: #38e421" />
            {/if}
            {#if i + 1 == chapter}
                <a
                    href="/chapter/{i + 1}"
                    class="link active-link"
                    title="{ti['visit-chapter'][lshort]} {i + 1} - {chap.title}"
                    on:click={() => window.scrollTo(0, 0)}>{i + 1}</a
                >
            {:else}
                <a
                    href="/chapter/{i + 1}"
                    class="link"
                    title="{ti['visit-chapter'][lshort]} {i + 1} - {chap.title}"
                    on:click={() => window.scrollTo(0, 0)}>{i + 1}</a
                >
            {/if}
        {/each}
        <img
            src="../images/language-outline.svg"
            class="side-icon linkify link"
            style="width: 30px; padding-left: 11px;"
            title={ti["open-languages"][lshort]}
            alt={ti["languages"][lshort]}
            on:click={() => toggle_languages()}
        />
        <img
            src="../images/settings-outline.svg"
            class="side-icon linkify link"
            style="width: 30px; padding-left: 11px;"
            title={ti["open-settings"][lshort]}
            alt={ti["settings"][lshort]}
            on:click={() => toggle_settings()}
        />
        <div style="margin-bottom: 30px;" />
    </div>

    <br />
    <div class="chapter-header">
        <img src="../images/fluerstar1.png" height="100px" class="topblob" />
        <h3
            class="light-up-underline"
            style="margin-bottom:0px; margin-top:3px;"
        >
            {ti["chapter"][lshort]}
            {chapter}
        </h3>
        <h1 class="light-up-underline" style="margin-top:2px;">{title}</h1>
        {#if subtitle != ""}
            <h4 class="no-margin" style="font-size: 20px;padding:5px;">
                <i>{subtitle}</i>
            </h4>
        {/if}

        {#if chapter == 1}
            <audio
                controls
                style="margin-top:0px"
                title={ti["audio-info"][lshort]}
            >
                <source src="../intro.mp3" type="audio/mpeg" />
            </audio>
        {/if}

        <div class="cent-container">
            <div class="chapter eee" lang="ar">
                <Markdown
                markdown={md} 
                translation_index={translation_index}
			    language_info={language_info}
                />
            </div>
        </div>
        {#if chapter == chapters.length}
            <audio
                controls
                style="margin-top:12px"
                title={ti["audio2-info"][lshort]}
            >
                <source src="../outro.mp3" type="audio/mpeg" />
            </audio>
            <br /><br />
            <!-- <a on:click={() => send_to_mix("Donate")} href="https://opencollective.com/ppmo-collective-fund" target="_blank" rel="noreferrer">
            <button class="button" title="{ti["donate-info"][lshort]}" style="background-color:#314879">{ti["donate-opn"][lshort]}</button>
        </a> -->
            <a
                on:click={() => send_to_mix("Neuroregen")}
                href="https://neuroregen.org"
                target="_blank"
                rel="noreferrer"
            >
                <button
                    class="button"
                    title="Neuroregen is a project supporting burgeon that exists to support and discover neuroregenerative practices."
                    style="background-color:#314879"
                    >{ti["check-neuroregen"][lshort]}</button>
                
            </a>
            <br /><br />
        {/if}
        {#if !completed_all}
            <button
                class="button mark_done_button"
                on:click={() => complete_chapter()}
                title={ti["mark-info"][lshort]}
            >
                {#if !completed}
                    {ti["mark-done"][lshort]}
                {:else}
                    {ti["completed"][lshort]}
                {/if}
            </button>
        {:else}
            <button
                class="button"
                style="background-color: black; border:none;"
                on:click={() => reset_completed()}
                title={ti["resets"][lshort]}
            >
                {ti["reset-all"][lshort]}
            </button>
            {#if chapter == chapters.length}
                <a
                    href="/hs_6d61796265003733203639203664203666"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button class="button" title="..."
                        >{ti["hidden-section"][lshort]}</button
                    >
                </a>
            {/if}
        {/if}
        {#if chapter != chapters.length}
            <a
                href="/chapter/{chapter + 1}"
                class="link"
                on:click={() => window.scrollTo(0, 0)}
                title="{ti['visit-chapter'][lshort]} {chapter +
                    1} - {next_chapter.title}"
            >
                <button
                    class="button completion-button"
                    disabled={completion_disabled}
                    >{ti["next-chapter"][lshort]}</button
                >
            </a>
        {/if}
        <br /><br /><br /><br /><br />
    </div>
</main>
