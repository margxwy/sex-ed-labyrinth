// 1. Глобальна база сюжетів (доступна для всіх функцій)
const storyGameData = {
    '1': {
        photo: 'photos/story1-photo.png',
        titleKey: 'story-1-title',
        scenes: {
            ENG: { title: "YOU DON’T<br>LOVE ME!", text: "Makar feels pressured to move faster in the relationship than he is comfortable with. Maria says: 'If you loved me, you wouldn't hesitate.' What should Makar do?", choices: [{ text: "Talk openly about his boundaries and comfort level.", next: "end_good" }, { text: "Agree just to keep Maria happy.", next: "end_bad" }], end_good: "Makar explained how he felt. Maria listened, and they agreed to move at a pace comfortable for both. Safe & healthy decision!", end_bad: "Makar felt uncomfortable and regretful later. Personal boundaries should never be sacrificed to prove love." },
            UKR: { title: "ТИ МЕНЕ<br>НЕ ЛЮБИШ!", text: "Макар відчуває емоційний тиск у стосунках. Марія каже: 'Якби ти мене любив, ти б не вагався'. Що варто зробити Макару?", choices: [{ text: "Щиро поговорити про власні кордони та комфорт.", next: "end_good" }, { text: "Погодитися лише для того, щоб не засмучувати дівчину.", next: "end_bad" }], end_good: "Макар пояснив свої почуття. Марія вислухала його, і вони домовилися рухатися у комфортному темпі. Це здоровий вибір!", end_bad: "Макар почувався зніяковано і шкодував про це. Власні кордони ніколи не варто порушувати заради чужих примх." }
        }
    },
    '2': {
        photo: 'photos/story2-photo.png',
        titleKey: 'story-2-title',
        scenes: {
            ENG: { title: "WHAT IF HE IS NOT<br>READY?", text: "Her partner wants to take the next step, but she feels hesitant and unsure if she's ready. What is the best step?", choices: [{ text: "Express her hesitation directly without feeling guilty.", next: "end_good" }, { text: "Ignore her inner feeling and go along with it.", next: "end_bad" }], end_good: "Clear communication helped them build deeper trust. Taking things slow is totally valid!", end_bad: "Forcing yourself when not ready creates resentment and anxiety. Always honor your pace." },
            UKR: { title: "А ЩО, ЯКШО ВІН<br>НЕ ГОТОВИЙ?", text: "Її партнер хоче зробити наступний крок, але вона вагається і не впевнена, чи готова до цього. Яке рішення правильне?", choices: [{ text: "Прямо сказати про свої сумніви без відчуття провини.", next: "end_good" }, { text: "Проігнорувати відчуття і погодитися через силу.", next: "end_bad" }], end_good: "Чесна розмова зміцнила довіру. Рухатися у своєму темпі — абсолютно нормально та правильно!", end_bad: "Дії проти власної волі викликають тривогу та розчарування. Поважайте власну готовність." }
        },
    '3': {
        photo: 'photos/story3-photo.png',
        titleKey: 'story-2-title',
        scenes: {
            ENG: { title: "WHAT IF HE IS NOT<br>READY?", text: "Her partner wants to take the next step, but she feels hesitant and unsure if she's ready. What is the best step?", choices: [{ text: "Express her hesitation directly without feeling guilty.", next: "end_good" }, { text: "Ignore her inner feeling and go along with it.", next: "end_bad" }], end_good: "Clear communication helped them build deeper trust. Taking things slow is totally valid!", end_bad: "Forcing yourself when not ready creates resentment and anxiety. Always honor your pace." },
            UKR: { title: "А ЩО, ЯКШО ВІН<br>НЕ ГОТОВИЙ?", text: "Її партнер хоче зробити наступний крок, але вона вагається і не впевнена, чи готова до цього. Яке рішення правильне?", choices: [{ text: "Прямо сказати про свої сумніви без відчуття провини.", next: "end_good" }, { text: "Проігнорувати відчуття і погодитися через силу.", next: "end_bad" }], end_good: "Чесна розмова зміцнила довіру. Рухатися у своєму темпі — абсолютно нормально та правильно!", end_bad: "Дії проти власної волі викликають тривогу та розчарування. Поважайте власну готовність." }
        },
    '4': {
        photo: 'photos/story4-photo.png',
        titleKey: 'story-2-title',
        scenes: {
            ENG: { title: "WHAT IF HE IS NOT<br>READY?", text: "Her partner wants to take the next step, but she feels hesitant and unsure if she's ready. What is the best step?", choices: [{ text: "Express her hesitation directly without feeling guilty.", next: "end_good" }, { text: "Ignore her inner feeling and go along with it.", next: "end_bad" }], end_good: "Clear communication helped them build deeper trust. Taking things slow is totally valid!", end_bad: "Forcing yourself when not ready creates resentment and anxiety. Always honor your pace." },
            UKR: { title: "А ЩО, ЯКШО ВІН<br>НЕ ГОТОВИЙ?", text: "Її партнер хоче зробити наступний крок, але вона вагається і не впевнена, чи готова до цього. Яке рішення правильне?", choices: [{ text: "Прямо сказати про свої сумніви без відчуття провини.", next: "end_good" }, { text: "Проігнорувати відчуття і погодитися через силу.", next: "end_bad" }], end_good: "Чесна розмова зміцнила довіру. Рухатися у своєму темпі — абсолютно нормально та правильно!", end_bad: "Дії проти власної волі викликають тривогу та розчарування. Поважайте власну готовність." }
        },
    '5': {
        photo: 'photos/story5-photo.png',
        titleKey: 'story-2-title',
        scenes: {
            ENG: { title: "WHAT IF HE IS NOT<br>READY?", text: "Her partner wants to take the next step, but she feels hesitant and unsure if she's ready. What is the best step?", choices: [{ text: "Express her hesitation directly without feeling guilty.", next: "end_good" }, { text: "Ignore her inner feeling and go along with it.", next: "end_bad" }], end_good: "Clear communication helped them build deeper trust. Taking things slow is totally valid!", end_bad: "Forcing yourself when not ready creates resentment and anxiety. Always honor your pace." },
            UKR: { title: "А ЩО, ЯКШО ВІН<br>НЕ ГОТОВИЙ?", text: "Її партнер хоче зробити наступний крок, але вона вагається і не впевнена, чи готова до цього. Яке рішення правильне?", choices: [{ text: "Прямо сказати про свої сумніви без відчуття провини.", next: "end_good" }, { text: "Проігнорувати відчуття і погодитися через силу.", next: "end_bad" }], end_good: "Чесна розмова зміцнила довіру. Рухатися у своєму темпі — абсолютно нормально та правильно!", end_bad: "Дії проти власної волі викликають тривогу та розчарування. Поважайте власну готовність." }
        },
    '6': {
        photo: 'photos/story6-photo.png',
        titleKey: 'story-2-title',
        scenes: {
            ENG: { title: "WHAT IF HE IS NOT<br>READY?", text: "Her partner wants to take the next step, but she feels hesitant and unsure if she's ready. What is the best step?", choices: [{ text: "Express her hesitation directly without feeling guilty.", next: "end_good" }, { text: "Ignore her inner feeling and go along with it.", next: "end_bad" }], end_good: "Clear communication helped them build deeper trust. Taking things slow is totally valid!", end_bad: "Forcing yourself when not ready creates resentment and anxiety. Always honor your pace." },
            UKR: { title: "А ЩО, ЯКШО ВІН<br>НЕ ГОТОВИЙ?", text: "Її партнер хоче зробити наступний крок, але вона вагається і не впевнена, чи готова до цього. Яке рішення правильне?", choices: [{ text: "Прямо сказати про свої сумніви без відчуття провини.", next: "end_good" }, { text: "Проігнорувати відчуття і погодитися через силу.", next: "end_bad" }], end_good: "Чесна розмова зміцнила довіру. Рухатися у своєму темпі — абсолютно нормально та правильно!", end_bad: "Дії проти власної волі викликають тривогу та розчарування. Поважайте власну готовність." }
        }
    }
};

// 2. Глобальна функція рендеру гри
window.renderGame = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = urlParams.get('id') || '1';
    const currentLang = localStorage.getItem('selectedLang') || 'ENG';

    const story = storyGameData[storyId] || storyGameData['1'];
    const scene = story.scenes[currentLang] || story.scenes.ENG || story.scenes.UKR;

    // Оновлюємо посилання "back to story"
    const backLink = document.getElementById('back-to-preview-link');
    if (backLink) {
        backLink.href = `story.html?id=${storyId}`;
    }

    // Фотографія
    const photoEl = document.getElementById('play-character-img');
    if (photoEl) photoEl.src = story.photo;

    // Заголовок історії
    const titleEl = document.getElementById('play-story-title');
    if (titleEl) {
        titleEl.setAttribute('data-i18n', story.titleKey);
        if (window.translations && window.translations[currentLang] && window.translations[currentLang][story.titleKey]) {
            titleEl.innerHTML = window.translations[currentLang][story.titleKey];
        } else if (scene.title) {
            titleEl.innerHTML = scene.title;
        }
    }

    // Текст сцени
    const sceneTextEl = document.getElementById('play-story-scene');
    if (sceneTextEl) sceneTextEl.textContent = scene.text;

    // Кнопки варіантів дій
    const choicesContainer = document.getElementById('play-choices-container');
    if (choicesContainer) {
        choicesContainer.innerHTML = '';
        if (scene.choices) {
            scene.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'story-choice-btn';
                btn.textContent = choice.text;

                btn.addEventListener('click', () => {
                    // 1. Оновлюємо текст результату
                    sceneTextEl.textContent = scene[choice.next];

                    // 2. Витягуємо переклад для кнопки прямо тут
                    const langNow = localStorage.getItem('selectedLang') || 'ENG';
                    const backAllText = (window.translations && window.translations[langNow] && window.translations[langNow]['back-to-all-stories'])
                        ? window.translations[langNow]['back-to-all-stories']
                        : 'Back to all stories';

                    // 3. Малюємо чорну овально-салатову кнопку з вже перекладеним текстом
                    choicesContainer.innerHTML = `
                        <a href="stories.html" class="start-story-btn" style="margin-top: 10px;">
                            <span data-i18n="back-to-all-stories">${backAllText}</span>
                            <svg class="btn-arrow" width="46" height="12" viewBox="0 0 46 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6H44M44 6L39 1M44 6L39 11" stroke="#D1FF1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    `;
                });

                choicesContainer.appendChild(btn);
            });
        }
    }
}; // <-- ОЦЯ ДУЖКА БУЛА ВІДСУТНЯ

// 3. Запуск при завантаженні DOM
document.addEventListener('DOMContentLoaded', () => {
    window.renderGame();

    // Перемикання мови
    document.querySelectorAll('.lang-list button, [data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(window.renderGame, 50);
        });
    });
});
