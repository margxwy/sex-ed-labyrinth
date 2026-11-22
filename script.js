document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------
    // 1. 4 РІЗНІ РУКОПИСНІ ОВАЛИ З ІНДИВІДУАЛЬНИМИ НАХИЛАМИ
    // -----------------------------------------------------------
    const ovalVariants = [
        {
            d: 'M18,26 C12,11 46,4 88,5 C132,6 154,14 152,26 C150,38 116,44 74,43 C32,42 8,35 12,22 C15,12 42,7 72,7',
            tilt: -3.5
        },
        {
            d: 'M142,20 C145,9 114,4 76,5 C38,6 10,13 11,25 C12,37 44,43 84,42 C124,41 152,33 149,21 C147,14 128,9 106,8',
            tilt: 2.8
        },
        {
            d: 'M26,9 C56,3 112,4 142,13 C156,18 155,31 138,37 C112,45 48,45 20,36 C5,31 6,17 24,11 C40,6 68,5 94,6',
            tilt: -2.2
        },
        {
            d: 'M14,28 C10,15 38,5 80,4 C122,3 152,11 151,23 C150,35 120,44 78,43 C36,42 12,35 15,23 C17,16 34,11 56,9',
            tilt: 3.4
        }
    ];

    const normalizePage = (p) => {
        const clean = (p || '').split('?')[0].split('#')[0].split('/').pop().replace(/\.html$/i, '');
        return clean || 'index';
    };
    const currentPage = normalizePage(window.location.pathname);

    // Збираємо посилання навігації ТА кнопку мови
    const navItems = document.querySelectorAll('.desktop-nav a, .lang-btn');

    navItems.forEach((link, idx) => {
        link.classList.remove('active-link', 'active');

        if (link.tagName.toLowerCase() === 'a') {
            const linkPage = normalizePage(link.getAttribute('href'));
            const isCurrent = linkPage !== 'index' && linkPage !== 'advice' && linkPage === currentPage;
            if (isCurrent) link.classList.add('active-link');

            if (link.hasAttribute('data-i18n')) {
                const key = link.getAttribute('data-i18n');
                const span = document.createElement('span');
                span.setAttribute('data-i18n', key);
                span.innerHTML = link.innerHTML;
                link.removeAttribute('data-i18n');
                link.innerHTML = '';
                link.appendChild(span);
            }
        }

        if (!link.querySelector('.nav-oval-svg')) {
            const variant = ovalVariants[idx % ovalVariants.length];
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', 'nav-oval-svg');
            svg.setAttribute('viewBox', '0 0 162 48');
            svg.setAttribute('preserveAspectRatio', 'none');
            svg.style.transform = `rotate(${variant.tilt}deg)`;
            svg.style.transformOrigin = 'center';

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', variant.d);
            svg.appendChild(path);
            link.appendChild(svg);

            const len = Math.ceil(path.getTotalLength());
            path.style.strokeDasharray = `${len}`;

            const isCurrentLink = link.classList.contains('active-link');
            path.style.strokeDashoffset = isCurrentLink ? '0' : `${len}`;
        }
    });

    // -----------------------------------------------------------
    // 2. СПЛИВАЮЧЕ ВІКНО PSYCHOLOGIST'S ADVICE (НА БУДЬ-ЯКІЙ СТОРІНЦІ)
    // -----------------------------------------------------------
    const psychologistAdvices = {
        ENG: {
            title: 'Psychologist’s advice',
            list: [
                "It is always hard to say ‘no’ to your loved-ones. Especially when they try to convince you that you’re offending them or you make them hurt. However, it is important to remember about yourself and your personal boundaries. As we see through psychological experience, it usually ends badly when you try to forget about yourself in any kind of relationship. I am so glad that Anna stood for herself in the end. And you should remember that you have every right to protect your interests when you feel pushed into something or even violated. ‘No’ is a perfect weapon for it.",
                "Consent is not a one-time checkbox — it is an ongoing, enthusiastic dialogue. You have the full right to pause, change your mind, or stop at any moment, even if you agreed earlier. A partner who genuinely cares about you will always respect your pace without guilt-tripping.",
                "Healthy intimacy starts with honest communication outside the bedroom. Talking openly about what makes you feel safe, comfortable, or anxious builds real trust and prevents misunderstandings before difficult situations arise.",
                "Never measure your self-worth through someone else’s approval or pressure. True closeness never requires you to sacrifice your safety, health, or emotional comfort just to keep another person happy.",
                "If a situation leaves you feeling confused, pressured, or uncomfortable, trust your intuition. Reaching out to a trusted adult, friend, or specialist is a sign of strength, not weakness — you never have to carry heavy feelings alone."
            ]
        },
        UKR: {
            title: 'Порада психолога',
            list: [
                "Завжди важко сказати «ні» близьким людям. Особливо коли вони намагаються переконати тебе, що ти їх ображаєш або робиш їм боляче. Проте важливо пам’ятати про себе та свої особисті кордони. Як показує психологічний досвід, спроби забути про себе в будь-яких стосунках зазвичай закінчуються погано. Ти маєш повне право захищати власні інтереси, коли відчуваєш тиск або порушення твоїх меж. І слово «ні» — найкращий інструмент для цього.",
                "Згода — це не одноразова формальність, а живий і щирий діалог. Ти маєш повне право зупинитися, передумати або сказати «стоп» у будь-який момент, навіть якщо спершу погодився чи погодилася. Партнер, який по-справжньому поважає тебе, прийме це без образ і маніпуляцій.",
                "Здорова близькість починається з відкритої розмови про свої почуття, очікування та страхи. Коли ви спокійно обговорюєте, що для вас комфортно, а що — ні, у стосунках з’являється справжня довіра та безпека.",
                "Ніколи не вимірюй власну цінність схваленням інших людей. Справжня любов і дружба не вимагають від тебе жертвувати власним здоров’ям, безпекою чи емоційним спокоєм заради чужого бажання.",
                "Якщо після певної ситуації ти відчуваєш тривогу, розгубленість або тиск — довіряй своїм відчуттям. Звернутися по підтримку до близької людини або психолога — це прояв сили, а не слабкості."
            ]
        },
        EST: {
            title: 'Psühholoogi nõuanne',
            list: [
                "Lähedastele on alati raske öelda „ei“, eriti kui nad püüavad sind veenda, et teed neile sellega haiget. Siiski on oluline meeles pidada iseennast ja oma isiklikke piire. Sul on täielik õigus kaitsta oma huve, kui tunned survet — „ei“ on selleks parim vahend.",
                "Nõusolek ei ole ühekordne otsus, vaid pidev ja aus suhtlus. Sul on alati õigus peatuda või meelt muuta igal hetkel, ilma süütundeta.",
                "Tõeline lähedus ei nõua kunagi, et ohverdaksid oma turvalisuse või emotsionaalse heaolu teise inimese heaks."
            ]
        },
        RUM: {
            title: 'Sfatul psihologului',
            list: [
                "Este întotdeauna greu să spui „nu” celor dragi, mai ales când încearcă să te convingă că îi rănești. Totuși, este esențial să îți amintești de tine și de limitele tale personale. Ai tot dreptul să îți protejezi interesele atunci când simți presiune — „nu” este arma perfectă pentru asta.",
                "Consimțământul este un dialog continuu, nu o obligație. Ai dreptul să te oprești sau să te răzgândești în orice moment, fără vinovăție.",
                "Apropierea autentică nu îți cere niciodată să renunți la siguranța sau confortul tău emoțional."
            ]
        },
        LIT: {
            title: 'Psichologo patarimas',
            list: [
                "Visada sunku pasakyti „ne“ artimiems žmonėms, ypač kai jie bando įtikinti, kad juos įžeidi. Vis dėlto svarbu nepamiršti savęs ir savo asmeninių ribų. Turi visišką teisę ginti savo interesus, kai jauti spaudimą — „ne“ yra tam puikus įrankis.",
                "Sutikimas yra nuolatinis dialogas. Turi teisę sustoti ar persigalvoti bet kurią akimirką be jokios kaltės.",
                "Tikras artumas niekada nereikalauja aukoti savo saugumo ar emocinės ramybės."
            ]
        },
        ALB: {
            title: 'Këshilla e psikologut',
            list: [
                "Është gjithmonë e vështirë t'u thuash 'jo' njerëzve të dashur, sidomos kur përpiqen të të bindin se po i lëndon. Megjithatë, është e rëndësishme të kujtosh veten dhe kufijtë e tu personalë. Ke çdo të drejtë të mbrosh interesat e tua kur ndihesh nën presion.",
                "Pëlqimi është një dialog i vazhdueshëm. Ke të drejtë të ndalosh ose të ndërrosh mendje në çdo moment.",
                "Afërsia e vërtetë nuk kërkon kurrë që të sakrifikosh sigurinë apo qetësinë tënde emocionale."
            ]
        }
    };

    function createAdviceModal() {
        if (document.getElementById('advice-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'advice-modal';
        modal.className = 'advice-modal-overlay';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.innerHTML = `
            <div class="advice-modal-card">
                <div class="advice-modal-header">
                    <div class="advice-title-group">
                        <img src="photos/chat.svg" alt="" class="advice-pixel-icon">
                        <h3 class="advice-modal-title" id="advice-modal-title">Psychologist’s advice</h3>
                    </div>
                    <button type="button" class="advice-close-btn" id="advice-modal-close" aria-label="Close">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.5">
                            <path d="M4 4L20 20M20 4L4 20"/>
                        </svg>
                    </button>
                </div>
                <p class="advice-modal-body" id="advice-modal-text"></p>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
        document.getElementById('advice-modal-close')?.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }

    function openNextAdvice() {
        createAdviceModal();
        const lang = localStorage.getItem('selectedLang') || 'ENG';
        const pack = psychologistAdvices[lang] || psychologistAdvices.ENG;

        const lastIdx = parseInt(localStorage.getItem('lastAdviceIdx') ?? '-1', 10);
        const nextIdx = (isNaN(lastIdx) ? 0 : (lastIdx + 1)) % pack.list.length;
        localStorage.setItem('lastAdviceIdx', String(nextIdx));

        const titleEl = document.getElementById('advice-modal-title');
        const textEl = document.getElementById('advice-modal-text');
        if (titleEl) titleEl.textContent = pack.title;
        if (textEl) textEl.textContent = pack.list[nextIdx];

        document.getElementById('mobile-menu')?.classList.remove('active');
        document.getElementById('advice-modal')?.classList.add('active');
    }

    document.querySelectorAll('a[href*="advice"], [data-i18n="nav-advice"]').forEach(el => {
        const clickable = el.closest('a') || el;
        clickable.addEventListener('click', (e) => {
            e.preventDefault();
            openNextAdvice();
        });
    });

    // -----------------------------------------------------------
    // 3. ЄДИНИЙ ПЕРЕКЛАД УСІМА 6 МОВАМИ + МЕНЮ
    // -----------------------------------------------------------
    const mobileMenu = document.getElementById('mobile-menu');
    const langMenu = document.getElementById('lang-menu');

    document.getElementById('burger-btn')?.addEventListener('click', () => mobileMenu?.classList.add('active'));
    document.getElementById('close-mobile-menu')?.addEventListener('click', () => mobileMenu?.classList.remove('active'));
    document.getElementById('open-lang-desktop')?.addEventListener('click', () => langMenu?.classList.add('active'));
    document.getElementById('close-lang-menu')?.addEventListener('click', () => langMenu?.classList.remove('active'));

    const translations = {
        ENG: {
            'nav-about': 'About Project',
            'nav-authors': 'Authors',
            'nav-boundaries': 'Define your boundaries',
            'nav-advice': "Psychologist's Advice",
            'start-title': 'START',
            'tl-start': 'start the game',
            'tl-choose': 'choose your story',
            'title-part1': 'GO THROUGH<br>SEX STORIES',
            'title-part2': 'WHAT DID YOU<br>DO IN THEIR<br>PLACE?',
            'authors-title': 'AUTHORS',
            'mentors-title': 'Mentors',
            'boundaries-title': 'DEFINE YOUR<br>BOUNDARIES',
            'boundaries-desc': 'Our boundaries are our own and we all have the right to decide where they end and begin. Use this tool to explore what is acceptable to you, and what is unacceptable by dragging the provided text boxes into the column where you feel they best belong. You can also fill in the text box with additional descriptions of boundaries. Once you\'re done, you can download the final image as a PDF to your device.',
            'col-acceptable': 'ACCEPTABLE',
            'col-unacceptable': 'UNACCEPTABLE',
            'tag-1': 'initiating/having sex while or after<br>using alcohol/recreational drugs',
            'tag-2': 'sharing passwords with a partner',
            'tag-3': 'kissing in public',
            'tag-4': 'having unprotected sex',
            'tag-5': 'getting tested for STIs before sex<br>with a partner',
            'tag-6': 'sending nude photos',
            'tag-7': 'using sex toys with a partner',
            'tag-8': 'following sex work related<br>creators online',
            'tag-9': 'family or co-workers about my sex life',
            'tag-10': 'posting about the relationship publicly',
            'btn-save': 'SAVE PDF',
            'btn-share': 'SHARE',
            'modal-title': 'Create your boundaries',
            'modal-placeholder': 'Write your boundary',
            'modal-add': 'ADD',
            'about-heading': 'ABOUT PROJECT',
            'about-lead': 'Sex Ed. Labyrinth focuses on providing sexual education to young people 🫶 aged between <span class="purple-highlight">13-19 years old</span> in Estonia, Albania, Moldova, Ukraine, and Lithuania. The project aims to help teenagers prevent major mistakes in their first sexual experiences, show them how to create their own constitution regarding what other people are allowed and not allowed to do to them, and help them understand that they have their own rights and perspectives.',
            'about-p1': 'The project takes the form of an engaging game that provides comprehensive sexual education in a fun and interactive way. The game covers a range of topics, including safe sex practices, consent, and healthy relationships, and is designed to be accessible and engaging for young people.',
            'about-p2': 'The primary objectives of the project are to empower young people to make informed choices about their sexual health and wellbeing, promote healthy attitudes towards sex and relationships, and help young people understand that they have their own rights and perspectives. Through this project, we hope to equip young people with the knowledge and tools they need to navigate their sexual experiences safely and confidently, and to help them build healthy and fulfilling relationships.',
            'about-p3': 'We believe that this project will play an important role in promoting sexual education and wellbeing among young people coming from inclusive backgrounds in Estonia, Albania, Moldova, Ukraine, and Lithuania.',
            'stories-title': 'THEIR STORY',
    'story-1-title': "YOU DON'T LOVE ME!",
    'story-2-title': 'WHAT IF HE IS NOT<br>READY?',
    'story-3-title': 'THE STORY OF<br>SASHKO',
    'story-4-title': "KSENIA'S STORY",
    'story-5-title': 'THE STORY OF<br>HALYNA',
    'story-6-title': "NATALYA'S<br>VULNERABLE STORY",
    'story-7-title': "IRYNKA'S STORY",
    'story-8-title': 'THE STORY OF<br>DMYTRO',
    'story-9-title': "ALEXANDER'S STORY",
    'story-10-title': "MIRA'S TERRIBLE<br>STORY",
    'back-to-list': 'back to list',
    'btn-start-story': 'Start story',
    'back-to-story': 'back to story',
    'back-to-all-stories': 'Back to all stories',
        },
        EST: {
            'nav-about': 'Projektist',
            'nav-authors': 'Autorid',
            'nav-boundaries': 'Määra oma piirid',
            'nav-advice': 'Psühholoogi nõuanded',
            'start-title': 'START',
            'tl-start': 'alusta mängu',
            'tl-choose': 'vali oma lugu',
            'title-part1': 'LÄBI<br>SEKSILUGUSID',
            'title-part2': 'MIDA SINA<br>NENDE ASEMEL<br>TEEKSID?',
            'authors-title': 'AUTORID',
            'mentors-title': 'Mentorid',
            'boundaries-title': 'MÄÄRA OMA<br>PIIRID',
            'boundaries-desc': 'Meie piirid kuuluvad meile endile ja meil kõigil on õigus otsustada, kus need algavad ja lõpevad. Kasuta seda tööriista, et uurida, mis on sulle vastuvõetav ja mis vastuvõetamatu, lohistades tekstikastid sobivasse veergu. Saad ka ise piire juurde lisada ning tulemuse PDF-ina alla laadida.',
            'col-acceptable': 'VASTUVÕETAV',
            'col-unacceptable': 'VASTUVÕETAMATU',
            'tag-1': 'seksi alustamine või harrastamine<br>alkoholi/narkootikumide mõju all',
            'tag-2': 'paroolide jagamine partneriga',
            'tag-3': 'avalikus kohas suudlemine',
            'tag-4': 'kaitsmata seks',
            'tag-5': 'suguhaiguste testimine enne<br>partneriga seksimist',
            'tag-6': 'alastifotode saatmine',
            'tag-7': 'sekslelude kasutamine partneriga',
            'tag-8': 'seksitööga seotud sisuloojate<br>jälgimine veebis',
            'tag-9': 'pere või kolleegidega oma seksuaalelust rääkimine',
            'tag-10': 'suhtest avalikult postitamine',
            'btn-save': 'SALVESTA PDF',
            'btn-share': 'JAGA',
            'modal-title': 'Loo oma piirid',
            'modal-placeholder': 'Kirjuta oma piir',
            'modal-add': 'LISA',
            'about-heading': 'PROJEKTIST',
            'about-lead': 'Sex Ed. Labyrinth keskendub seksuaalhariduse pakkumisele noortele 🫶 vanuses <span class="purple-highlight">13–19 eluaastat</span> Eestis, Albaanias, Moldovas, Ukrainas ja Leedus. Projekti eesmärk on aidata teismelistel vältida suuri vigu esimestes seksuaalkogemustes ning mõista oma õigusi ja isiklikke piire.',
            'about-p1': 'Projekt on kaasahaarava mängu vormis, mis pakub põhjalikku seksuaalharidust lõbusal ja interaktiivsel viisil, käsitledes turvaseksi, nõusolekut ja terveid suhteid.',
            'about-p2': 'Projekti peamine eesmärk on anda noortele teadmised ja oskused teha teadlikke valikuid oma seksuaaltervise ja heaolu nimel ning kujundada turvalisi ja hoolivaid suhteid.',
            'about-p3': 'Usume, et sellel projektil on oluline roll noorte seksuaalhariduse ja heaolu edendamisel Eestis, Albaanias, Moldovas, Ukrainas ja Leedus.',
            'stories-title': 'NENDE LUGU',
    'story-1-title': 'SA EI ARMASTA<br>MIND!',
    'story-2-title': 'MIS SIIS, KUI TA<br>POLE VALMIS?',
    'story-3-title': 'SASHKO<br>LUGU',
    'story-4-title': 'KSENIA<br>LUGU',
    'story-5-title': 'HALYNA<br>LUGU',
    'story-6-title': 'NATALYA<br>HAAVATAV LUGU',
    'story-7-title': 'IRYNKA<br>LUGU',
    'story-8-title': 'DMYTRO<br>LUGU',
    'story-9-title': 'ALEXANDERI<br>LUGU',
    'story-10-title': 'MIRA<br>HIRMUS LUGU',
    'back-to-list': 'tagasi nimekirja',
    'btn-start-story': 'Alusta lugu',
    'back-to-story': 'tagasi loo juurde',
    'back-to-all-stories': 'Tagasi kõigi lugude juurde',
        },
        RUM: {
            'nav-about': 'Despre Proiect',
            'nav-authors': 'Autori',
            'nav-boundaries': 'Stabilește-ți limitele',
            'nav-advice': 'Sfatul Psihologului',
            'start-title': 'START',
            'tl-start': 'începe jocul',
            'tl-choose': 'alege-ți povestea',
            'title-part1': 'TRECI PRIN<br>POVEȘTI DESPRE SEX',
            'title-part2': 'CE AI FI<br>FĂCUT ÎN<br>LOCUL LOR?',
            'authors-title': 'AUTORI',
            'mentors-title': 'Mentori',
            'boundaries-title': 'STABILEȘTE-ȚI<br>LIMITELE',
            'boundaries-desc': 'Limitele noastre ne aparțin și cu toții avem dreptul să decidem unde încep și unde se termină. Folosește acest instrument pentru a explora ce este acceptabil și ce este inacceptabil pentru tine, trăgând casetele în zona potrivită. Poți adăuga propriile limite și poți descărca imaginea finală ca PDF.',
            'col-acceptable': 'ACCEPTABIL',
            'col-unacceptable': 'INACCEPTABIL',
            'tag-1': 'inițierea sau întreținerea relațiilor sexuale<br>sub influența alcoolului/drogurilor',
            'tag-2': 'împărtășirea parolelor cu partenerul',
            'tag-3': 'sărutul în public',
            'tag-4': 'sex neprotejat',
            'tag-5': 'testarea pentru ITS înainte de sex<br>cu un partener',
            'tag-6': 'trimiterea de fotografii nud',
            'tag-7': 'folosirea jucăriilor sexuale cu partenerul',
            'tag-8': 'urmărirea creatorilor de conținut<br>adult în mediul online',
            'tag-9': 'discuții cu familia sau colegii despre viața mea sexuală',
            'tag-10': 'postarea publică despre relație',
            'btn-save': 'SALVEAZĂ PDF',
            'btn-share': 'DISTRIBUIE',
            'modal-title': 'Creează-ți limitele',
            'modal-placeholder': 'Scrie limita ta',
            'modal-add': 'ADAUGĂ',
            'about-heading': 'DESPRE PROIECT',
            'about-lead': 'Sex Ed. Labyrinth se concentrează pe educația sexuală a tinerilor 🫶 cu vârste cuprinse între <span class="purple-highlight">13-19 ani</span> din Estonia, Albania, Moldova, Ucraina și Lituania, ajutându-i să își înțeleagă drepturile și limitele personale.',
            'about-p1': 'Proiectul are forma unui joc interactiv care oferă educație sexuală completă într-un mod accesibil, abordând sexul protejat, consimțământul și relațiile sănătoase.',
            'about-p2': 'Obiectivul principal este de a le oferi tinerilor cunoștințele necesare pentru a lua decizii informate privind sănătatea lor sexuală și de a construi relații sănătoase.',
            'about-p3': 'Credem că acest proiect va juca un rol important în promovarea educației sexuale și a bunăstării tinerilor din Estonia, Albania, Moldova, Ucraina și Lituania.',
        'stories-title': 'POVESTEA LOR',
    'story-1-title': 'NU MĂ<br>IUBEȘTI!',
    'story-2-title': 'CE DACĂ NU ESTE<br>PREGĂTIT?',
    'story-3-title': 'POVESTEA LUI<br>SASHKO',
    'story-4-title': 'POVESTEA KSENIEI',
    'story-5-title': 'POVESTEA HALYNEI',
    'story-6-title': 'POVESTEA VULNERABILĂ<br>A NATALIEI',
    'story-7-title': 'POVESTEA IRINKĂI',
    'story-8-title': 'POVESTEA LUI<br>DMYTRO',
    'story-9-title': 'POVESTEA LUI<br>ALEXANDER',
    'story-10-title': 'POVESTEA TERIBILĂ<br>A MIREI',
    'back-to-list': 'înapoi la listă',
    'btn-start-story': 'Începe povestea',
    'back-to-story': 'înapoi la poveste',
    'back-to-all-stories': 'Înapoi la toate poveștile',
        },
        LIT: {
            'nav-about': 'Apie Projektą',
            'nav-authors': 'Autoriai',
            'nav-boundaries': 'Nustatyk savo ribas',
            'nav-advice': 'Psichologo Patarimai',
            'start-title': 'STARTAS',
            'tl-start': 'pradėk žaidimą',
            'tl-choose': 'pasirink istoriją',
            'title-part1': 'PEREIK<br>SEKS ISTORIJAS',
            'title-part2': 'KĄ DARYTUM<br>JŲ VIETOJE?',
            'authors-title': 'AUTORIAI',
            'mentors-title': 'Mentoriai',
            'boundaries-title': 'NUSTATYK SAVO<br>RIBAS',
            'boundaries-desc': 'Mūsų ribos priklauso mums patiems ir kiekvienas turime teisę nuspręsti, kur jos prasideda ir baigiasi. Naudokite šį įrankį norėdami išsiaiškinti, kas jums priimtina, o kas nepriimtina, vilkdami korteles į atitinkamą pusę. Taip pat galite pridėti savo ribas ir atsisiųsti rezultatą PDF formatu.',
            'col-acceptable': 'PRIIMTINA',
            'col-unacceptable': 'NEPRIIMTINA',
            'tag-1': 'sekso inicijavimas ar turėjimas<br>vartojant alkoholį ar narkotikus',
            'tag-2': 'dalijimasis slaptažodžiais su partneriu',
            'tag-3': 'bučiavimasis viešumoje',
            'tag-4': 'nesaugus seksas',
            'tag-5': 'LPI tyrimai prieš lytinius santykius<br>su partneriu',
            'tag-6': 'nuogų nuotraukų siuntimas',
            'tag-7': 'sekso žaislų naudojimas su partneriu',
            'tag-8': 'su sekso darbu susijusių kūrėjų<br>sekimas internete',
            'tag-9': 'kalbėjimas su šeima ar kolegomis apie mano lytinį gyvenimą',
            'tag-10': 'viešas rašymas apie santykius',
            'btn-save': 'IŠSAUGOTI PDF',
            'btn-share': 'DALINTIS',
            'modal-title': 'Sukurk savo ribas',
            'modal-placeholder': 'Įrašykite savo ribą',
            'modal-add': 'PRIDĖTI',
            'about-heading': 'APIE PROJEKTĄ',
            'about-lead': 'Sex Ed. Labyrinth skirtas <span class="purple-highlight">13–19 metų</span> jaunimo lytiniam švietimui 🫶 Estijoje, Albanijoje, Moldovoje, Ukrainoje ir Lietuvoje, padedant suprasti savo teises ir asmenines ribas.',
            'about-p1': 'Projektas sukurtas kaip įtraukiantis interaktyvus žaidimas, kuriame patraukliai pristatomos saugaus sekso, sutikimo ir sveikų santykių temos.',
            'about-p2': 'Pagrindinis projekto tikslas – suteikti jaunimui žinių, padedančių priimti sąmoningus sprendimus dėl lytinės sveikatos ir kurti pagarbius santykius.',
            'about-p3': 'Tikime, kad šis projektas svariai prisidės prie jaunimo lytinio švietimo ir gerovės Estijoje, Albanijoje, Moldovoje, Ukrainoje ir Lietuvoje.',
        'stories-title': 'JŲ ISTORIJA',
    'story-1-title': 'TU MANĘS<br>NEMYLI!',
    'story-2-title': 'O JEI JIS<br>NEPASIRUOŠĘS?',
    'story-3-title': 'SAŠKO<br>ISTORIJA',
    'story-4-title': 'KSENIJOS<br>ISTORIJA',
    'story-5-title': 'HALYNOS<br>ISTORIJA',
    'story-6-title': 'PAŽEIDŽIAMA NATALIJOS<br>ISTORIJA',
    'story-7-title': 'IRINKOS<br>ISTORIJA',
    'story-8-title': 'DMYTRO<br>ISTORIJA',
    'story-9-title': 'ALEKSANDRO<br>ISTORIJA',
    'story-10-title': 'BOSI MIRA<br>ISTORIJA',
    'back-to-list': 'atgal į sąrašą',
    'btn-start-story': 'Pradėti istoriją',
    'back-to-story': 'atgal į istoriją',
    'back-to-all-stories': 'Atgal į visas istorijas',
        },
        UKR: {
            'nav-about': 'Про проєкт',
            'nav-authors': 'Автори',
            'nav-boundaries': 'Визнач свої кордони',
            'nav-advice': 'Поради психолога',
            'start-title': 'СТАРТ',
            'tl-start': 'почни гру',
            'tl-choose': 'обери історію',
            'title-part1': 'ПРОЙДИ<br>СЕКС ІСТОРІЇ',
            'title-part2': 'ЩО Б ТИ<br>ЗРОБИВ НА<br>ЇХ МІСЦІ?',
            'authors-title': 'АВТОРИ',
            'mentors-title': 'Ментори',
            'boundaries-title': 'ВИЗНАЧ СВОЇ<br>КОРДОНИ',
            'boundaries-desc': 'Наші кордони належать лише нам, і кожен має право вирішувати, де вони починаються і закінчуються. Використовуй цей інструмент, щоб дослідити, що для тебе прийнятно, а що — ні, перетягуючи картки у відповідну зону. Ти також можеш додати власні варіанти кордонів та зберегти результат у PDF.',
            'col-acceptable': 'ПРИЙНЯТНО',
            'col-unacceptable': 'НЕПРИЙНЯТНО',
            'tag-1': 'секс під час або після вживання<br>алкоголю чи рекреаційних речовин',
            'tag-2': 'ділитися паролями з партнером/кою',
            'tag-3': 'цілуватися на публіці',
            'tag-4': 'незахищений секс',
            'tag-5': 'здавати тести на ІПСШ перед сексом<br>із партнером/кою',
            'tag-6': 'надсилати інтимні фото',
            'tag-7': 'використання секс-іграшок із партнером/кою',
            'tag-8': 'підписуватися на секс-працівників/ць<br>у соцмережах',
            'tag-9': 'розповідати рідним чи колегам про моє сексуальне життя',
            'tag-10': 'публічно розповідати про стосунки',
            'btn-save': 'ЗБЕРЕГТИ PDF',
            'btn-share': 'ПОДІЛИТИСЯ',
            'modal-title': 'Створи свої кордони',
            'modal-placeholder': 'Напиши свій кордон',
            'modal-add': 'ДОДАТИ',
            'about-heading': 'ПРО ПРОЄКТ',
            'about-lead': 'Sex Ed. Labyrinth зосереджений на сексуальній освіті для молоді 🫶 віком <span class="purple-highlight">13–19 років</span> в Естонії, Албанії, Молдові, Україні та Литві. Проєкт допомагає підліткам уникнути серйозних помилок у першому сексуальному досвіді, навчитися створювати власні правила щодо того, що іншим дозволено чи не дозволено робити стосовно них, та усвідомити власні права і кордони.',
            'about-p1': 'Проєкт створено у форматі захопливої інтерактивної гри, яка у доступній та цікавій формі дає комплексні знання про сексуальну освіту: безпечний секс, усвідомлену згоду та здорові стосунки.',
            'about-p2': 'Головна мета проєкту — допомогти молодим людям робити свідомий вибір на користь свого сексуального здоров’я та добробуту, формувати здорове ставлення до інтимності й стосунків, а також розуміти власні права. Ми прагнемо дати підліткам знання та інструменти для безпечного і впевненого досвіду.',
            'about-p3': 'Ми віримо, що цей проєкт відіграє важливу роль у розвитку сексуальної освіти та добробуту молоді з інклюзивних спільнот в Естонії, Албанії, Молдові, Україні та Литві.',
        'stories-title': 'ЇХНІ ІСТОРІЇ',
    'story-1-title': 'ТИ МЕНЕ<br>НЕ ЛЮБИШ!',
    'story-2-title': 'А ЩО, ЯКЩО ВІН<br>НЕ ГОТОВИЙ?',
    'story-3-title': 'ІСТОРІЯ<br>САШКА',
    'story-4-title': 'ІСТОРІЯ<br>КСЕНІЇ',
    'story-5-title': 'ІСТОРІЯ<br>ГАЛИНИ',
    'story-6-title': 'ВРАЗЛИВА ІСТОРІЯ<br>НАТАЛІ',
    'story-7-title': 'ІСТОРІЯ<br>ІРИНКИ',
    'story-8-title': 'ІСТОРІЯ<br>ДМИТРА',
    'story-9-title': 'ІСТОРІЯ<br>ОЛЕКСАНДРА',
    'story-10-title': 'ЖАХЛИВА ІСТОРІЯ<br>МІРИ',
    'back-to-list': 'повернутися до списку',
    'back-to-all-stories': 'Повернутися до всіх історій',
    'back-to-story': 'повернутися до історії',
    'btn-start-story': 'Почати історію'
        },
        ALB: {
            'nav-about': 'Rreth Projektit',
            'nav-authors': 'Autorët',
            'nav-boundaries': 'Përcakto kufijtë e tu',
            'nav-advice': 'Këshilla e Psikologut',
            'start-title': 'START',
            'tl-start': 'fillo lojën',
            'tl-choose': 'zgjidh historinë',
            'title-part1': 'KALONI NËPËR<br>HISTORI SEKSUALE',
            'title-part2': 'ÇFARË DO TË<br>BËNIT NË<br>VENDIN E TYRE?',
            'authors-title': 'AUTORËT',
            'mentors-title': 'Mentorët',
            'boundaries-title': 'PËRCAKTO KUFIJTË<br>E TU',
            'boundaries-desc': 'Kufijtë tanë janë tanët dhe të gjithë kemi të drejtë të vendosim se ku fillojnë dhe ku mbarojnë ata. Përdor këtë mjet për të eksploruar se çfarë është e pranueshme dhe e papranueshme për ty, duke i tërhequr kutitë në kolonën përkatëse. Gjithashtu mund të shtosh kufij të rinj dhe ta shkarkosh imazhin si PDF.',
            'col-acceptable': 'E PRANUESHME',
            'col-unacceptable': 'E PAPRANUESHME',
            'tag-1': 'fillimi ose kryerja e seksit gjatë apo pas<br>përdorimit të alkoolit/drogave',
            'tag-2': 'ndarja e fjalëkalimeve me partnerin',
            'tag-3': 'puthja në publik',
            'tag-4': 'seks i pambrojtur',
            'tag-5': 'testimi për IST para seksit<br>me një partner',
            'tag-6': 'dërgimi i fotove nudo',
            'tag-7': 'përdorimi i lodrave seksuale me partnerin',
            'tag-8': 'ndjekja e krijuesve të punës seksuale<br>në internet',
            'tag-9': 'biseda me familjen ose kolegët për jetën time seksuale',
            'tag-10': 'postimi publik rreth lidhjes',
            'btn-save': 'RUAJ PDF',
            'btn-share': 'SHPËRNDAJ',
            'modal-title': 'Krijo kufijtë e tu',
            'modal-placeholder': 'Shkruaj kufirin tënd',
            'modal-add': 'SHTO',
            'about-heading': 'RRETH PROJEKTIT',
            'about-lead': 'Sex Ed. Labyrinth fokusohet në edukimin seksual për të rinjtë 🫶 e moshës <span class="purple-highlight">13-19 vjeç</span> në Estoni, Shqipëri, Moldavi, Ukrainë dhe Lituani, duke i ndihmuar të kuptojnë të drejtat dhe kufijtë e tyre personalë.',
            'about-p1': 'Projekti ka formën e një loje interaktive që ofron edukim seksual gjithëpërfshirës mbi praktikat e seksit të sigurt, pëlqimin dhe marrëdhëniet e shëndetshme.',
            'about-p2': 'Objektivi kryesor është t’u japë të rinjve njohuritë e nevojshme për të marrë vendime të informuara për shëndetin e tyre seksual dhe për të ndërtuar marrëdhënie të shëndetshme.',
            'about-p3': 'Besojmë se ky projekt do të luajë një rol të rëndësishëm në promovimin e edukimit seksual dhe mirëqenies së të rinjve në Estoni, Shqipëri, Moldavi, Ukrainë dhe Lituani.',
        'stories-title': 'HISTORIA E TYRE',
    'story-1-title': 'TI NUK MË<br>DO!',
    'story-2-title': 'PO SIKUR AI TË NUK ËSHTË<br>GATSHËM?',
    'story-3-title': 'HISTORIA E<br>SASHKOS',
    'story-4-title': 'HISTORIA E<br>KSENIAS',
    'story-5-title': 'HISTORIA E<br>HALYNAS',
    'story-6-title': 'HISTORIA E PREKSHME E<br>NATALYAS',
    'story-7-title': 'HISTORIA E<br>IRYNKAS',
    'story-8-title': 'HISTORIA E<br>DMYTROS',
    'story-9-title': 'HISTORIA E<br>ALEXANDERIT',
    'story-10-title': 'HISTORIA E FRIKSHME E<br>MIRAS',
    'back-to-list': 'kthehu te lista',
    'back-to-story': 'kthehu te historia',
    'back-to-all-stories': 'kthehu te të gjitha historitë',
    'btn-start-story': 'Fillo historinë'
        }
    };

 // 1. Оновлюємо підсвічування та ТЕКСТ у кнопці шапки
function syncLanguageButtons(langCode) {
    // Підсвічуємо активну мову в оверлеї мов
    document.querySelectorAll('.lang-list button, [data-lang]').forEach(btn => {
        const btnLang = btn.dataset.lang || btn.textContent.trim();
        btn.classList.toggle('active', btnLang === langCode);
    });

    // Змінюємо абревіатуру мови у кнопці в шапці (наприклад, з "ENG ▾" на "UKR ▾")
    const desktopLangText = document.querySelector('#open-lang-desktop .lang-text');
    if (desktopLangText) {
        desktopLangText.textContent = langCode;
    }
}

    // -----------------------------------------------------------
    // 4. ЛОГІКА СТОРІНКИ BOUNDARIES (DRAG & DROP + КАПСУЛА)
    // -----------------------------------------------------------
    const workspace = document.getElementById('main-workspace');
    const workspaceBg = document.getElementById('workspace-bg');
    const countLeft = document.getElementById('count-left');
    const countRight = document.getElementById('count-right');
    const countLeftMobile = document.getElementById('count-left-mobile');
    const countRightMobile = document.getElementById('count-right-mobile');

    let activeDragElement = null;
    let offsetX = 0;
    let offsetY = 0;
    let startClientX = 0;
    let startClientY = 0;
    let hasDragged = false;
    let prevLeftCount = null;
    let prevRightCount = null;

    function getCapsuleBounds(elWidth, elHeight) {
        const workspaceRect = workspace.getBoundingClientRect();
        const bgRect = workspaceBg.getBoundingClientRect();
        const isMobile = window.innerWidth <= 900;

        const baseMinLeft = bgRect.left - workspaceRect.left;
        const baseMaxLeft = bgRect.right - workspaceRect.left - elWidth;
        const baseMinTop = bgRect.top - workspaceRect.top;
        const baseMaxTop = bgRect.bottom - workspaceRect.top - elHeight;
        const pad = isMobile ? 12 : 16;

        return {
            minLeft: baseMinLeft + pad,
            maxLeft: Math.max(baseMinLeft + pad, baseMaxLeft - pad),
            minTop: baseMinTop + pad,
            maxTop: Math.max(baseMinTop + pad, baseMaxTop - pad),
            bgRect,
            workspaceRect,
            isMobile
        };
    }

    function clampToCapsuleGeometry(left, top, elWidth, elHeight) {
        const b = getCapsuleBounds(elWidth, elHeight);
        let clampedTop = Math.max(b.minTop, Math.min(b.maxTop, top));
        let clampedLeft = Math.max(b.minLeft, Math.min(b.maxLeft, left));

        if (!b.isMobile) {
            const R = b.bgRect.height / 2;
            const bgTopRel = b.bgRect.top - b.workspaceRect.top;
            const bgLeftRel = b.bgRect.left - b.workspaceRect.left;
            const bgRightRel = b.bgRect.right - b.workspaceRect.left;
            const centerY = bgTopRel + R;

            const dy = Math.max(Math.abs(clampedTop - centerY), Math.abs(clampedTop + elHeight - centerY));
            const innerR = Math.max(20, R - 14);
            if (dy < innerR) {
                const dx = Math.sqrt(innerR * innerR - dy * dy);
                const curveInset = innerR - dx;
                const curveMinLeft = bgLeftRel + 14 + curveInset;
                const curveMaxLeft = bgRightRel - 14 - curveInset - elWidth;
                if (curveMaxLeft > curveMinLeft) {
                    clampedLeft = Math.max(curveMinLeft, Math.min(curveMaxLeft, clampedLeft));
                }
            }
        }
        return { left: clampedLeft, top: clampedTop };
    }

    function clampElementInsideCapsule(el) {
        if (!workspace || !workspaceBg) return;
        const workspaceRect = workspace.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const pos = clampToCapsuleGeometry(
            elRect.left - workspaceRect.left,
            elRect.top - workspaceRect.top,
            el.offsetWidth,
            el.offsetHeight
        );
        el.style.left = `${pos.left}px`;
        el.style.top = `${pos.top}px`;
    }

    function updateBadgeIcons(el) {
        const isMobile = window.innerWidth <= 900;
        const leftBadge = el.querySelector('.edge-action.left');
        const rightBadge = el.querySelector('.edge-action.right');
        if (!leftBadge || !rightBadge) return;

        if (isMobile) {
            leftBadge.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`;
            rightBadge.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>`;
        } else {
            leftBadge.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`;
            rightBadge.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
        }
    }

    function triggerCountBump(el) {
        if (!el) return;
        el.classList.remove('count-bump');
        void el.offsetWidth;
        el.classList.add('count-bump');
        setTimeout(() => el.classList.remove('count-bump'), 320);
    }

    function updateCounts(animate = true) {
        if (!workspace) return;
        let leftCount = 0;
        let rightCount = 0;
        document.querySelectorAll('.drag-item').forEach(item => {
            if (item.style.display === 'none') return;
            if (item.dataset.zone === 'left') leftCount++;
            if (item.dataset.zone === 'right') rightCount++;
        });

        if (countLeft) countLeft.textContent = leftCount;
        if (countRight) countRight.textContent = rightCount;
        if (countLeftMobile) countLeftMobile.textContent = leftCount;
        if (countRightMobile) countRightMobile.textContent = rightCount;

        if (animate && prevLeftCount !== null && leftCount !== prevLeftCount) {
            triggerCountBump(countLeft);
            triggerCountBump(countLeftMobile);
        }
        if (animate && prevRightCount !== null && rightCount !== prevRightCount) {
            triggerCountBump(countRight);
            triggerCountBump(countRightMobile);
        }

        prevLeftCount = leftCount;
        prevRightCount = rightCount;
    }

    function updateTagColorAndZone(element) {
        if (!workspaceBg) return;
        const bgRect = workspaceBg.getBoundingClientRect();
        const elRect = element.getBoundingClientRect();
        const isMobile = window.innerWidth <= 900;

        let progress = isMobile
            ? ((elRect.top + elRect.height / 2) - bgRect.top) / bgRect.height
            : ((elRect.left + elRect.width / 2) - bgRect.left) / bgRect.width;
        progress = Math.max(0, Math.min(1, progress));

        const minMid = 0.24;
        const maxMid = 0.76;

        if (progress <= minMid) {
            element.dataset.zone = 'left';
            element.classList.remove('in-middle', 'is-selected');
            element.style.background = '#D1FF1C';
        } else if (progress >= maxMid) {
            element.dataset.zone = 'right';
            element.classList.remove('in-middle', 'is-selected');
            element.style.background = '#C1BEE2';
        } else {
            element.dataset.zone = 'center';
            element.classList.add('in-middle');
            const t = (progress - minMid) / (maxMid - minMid);
            const limeSolidEnd = Math.max(0, (1 - t) * 100 - 22);
            const lavenderSolidStart = Math.min(100, (1 - t) * 100 + 22);
            element.style.background = `linear-gradient(90deg, #D1FF1C ${limeSolidEnd.toFixed(1)}%, #C1BEE2 ${lavenderSolidStart.toFixed(1)}%)`;
        }
    }

    function moveTagToZone(el, targetZone) {
        const workspaceRect = workspace.getBoundingClientRect();
        const bgRect = workspaceBg.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const isMobile = window.innerWidth <= 900;

        let targetLeft = elRect.left - workspaceRect.left;
        let targetTop = elRect.top - workspaceRect.top;

        if (isMobile) {
            targetLeft = (bgRect.left - workspaceRect.left) + 20;
            targetTop = targetZone === 'left'
                ? (bgRect.top - workspaceRect.top) + 26
                : (bgRect.bottom - workspaceRect.top) - el.offsetHeight - 26;
        } else {
            targetLeft = targetZone === 'left'
                ? (bgRect.left - workspaceRect.left) + 55
                : (bgRect.right - workspaceRect.left) - el.offsetWidth - 55;
        }

        const clamped = clampToCapsuleGeometry(targetLeft, targetTop, el.offsetWidth, el.offsetHeight);
        el.classList.remove('is-selected');
        el.classList.add('auto-moving');
        el.style.left = `${clamped.left}px`;
        el.style.top = `${clamped.top}px`;

        const animStart = performance.now();
        function animateColor(now) {
            updateTagColorAndZone(el);
            updateCounts(true);
            if (now - animStart < 440) {
                requestAnimationFrame(animateColor);
            } else {
                el.classList.remove('auto-moving');
            }
        }
        requestAnimationFrame(animateColor);
    }

    function prepareTagStructure(el) {
        if (el.dataset.prepared) return;
        const originalHTML = el.innerHTML;
        el.innerHTML = `
            <button type="button" class="edge-action left" aria-label="Move to Acceptable"></button>
            <span class="tag-text">${originalHTML}</span>
            <button type="button" class="edge-action right" aria-label="Move to Unacceptable"></button>
        `;
        el.dataset.prepared = 'true';
        updateBadgeIcons(el);

        el.querySelector('.edge-action.left').addEventListener('click', (e) => {
            e.stopPropagation();
            moveTagToZone(el, 'left');
        });
        el.querySelector('.edge-action.right').addEventListener('click', (e) => {
            e.stopPropagation();
            moveTagToZone(el, 'right');
        });
    }

    function clearAllSelections(exceptEl = null) {
        document.querySelectorAll('.drag-item.is-selected').forEach(el => {
            if (el !== exceptEl) {
                el.classList.remove('is-selected');
                clampElementInsideCapsule(el);
            }
        });
    }

    if (workspace) {
        if (window.innerWidth <= 900) {
            const mobilePositions = {
                tag7: { top: '2.5%', left: '5%' },
                tag1: { top: '11.5%', left: '5%' },
                tag2: { top: '22%', left: '5%' },
                tag3: { top: '30.5%', left: '5%' },
                tag5: { top: '39%', left: '5%' },
                tag9: { top: '75%', left: '5%' },
                tag8: { top: '84.5%', left: '5%' },
                tag4: { display: 'none' },
                tag6: { display: 'none' },
                tag10: { display: 'none' }
            };
            Object.entries(mobilePositions).forEach(([id, pos]) => {
                const el = document.getElementById(id);
                if (!el) return;
                if (pos.display === 'none') el.style.display = 'none';
                else {
                    el.style.top = pos.top;
                    el.style.left = pos.left;
                }
            });
        }

        document.querySelectorAll('.drag-item').forEach(el => {
            prepareTagStructure(el);
            if (el.style.display !== 'none') {
                clampElementInsideCapsule(el);
                updateTagColorAndZone(el);
            }
        });
        updateCounts(false);

        const dragStart = (e) => {
            if (e.target.closest('.edge-action')) return;
            const targetItem = e.target.closest('.drag-item');
            if (!targetItem) {
                clearAllSelections();
                return;
            }
            e.preventDefault();
            window.getSelection?.().removeAllRanges();

            activeDragElement = targetItem;
            hasDragged = false;

            const workspaceRect = workspace.getBoundingClientRect();
            const itemRect = activeDragElement.getBoundingClientRect();
            if (activeDragElement.style.transform) {
                activeDragElement.style.left = `${itemRect.left - workspaceRect.left}px`;
                activeDragElement.style.top = `${itemRect.top - workspaceRect.top}px`;
                activeDragElement.style.transform = '';
            }

            startClientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            startClientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
            offsetX = startClientX - itemRect.left;
            offsetY = startClientY - itemRect.top;
        };

        const dragMove = (e) => {
            if (!activeDragElement) return;
            e.preventDefault();
            const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

            if (!hasDragged) {
                if (Math.hypot(clientX - startClientX, clientY - startClientY) < 4) return;
                hasDragged = true;
                clearAllSelections();
                activeDragElement.classList.add('dragging');
            }

            const workspaceRect = workspace.getBoundingClientRect();
            const clamped = clampToCapsuleGeometry(
                clientX - workspaceRect.left - offsetX,
                clientY - workspaceRect.top - offsetY,
                activeDragElement.offsetWidth,
                activeDragElement.offsetHeight
            );

            activeDragElement.style.left = `${clamped.left}px`;
            activeDragElement.style.top = `${clamped.top}px`;
            updateTagColorAndZone(activeDragElement);
            updateCounts(true);
        };

        const dragEnd = () => {
            if (!activeDragElement) return;
            if (!hasDragged) {
                if (activeDragElement.dataset.zone === 'center') {
                    const willSelect = !activeDragElement.classList.contains('is-selected');
                    clearAllSelections(activeDragElement);
                    activeDragElement.classList.toggle('is-selected', willSelect);
                    clampElementInsideCapsule(activeDragElement);
                } else {
                    clearAllSelections();
                }
            } else {
                activeDragElement.classList.remove('dragging');
                updateCounts(true);
            }
            activeDragElement = null;
            hasDragged = false;
        };

        workspace.addEventListener('mousedown', dragStart);
        window.addEventListener('mousemove', dragMove);
        window.addEventListener('mouseup', dragEnd);
        workspace.addEventListener('touchstart', dragStart, { passive: false });
        window.addEventListener('touchmove', dragMove, { passive: false });
        window.addEventListener('touchend', dragEnd);

        document.addEventListener('mousedown', (e) => {
            if (!e.target.closest('.drag-item')) clearAllSelections();
        });

        window.addEventListener('resize', () => {
            document.querySelectorAll('.drag-item').forEach(el => {
                if (el.style.display !== 'none') {
                    updateBadgeIcons(el);
                    clampElementInsideCapsule(el);
                    updateTagColorAndZone(el);
                }
            });
            updateCounts(false);
        });

        // Модальне вікно додавання власної межі
        const openModalBtn = document.getElementById('open-modal-btn');
        const closeModalBtn = document.getElementById('close-modal-btn');
        const modal = document.getElementById('add-boundary-modal');
        const addCustomBtn = document.getElementById('add-custom-boundary-btn');
        const customInput = document.getElementById('custom-boundary-input');
        const charCounter = document.getElementById('char-counter');

        const createCustomBoundary = () => {
            const text = customInput.value.trim();
            if (!text) return;

            const newTag = document.createElement('div');
            newTag.classList.add('drag-item', 'just-created');
            newTag.textContent = text;
            prepareTagStructure(newTag);
            workspace.appendChild(newTag);

            const workspaceRect = workspace.getBoundingClientRect();
            const bgRect = workspaceBg.getBoundingClientRect();
            const clamped = clampToCapsuleGeometry(
                (bgRect.left - workspaceRect.left) + (bgRect.width / 2) - (newTag.offsetWidth / 2),
                (bgRect.top - workspaceRect.top) + (bgRect.height / 2) - (newTag.offsetHeight / 2) - 52,
                newTag.offsetWidth,
                newTag.offsetHeight
            );
            newTag.style.left = `${clamped.left}px`;
            newTag.style.top = `${clamped.top}px`;

            updateTagColorAndZone(newTag);
            updateCounts(false);
            setTimeout(() => newTag.classList.remove('just-created'), 420);
            modal.classList.remove('active');
        };

        if (openModalBtn && modal) {
            openModalBtn.addEventListener('click', () => {
                modal.classList.add('active');
                customInput.value = '';
                charCounter.textContent = '0/250';
                setTimeout(() => customInput.focus(), 60);
            });
            closeModalBtn?.addEventListener('click', () => modal.classList.remove('active'));
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('active');
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('active')) modal.classList.remove('active');
            });
            customInput?.addEventListener('input', () => {
                charCounter.textContent = `${customInput.value.length}/250`;
            });
            customInput?.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    createCustomBoundary();
                }
            });
            addCustomBtn?.addEventListener('click', createCustomBoundary);
        }

        // SAVE PDF та SHARE
        document.getElementById('save-pdf-btn')?.addEventListener('click', () => window.print());
        const shareBtn = document.getElementById('share-btn');
        shareBtn?.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({ title: document.title, url: window.location.href });
                } catch (_) {}
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);
                const orig = shareBtn.textContent;
                shareBtn.textContent = 'COPIED!';
                setTimeout(() => { shareBtn.textContent = orig; }, 1500);
            }
        });
    }

 // -----------------------------------------------------------
    // 5. ЗАСТОСУВАННЯ МОВИ ДЛЯ ВСІХ СТОРІНОК
    // -----------------------------------------------------------
   
    // 1. Робимо об'єкт перекладів доступним глобально для story_game.js
    window.translations = translations;

    // 2. Єдина глобальна функція зміни мови
    window.changeLanguage = function(langCode) {
        if (!translations || !translations[langCode]) return;
        const texts = translations[langCode];

        localStorage.setItem('selectedLang', langCode);
        syncLanguageButtons(langCode);

        // Оновлюємо текст для всіх елементів з data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (texts[key]) {
                const textContainer = el.querySelector('.tag-text');
                if (textContainer) textContainer.innerHTML = texts[key];
                else el.innerHTML = texts[key];
            }
        });

        // Оновлюємо плейсхолдери
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (texts[key]) el.setAttribute('placeholder', texts[key]);
        });

        // Безпечна перевірка воркспейсу (лише для сторінки boundaries)
        const mainWorkspace = document.getElementById('main-workspace');
        if (mainWorkspace) {
            document.querySelectorAll('.drag-item').forEach(el => {
                if (el.style.display !== 'none' && typeof clampElementInsideCapsule === 'function') {
                    clampElementInsideCapsule(el);
                    updateTagColorAndZone(el);
                }
            });
            if (typeof updateCounts === 'function') updateCounts(false);
        }

        // Перезапускаємо рендер гри, якщо ми на сторінці story_game.html
        if (typeof window.renderGame === 'function') {
            window.renderGame();
        }
    };

    // Слухачі для кнопок вибору мови
    document.querySelectorAll('.lang-list button, [data-lang]').forEach(btn => {
        btn.addEventListener('click', function () {
            const selectedLang = this.dataset.lang || this.textContent.trim();
            window.changeLanguage(selectedLang);
            setTimeout(() => {
                langMenu?.classList.remove('active');
                mobileMenu?.classList.remove('active');
            }, 200);
        });
    });

    // Застосовуємо збережену мову при завантаженні
    const savedLang = localStorage.getItem('selectedLang') || 'ENG';
    if (translations[savedLang]) {
        window.changeLanguage(savedLang);
    }
});