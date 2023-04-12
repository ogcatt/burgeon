<script>
	import { Router, Route } from "svelte-navigator";
	import Home from "./Home.svelte";
	import Brute from "./Brute.svelte";
	import About from "./About.svelte";
	import Promo from "./Promo.svelte";
	import PhysicalCopies from "./PhysicalCopies.svelte";
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
		arabic: {
			name: "arabic",
			title_name: "Arabic",
			native_name: "العربية",
			native_title_name: "العربية",
			short_name: "ar",
			tsn: "AR",
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
		},
	};

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
			subtitle: "Interaction With Thoughts...",
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
			subtitle: "Interaction With Thoughts...",
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
			subtitle: "Interaction With Thoughts...",
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
	]


	let chapters_ar = [
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
			subtitle: "Interaction With Thoughts...",
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
		},
		arabic: {
			chaps: chapters_ar
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
		about: {
			en: "About",
			fr: "About",
			ru: "About",
			ar: "حول الكتاب",
		},
		contribute: {
			en: "Contribute",
			fr: "Contribute",
			ru: "Contribute",
			ar: "ساعدنا",
		},
		"online-version": {
			en: "Online Version",
			fr: "Online Version",
			ru: "Online Version",
			ar: "النسخة الأونلاين",
		},
		"bruteforce-method": {
			en: "Bruteforce Method",
			fr: "Bruteforce Method",
			ru: "Bruteforce Method",
			ar: "الطريقة الغشيمة",
		},
		"check-neuroregen": {
			en: "Check out Neuroregen",
			fr: "Check out Neuroregen",
			ru: "Check out Neuroregen",
			ar: "القي نظرة على نيوروجين",
		},
		"neuroregen-info": {
			en: "Neuroregen is a project supporting burgeon that exists to support and discover neuroregenerative practices.",
			fr: "Neuroregen is a project supporting burgeon that exists to support and discover neuroregenerative practices.",
			ru: "Neuroregen is a project supporting burgeon that exists to support and discover neuroregenerative practices.",
			ar: "نيوروجين هو المشروع الداعم لهذا الكتاب، وهدفه هو إستكشاف وتدعيم النشاطات المعالجة للعقل",
		},
		chapter: {
			en: "Chapter",
			fr: "Chapitre",
			ru: "Глава",
			ar: "فصل",
		},
		"visit-chapter": {
			fr: "Aller Au Chapitre",
			en: "Visit Chapter",
			ru: "Посетить главу",
			ar: "اقرأ الفصل",
		},
		"visit-home": {
			en: "Visit Home",
			fr: "Visiter L'accueil",
			ru: "На главную",
			ar: "زيارة الصفحة الرئيسية",
		},
		"open-languages": {
			en: "Open Languages",
			fr: "Ouvrir Les Langues",
			ru: "Открыть настройки языков",
			ar: "افتح اللغات",
		},
		"open-settings": {
			en: "Open Settings",
			fr: "Ouvrir Les Paramètres",
			ru: "Открыть настройки",
			ar: "افتح الاعدادات",
		},
		theme: {
			en: "Theme",
			fr: "Thème",
			ru: "Тема",
			ar: "المظهر",
		},
		font: {
			en: "Font",
			fr: "Police",
			ru: "Шрифт",
			ar: "نوع الخط",
		},
		alignment: {
			en: "Alignment",
			fr: "Alignement",
			ru: "Ориентация",
			ar: "محاذاة النص",
		},
		settings: {
			en: "Settings",
			fr: "Paramètres",
			ru: "Настроки",
			ar: "الإعدادات",
		},
		languages: {
			en: "Languages",
			fr: "Langues",
			ru: "Языки",
			ar: "اللغات",
		},
		language: {
			en: "Language",
			fr: "Langue",
			ru: "Язык",
			ar: "لغة",
		},
		"download-the-book": {
			en: "Download the book (download options)",
			fr: "Télécharger le livre (option de téléchargement)",
			ru: "Скачать книгу (опции загрузки)",
			ar: "تحميل الكتاب (اختيارات التحميل)",
		},
		downloads: {
			en: "Downloads",
			fr: "Téléchargements",
			ru: "Скачать",
			ar: "التحميلات",
		},
		"doc-info": {
			en: "PDF is available through the printed copy. EPUB is best for mobile devices, and ZIP/MD is best for copying text from the book.",
			fr: "PDF is available through the printed copy. EPUB est le meilleur pour les appareils mobiles, et ZIP/MD est le meilleur pour copier le texte du livre.",
			ru: "PDF is available through the printed copy. EPUB лучше для мобильных устройств, а ZIP/MD лучше что бы копировать текст из книги.",
			ar: "نسخة الـ PDF متاحة عن طريق النسخة المطبوعة. نسخة الـ EPUB تفضل لأجهزة الموبايل ،  ونسخة الـ ZIP تفضل لنسخ النص من الكتاب.",
		},
		"description-p1": {
			en: "Freedom comes from understanding.",
			fr: "La liberté vient de la compréhension.",
			ru: "Свобода приходит из понимания.",
			ar: "الحرية تأتي من الفهم",
		},
		"description-p2": {
			en: "This is a book on semen retention and freedom from p*rn.",
			fr: "Un Livre pour se libérer du piège du porno et de la masturbation.",
			ru: "Книга которая поможет вам стать свободными от ловушки порно и мастурбации.",
			ar: "هذا الكتاب يتحدث عن الحفاظ على المني، والتــحـرر من الإبــاحيــة",
		},
		"read-the-book": {
			en: "Read the book",
			fr: "Lire le livre",
			ru: "Читать книгу",
			ar: "اقرأ الكتاب",
		},
		"physical-copy": {
			en: "Physical Copy",
			fr: "Copie physique",
			ru: "Физическая копия",
			ar: "النسخة الورقية",
		},
		donate: {
			en: "Donate",
			fr: "Faire un don",
			ru: "Пожертвовать",
			ar: "تبرع",
		},
		"donate-info": {
			en: "Donate to help out the project.",
			fr: "Faire un don pour aider le projet.",
			ru: "Пожертвовать на поддержание проекта.",
			ar: "تبرع لكي تساعد الكتاب.",
		},
		"physical-info": {
			en: "Print on demand. Discrete branding. No profit made on this. Use code THANKYOU20.",
			fr: "Impression à la demande. Marque discrète. Aucun profit n'est réalisé. Utilisez le code THANKYOU20.",
			ru: "Разрешается печатать. Проект не зарабатывает на материале. Используйте код THANKYOU20.",
			ar: "تطبع النسخة عند الطلب. هوية الكتاب مخفية. لا نقوم بكسب أي اموال. استخدم كود THANKYOU20",
		},
		"name-info": {
			en: "Burgeon means to grow.",
			fr: "Burgeon means to grow.",
			ru: "Burgeon means to grow.",
			ar: "Burgeon تعني النمو",
		},
		"audio-info": {
			en: "Some fitting audio. From Lil Darkie - Dreaming.",
			fr: "Un son adapté. De Lil Darkie - Dreaming.",
			ru: "Подходящая музыка. От Lil Darkie - Dreaming.",
			ar: "بعض الالحان المناسبة. من Lil Darkie - Dreaming",
		},
		"audio2-info": {
			en: "What I thought would be a nice outro. Song is by VilloVilduVeta - Längtan Får Vingar.",
			fr: "What I thought would be a nice outro. Song is by VilloVilduVeta - Längtan Får Vingar.",
			ru: "What I thought would be a nice outro. Song is by VilloVilduVeta - Längtan Får Vingar.",
			ar: "ما اظن انها خاتمة جيدة. الاغنيه هي VilloVilduVeta - Längtan Får Vingar ",
		},
		"mark-done": {
			en: "Mark Done",
			fr: "Marquer comme lu",
			ru: "Полный",
			ar: "تأكيد انهاء الفصل",
		},
		"next-chapter": {
			en: "Next Chapter",
			fr: "Chapitre suivant",
			ru: "Следующая глава",
			ar: "الفصل التالي",
		},
		completed: {
			en: "Completed",
			fr: "Terminé",
			ru: "Завершено",
			ar: "مــكتمــل",
		},
		resets: {
			en: "Resets all completed chapters",
			fr: "Réinitialiser tous les chapitres",
			ru: "Сбросить все пройденные главы",
			ar: "إعادة جميع الفصول المكتملة",
		},
		"donate-opn": {
			en: "Donate Via Opencollective",
			fr: "Faire un don via opencollective",
			ru: "Пожертвование через opencollective",
			ar: "قم بالتبرع من خلال Opencollective",
		},
		"mark-info": {
			en: "Mark the current chapter complete",
			fr: "Marquer le chapitre en cours comme étant terminé",
			ru: "Отметить данную главу завершенной",
			ar: "سجل الفصل الحالي على انه مٌكتمل",
		},
		menu: {
			en: "Menu",
			fr: "Menu",
			ru: "Меню",
			ar: "القائمة",
		},
		"choose-your-language": {
			en: "Translations are currently very limited. They will be done professionally, so please do not translate anything yourself.",
			fr: "Choississez votre langue.",
			ru: "Выберете язык.",
			ar: "اختر لغتك",
		},
		trol: {
			en: "Close (duh?)",
			fr: "Fermer (duh?)",
			ru: "Закрыть (мда?)",
			ar: "اغلق (هل انت احمق؟)",
		},
		gh: {
			en: "Visit project GitHub (source code)",
			fr: "Visiter le projet GitHub (code source)",
			ru: "Посестите проект на GitHub (исходный код)",
			ar: "قم بزيارة المشروع على Github (source code)",
		},
		"close-menu": {
			en: "Close Menu",
			fr: "Fermer le menu",
			ru: "Закрыть меню",
			ar: "اغلق القائمة",
		},
		"pdf-info": {
			en: "Standard Light Background PDF (Portable Document Format) file",
			fr: "Fichier PDF (Portable Document Format) standard à fond clair",
			ru: "Стандартный со светлым фоном PDF (Portable Document Format) файл",
			ar: "ملف PDF (Portable Document Format) طبيعية ذو خلفية بيضاء",
		},
		"epub-info": {
			en: "Standard EPUB (Electronic Publication) file. EPUB is good for mobile devices.",
			fr: "Fichier standard EPUB (publication électronique). EPUB est bon pour les appareils mobiles.",
			ru: "Стандартный EPUB (Electronic Publication) файл. EPUB хорошо работает для мобильных утройств.",
			ar: "ملف. جيد للأجهزة المحمولة EPUB ",
		},
		"epub-dark-info": {
			en: "Dark Background EPUB (Electronic Publication) file. EPUB is good for mobile devices.",
			fr: "Fichier EPUB (Electronic Publication) à fond noir. EPUB est bon pour les appareils mobiles.",
			ru: "Файл EPUB (Electronic Publication) с темным фоном. EPUB хорошо работает для мобильных устройств.",
			ar: "ملف EPUB (Electronic Publication) ذو خلفية غامقة. جيد للأجهزة المحمولة.",
		},
		"md-info": {
			en: "Merged markdown. Right click when you visit page to download.",
			fr: "Fusion de markdown. Cliquez à droite lorsque vous visitez la page pour télécharger.",
			ru: "Merged markdown. Нажмите правой кнопкой мыши по странице для скачивания.",
			ar: "Merged markdown. قم بالضغط يميناً عند زيارة الصفحة لتحملها.",
		},
		"zip-info": {
			en: "Zipped markdown files.",
			fr: "Fichiers markdown zippés.",
			ru: "Заархивированные markdown файлы.",
			ar: "ملفات الـ markdown مضغوطة",
		},
		"reset-all": {
			en: "Reset All",
			fr: "Effacer Tout",
			ru: "Сбросить все",
			ar: "إعادة كل شيء",
		},
		"hidden-section": {
			en: "Hidden Section",
			fr: "Partie Cachée",
			ru: "Скрытый раздел",
			ar: "الجزء المخفي",
		},
		"lang-disclaim": {
			en: "Visit translations tab in the book to change language.",
			fr: "Visitez l'onglet traductions dans le livre pour changer de langue.",
			ru: "Посетите вкладку переводов в книге, чтобы изменить язык.",
			ar: "قم بزيارة نافذة الترجمة لتغير لغة الكتاب.",
		},
		audiobook: {
			en: "Audiobook",
			fr: "Livre audio",
			ru: "Аудиокнига",
			ar: "النسخة الصوتية للكتاب",
		},
		"audiobook-info": {
			en: "Listen to the full audiobook.",
			fr: "Écouter le livre audio complet.",
			ru: "Слушайте полную аудиокнигу.",
			ar: "إستمع للكتاب بالأكمل على هيئة صوت",
		},
		stats: {
			en: "Stats",
			fr: "Stats",
			ru: "Stats",
			ar: "الإحصائيات",
		},
		"current-b-version": {
			en: "Current Book Version",
			fr: "Current Book Version",
			ru: "Current Book Version",
			ar: "نسخة الكتاب الحالية",
		},
		"translations-warning": {
			en: "Currently, translations for burgeon only include the site itself rather than the book.",
			fr: "Currently, translations for burgeon only include the site itself rather than the book.",
			ru: "Currently, translations for burgeon only include the site itself rather than the book.",
			ar: "حالياً, النسخ المترجمة للكتاب توجد في الويبسايت فقط, وليس الكتاب. ",
		},
		"checkout-writeups": {
			en: "Check Out My Writeups!",
			fr: "Check Out My Writeups!",
			ru: "Check Out My Writeups!",
			ar: "القي نظرة الى ما كتبته!",
		},
		"writeups-info": {
			en: "My dives into different topics on personal growth.",
			fr: "My dives into different topics on personal growth.",
			ru: "My dives into different topics on personal growth.",
			ar: "وجهة نظري لبعض المواضيع المختلفة المتعلقة بالنمو الشخصي",
		},
		"about-p1": {
			en: "Burgeon is a collection of ideas that hopes to solve problems brought about by good willed people who give bad advice. To create this book, I transcribed and paraphrased many different sources, and I organized them into a structure I found best fit. I realised that truth must be found individually. I want to give props to Naval Ravikant, Kapil Gupta MD, and Krishnamurti for giving me clarity on ideas around truth so I could implement them in this book.",
			fr: "Burgeon is a collection of ideas that hopes to solve problems brought about by good willed people who give bad advice. To create this book, I transcribed and paraphrased many different sources, and I organized them into a structure I found best fit. I realised that truth must be found individually. I want to give props to Naval Ravikant, Kapil Gupta MD, and Krishnamurti for giving me clarity on ideas around truth so I could implement them in this book.",
			ru: "Burgeon is a collection of ideas that hopes to solve problems brought about by good willed people who give bad advice. To create this book, I transcribed and paraphrased many different sources, and I organized them into a structure I found best fit. I realised that truth must be found individually. I want to give props to Naval Ravikant, Kapil Gupta MD, and Krishnamurti for giving me clarity on ideas around truth so I could implement them in this book.",
			ar: "برجيون عبارة عن مجموعة من الأفكار التي تأمل ان تحل بعض المشاكل التي يسببها أشخاصٌ ذو نوايا جيدة ولكن يعطون نصائح سيئة. لتأليف هذا الكتاب، قمت بتجميع وإعادة صيغة الكثير من المصادر، ووضعتها في تركيب قد رأيته الأنسب. استوعبتُ ان الحقيقية يجب ان يتم اكتشافها فردياً. اريد ان أقدم تحياتي لـ  نافال رافيكانت، كابيل جوبتا إم دي, و كريشنامروتي لإعطاهم بعض الوضوح حول الحقيقية, والذي جعلني قادراً على إضافتها في الكتاب.",
		},
		"about-p2": {
			en: "There are many factors to the current cycle most go through. The most annoying (for me) is that bad advice around quitting is already in the minds of readers, so you effectively have to remove two types of brainwashing.",
			fr: "There are many factors to the current cycle most go through. The most annoying (for me) is that bad advice around quitting is already in the minds of readers, so you effectively have to remove two types of brainwashing.",
			ru: "There are many factors to the current cycle most go through. The most annoying (for me) is that bad advice around quitting is already in the minds of readers, so you effectively have to remove two types of brainwashing.",
			ar: "يوجد العديد من العوامل للدوامة التي يخضوها الأغلبية. الجزء الأكثر ازعاجاً (بالنسبة لي) هو أن النصائح الفاسدة مرسخة في عقول القارئين، فيجب عليك التخلص من نوعين من غسل الدماغ"
		},
		"about-p3": {
			en: "Another thing is that bad habits do not exist in isolation. The reason for one majorly contributes to the others (similar instant pleasures). You can not sustainably fix a bad habit, in isolation, from other negative patterns. You have to dig up the root cause for all of them.",
			fr: "Another thing is that bad habits do not exist in isolation. The reason for one majorly contributes to the others (similar instant pleasures). You can not sustainably fix a bad habit, in isolation, from other negative patterns. You have to dig up the root cause for all of them.",
			ru: "Another thing is that bad habits do not exist in isolation. The reason for one majorly contributes to the others (similar instant pleasures). You can not sustainably fix a bad habit, in isolation, from other negative patterns. You have to dig up the root cause for all of them.",
			ar: "و شيء اخر هو ان العادات السيئة لا تتواجد بشكل منفرد. السبب الرئيسي لإحدى العادات يؤثر بشكل كبير على باقي العادات المتشابهة. لا يمكنك إصلاح عادة سيئة واحدة بمفردها بشكل مستمر. يجب عليك أن تجد جذر المشكلة وتتخلص منه كلياً"
		},
		"about-p4": {
			en: "A method of avoidance is purposely looking for edge cases and irrelevant exceptions. Defense mechanisms show themselves in sneaky ways.",
			fr: "A method of avoidance is purposely looking for edge cases and irrelevant exceptions. Defense mechanisms show themselves in sneaky ways.",
			ru: "A method of avoidance is purposely looking for edge cases and irrelevant exceptions. Defense mechanisms show themselves in sneaky ways.",
			ar: "أي طريقة مبنية على تفادي المشكلة تجعلك تبحث عن الحالات الخاصة او استثناءات غير مهمة. آليات الدفاع تظهر نفسها بطرق خبيثة"
		},
		"about-p5": {
			en: "If you are curious why I bothered to write this book, I wrote it for myself. Others being able to read it is a bonus.",
			fr: "If you are curious why I bothered to write this book, I wrote it for myself. Others being able to read it is a bonus.",
			ru: "If you are curious why I bothered to write this book, I wrote it for myself. Others being able to read it is a bonus.",
			ar: "إذا كنت تتسأل عن سبب كتابتي لهذا الكتاب، فقد كتبته لنفسي. مقدرة الاخرين على قرائته تُعتبر إضافة"
		},
		"contact-business": {
			en: "Contact (business)",
			fr: "Contact (business)",
			ru: "Contact (business)",
			ar: "التواصل (بيزنس)"
		},
		"about-the-project": {
			en: "About the project",
			fr: "About the project",
			ru: "About the project",
			ar: "حول المشروع"
		}
	};
	
	/*
	"": {
			en: "",
			fr: "",
			ru: "",
			ar: ""
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
		<About 
			translation_index={translation_index}
			language_info={languages[active_language]}
		/>
	</Route>

	<Route path="promo">
		<Promo />
	</Route>

	<Route path="/">
		<Home 
			translation_index={translation_index}
			language_info={languages[active_language]}
		/>
	</Route>

	<Route path="brute">
		<Brute 
			translation_index={translation_index}
			language_info={languages[active_language]}
		/>
	</Route>

	<Route path="physical_copy">
		<PhysicalCopies />
	</Route>

	<Route path="nootropics">
		<h3>Nootropics (Extra Section)</h3>
		<div class="cent-container"><p style="max-width:500px;">Nootropics can aid in speeding up dopaminergic recovery, but they will not take steps for you. Most are herbal copes, and are wastes of money. I have researched into nootropics thoroughly and these are likely the nootropics with the most potential to speed up the PMO recovery process. You should research these yourself if you are interested.</p></div>
		<div class="cent-container"><ul style="text-align:left; max-width:400px;">
		<ol>
			<li>Neboglamine: An incredibly promising nootropic with anti-hedonistic effects</li><br>
			<li>Low-Dose Naltrexone: An endorphin inhibitor</li><br>
			<li>NACET: A more potent version of NAC</li>
		</ol></ul>
		</div>
		<br>
		<hr style="width:75px;">
		<h2>Extra</h2>
		<div class="cent-container"><ul style="text-align:left; max-width:400px;">
			<ul>
				<li>Cortexin (Intranasal): A collection of peptides that aids fixing damage to the brain</li><br>
				<li>ALCAR: A lasting dopamine upregulator</li><br>
				<li>Bromantane: A lasting dopamine upregulator with T boosting effects</li>
			</ul></ul>
			</div>
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