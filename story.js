// 1. База даних історій усіма мовами
const storiesTranslations = {
    ENG: {
        "1": { title: "YOU DON’T<br>LOVE ME!", desc: "One day, Makar met a girl named Maria. She was smart, funny, and beautiful, and Makar was immediately smitten. They started talking and hanging out, and soon they became good friends. Makar enjoyed spending time with her and found himself looking forward to seeing her every day.", photo: "photos/story1-photo.png" },
        "2": { title: "WHAT IF HE IS NOT<br>READY?", desc: "A story about doubt, internal pressure, and communication in relationships when one partner feels unsure about stepping forward.", photo: "photos/story2-photo.png" },
        "3": { title: "THE STORY OF<br>SASHKO", desc: "Sashko faces an unexpected situation among his peers. Discover how he learns to speak up about his personal boundaries.", photo: "photos/story3-photo.png" },
        "4": { title: "KSENIA'S STORY", desc: "Ksenia navigates through emotional overload and finds out how important it is to express feelings honestly.", photo: "photos/story4-photo.png" },
        "5": { title: "THE STORY OF<br>HALYNA", desc: "Halyna shares her experience on dealing with expectations and discovering her authentic voice.", photo: "photos/story5-photo.png" },
        "6": { title: "NATALYA'S<br>VULNERABLE STORY", desc: "An open conversation about vulnerability, trust, and how taking off the mask changes everything.", photo: "photos/story6-photo.png" },
        "7": { title: "IRYNKA'S STORY", desc: "Irynka talks about personal space, friendships, and how to stay true to yourself.", photo: "photos/story7-photo.png" },
        "8": { title: "THE STORY OF<br>DMYTRO", desc: "Dmytro explores how myths and stereotypes affect personal decisions and self-esteem.", photo: "photos/story8-photo.png" },
        "9": { title: "ALEXANDER'S STORY", desc: "Alexander reflects on mutual respect and making informed choices in everyday situations.", photo: "photos/story9-photo.png" },
        "10": { title: "MIRA'S TERRIBLE<br>STORY", desc: "A powerful narrative on overcoming difficulties, seeking help, and finding support when needed most.", photo: "photos/story10-photo.png" }
    },
    UKR: {
        "1": { title: "ТИ МЕНЕ<br>НЕ ЛЮБИШ!", desc: "Одного дня Макар познайомився з дівчиною на ім'я Марія. Вона була розумною, веселою та красивою, і Макар одразу закохався. Вони почали спілкуватися і проводити час разом. Макару подобалося бути поруч із нею, і він щодня чекав на їхні зустрічі.", photo: "photos/story1-photo.png" },
        "2": { title: "А ЩО, ЯКШО ВІН<br>НЕ ГОТОВИЙ?", desc: "Історія про сумніви, внутрішній тиск та комунікацію у стосунках, коли один із партнерів вагається зробити наступний крок.", photo: "photos/story2-photo.png" },
        "3": { title: "ІСТОРІЯ<br>САШКА", desc: "Сашко стикається з неочікуваною ситуацією серед однолітків. Дізнайтеся, як він вчиться говорити про свої особисті кордони.", photo: "photos/story3-photo.png" },
        "4": { title: "ІСТОРІЯ<br>КСЕНІЇ", desc: "Ксенія проходить крізь емоційне перевантаження і відкриває для себе, наскільки важливо щиро висловлювати свої почуття.", photo: "photos/story4-photo.png" },
        "5": { title: "ІСТОРІЯ<br>ГАЛИНИ", desc: "Галина ділиться досвідом подолання чужих очікувань та пошуку власного автентичного голосу.", photo: "photos/story5-photo.png" },
        "6": { title: "ВРАЗЛИВА ІСТОРІЯ<br>НАТАЛІ", desc: "Відверта розмова про вразливість, довіру та те, як зняття маски змінює абсолютно все.", photo: "photos/story6-photo.png" },
        "7": { title: "ІСТОРІЯ<br>ІРИНКИ", desc: "Іринка розповідає про особистий простір, дружбу та збереження власного «я».", photo: "photos/story7-photo.png" },
        "8": { title: "ІСТОРІЯ<br>ДМИТРА", desc: "Дмитро досліджує, як міфи та стереотипи впливають на особисті рішення та самооцінку.", photo: "photos/story8-photo.png" },
        "9": { title: "ІСТОРІЯ<br>ОЛЕКСАНДРА", desc: "Олександр розмірковує про взаємоповагу та прийняття свідомих рішень у повсякденних ситуаціях.", photo: "photos/story9-photo.png" },
        "10": { title: "ЖАХЛИВА ІСТОРІЯ<br>МІРИ", desc: "Сильна розповідь про подолання труднощів, звернення по допомогу та пошук підтримки у найважчі моменти.", photo: "photos/story10-photo.png" }
    },
    EST: {
        "1": { title: "SA EI ARMASTA<br>MIND!", desc: "Ühel päeval kohtus Makar tüdrukuga nimega Maria. Ta oli tark, lõbus ja ilus ning Makar armus kohe. Nad hakkasid suhtlema ja aegamööda saavad headeks sõpradeks.", photo: "photos/story1-photo.png" },
        "2": { title: "MIS SIIS, KUI TA<br>POLE VALMIS?", desc: "Lugu kahtlustest, sisesurvest ja suhtlemisest suhetes, kui üks partner tunneb ebakindlust.", photo: "photos/story2-photo.png" },
        "3": { title: "SASHKO<br>LUGU", desc: "Sashko seisab silmitsi ootamatu olukorraga oma eakaaslaste seas. Avastage, kuidas ta õpib oma piiridest rääkima.", photo: "photos/story3-photo.png" },
        "4": { title: "KSENIA<br>LUGU", desc: "Ksenia tegeleb emotsionaalse ülekoormusega ja avastab, kui oluline on oma tundeid ausalt väljendada.", photo: "photos/story4-photo.png" },
        "5": { title: "HALYNA<br>LUGU", desc: "Halyna jagab oma kogemust ootustega toimetulekul ja oma autentse hääle leidmisel.", photo: "photos/story5-photo.png" },
        "6": { title: "NATALYA<br>HAAVATAV LUGU", desc: "Avameelne vestlus haavatavusest, usaldusest ja sellest, kuidas maski mahavõtmine kõike muudab.", photo: "photos/story6-photo.png" },
        "7": { title: "IRYNKA<br>LUGU", desc: "Irynka räägib isiklikust ruumist, sõprusest ja iseendale truks jäämisest.", photo: "photos/story7-photo.png" },
        "8": { title: "DMYTRO<br>LUGU", desc: "Dmytro uurib, kuidas müüdid ja stereotüübid mõjutavad isiklikke otsuseid ja enesehinnangut.", photo: "photos/story8-photo.png" },
        "9": { title: "ALEXANDERI<br>LUGU", desc: "Alexander mõtiskleb vastastikuse austuse ja teadlike valikute tegemise üle igapäevastes olukordades.", photo: "photos/story9-photo.png" },
        "10": { title: "MIRA<br>HIRMUS LUGU", desc: "Võimas jutustus raskuste ületamisest, abi otsimisest ja toe leidmisest.", photo: "photos/story10-photo.png" }
    },
    RUM: {
        "1": { title: "NU MĂ<br>IUBEȘTI!", desc: "Într-o zi, Makar a cunoscut o fată pe nume Maria. Era deșteaptă, amuzantă și frumoasă, iar Makar s-a îndrăgostit pe loc. Au început să vorbească și au devenit prieteni buni.", photo: "photos/story1-photo.png" },
        "2": { title: "CE DACĂ NU ESTE<br>PREGĂTIT?", desc: "O poveste despre îndoială, presiune internă și comunicare în relații când un partener nu este sigur.", photo: "photos/story2-photo.png" },
        "3": { title: "POVESTEA LUI<br>SASHKO", desc: "Sashko se confruntă cu o situație neașteptată. Descoperă cum învață să vorbească despre limitele sale.", photo: "photos/story3-photo.png" },
        "4": { title: "POVESTEA KSENIEI", desc: "Ksenia trece prin supraîncărcare emoțională și descoperă importanța exprimării sincere a sentimentelor.", photo: "photos/story4-photo.png" },
        "5": { title: "POVESTEA HALYNEI", desc: "Halyna își împărtășește experiența despre gestionarea așteptărilor și descoperirea propriei voci.", photo: "photos/story5-photo.png" },
        "6": { title: "POVESTEA VULNERABILĂ<br>A NATALIEI", desc: "O conversație deschisă despre vulnerabilitate, încredere și cum renunțarea la mască schimbă totul.", photo: "photos/story6-photo.png" },
        "7": { title: "POVESTEA IRINKĂI", desc: "Irynka vorbește despre spațiul personal, prietenie și cum să rămâi fidel ție însuți.", photo: "photos/story7-photo.png" },
        "8": { title: "POVESTEA LUI<br>DMYTRO", desc: "Dmytro explorează modul în care miturile și stereotipurile influențează deciziile personale.", photo: "photos/story8-photo.png" },
        "9": { title: "POVESTEA LUI<br>ALEXANDER", desc: "Alexander reflectează asupra respectului reciproc și deciziilor informate în situații de zi cu zi.", photo: "photos/story9-photo.png" },
        "10": { title: "POVESTEA TERIBILĂ<br>A MIREI", desc: "O narațiune puternică despre depășirea dificultăților, căutarea ajutorului și găsirea sprijinului.", photo: "photos/story10-photo.png" }
    },
    LIT: {
        "1": { title: "TU MANĘS<br>NEMYLI!", desc: "Vieną dieną Makaras sutiko merginą vardu Marija. Ji buvo protinga, linksma ir graži, ir Makaras iškart ją įsimylėjo. Jie pradėjo bendrauti ir greitai tapo gerais draugais.", photo: "photos/story1-photo.png" },
        "2": { title: "O JEI JIS<br>NEPASIRUOŠĘS?", desc: "Istorija apie abejones, vidinį spaudimą ir bendravimą santykiuose, kai vienas partneris abejoja.", photo: "photos/story2-photo.png" },
        "3": { title: "SAŠKO<br>ISTORIJA", desc: "Saško susiduria su netikėta situacija tarp bendraamžių. Sužinokite, kaip jis mokosi kalbėti apie savo ribas.", photo: "photos/story3-photo.png" },
        "4": { title: "KSENIJOS<br>ISTORIJA", desc: "Ksenija išgyvena emocinį perdegimą ir atranda, kaip svarbu atvirai reikšti savo jausmus.", photo: "photos/story4-photo.png" },
        "5": { title: "HALYNOS<br>ISTORIJA", desc: "Halyna dalijasi patirtimi apie lūkesčių valdymą ir savo tikrojo balso atradimą.", photo: "photos/story5-photo.png" },
        "6": { title: "PAŽEIDŽIAMA NATALIJOS<br>ISTORIJA", desc: "Atviras pokalbis apie pažeidžiamumą, pasitikėjimą ir tai, kaip kaukės nusiėmimas viską pakeičia.", photo: "photos/story6-photo.png" },
        "7": { title: "IRINKOS<br>ISTORIJA", desc: "Irinka kalba apie asmeninę erdvę, draugystę ir buvimą savimi.", photo: "photos/story7-photo.png" },
        "8": { title: "DMYTRO<br>ISTORIJA", desc: "Dmytro tiria, kaip mitai ir stereotipai daro įtaką asmeniniams sprendimams ir savivertei.", photo: "photos/story8-photo.png" },
        "9": { title: "ALEKSANDRO<br>ISTORIJA", desc: "Aleksandras mąsto apie abipusę pagarbą ir sąmoningus pasirinkimus kasdienėse situacijose.", photo: "photos/story9-photo.png" },
        "10": { title: "BOSI MIRA<br>ISTORIJA", desc: "Stiprus pasakojimas apie sunkumų įveikimą, pagalbos ieškojimą ir paramos radimą.", photo: "photos/story10-photo.png" }
    },
    ALB: {
        "1": { title: "TI NUK MË<br>DO!", desc: "Një ditë, Makari u takua me një vajzë të quajtur Maria. Ajo era e mençur, qesharake dhe e bukur, dhe Makari u dashurua menjëherë. Ata filluan të flisnin dhe shpejt u bënë miq të mirë.", photo: "photos/story1-photo.png" },
        "2": { title: "PO SIKUR AI TË NUK ËSHTË<br>GATSHËM?", desc: "Një histori rreth dyshimit, presionit të brendshëm dhe komunikimit në marrëdhënie.", photo: "photos/story2-photo.png" },
        "3": { title: "HISTORIA E<br>SASHKOS", desc: "Sashko përballet me një situatë të papritur. Zbuloni se si ai mëson të flasë për kufijtë e tij personalë.", photo: "photos/story3-photo.png" },
        "4": { title: "HISTORIA E<br>KSENIAS", desc: "Ksenia kalon nëpër mbingarkesë emocionale dhe zbulon se sa e rëndësishme është të shprehësh ndjenjat.", photo: "photos/story4-photo.png" },
        "5": { title: "HISTORIA E<br>HALYNAS", desc: "Halyna ndan përvojën e saj në trajtimin e pritshmërive dhe zbulimin e zërit të saj autentik.", photo: "photos/story5-photo.png" },
        "6": { title: "HISTORIA E PREKSHME E<br>NATALYAS", desc: "Një bisedë e hapur rreth ndjeshmërisë, besimit dhe se si heqja e maskës ndryshon gjithçka.", photo: "photos/story6-photo.png" },
        "7": { title: "HISTORIA E<br>IRYNKAS", desc: "Irynka flet për hapësirën personale, miqësinë dhe të qenit vetvetja.", photo: "photos/story7-photo.png" },
        "8": { title: "HISTORIA E<br>DMYTROS", desc: "Dmytro eksploron se si mitet dhe stereotipet ndikojnë në vendimet personale.", photo: "photos/story8-photo.png" },
        "9": { title: "HISTORIA E<br>ALEXANDERIT", desc: "Alexander reflekton mbi respektin reciproc dhe marrjen e vendimeve të informuara.", photo: "photos/story9-photo.png" },
        "10": { title: "HISTORIA E FRIKSHME E<br>MIRAS", desc: "Një rrëfim i fuqishëm për kapërcimin e vështirësive, kërkimin e ndihmës dhe gjetjen e mbështetjes.", photo: "photos/story10-photo.png" }
    }
};

// 2. Отримання ID історії з URL
function getStoryIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || "1";
}

// 3. Заповнення сторінки прев'ю відповідно до обраної мови
function loadStoryContent() {
    const storyId = getStoryIdFromUrl();
    const currentLang = localStorage.getItem('selectedLang') || 'ENG';
    
    const langPack = storiesTranslations[currentLang] || storiesTranslations.ENG;
    const story = langPack[storyId] || storiesTranslations.ENG[storyId];

    if (story) {
        document.title = `${story.title.replace(/<br\s*\/?>/gi, ' ')} — Sex Ed Labyrinth`;

        const titleEl = document.getElementById('story-title');
        const descEl = document.getElementById('story-desc');
        const photoEl = document.getElementById('story-photo');
        const gameBtn = document.getElementById('start-game-btn');

        if (titleEl) titleEl.innerHTML = story.title;
        if (descEl) descEl.textContent = story.desc;
        if (photoEl) {
            photoEl.src = story.photo;
            photoEl.alt = story.title.replace(/<br\s*\/?>/gi, ' ');
        }
        if (gameBtn) gameBtn.href = `story_game.html?id=${storyId}`;
    }
}

// Запуск завантаження після створення DOM
document.addEventListener('DOMContentLoaded', () => {
    loadStoryContent();

    // Слухаємо кліки перемикання мови, щоб відразу оновлювати вміст історії
    document.querySelectorAll('.lang-list button, [data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(loadStoryContent, 50);
        });
    });
});