<script>
	import { Router, Route } from "svelte-navigator";
	import Home from "./Home.svelte";
	import x from  "../components/trash/x.svelte";
	import Chapter from "../components/Chapter.svelte";
	import Writeup from "../components/Writeup.svelte";

	// Chapters (English)
	import C1_EN from "../markdown/english/1. Introduction.md";
	import C2_EN from "../markdown/english/2. Stray Cat.md";
	import C3_EN from "../markdown/english/3. Effects.md";
	import C4_EN from "../markdown/english/4. Brainwashing.md";
	import C5_EN from "../markdown/english/5. Love.md";
	import C6_EN from "../markdown/english/6. Neurology.md";
	import C7_EN from "../markdown/english/7. Environment.md";
	import C8_EN from "../markdown/english/8. Transmutation.md";
	import C9_EN from "../markdown/english/9. Understandings.md";
	import C10_EN from "../markdown/english/10. Movement.md";

	// Writeups (English)
	import EgoDeath_EN from "../writeups/Ego Death.md";
	import Stress_EN from "../writeups/Stress.md";
	import Perfectionism_EN from "../writeups/Perfectionism.md";
	import Sleep_EN from "../writeups/Sleep.md";
	import Mentors_EN from "../writeups/Mentors.md";

    import Markdown from "../components/Markdown.svelte";

	// If this changes, book progress is removed
	const major_vers = "4.0-main";
	const exist_vers = localStorage.getItem("book_version");

	if (exist_vers != undefined) {
		if (exist_vers != major_vers) {
			localStorage.removeItem("completed_chapters");
		}
	}

	localStorage.setItem("book_version", major_vers);

	let languages = {
		english: {
			name: "english",
			title_name: "English",
			native_name: "english",
			native_title_name: "English",
			short_name: "en",
			tsn: "EN",
			version: "4.0"
		},
		french: {
			name: "french",
			title_name: "French",
			native_name: "français",
			native_title_name: "Français",
			short_name: "fr",
			tsn: "FR",
			version: "4.0"
		},
		russian: {
			name: "russian",
			title_name: "Russian",
			native_name: "русский",
			native_title_name: "Русский",
			short_name: "ru",
			tsn: "RU",
			version: "4.0"
		}
	}

	let chapters_en = [
		{
			name: "Introduction",
			title: "Introduction",
			md: C1_EN
		},
		{
			name: "Stray Cat",
			title: "Stray Cat",
			
			md: C2_EN
		},
		{
			name: "Effects",
			title: "Effects",
			subtitle: "Benefits Or Removal Of Negatives?",
			md: C3_EN
		},
		{
			name: "Brainwashing",
			title: "Brainwashing",
			md: C4_EN
		},
		{
			name: "Love",
			title: "Love",
			subtitle: "Unhealthy Views On Sex & Love",
			md: C5_EN
		},
		{
			name: "Neurology",
			title: "Neurology",
			subtitle: "How Our Brains Work",
			md: C6_EN
		},
		{
			name: "Environment",
			title: "Environment",
			md: C7_EN
		},
		{
			name: "Transmutation",
			title: "Transmutation",
			subtitle: "The Essence Of Energy",
			md: C8_EN
		},
		{
			name: "Understandings",
			title: "Understandings",
			subtitle: "The Little Things",
			md: C9_EN
		},
		{
			name: "Movement",
			title: "Movement",
			subtitle: "What Is Next",
			md: C10_EN
		},
	];

	let chapters_fr = [
		{
			name: "Introduction",
			title: "Introduction",
			md: C1_EN
		},
		{
			name: "Stray Cat",
			title: "Stray Cat",
			
			md: C2_EN
		},
		{
			name: "Effects",
			title: "Effects",
			subtitle: "Benefits or removal of negatives?",
			md: C3_EN
		},
		{
			name: "Brainwashing",
			title: "Brainwashing",
			md: C4_EN
		},
		{
			name: "Love",
			title: "Love",
			subtitle: "On views of sex & relationships.",
			md: C5_EN
		},
		{
			name: "Neurology",
			title: "Neurology",
			subtitle: "How the our brains work.",
			md: C6_EN
		},
		{
			name: "Environment",
			title: "Environment",
			md: C7_EN
		},
		{
			name: "tbf",
			title: "tbf",
			md: C8_EN
		},
		{
			name: "Neuroplasticity",
			title: "Neuroplasticity",
			subtitle: "Processes and reactions.",
			md: C9_EN
		},
		{
			name: "Transmutation",
			title: "Transmutation",
			subtitle: "Going over important topics.",
			md: C10_EN
		},
	]

	let chapters_ru = [
		{
			name: "Introduction",
			title: "Introduction",
			md: C1_EN
		},
		{
			name: "Stray Cat",
			title: "Stray Cat",
			
			md: C2_EN
		},
		{
			name: "Effects",
			title: "Effects",
			subtitle: "Benefits or removal of negatives?",
			md: C3_EN
		},
		{
			name: "Brainwashing",
			title: "Brainwashing",
			md: C4_EN
		},
		{
			name: "Love",
			title: "Love",
			subtitle: "On views of sex & relationships.",
			md: C5_EN
		},
		{
			name: "Neurology",
			title: "Neurology",
			subtitle: "How the our brains work.",
			md: C6_EN
		},
		{
			name: "Environment",
			title: "Environment",
			md: C7_EN
		},
		{
			name: "tbf",
			title: "tbf",
			md: C8_EN
		},
		{
			name: "Neuroplasticity",
			title: "Neuroplasticity",
			subtitle: "Processes and reactions.",
			md: C9_EN
		},
		{
			name: "Transmutation",
			title: "Transmutation",
			subtitle: "Going over important topics.",
			md: C10_EN
		},
	]

	let chapter_langs = {
		english: {
			chaps: chapters_en
		},
		french: {
			chaps: chapters_fr
		},
		russian: {
			chaps: chapters_ru
		}
	};

	// Theme detection and change
	let themes = [
        {
            title: "Dark Theme (Cool)",
            real: "cool-dark"
        },
		{
            title: "Dark Theme (Warm)",
            real: "warm-dark"
        },
        {
            title: "Light Theme",
            real: "light"
        },
		{
            title: "Light Theme (Grid)",
            real: "light-grid"
        },
		{
            title: "Retro Theme",
            real: "retro-dark"
        },
		{
            title: "Black Theme (OLED)",
            real: "black"
        },
    ];

	let font = localStorage.getItem("font");
	if (font != undefined) {
		document.documentElement.classList.add(font+"-font");
	} else {
		for(let i = 0; i < themes.length; i++) {
			document.documentElement.classList.remove(font+"-font");
		}
	}

	// Font detection and change
	let fonts = [
		{
            title: "Open Sans",
            real: "open-sans"
        },
		{
			title: "PT Serif",
			real: "pt-serif"
		},
		{
			title: "PT Sans",
			real: "pt-sans"
		},
		{
            title: "Monnaco",
            real: "monnaco"
        },
		{
			title: "Georgia",
			real: "georgia"
		},
		{
            title: "Open Dyslexic",
            real: "open-dyslexic"
        },
    ];

	let aligns = [
        {
            title: "Left",
			real: "left"
        },
		{
            title: "Middle",
			real: "middle"
        },
		{
            title: "Right",
			real: "right"
        }
    ]

	let theme = localStorage.getItem("theme");
	if (theme != undefined) {
		document.documentElement.classList.add(theme+"-theme");
	} else {
		for(let i = 0; i < themes.length; i++) {
			document.documentElement.classList.remove(theme+"-theme");
		}
	}

	let align = localStorage.getItem("align");
	if (align != undefined) {
		document.documentElement.classList.add(align+"-align");
	} else {
		for(let i = 0; i < aligns.length; i++) {
			document.documentElement.classList.remove(align+"-align");
		}
	}

	let active_language = "english";
	let tmp = localStorage.getItem("active_language");
	if (tmp != undefined) {
		active_language = tmp;
	}

	let translation_index = {
		"chapter": {
			en: "Chapter",
			fr: "Chapitre",
			ru: "Глава"
		},
		"visit-chapter": {
			fr: "Aller Au Chapitre",
			en: "Visit Chapter",
			ru: "Посетить главу"
		},
		"visit-home": {
			en: "Visit Home",
			fr: "Visiter L'accueil",
			ru: "На главную"
		},
		"open-languages": {
			en: "Open Languages",
			fr: "Ouvrir Les Langues",
			ru: "Открыть настройки языков"
		},
		"open-settings": {
			en: "Open Settings",
			fr: "Ouvrir Les Paramètres",
			ru: "Открыть настройки"
		},
		"theme": {
			en: "Theme",
			fr: "Thème",
			ru: "Тема"
		},
		"font": {
			en: "Font",
			fr: "Police",
			ru: "Шрифт"
		},
		"alignment": {
			en: "Alignment",
			fr: "Alignement",
			ru: "Ориентация"
		},
		"settings": {
			en: "Settings",
			fr: "Paramètres",
			ru: "Настроки"
		},
		"languages": {
			en: "Languages",
			fr: "Langues",
			ru: "Языки"
		},
		"language": {
			en: "Language",
			fr: "Langue",
			ru: "Язык"
		},
		"download-the-book": {
			en: "Download the book (download options)",
			fr: "Télécharger le livre (option de téléchargement)",
			ru: "Скачать книгу (опции загрузки)"
		},
		"downloads": {
			en: "Downloads",
			fr: "Téléchargements",
			ru: "Скачать"
		},
		"doc-info": {
			en: "PDF is better for physical copies. EPUB is best for mobile devices, and ZIP/MD is best for copying text from the book.",
			fr: "Le format PDF est préférable pour les copies physiques. EPUB est le meilleur pour les appareils mobiles, et ZIP/MD est le meilleur pour copier le texte du livre.",
			ru: "PDF лучше для физических копий. EPUB лучше для мобильных устройств, а ZIP/MD лучше что бы копировать текст из книги."
		},
		"description-p1": {
			en: "Freedom comes from understanding.",
			fr: "La liberté vient de la compréhension.",
			ru: "Свобода приходит из понимания."
		},
		"description-p2": {
			en: "This is a book on semen retention and freedom from p*rn.",
			fr: "Un Livre pour se libérer du piège du porno et de la masturbation.",
			ru: "Книга которая поможет вам стать свободными от ловушки порно и мастурбации."
		},
		"read-the-book": {
			en: "Read the book",
			fr: "Lire le livre",
			ru: "Читать книгу"
		},
		"physical-copy": {
			en: "Physical Copy",
			fr: "Copie physique",
			ru: "Физическая копия"
		},
		"donate": {
			en: "Donate",
			fr: "Faire un don",
			ru: "Пожертвовать"
		},
		"donate-info": {
			en: "Donate to help out the project.",
			fr: "Faire un don pour aider le projet.",
			ru: "Пожертвовать на поддержание проекта."
		},
		"physical-info": {
			en: "Print on demand. Discrete branding. No profit made on this. Use code THANKYOU20.",
			fr: "Impression à la demande. Marque discrète. Aucun profit n'est réalisé. Utilisez le code THANKYOU20.",
			ru: "Разрешается печатать. Проект не зарабатывает на материале. Используйте код THANKYOU20."
		},
		"name-info": {
			en: "Burgeon means to grow.",
			fr: "Burgeon means to grow.",
			ru: "Burgeon means to grow."
		},
		"audio-info": {
			en: "Some fitting audio. From Lil Darkie - Dreaming.",
			fr: "Un son adapté. De Lil Darkie - Dreaming.",
			ru: "Подходящая музыка. От Lil Darkie - Dreaming."
		},
		"audio2-info": {
			en: "What I thought would be a nice outro. Song is by Quadeca - Tell Me A Joke.",
			fr: "What I thought would be a nice outro. Song is by Quadeca - Tell Me A Joke.",
			ru: "What I thought would be a nice outro. Song is by Quadeca - Tell Me A Joke."
		},
		"mark-done": {
			en: "Mark Done",
			fr: "Marquer comme lu",
			ru: "Полный"
		},
		"next-chapter": {
			en: "Next Chapter",
			fr: "Chapitre suivant",
			ru: "Следующая глава"
		},
		"completed": {
			en: "Completed",
			fr: "Terminé",
			ru: "Завершено"
		},
		"resets": {
			en: "Resets all completed chapters",
			fr: "Réinitialiser tous les chapitres",
			ru: "Сбросить все пройденные главы"
		},
		"donate-opn": {
			en: "Donate Via Opencollective",
			fr: "Faire un don via opencollective",
			ru: "Пожертвование через opencollective"
		},
		"mark-info": {
			en: "Mark the current chapter complete",
			fr: "Marquer le chapitre en cours comme étant terminé",
			ru: "Отметить данную главу завершенной"
		},
		"menu": {
			en: "Menu",
			fr: "Menu",
			ru: "Меню"
		},
		"choose-your-language": {
			en: "Choose your language.",
			fr: "Choississez votre langue.",
			ru: "Выберете язык."
		},
		"trol": {
			en: "Close (duh?)",
			fr: "Fermer (duh?)",
			ru: "Закрыть (мда?)"
		},
		"gh": {
			en: "Visit project GitHub (source code)",
			fr: "Visiter le projet GitHub (code source)",
			ru: "Посестите проект на GitHub (исходный код)"
		},
		"close-menu": {
			en: "Close Menu",
			fr: "Fermer le menu",
			ru: "Закрыть меню"
		},
		"pdf-info": {
			en: "Standard Light Background PDF (Portable Document Format) file",
			fr: "Fichier PDF (Portable Document Format) standard à fond clair",
			ru: "Стандартный со светлым фоном PDF (Portable Document Format) файл"
		},
		"epub-info": {
			en: "Standard EPUB (Electronic Publication) file. EPUB is good for mobile devices.",
			fr: "Fichier standard EPUB (publication électronique). EPUB est bon pour les appareils mobiles.",
			ru: "Стандартный EPUB (Electronic Publication) файл. EPUB хорошо работает для мобильных утройств."
		},
		"epub-dark-info": {
			en: "Dark Background EPUB (Electronic Publication) file. EPUB is good for mobile devices.",
			fr: "Fichier EPUB (Electronic Publication) à fond noir. EPUB est bon pour les appareils mobiles.",
			ru: "Файл EPUB (Electronic Publication) с темным фоном. EPUB хорошо работает для мобильных устройств."
		},
		"md-info": {
			en: "Merged markdown. Right click when you visit page to download.",
			fr: "Fusion de markdown. Cliquez à droite lorsque vous visitez la page pour télécharger.",
			ru: "Merged markdown. Нажмите правой кнопкой мыши по странице для скачивания."
		},
		"zip-info": {
			en: "Zipped markdown files.",
			fr: "Fichiers markdown zippés.",
			ru: "Заархивированные markdown файлы."
		},
		"reset-all": {
			en: "Reset All",
			fr: "Effacer Tout",
			ru: "Сбросить все"
		},
		"hidden-section": {
			en: "Hidden Section",
			fr: "Partie Cachée",
			ru: "Скрытый раздел"
		},
		"lang-disclaim": {
			en: "Visit translations tab in the book to change language.",
			fr: "Visitez l'onglet traductions dans le livre pour changer de langue.",
			ru: "Посетите вкладку переводов в книге, чтобы изменить язык."
		},
		"audiobook": {
			en: "Audiobook",
			fr: "Livre audio",
			ru: "Аудиокнига"
		},
		"audiobook-info": {
			en: "Listen to the full audiobook.",
			fr: "Écouter le livre audio complet.",
			ru: "Слушайте полную аудиокнигу."
		},
		"stats": {
			en: "Stats",
			fr: "Stats",
			ru: "Stats"
		},
		"current-b-version": {
			en: "Current Book Version",
			fr: "Current Book Version",
			ru: "Current Book Version"
		},
		"translations-warning": {
			en: "Currently, translations for burgeon only include the site itself rather than the book.",
			fr: "Currently, translations for burgeon only include the site itself rather than the book.",
			ru: "Currently, translations for burgeon only include the site itself rather than the book.",
		},
		"checkout-writeups": {
			en: "Check Out My Writeups!",
			fr: "Check Out My Writeups!",
			ru: "Check Out My Writeups!"
		},
		"writeups-info": {
			en: "My dives into different topics on personal growth.",
			fr: "My dives into different topics on personal growth.",
			ru: "My dives into different topics on personal growth.",
		}
	};

	/*
	"": {
			en: "",
			fr: "",
			ru: ""
		}

	*/

	let writeups = [
		{
			title: "EGO DEATH",
			link: "ego_death",
			subtitle: "The Great Deconstruction",
			image: "ego_death.png",
			md: EgoDeath_EN,
			notitles: true
		},
		{
			title: "PERFECTIONISM",
			link: "perfectionism",
			subtitle: "There Is No 10",
			image: "perfectionism.png",
			md: Perfectionism_EN,
			notitles: true
		},
		{
			title: "SLEEP",
			link: "sleep",
			subtitle: "The Birds Settle",
			image: "sleep.png",
			md: Sleep_EN,
			notitles: true
		},
		{
			title: "STRESS",
			link: "stress",
			subtitle: "The Physical Principal",
			image: "stress.png",
			md: Stress_EN,
			notitles: true
		},
		{
			title: "MENTORS [NEW]",
			link: "mentors",
			subtitle: "Am I your mentor?",
			image: "stress.png",
			md: Mentors_EN,
			notitles: true
		},
	]
	
	function make_noice_link(title) {
		title = title.replace(/ /g,"_");
		title = title.toLowerCase();
		console.log(title);
		return title;
	}

	function no_cuss() {
		console.log("lol")
	}

</script>

<Router primary={false}>
	<main>

	{#each chapter_langs[active_language].chaps as chapter, i}
		<Route path="chapter/{(i+1).toString()}">
			<Chapter
				chapter={i+1}
				title={chapter.title}
				subtitle={chapter.subtitle}
				md={chapter.md}
				themes={themes}
				chapters={chapter_langs[active_language].chaps}
				fonts={fonts}
				aligns={aligns}
				language_info={languages[active_language]}
				translation_index={translation_index}
				languages={languages}
			/>
		</Route>
	{/each}

	{#each writeups as writeup, i}
		<Route path="writeup/{make_noice_link(writeup.link)}">
			<Writeup
				title={writeup.title}
				subtitle={writeup.subtitle}
				image={writeup.image}
				md={writeup.md}
				notitles={writeup.notitles}
			/>
		</Route>
	{/each}

	<Route path="writeups">
		<title>Writeups</title>
		<!--<div style="background-image: url('../images/ring.svg');background-repeat: repeat-x; height: 40px; width: 100%; background-size: 40px 70px;"></div>-->
		<h1 class="light-up-underline">Writeups</h1>
		<img src="../images/branches.gif" class="img-light-up" style="max-width:280px;" alt="nice looking gif">
		<p>Addressing the world-<br>
		These are just my thoughts-<br>
		Digest them by yourself.
		</p>
		<ul>
		{#each writeups as writeup}
			<li style="margin-bottom: 10px;"><a href="writeup/{make_noice_link(writeup.link)}" title={writeup.subtitle}>{writeup.title}</a></li>
		{/each}
		</ul>
	</Route>

	<Route path="about">
		about
	</Route>

	<Route path="about">
		Promo
	</Route>

	<Route path="/">
		<Home 
			translation_index={translation_index}
			language_info={languages[active_language]}
		/>
	</Route>

	


	<Route path="hs_6d61796265003733203639203664203666">
		<title>404</title>
		<h3><a href="hs_6d617962650003733203639203664203666">404</a></h3>
		<p>No Route could be matched. <a href="/">Home</a></p>
	</Route>
	<Route path="hs_6d617962650003733203639203664203666" component={x}/>

	<Route path="*">
		<title>404</title>
		<h3>404</h3>
		<p>No Route could be matched. <a href="/">Home</a></p>
	</Route>

	</main>
</Router>