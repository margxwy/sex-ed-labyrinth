const storyGameData = {
    '1': {
        photo: 'photos/story1-photo.png',
        titleKey: 'story-1-title',
        scenes: {
            ENG: {
                title: "YOU DON’T<br>LOVE ME!",
                text: "Makar feels pressured to move faster in the relationship than he is comfortable with. Maria says: 'If you loved me, you wouldn't hesitate.' What should Makar do?",
                choices: [
                    { text: "Talk openly about his boundaries and comfort level.", next: "end_good" },
                    { text: "Agree just to keep Maria happy.", next: "end_bad" }
                ],
                end_good: "Makar explained how he felt. Maria listened, and they agreed to move at a pace comfortable for both. Safe & healthy decision!",
                end_bad: "Makar felt uncomfortable and regretful later. Personal boundaries should never be sacrificed to prove love."
            },
            UKR: {
                title: "ТИ МЕНЕ<br>НЕ ЛЮБИШ!",
                text: "Макар відчуває емоційний тиск у стосунках. Марія каже: «Якби ти мене любив, ти б не вагався». Що варто зробити Макару?",
                choices: [
                    { text: "Щиро поговорити про власні кордони та комфорт.", next: "end_good" },
                    { text: "Погодитися лише для того, щоб не засмучувати дівчину.", next: "end_bad" }
                ],
                end_good: "Макар пояснив свої почуття. Марія вислухала його, і вони домовилися рухатися у комфортному темпі. Це здоровий вибір!",
                end_bad: "Макар почувався зніяковано і шкодував про це. Власні кордони ніколи не варто порушувати заради чужих примх."
            },
            EST: {
                title: "SA EI ARMASTA<br>MIND!",
                text: "Makar tunneb survet suhetes kiiremini edasi liikuda, kui ta on valmis. Maria ütleb: «Kui sa mind armastaksid, sa ei kõhkleks.» Mida peaks Makar tegema?",
                choices: [
                    { text: "Rääkida avameelselt oma piiridest ja mugavustundest.", next: "end_good" },
                    { text: "Nõustuda ainult selleks, et Mariat rõõmustada.", next: "end_bad" }
                ],
                end_good: "Makar selgitas oma tundeid. Maria kuulas teda ja nad leppisid kokku liikuda mõlemale sobivas tempos. Tervislik otsus!",
                end_bad: "Makar tundis end hiljem ebamugavalt ja kahetses. Isiklikke piire ei tohi kunagi ohverdada armastuse tõestamiseks."
            },
            RUM: {
                title: "NU MĂ<br>IUBEȘTI!",
                text: "Makar simte presiune să avanseze în relație mai repede decât se simte pregătit. Maria spune: «Dacă m-ai iubi, nu ai ezita.» Ce ar trebui să facă Makar?",
                choices: [
                    { text: "Să vorbească deschis despre limitele și confortul său.", next: "end_good" },
                    { text: "Să accepte doar pentru a o face pe Maria fericită.", next: "end_bad" }
                ],
                end_good: "Makar și-a explicat sentimentele. Maria l-a ascultat și au decis să meargă într-un ritm confortabil pentru amândoi. O decizie sănătoasă!",
                end_bad: "Makar s-a simțit inconfortabil și a regretat mai târziu. Limitele personale nu trebuie sacrificate pentru a dovedi iubirea."
            },
            LIT: {
                title: "TU MANĘS<br>NEMYLI!",
                text: "Makaras jaučia spaudimą santykiuose judėti greičiau, nei jam patogu. Marija sako: «Jei mane mylėtum, nedvejotum.» Ką turėtų daryti Makaras?",
                choices: [
                    { text: "Atvirai pasikalbėti apie savo ribas ir komfortą.", next: "end_good" },
                    { text: "Sutikti vien tam, kad Marija nenusimintų.", next: "end_bad" }
                ],
                end_good: "Makaras paaiškino savo jausmus. Marija jį išklausė ir jie susitarė judėti abiem patogiu tempu. Sveikas sprendimas!",
                end_bad: "Makaras vėliau jautėsi nepatogiai ir gailėjosi. Asmeninių ribų niekada nereikėtų aukoti vardan meilės įrodymo."
            },
            ALB: {
                title: "TI NUK MË<br>DO!",
                text: "Makari ndjen presion të ecë më shpejt në lidhje sesa ndihet rehat. Maria thotë: «Nëse do të më doje, nuk do të hezitoje.» Çfarë duhet të bëjë Makari?",
                choices: [
                    { text: "Të flasë hapur për kufijtë dhe nivelin e tij të rehatisë.", next: "end_good" },
                    { text: "Të pranojë vetëm për ta mbajtur Marian të lumtur.", next: "end_bad" }
                ],
                end_good: "Makari shpjegoi si ndihej. Maria e dëgjoi dhe ranë dakord të ecnin me një ritëm të rehatshëm për të dy. Vendim i shëndetshëm!",
                end_bad: "Makari u ndje i parehatshëm dhe u pendua më vonë. Kufijtë personalë nuk duhen sakrifikuar kurrë për të provuar dashurinë."
            }
        }
    },
    '2': {
        photo: 'photos/story2-photo.png',
        titleKey: 'story-2-title',
        scenes: {
            ENG: {
                title: "WHAT IF HE IS NOT<br>READY?",
                text: "Her partner wants to take the next step, but she feels hesitant and unsure if either of them is truly ready. What is the best step?",
                choices: [
                    { text: "Express her hesitation directly without feeling guilty.", next: "end_good" },
                    { text: "Ignore her inner feeling and go along with it.", next: "end_bad" }
                ],
                end_good: "Clear communication helped them build deeper trust. Taking things slow is totally valid!",
                end_bad: "Forcing yourself when not ready creates resentment and anxiety. Always honor your pace."
            },
            UKR: {
                title: "А ЩО, ЯКШО ВІН<br>НЕ ГОТОВИЙ?",
                text: "Її партнер хоче зробити наступний крок, але вона вагається і не впевнена, чи готові вони обоє. Яке рішення правильне?",
                choices: [
                    { text: "Прямо сказати про свої сумніви без відчуття провини.", next: "end_good" },
                    { text: "Проігнорувати відчуття і погодитися через силу.", next: "end_bad" }
                ],
                end_good: "Чесна розмова зміцнила довіру. Рухатися у своєму темпі — абсолютно нормально та правильно!",
                end_bad: "Дії проти власної волі викликають тривогу та розчарування. Поважайте власну готовність."
            },
            EST: {
                title: "MIS SIIS, KUI TA<br>POLE VALMIS?",
                text: "Tema partner soovib astuda järgmise sammu, kuid ta kõhkleb ega ole kindel, kas nad on valmis. Mis on parim samm?",
                choices: [
                    { text: "Väljendada oma kõhklusi otse ja ilma süütundeta.", next: "end_good" },
                    { text: "Eirata sisetunnet ja minna sellega kaasa.", next: "end_bad" }
                ],
                end_good: "Selge suhtlus aitas neil luua sügavamat usaldust. Aeglaselt liikumine on täiesti normaalne!",
                end_bad: "Enda sundimine, kui sa pole valmis, tekitab ärevust. Austa alati oma tempot."
            },
            RUM: {
                title: "CE DACĂ NU ESTE<br>PREGĂTIT?",
                text: "Partenerul ei vrea să facă următorul pas, dar ea ezită și nu este sigură dacă sunt pregătiți. Care este cel mai bun pas?",
                choices: [
                    { text: "Să își exprime ezitarea direct, fără a se simți vinovată.", next: "end_good" },
                    { text: "Să își ignore sentimentele și să accepte.", next: "end_bad" }
                ],
                end_good: "Comunicarea clară i-a ajutat să construiască o încredere mai profundă. Este complet normal să iei lucrurile încet!",
                end_bad: "A te forța când nu ești pregătit creează anxietate. Respectă-ți întotdeauna propriul ritm."
            },
            LIT: {
                title: "O JEI JIS<br>NEPASIRUOŠĘS?",
                text: "Jos partneris nori žengti kitą žingsnį, bet ji abejoja ir nėra tikra, ar jie pasiruošę. Koks žingsnis geriausias?",
                choices: [
                    { text: "Tiesiai išsakyti savo dvejones be kaltės jausmo.", next: "end_good" },
                    { text: "Ignoruoti vidinį jausmą ir sutikti per prievartą.", next: "end_bad" }
                ],
                end_good: "Aiškus bendravimas padėjo sukurti gilesnį pasitikėjimą. Neskubėti yra visiškai normalu!",
                end_bad: "Vertimas savęs, kai nesi pasiruošęs, sukelia nerimą. Visada gerbk savo tempą."
            },
            ALB: {
                title: "PO SIKUR AI TË NUK ËSHTË<br>GATSHËM?",
                text: "Partneri i saj dëshiron të hedhë hapin tjetër, por ajo heziton dhe nuk është e sigurt nëse janë gati. Cili është hapi më i mirë?",
                choices: [
                    { text: "Të shprehë hezitimin e saj drejtpërdrejt pa u ndier fajtore.", next: "end_good" },
                    { text: "Të injorojë ndjenjën e saj të brendshme dhe të pranojë.", next: "end_bad" }
                ],
                end_good: "Komunikimi i qartë i ndihmoi të ndërtonin besim më të thellë. T'i marrësh gjërat ngadalë është krejtësisht e vlefshme!",
                end_bad: "Të detyrosh veten kur nuk je gati krijon ankth. Respekto gjithmonë ritmin tënd."
            }
        }
    },
    '3': {
        photo: 'photos/story3-photo.png',
        titleKey: 'story-3-title',
        scenes: {
            ENG: {
                title: "THE STORY OF<br>SASHKO",
                text: "Friends dare Sashko to share private photos from his chat to prove he is 'cool' and part of the group. What should Sashko do?",
                choices: [
                    { text: "Refuse firmly and explain that privacy and respect matter.", next: "end_good" },
                    { text: "Show the photos just to avoid being mocked by peers.", next: "end_bad" }
                ],
                end_good: "Sashko stood his ground. True friends respected his integrity, and he protected someone else's trust.",
                end_bad: "Giving in to peer pressure broke someone's trust and left Sashko feeling ashamed. Real respect isn't bought by betraying others."
            },
            UKR: {
                title: "ІСТОРІЯ<br>САШКА",
                text: "Друзі беруть Сашка «на слабо», вимагаючи показати приватне листування та фото, щоб довести, що він «свій». Як вчинити Сашку?",
                choices: [
                    { text: "Твердо відмовити і пояснити, що повага до приватності важливіша.", next: "end_good" },
                    { text: "Показати фото, аби компанія не глузувала з нього.", next: "end_bad" }
                ],
                end_good: "Сашко відстояв свою позицію. Справжні друзі поважають принциповість, а чужа довіра залишилася захищеною.",
                end_bad: "Піддавшись тиску компанії, Сашко зрадив довіру людини й відчув сором. Повагу не здобувають через порушення чужих кордонів."
            },
            EST: {
                title: "SASHKO<br>LUGU",
                text: "Sõbrad õhutavad Sashkot jagama privaatseid fotosid, et tõestada, et ta on «lahe». Mida peaks Sashko tegema?",
                choices: [
                    { text: "Kindlalt keelduda ja selgitada, et privaatsus ja austus on olulised.", next: "end_good" },
                    { text: "Näidata fotosid, et vältida eakaaslaste pilkeid.", next: "end_bad" }
                ],
                end_good: "Sashko jäi endale kindlaks. Tõelised sõbrad austasid tema ausust ja ta kaitses teise inimese usaldust.",
                end_bad: "Sõprade survele järele andmine rikkus usalduse. Tõelist austust ei osteta teiste reetmisega."
            },
            RUM: {
                title: "POVESTEA LUI<br>SASHKO",
                text: "Prietenii îl provoacă pe Sashko să arate fotografii private pentru a dovedi că este «cool». Ce ar trebui să facă Sashko?",
                choices: [
                    { text: "Să refuze ferm și să explice că intimitatea și respectul contează.", next: "end_good" },
                    { text: "Să arate fotografiile pentru a nu fi ironizat de grup.", next: "end_bad" }
                ],
                end_good: "Sashko și-a susținut punctul de vedere. Adevărații prieteni i-au respectat integritatea, iar el a protejat încrederea cuiva.",
                end_bad: "Cedarea în fața presiunii grupului a distrus încrederea și i-a adus rușine lui Sashko. Respectul nu se câștigă trădând."
            },
            LIT: {
                title: "SAŠKO<br>ISTORIJA",
                text: "Draugai provokuoja Saško parodyti privačias nuotraukas, kad įrodytų, jog yra «kietas». Ką turėtų daryti Saško?",
                choices: [
                    { text: "Tvirtai atsisakyti ir paaiškinti, kad privatumas ir pagarba yra svarbūs.", next: "end_good" },
                    { text: "Parodyti nuotraukas, kad išvengtų bendraamžių patyčių.", next: "end_bad" }
                ],
                end_good: "Saško išlaikė savo poziciją. Tikri draugai gerbė jo sąžiningumą, o jis apsaugojo kito žmogaus pasitikėjimą.",
                end_bad: "Pasidavęs bendraamžių spaudimui, Saško sugriovė pasitikėjimą. Tikra pagarba neįgyjama išduodant kitus."
            },
            ALB: {
                title: "HISTORIA E<br>SASHKOS",
                text: "Miqtë e sfidojnë Sashkon të ndajë foto private për të treguar se është «cool». Çfarë duhet të bëjë Sashko?",
                choices: [
                    { text: "Të refuzojë prerazi dhe të shpjegojë se privatësia dhe respekti kanë rëndësi.", next: "end_good" },
                    { text: "Të tregojë fotot vetëm për të shmangur talljet e bashkëmoshatarëve.", next: "end_bad" }
                ],
                end_good: "Sashko mbajti qëndrimin e tij. Miqtë e vërtetë e respektuan integritetin e tij dhe ai mbrojti besimin e dikujt tjetër.",
                end_bad: "Dorëzimi ndaj presionit të grupit theu besimin. Respekti i vërtetë nuk blihet duke tradhtuar të tjerët."
            }
        }
    },
    '4': {
        photo: 'photos/story4-photo.png',
        titleKey: 'story-4-title',
        scenes: {
            ENG: {
                title: "KSENIA'S STORY",
                text: "Ksenia is exhausted from constantly solving everyone else's problems while hiding her own stress. A close friend asks how she is doing. What does she choose?",
                choices: [
                    { text: "Admit she is overwhelmed and ask for some quiet time.", next: "end_good" },
                    { text: "Smile, say 'I'm fine,' and take on even more tasks.", next: "end_bad" }
                ],
                end_good: "Being honest lifted a huge weight off Ksenia's shoulders. Her friend understood and offered genuine support.",
                end_bad: "Suppressing emotions led to complete burnout. Acknowledging your limits is a sign of strength, not weakness."
            },
            UKR: {
                title: "ІСТОРІЯ<br>КСЕНІЇ",
                text: "Ксенія виснажена через те, що постійно вирішує чужі проблеми, приховуючи власний стрес. Близька подруга запитує, як вона почувається. Що обере Ксенія?",
                choices: [
                    { text: "Чесно зізнатися у втомі та попросити трохи часу для відпочинку.", next: "end_good" },
                    { text: "Усміхнутися, сказати «все супер» і взяти на себе ще більше справ.", next: "end_bad" }
                ],
                end_good: "Щирість зняла величезний тягар із плечей Ксенії. Подруга зрозуміла її та запропонувала щиру підтримку.",
                end_bad: "Пригнічення емоцій призвело до сильного вигорання. Визнавати власні межі — це сила, а не слабкість."
            },
            EST: {
                title: "KSENIA<br>LUGU",
                text: "Ksenia on kurnatud teiste probleemide lahendamisest, varjates samal ajal oma stressi. Lähedane sõber küsib, kuidas tal läheb. Mida ta valib?",
                choices: [
                    { text: "Tunnistada, et ta on ülekoormatud, ja paluda aega puhkamiseks.", next: "end_good" },
                    { text: "Naeratada, öelda «kõik on hästi» ja võtta veelgi rohkem kohustusi.", next: "end_bad" }
                ],
                end_good: "Ausus võttis Ksenia õlgadelt suure koorma. Sõber mõistis teda ja pakkus siirast tuge.",
                end_bad: "Emotsioonide allasurumine viis läbipõlemiseni. Oma piiride tunnistamine on tugevuse märk."
            },
            RUM: {
                title: "POVESTEA KSENIEI",
                text: "Ksenia este epuizată rezolvând problemele tuturor, ascunzându-și propriul stres. O prietenă apropiată o întreabă cum se simte. Ce alege?",
                choices: [
                    { text: "Să recunoască că este copleșită și să ceară timp pentru odihnă.", next: "end_good" },
                    { text: "Să zâmbească, să spună «sunt bine» și să își asume și mai multe sarcini.", next: "end_bad" }
                ],
                end_good: "Sinceritatea i-a luat o greutate imensă de pe umeri. Prietena ei a înțeles și i-a oferit sprijin real.",
                end_bad: "Reprimarea emoțiilor a dus la epuizare totală. A-ți recunoaște limitele este un semn de putere."
            },
            LIT: {
                title: "KSENIJOS<br>ISTORIJA",
                text: "Ksenija išsekusi nuo nuolatinio kitų problemų sprendimo, slėpdama savo stresą. Artima draugė paklausia, kaip ji jaučiasi. Ką ji pasirenka?",
                choices: [
                    { text: "Pripažinti, kad yra pervargusi, ir paprašyti laiko poilsiui.", next: "end_good" },
                    { text: "Nusišypsoti, pasakyti «man viskas gerai» ir prisiimti dar daugiau darbų.", next: "end_bad" }
                ],
                end_good: "Atvirumas nuėmė didžiulę naštą nuo Ksenijos pečių. Draugė ją suprato ir pasiūlė nuoširdžią pagalbą.",
                end_bad: "Emocijų slopinimas privedė prie perdegimo. Savo ribų pripažinimas yra stiprybės ženklas."
            },
            ALB: {
                title: "HISTORIA E<br>KSENIAS",
                text: "Ksenia është e rraskapitur duke zgjidhur problemet e të tjerëve ndërsa fsheh stresin e saj. Një mikeshë e pyet si është. Çfarë zgjedh ajo?",
                choices: [
                    { text: "Të pranojë se është e mbingarkuar dhe të kërkojë pak kohë pushimi.", next: "end_good" },
                    { text: "Të buzëqeshë, të thotë «jam mirë» dhe të marrë përsipër më shumë detyra.", next: "end_bad" }
                ],
                end_good: "Të qenit e sinqertë i hoqi një barrë të madhe Ksenias. Mikesha e saj e kuptoi dhe i ofroi mbështetje.",
                end_bad: "Shtypja e emocioneve çoi në lodhje të plotë. Të pranosh kufijtë e tu është shenjë force."
            }
        }
    },
    '5': {
        photo: 'photos/story5-photo.png',
        titleKey: 'story-5-title',
        scenes: {
            ENG: {
                title: "THE STORY OF<br>HALYNA",
                text: "Everyone expects Halyna to follow a traditional path she doesn't want, making her feel invisible. How should she respond to family pressure?",
                choices: [
                    { text: "Calmly voice her own goals and values.", next: "end_good" },
                    { text: "Stay silent and live according to others' expectations.", next: "end_bad" }
                ],
                end_good: "Speaking her truth was scary at first, but Halyna finally felt authentic and respected for her honesty.",
                end_bad: "Living someone else's script left Halyna feeling disconnected from herself. Your voice deserves to be heard."
            },
            UKR: {
                title: "ІСТОРІЯ<br>ГАЛИНИ",
                text: "Оточення очікує від Галини рішень, яких вона сама не хоче, через що дівчина почувається невидимою. Як їй відреагувати на тиск очікувань?",
                choices: [
                    { text: "Спокійно озвучити власні цілі та цінності.", next: "end_good" },
                    { text: "Промовчати й жити за чужим сценарієм.", next: "end_bad" }
                ],
                end_good: "Сказати правду спочатку було страшно, але Галина нарешті відчула себе собою і здобула повагу до свого вибору.",
                end_bad: "Життя за чужими очікуваннями позбавило Галину радості. Твій власний голос має право звучати."
            },
            EST: {
                title: "HALYNA<br>LUGU",
                text: "Kõik ootavad, et Halyna järgiks teed, mida ta ei soovi. Kuidas peaks ta vastama ootuste survele?",
                choices: [
                    { text: "Rahulikult väljendada oma eesmärke ja väärtusi.", next: "end_good" },
                    { text: "Vaikida ja elada teiste ootuste järgi.", next: "end_bad" }
                ],
                end_good: "Oma tõe rääkimine oli algul hirmutav, kuid Halyna tundis end lõpuks ehtsana ja austatuna.",
                end_bad: "Teiste stsenaariumi järgi elamine tekitas tühjustunde. Sinu hääl väärib kuulamist."
            },
            RUM: {
                title: "POVESTEA HALYNEI",
                text: "Toată lumea se așteaptă ca Halyna să urmeze o cale pe care nu și-o dorește. Cum ar trebui să răspundă presiunii?",
                choices: [
                    { text: "Să își exprime calm propriile obiective și valori.", next: "end_good" },
                    { text: "Să tacă și să trăiască după așteptările altora.", next: "end_bad" }
                ],
                end_good: "Să-și spună adevărul a fost greu la început, dar Halyna s-a simțit în sfârșit autentică și respectată.",
                end_bad: "A trăi după scenariul altcuiva a făcut-o să se simtă pierdută. Vocea ta merită auzită."
            },
            LIT: {
                title: "HALYNOS<br>ISTORIJA",
                text: "Visi tikisi, kad Halyna eis keliu, kurio ji nenori. Kaip ji turėtų reaguoti į aplinkinių lūkesčių spaudimą?",
                choices: [
                    { text: "Ramiai išsakyti savo tikslus ir vertybes.", next: "end_good" },
                    { text: "Patylėti ir gyventi pagal kitų lūkesčius.", next: "end_bad" }
                ],
                end_good: "Išsakyti savo tiesą iš pradžių buvo baisu, bet Halyna pagaliau pasijuto savimi ir pelnė pagarbą.",
                end_bad: "Gyvenimas pagal svetimą scenarijų atėmė džiaugsmą. Tavo balsas nusipelno būti išgirstas."
            },
            ALB: {
                title: "HISTORIA E<br>HALYNAS",
                text: "Të gjithë presin që Halyna të ndjekë një rrugë që ajo nuk e dëshiron. Si duhet t'i përgjigjet presionit?",
                choices: [
                    { text: "Të shprehë me qetësi qëllimet dhe vlerat e saj.", next: "end_good" },
                    { text: "Të heshtë dhe të jetojë sipas pritshmërive të të tjerëve.", next: "end_bad" }
                ],
                end_good: "Të thoshte të vërtetën ishte e frikshme në fillim, por Halyna më në fund u ndje autentike dhe e respektuar.",
                end_bad: "Të jetosh sipas skenarit të dikujt tjetër e bëri të ndihej e shkëputur nga vetja. Zëri yt meriton të dëgjohet."
            }
        }
    },
    '6': {
        photo: 'photos/story6-photo.png',
        titleKey: 'story-6-title',
        scenes: {
            ENG: {
                title: "NATALYA'S<br>VULNERABLE STORY",
                text: "Natalya always wears a 'strong and carefree' mask, afraid that showing fear or insecurity will push her partner away. What happens when a sensitive topic comes up?",
                choices: [
                    { text: "Take off the mask and share her true fears openly.", next: "end_good" },
                    { text: "Joke it off and pretend nothing bothers her.", next: "end_bad" }
                ],
                end_good: "Her partner appreciated her honesty, creating genuine emotional intimacy. Vulnerability builds real trust.",
                end_bad: "Hiding behind a mask kept the relationship superficial and lonely. True closeness requires openness."
            },
            UKR: {
                title: "ВРАЗЛИВА ІСТОРІЯ<br>НАТАЛІ",
                text: "Наталя завжди носить маску «сильної та безтурботної», боячись, що щирість і страхи відштовхнуть партнера. Як вона вчинить у відвертій розмові?",
                choices: [
                    { text: "Зняти маску і відкрито поділитися своїми переживаннями.", next: "end_good" },
                    { text: "Віджартуватися і вдати, що її нічого не хвилює.", next: "end_bad" }
                ],
                end_good: "Партнер оцінив її щирість, і між ними виникла справжня близькість. Вразливість народжує глибоку довіру.",
                end_bad: "Маска залишила стосунки поверхневими та самотніми. Справжня близькість неможлива без відкритості."
            },
            EST: {
                title: "NATALYA<br>HAAVATAV LUGU",
                text: "Natalya kannab alati «tugeva» maski, kartes, et hirmude näitamine peletab partneri eemale. Mida ta teeb tundlikul teemal rääkides?",
                choices: [
                    { text: "Võtta mask eest ja jagada avameelselt oma tõelisi hirme.", next: "end_good" },
                    { text: "Teha nalja ja teeselda, et miski teda ei häiri.", next: "end_bad" }
                ],
                end_good: "Partner hindas tema ausust, luues tõelise läheduse. Haavatavus loob usaldust.",
                end_bad: "Maski taha peitumine jättis suhte pealiskaudseks. Tõeline lähedus nõuab avatust."
            },
            RUM: {
                title: "POVESTEA VULNERABILĂ<br>A NATALIEI",
                text: "Natalya poartă mereu o mască de om «puternic», temându-se că vulnerabilitatea îl va îndepărta pe partener. Ce face când apare un subiect sensibil?",
                choices: [
                    { text: "Să renunțe la mască și să își împărtășească deschis temerile.", next: "end_good" },
                    { text: "Să glumească și să se prefacă că nimic nu o deranjează.", next: "end_bad" }
                ],
                end_good: "Partenerul i-a apreciat sinceritatea, creând o intimitate emoțională autentică. Vulnerabilitatea construiește încredere.",
                end_bad: "Ascunderea în spatele unei măști a menținut relația superficială. Apropierea reală cere deschidere."
            },
            LIT: {
                title: "PAŽEIDŽIAMA NATALIJOS<br>ISTORIJA",
                text: "Natalija visada dėvi «stiprios» kaukę, bijodama, kad baimių parodymas atstums partnerį. Ką ji daro iškilus jautriai temai?",
                choices: [
                    { text: "Nusiimti kaukę ir atvirai pasidalyti savo tikrosiomis baimėmis.", next: "end_good" },
                    { text: "Nuleisti juokais ir apsimesti, kad niekas jos netrikdo.", next: "end_bad" }
                ],
                end_good: "Partneris įvertino jos nuoširdumą, todėl užsimezgė tikras artumas. Pažeidžiamumas kuria pasitikėjimą.",
                end_bad: "Slėpimasis po kauke paliko santykius paviršutiniškus. Tikram artumui reikia atvirumo."
            },
            ALB: {
                title: "HISTORIA E PREKSHME E<br>NATALYAS",
                text: "Natalya mban gjithmonë një maskë «të fortë», nga frika se shfaqja e frikës do ta largojë partnerin. Çfarë bën ajo kur hapet një temë e ndjeshme?",
                choices: [
                    { text: "Të heqë maskën dhe të ndajë hapur frikërat e saj të vërteta.", next: "end_good" },
                    { text: "Ta kalojë me shaka dhe të shtiret sikur asgjë nuk e shqetëson.", next: "end_bad" }
                ],
                end_good: "Partneri e vlerësoi sinqeritetin e saj, duke krijuar afërsi të vërtetë. Ndjeshmëria ndërton besim.",
                end_bad: "Fshehja pas maskës e mbajti lidhjen sipërfaqësore. Afërsia e vërtetë kërkon sinqeritet."
            }
        }
    },
    '7': {
        photo: 'photos/story7-photo.png',
        titleKey: 'story-7-title',
        scenes: {
            ENG: {
                title: "IRYNKA'S STORY",
                text: "Irynka's close friend insists on knowing her phone passwords and reading all her messages 'because best friends have no secrets.' How should Irynka react?",
                choices: [
                    { text: "Explain kindly that healthy friendship still needs personal space.", next: "end_good" },
                    { text: "Hand over the passwords so her friend won't get offended.", next: "end_bad" }
                ],
                end_good: "Irynka protected her personal space while staying kind. Healthy friendships thrive on mutual trust, not control.",
                end_bad: "Giving up privacy created tension and discomfort. Even the closest friendships need healthy boundaries."
            },
            UKR: {
                title: "ІСТОРІЯ<br>ІРИНКИ",
                text: "Близька подруга Іринки наполягає на тому, щоб знати паролі від її телефону й читати всі повідомлення, бо «між найкращими друзями немає секретів». Як відреагувати Іринці?",
                choices: [
                    { text: "Доброзичливо пояснити, що навіть у міцній дружбі потрібен особистий простір.", next: "end_good" },
                    { text: "Дати паролі, аби подруга раптом не образилася.", next: "end_bad" }
                ],
                end_good: "Іринка зберегла особистий простір і залишилася доброзичливою. Здорова дружба тримається на довірі, а не на контролі.",
                end_bad: "Відмова від приватності викликала дискомфорт і напругу. Навіть найближчим друзям потрібні здорові кордони."
            },
            EST: {
                title: "IRYNKA<br>LUGU",
                text: "Irynka lähedane sõber nõuab tema telefoni paroole, sest «parimatel sõpradel pole saladusi». Kuidas peaks Irynka reageerima?",
                choices: [
                    { text: "Selgitada lahkelt, et ka heas sõpruses on vaja isiklikku ruumi.", next: "end_good" },
                    { text: "Anda paroolid, et sõber ei solvuks.", next: "end_bad" }
                ],
                end_good: "Irynka kaitses oma isiklikku ruumi. Tervislik sõprus põhineb usaldusel, mitte kontrollil.",
                end_bad: "Privaatsusest loobumine tekitas ebamugavust. Ka lähedased sõbrad vajavad piire."
            },
            RUM: {
                title: "POVESTEA IRINKĂI",
                text: "O prietenă apropiată insistă să îi știe parolele de la telefon, spunând că «cei mai buni prieteni nu au secrete». Cum ar trebui să reacționeze Irynka?",
                choices: [
                    { text: "Să explice cu blândețe că prietenia sănătoasă are nevoie de spațiu personal.", next: "end_good" },
                    { text: "Să îi dea parolele pentru a nu o supăra.", next: "end_bad" }
                ],
                end_good: "Irynka și-a protejat spațiul personal. Prieteniile sănătoase se bazează pe încredere, nu pe control.",
                end_bad: "Renunțarea la intimitate a creat tensiune. Chiar și cei mai buni prieteni au nevoie de limite."
            },
            LIT: {
                title: "IRINKOS<br>ISTORIJA",
                text: "Artimiausia Irinkos draugė reikalauja telefono slaptažodžių, nes «geriausi draugai neturi paslapčių». Kaip turėtų reaguoti Irinka?",
                choices: [
                    { text: "Mandagiai paaiškinti, kad sveikai draugystei reikia asmeninės erdvės.", next: "end_good" },
                    { text: "Duoti slaptažodžius, kad draugė neįsižeistų.", next: "end_bad" }
                ],
                end_good: "Irinka apsaugojo savo asmeninę erdvę. Sveika draugystė remiasi pasitikėjimu, o ne kontrole.",
                end_bad: "Privatumo atsisakymas sukėlė įtampą. Net artimiausiems draugams reikia sveikų ribų."
            },
            ALB: {
                title: "HISTORIA E<br>IRYNKAS",
                text: "Mikesha e ngushtë e Irynkës këmbëngul të dijë fjalëkalimet e telefonit të saj sepse «miqtë e ngushtë nuk kanë sekrete». Si duhet të reagojë Irynka?",
                choices: [
                    { text: "Të shpjegojë me mirësi se miqësia e shëndetshme ka nevojë për hapësirë personale.", next: "end_good" },
                    { text: "T'i japë fjalëkalimet që mikesha të mos mërzitet.", next: "end_bad" }
                ],
                end_good: "Irynka mbrojti hapësirën e saj personale. Miqësitë e shëndetshme bazohen te besimi, jo te kontrolli.",
                end_bad: "Heqja dorë nga privatësia krijoi tension. Edhe miqtë më të ngushtë kanë nevojë për kufij."
            }
        }
    },
    '8': {
        photo: 'photos/story8-photo.png',
        titleKey: 'story-8-title',
        scenes: {
            ENG: {
                title: "THE STORY OF<br>DMYTRO",
                text: "Dmytro hears peers claiming that 'real men never talk about doubts or ask questions about relationships and health.' This makes him feel insecure. What should he do?",
                choices: [
                    { text: "Challenge the stereotype and seek reliable facts and honest advice.", next: "end_good" },
                    { text: "Believe the myths and hide his questions to look tough.", next: "end_bad" }
                ],
                end_good: "Learning accurate information boosted Dmytro's confidence. Questioning harmful stereotypes is true maturity.",
                end_bad: "Relying on myths left Dmytro anxious and misinformed. Knowledge and self-awareness build real confidence."
            },
            UKR: {
                title: "ІСТОРІЯ<br>ДМИТРА",
                text: "Дмитро чує від знайомих стереотип, що «справжні хлопці ніколи не сумніваються і не ставлять запитань про стосунки чи здоров'я». Це змушує його почуватися невпевнено. Що варто зробити?",
                choices: [
                    { text: "Відкинути стереотип і знайти достовірну інформацію та чесні відповіді.", next: "end_good" },
                    { text: "Повірити міфам і приховати свої запитання, щоб здаватися «крутим».", next: "end_bad" }
                ],
                end_good: "Перевірені знання додали Дмитру впевненості. Критичне ставлення до стереотипів — ознака зрілості.",
                end_bad: "Віра в міфи залишила Дмитра наодинці з тривогою. Знання та повага до себе дають справжню впевненість."
            },
            EST: {
                title: "DMYTRO<br>LUGU",
                text: "Dmytro kuuleb eakaaslastelt, et «tõelised mehed ei räägi kunagi kahtlustest». See tekitab temas ebakindlust. Mida ta peaks tegema?",
                choices: [
                    { text: "Vaide alla seada stereotüübid ja otsida usaldusväärset infot.", next: "end_good" },
                    { text: "Uskuda müüte ja varjata oma küsimusi.", next: "end_bad" }
                ],
                end_good: "Täpne teave suurendas Dmytro enesekindlust. Stereotüüpide kahtluse alla seadmine on küpsuse märk.",
                end_bad: "Müütidele tuginemine jättis Dmytro ärevusse. Teadmised loovad tõelise enesekindluse."
            },
            RUM: {
                title: "POVESTEA LUI<br>DMYTRO",
                text: "Dmytro aude colegii spunând că «bărbații adevărați nu vorbesc niciodată despre îndoieli». Acest lucru îl face nesigur. Ce ar trebui să facă?",
                choices: [
                    { text: "Să combată stereotipul și să caute informații sigure și sfaturi sincere.", next: "end_good" },
                    { text: "Să creadă miturile și să își ascundă întrebările.", next: "end_bad" }
                ],
                end_good: "Informațiile corecte i-au crescut încrederea lui Dmytro. Contestarea stereotipurilor este adevărata maturitate.",
                end_bad: "Încrederea în mituri l-a lăsat pe Dmytro neliniștit. Cunoașterea construiește încrederea reală."
            },
            LIT: {
                title: "DMYTRO<br>ISTORIJA",
                text: "Dmytro girdi bendraamžius teigiant, kad «tikri vyrai niekada nekalba apie abejones». Tai verčia jį jaustis neužtikrintai. Ką jis turėtų daryti?",
                choices: [
                    { text: "Mesti iššūkį stereotipui ir ieškoti patikimų faktų.", next: "end_good" },
                    { text: "Patikėti mitais ir slėpti savo klausimus.", next: "end_bad" }
                ],
                end_good: "Tiksli informacija sustiprino Dmytro pasitikėjimą savimi. Stereotipų kvestionavimas yra tikra branda.",
                end_bad: "Pasikliovimas mitais paliko Dmytro nerime. Žinios kuria tikrą pasitikėjimą."
            },
            ALB: {
                title: "HISTORIA E<br>DMYTROS",
                text: "Dmytro dëgjon bashkëmoshatarët të thonë se «burrat e vërtetë nuk flasin kurrë për dyshimet». Kjo e bën të ndihet i pasigurt. Çfarë duhet të bëjë?",
                choices: [
                    { text: "Të sfidojë stereotipin dhe të kërkojë fakte të besueshme.", next: "end_good" },
                    { text: "Të besojë mitet dhe të fshehë pyetjet e tij.", next: "end_bad" }
                ],
                end_good: "Informacioni i saktë rriti vetëbesimin e Dmytros. Sfida ndaj stereotipeve është pjekuri e vërtetë.",
                end_bad: "Mbështetja te mitet e la Dmytron në ankth. Njohuria ndërton vetëbesim të vërtetë."
            }
        }
    },
    '9': {
        photo: 'photos/story9-photo.png',
        titleKey: 'story-9-title',
        scenes: {
            ENG: {
                title: "ALEXANDER'S STORY",
                text: "Alexander notices his partner seems quiet and hesitant during a date, even though they didn't explicitly say 'no'. How should Alexander act?",
                choices: [
                    { text: "Pause, check in gently, and make sure they feel comfortable.", next: "end_good" },
                    { text: "Assume silence means 'yes' and keep pushing forward.", next: "end_bad" }
                ],
                end_good: "Alexander showed genuine respect. Consent must always be clear, enthusiastic, and mutual.",
                end_bad: "Ignoring non-verbal discomfort broke trust. Mutual respect means paying attention to both words and feelings."
            },
            UKR: {
                title: "ІСТОРІЯ<br>ОЛЕКСАНДРА",
                text: "Олександр помічає, що під час побачення партнерка раптом замовкла і вагається, хоча прямо не сказала «ні». Як варто вчинити Олександру?",
                choices: [
                    { text: "Зупинитися, обережно запитати про її стан і переконатися, що їй комфортно.", next: "end_good" },
                    { text: "Вважати, що мовчання — це згода, і продовжувати наполягати.", next: "end_bad" }
                ],
                end_good: "Олександр проявив щиру повагу. Згода завжди має бути чіткою, добровільною та взаємною.",
                end_bad: "Ігнорування дискомфорту зруйнувало довіру. Взаємоповага — це увага як до слів, так і до почуттів іншої людини."
            },
            EST: {
                title: "ALEXANDERI<br>LUGU",
                text: "Alexander märkab, et tema kaaslane on kohtingul vaikne ja kõhklev, kuigi ta ei öelnud otse «ei». Kuidas peaks Alexander käituma?",
                choices: [
                    { text: "Peatuda, küsida õrnalt, kuidas ta end tunneb, ja veenduda tema mugavuses.", next: "end_good" },
                    { text: "Eeldada, et vaikus tähendab «jah», ja jätkata.", next: "end_bad" }
                ],
                end_good: "Alexander näitas üles siirast austust. Nõusolek peab alati olema selge ja vastastikune.",
                end_bad: "Ebamugavustunde eiramine rikkus usalduse. Vastastikune austus tähendab tähelepanu pööramist tunnetele."
            },
            RUM: {
                title: "POVESTEA LUI<br>ALEXANDER",
                text: "Alexander observă că partenera pare tăcută și ezitantă la o întâlnire, deși nu a spus explicit «nu». Cum ar trebui să acționeze Alexander?",
                choices: [
                    { text: "Să se oprească, să întrebe cu blândețe cum se simte și să se asigure că este confortabil.", next: "end_good" },
                    { text: "Să presupună că tăcerea înseamnă «da» și să insiste.", next: "end_bad" }
                ],
                end_good: "Alexander a arătat un respect autentic. Consimțământul trebuie să fie întotdeauna clar și reciproc.",
                end_bad: "Ignorarea disconfortului a distrus încrederea. Respectul reciproc înseamnă atenție la cuvinte și sentimente."
            },
            LIT: {
                title: "ALEKSANDRO<br>ISTORIJA",
                text: "Aleksandras pastebi, kad pasimatymo metu partnerė tapo tyli ir dvejojanti, nors tiesiogiai nepasakė «ne». Kaip turėtų elgtis Aleksandras?",
                choices: [
                    { text: "Sustoti, švelniai pasiteirauti savijautos ir įsitikinti, kad jai patogu.", next: "end_good" },
                    { text: "Manyti, kad tyla reiškia «taip», ir toliau spausti.", next: "end_bad" }
                ],
                end_good: "Aleksandras parodė nuoširdžią pagarbą. Sutikimas visada turi būti aiškus ir abipusis.",
                end_bad: "Diskomforto ignoravimas sugriovė pasitikėjimą. Abipusė pagarba reiškia dėmesį jausmams."
            },
            ALB: {
                title: "HISTORIA E<br>ALEXANDERIT",
                text: "Alexander vëren se partnerja duket e heshtur dhe hezituese gjatë takimit, edhe pse nuk tha shprehimisht «jo». Si duhet të veprojë Alexanderi?",
                choices: [
                    { text: "Të ndalojë, të pyesë me kujdes si ndihet dhe të sigurohet që ajo është rehat.", next: "end_good" },
                    { text: "Të supozojë se heshtja do të thotë «po» dhe të vazhdojë të këmbëngulë.", next: "end_bad" }
                ],
                end_good: "Alexanderi tregoi respekt të vërtetë. Pëlqimi duhet të jetë gjithmonë i qartë dhe i ndërsjellë.",
                end_bad: "Injorimi i parehatisë theu besimin. Respekti i ndërsjellë do të thotë vëmendje ndaj fjalëve dhe ndjenjave."
            }
        }
    },
    '10': {
        photo: 'photos/story10-photo.png',
        titleKey: 'story-10-title',
        scenes: {
            ENG: {
                title: "MIRA'S TERRIBLE<br>STORY",
                text: "Mira experienced a deeply distressing situation and feels scared, isolated, and unsure if anyone will believe her. What is the safest and most important step?",
                choices: [
                    { text: "Reach out to a trusted adult, specialist, or support helpline.", next: "end_good" },
                    { text: "Keep everything bottled up alone out of fear or shame.", next: "end_bad" }
                ],
                end_good: "Mira asked for help and received compassionate, professional support. No one has to carry trauma alone—help is always available.",
                end_bad: "Carrying heavy pain alone only deepens the distress. Reaching out for support is brave and essential for healing."
            },
            UKR: {
                title: "ЖАХЛИВА ІСТОРІЯ<br>МІРИ",
                text: "Міра пережила дуже травматичну ситуацію, почувається наляканою, самотньою та боїться, що їй не повірять. Який крок найбезпечніший і найважливіший?",
                choices: [
                    { text: "Звернутися по допомогу до дорослого, якому довіряє, психолога або на гарячу лінію підтримки.", next: "end_good" },
                    { text: "Закритися в собі та мовчати через страх або сором.", next: "end_bad" }
                ],
                end_good: "Міра звернулася по допомогу й отримала підтримку та захист. Ніхто не повинен залишатися з бідою наодинці.",
                end_bad: "Мовчання лише поглиблює біль. Звернутися по підтримку — це сміливий і необхідний крок до відновлення."
            },
            EST: {
                title: "MIRA<br>HIRMUS LUGU",
                text: "Mira elas üle väga raske olukorra ning tunneb hirmu ja üksindust. Mis on kõige turvalisem ja olulisem samm?",
                choices: [
                    { text: "Pöörduda usaldusväärse täiskasvanu, spetsialisti või abiliini poole.", next: "end_good" },
                    { text: "Hoida kõike hirmu või häbi tõttu endas.", next: "end_bad" }
                ],
                end_good: "Mira palus abi ja sai professionaalset tuge. Keegi ei pea raskusi üksi kandma.",
                end_bad: "Valu üksi kandmine süvendab muret. Abi otsimine on julge ja vajalik samm."
            },
            RUM: {
                title: "POVESTEA TERIBILĂ<br>A MIREI",
                text: "Mira a trecut printr-o situație profund traumatizantă și se simte speriată și singură. Care este cel mai sigur și important pas?",
                choices: [
                    { text: "Să ceară ajutor unui adult de încredere, unui specialist sau unei linii de sprijin.", next: "end_good" },
                    { text: "Să țină totul în ea de frică sau rușine.", next: "end_bad" }
                ],
                end_good: "Mira a cerut ajutor și a primit sprijin profesionist. Nimeni nu trebuie să treacă singur prin traumă.",
                end_bad: "Păstrarea durerii în tăcere adâncește suferința. A cere ajutor este un act de curaj."
            },
            LIT: {
                title: "BOSI MIRA<br>ISTORIJA",
                text: "Mira išgyveno itin skaudžią situaciją, jaučiasi išsigandusi ir vieniša. Koks žingsnis yra saugiausias ir svarbiausias?",
                choices: [
                    { text: "Kreiptis pagalbos į patikimą suaugusįjį, specialistą arba pagalbos liniją.", next: "end_good" },
                    { text: "Viską laikyti savyje iš baimės ar gėdos.", next: "end_bad" }
                ],
                end_good: "Mira paprašė pagalbos ir sulaukė palaikymo. Niekas neturi likti vienas su skausmu.",
                end_bad: "Skausmo slėpimas tik gilina kančią. Kreiptis pagalbos yra drąsus ir būtinas žingsnis."
            },
            ALB: {
                title: "HISTORIA E FRIKSHME E<br>MIRAS",
                text: "Mira përjetoi një situatë shumë të rëndë dhe ndihet e frikësuar dhe e vetmuar. Cili është hapi më i sigurt dhe më i rëndësishëm?",
                choices: [
                    { text: "Të kërkojë ndihmë nga një i rritur i besuar, specialist ose linjë ndihme.", next: "end_good" },
                    { text: "Të mbajë gjithçka brenda vetes nga frika ose turpi.", next: "end_bad" }
                ],
                end_good: "Mira kërkoi ndihmë dhe mori mbështetje profesionale. Askush nuk duhet ta mbajë dhimbjen vetëm.",
                end_bad: "Mbajtja e dhimbjes vetëm e thellon shqetësimin. Të kërkosh ndihmë është guxim dhe hap i domosdoshëm."
            }
        }
    }
};

window.renderGame = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = urlParams.get('id') || '1';
    const currentLang = localStorage.getItem('selectedLang') || 'ENG';

    const story = storyGameData[storyId] || storyGameData['1'];
    const scene = story.scenes[currentLang] || story.scenes.ENG || story.scenes.UKR;

    const backLink = document.getElementById('back-to-preview-link');
    if (backLink) {
        backLink.href = `story.html?id=${storyId}`;
    }

    const photoEl = document.getElementById('play-character-img');
    if (photoEl) photoEl.src = story.photo;

    const titleEl = document.getElementById('play-story-title');
    if (titleEl) {
        titleEl.setAttribute('data-i18n', story.titleKey);
        if (window.translations && window.translations[currentLang] && window.translations[currentLang][story.titleKey]) {
            titleEl.innerHTML = window.translations[currentLang][story.titleKey];
        } else if (scene.title) {
            titleEl.innerHTML = scene.title;
        }
    }

    const sceneTextEl = document.getElementById('play-story-scene');
    if (sceneTextEl) sceneTextEl.textContent = scene.text;

    const choicesContainer = document.getElementById('play-choices-container');
    if (choicesContainer) {
        choicesContainer.innerHTML = '';
        if (scene.choices) {
            scene.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'story-choice-btn';
                btn.textContent = choice.text;

                btn.addEventListener('click', () => {
                    sceneTextEl.textContent = scene[choice.next];

                    const langNow = localStorage.getItem('selectedLang') || 'ENG';
                    const fallbackBackTexts = {
                        ENG: 'Back to all stories',
                        UKR: 'Повернутися до всіх історій',
                        EST: 'Tagasi kõigi lugude juurde',
                        RUM: 'Înapoi la toate poveștile',
                        LIT: 'Grįžti į visas istorijas',
                        ALB: 'Kthehu te të gjitha historitë'
                    };

                    const backAllText = (window.translations && window.translations[langNow] && window.translations[langNow]['back-to-all-stories'])
                        ? window.translations[langNow]['back-to-all-stories']
                        : (fallbackBackTexts[langNow] || fallbackBackTexts.ENG);

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
};

document.addEventListener('DOMContentLoaded', () => {
    window.renderGame();

    document.querySelectorAll('.lang-list button, [data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(window.renderGame, 50);
        });
    });
});
