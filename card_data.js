// Trans-Siberian destination card data
// 25 cards total (Irkutsk Sortirovochnyy + Passazhirskiy merged into one)
// indices: station array indices for filter matching
// wikiPage: Wikipedia article title for REST API image fetch
// tier: 1 = highest priority, 2 = popular
// route: "AB" both trains, "A" Rossiya only, "B" 010H only

const CARDS = [
  {
    indices: [0],
    name: "Moscow",
    station: "Moskva Yaroslavskaya",
    tier: 1,
    route: "AB",
    why: "The journey begins at Yaroslavsky station — one of nine terminals in Russia's extraordinary capital. A few days here is almost mandatory: world-class museums, the Kremlin, and a metro system that is itself a monument.",
    tags: ["Culture", "Architecture", "History"],
    top5: [
      "Red Square & St. Basil's Cathedral — the symbolic heart of Russia",
      "The Kremlin — arms museum, Assumption Cathedral, Tsar Bell, and Tsar Cannon",
      "State Tretyakov Gallery — the definitive collection of Russian art from medieval icons to the avant-garde",
      "Moscow Metro — ride Komsomolskaya, Mayakovskaya, and Novoslobodskaya stations as architectural landmarks",
      "Bolshoi Theatre — ballet or opera performances; book well in advance"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/moscow",
    sourceLabel: "Lonely Planet — Moscow",
    wikiPage: "Moscow"
  },
  {
    indices: [5],
    name: "Yaroslavl",
    station: "Yaroslavl Passazhirskiy",
    tier: 1,
    route: "A",
    why: "One of Russia's most beautiful old cities and a UNESCO World Heritage Site — extraordinary 17th-century churches line the Volga embankment, and the city is easily combined with a stop at nearby Rostov Veliky.",
    tags: ["UNESCO", "Architecture", "History"],
    top5: [
      "Church of Elijah the Prophet — UNESCO-listed, with some of Russia's finest 17th-century frescoes",
      "Spaso-Preobrazhensky Monastery — fortress-like complex with panoramic tower views",
      "Volga River embankment walk — the city's living room, especially beautiful at sunset",
      "Yaroslavl Museum-Reserve — history and art across multiple historic buildings",
      "Combine with Rostov Veliky (55km) — kremlin, Lake Nero, enamel workshops"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/golden-ring/yaroslavl",
    sourceLabel: "Lonely Planet — Yaroslavl",
    wikiPage: "Yaroslavl"
  },
  {
    indices: [9],
    name: "Nizhny Novgorod",
    station: "Nizhny Novgorod",
    tier: 1,
    route: "B",
    why: "Russia's fifth-largest city commands a dramatic hilltop kremlin at the confluence of the Oka and Volga rivers, with a thriving contemporary arts scene that has made it one of the country's most talked-about destinations in recent years.",
    tags: ["Culture", "History", "Architecture"],
    top5: [
      "Nizhny Novgorod Kremlin — 16th-century hilltop fortress with river views from the walls",
      "Strelka (river confluence) — walk to the tip where the Oka meets the Volga",
      "Chkalov Staircase — 560 steps zigzagging down to the river, with panoramic views",
      "Nizhny Novgorod Fair building — grand 19th-century trade hall, beautifully restored",
      "Pokrovka Street pedestrian zone — cafés, art spaces, and street life"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/volga-region/nizhny-novgorod",
    sourceLabel: "Lonely Planet — Nizhny Novgorod",
    wikiPage: "Nizhny_Novgorod"
  },
  {
    indices: [2],
    name: "Vladimir",
    station: "Vladimir",
    tier: 2,
    route: "B",
    why: "A compact UNESCO World Heritage city of 12th-century Russian Orthodox masterpieces — three cathedrals within walking distance of each other, and a short drive from the perfectly preserved medieval city of Suzdal.",
    tags: ["UNESCO", "Architecture", "Religion"],
    top5: [
      "Assumption Cathedral (UNESCO) — 12th century, with original frescoes by Andrei Rublev",
      "Golden Gate (UNESCO) — the city's medieval fortified entry point",
      "Dmitrievsky Cathedral (UNESCO) — extraordinary carved stone facade",
      "Day trip to Suzdal (35km) — monasteries, kremlin, horse-drawn sleighs; arguably more beautiful than Vladimir itself",
      "Day trip to Bogolyubovo (11km) — Church of the Intercession on the Nerl, a perfect 12th-century chapel in a meadow (UNESCO)"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/golden-ring/vladimir",
    sourceLabel: "Lonely Planet — Vladimir",
    wikiPage: "Vladimir,_Russia"
  },
  {
    indices: [3],
    name: "Rostov Veliky",
    station: "Rostov Velikiy",
    tier: 2,
    route: "A",
    why: "Often bypassed for larger Golden Ring cities, Rostov Veliky rewards those who stop — its 17th-century kremlin sits directly on the shore of Lake Nero and is one of the most photogenic historic sites in Russia.",
    tags: ["Architecture", "History", "Culture"],
    top5: [
      "Rostov Kremlin — 17th-century lakeside fortress; climb the towers for views over Lake Nero",
      "Lake Nero boat trips — the ancient lake surrounds the city on three sides",
      "Spaso-Yakovlevsky Monastery — twin-domed monastery on the lake shore",
      "Finift enamel workshops — Rostov is the only place in Russia producing this distinctive painted enamel art",
      "Combine with Yaroslavl (55km) — easy day trip or sequential stop"
    ],
    sourceUrl: "https://en.wikivoyage.org/wiki/Rostov_Veliky",
    sourceLabel: "Wikivoyage — Rostov Veliky",
    wikiPage: "Rostov_Veliky"
  },
  {
    indices: [7],
    name: "Kostroma",
    station: "Kostroma-Novaya",
    tier: 2,
    route: "A",
    why: "The birthplace of the Romanov dynasty — the monastery where Michael Romanov was called to rule in 1613 still stands, and the city's 18th-century market arcade is the best preserved in Russia.",
    tags: ["History", "Architecture", "Culture"],
    top5: [
      "Ipatievsky Monastery — where the Romanov dynasty began; the gatehouse and cathedral are intact",
      "Historic Trade Rows (Torgovye Ryady) — elegant 18th-century shopping arcade, now a working market",
      "Romanov Museum — history of Russia's last royal family from a Kostroma perspective",
      "Kostroma Linen Museum — linen production has been the city's trade for centuries",
      "Volga River embankment — pleasant waterfront with cafés and views"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/golden-ring/kostroma",
    sourceLabel: "Lonely Planet — Kostroma",
    wikiPage: "Kostroma"
  },
  {
    indices: [11],
    name: "Semenov",
    station: "Semenov",
    tier: 2,
    route: "B",
    why: "A small town with one very specific and fascinating draw: it is the heartland of Khokhloma, Russia's most distinctive folk art — the bold red, black, and gold lacquerwork seen throughout the country is made here, and you can watch it being crafted.",
    tags: ["Craft", "Culture", "History"],
    top5: [
      "Golden Khokhloma factory — see the full production process from woodturning to final lacquer",
      "Regional Museum of Khokhloma Art — history and finest examples of the craft",
      "Live workshop demonstrations — some workshops accept visitors for hands-on sessions",
      "Local craft market — pick up authentic pieces directly from makers",
      "Keriteza River walk — quiet riverside setting around the town"
    ],
    sourceUrl: "https://en.wikivoyage.org/wiki/Semenov",
    sourceLabel: "Wikivoyage — Semenov",
    wikiPage: "Semenov,_Nizhny_Novgorod_Oblast"
  },
  {
    indices: [26],
    name: "Kirov",
    station: "Kirov Passazhirskiy",
    tier: 2,
    route: "AB",
    why: "One of Russia's oldest cities in this region, known as Vyatka for most of its history — a quietly appealing stop with a good art museum, well-preserved merchant-era architecture, and a central position on the route between European Russia and the Urals.",
    tags: ["History", "Architecture", "Culture"],
    top5: [
      "Vyatka Art Museum — a regional collection with genuinely strong holdings including Russian avant-garde",
      "Kirov Diorama — large-scale panoramic battle painting in a purpose-built rotunda",
      "Alexander Nevsky Cathedral — 19th-century cathedral on the central square",
      "Historic merchant district — 18th and 19th century stone mansions along Moskovskaya Street",
      "Spaso-Preobrazhensky Monastery — active monastery on a hill above the Vyatka River"
    ],
    sourceUrl: "https://en.wikivoyage.org/wiki/Kirov_(Russia)",
    sourceLabel: "Wikivoyage — Kirov",
    wikiPage: "Kirov,_Kirov_Oblast"
  },
  {
    indices: [31],
    name: "Perm",
    station: "Perm-2",
    tier: 1,
    route: "AB",
    why: "A major Ural industrial city that has reinvented itself as a cultural destination — and the base for visiting Perm-36, one of the very few surviving Soviet Gulag camps preserved as an open-air museum, which tells a part of Russian history found nowhere else.",
    tags: ["Soviet History", "Culture", "Gulag History"],
    top5: [
      "Perm-36 Gulag History Museum (~100km away) — a preserved Soviet political prison camp; the most important site of its kind in Russia",
      "Perm State Gallery — houses the extraordinary Perm Gods collection of medieval wooden religious sculpture",
      "Khokhlovka Open-Air Architecture Museum (45km) — historic wooden buildings from across the Perm region reassembled on a river bluff",
      "PERMM Museum of Contemporary Art — strong programme of Russian and international contemporary art",
      "Kama River embankment — wide Siberian river, boat trips available in summer"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/ural-mountains/perm",
    sourceLabel: "Lonely Planet — Perm",
    wikiPage: "Perm,_Russia"
  },
  {
    indices: [32],
    name: "Kungur",
    station: "Kungur",
    tier: 2,
    route: "A",
    why: "Famous for one thing done exceptionally well — the Kungur Ice Cave, 5.7km of passages with underground lakes and year-round ice formations, is one of Russia's most visited natural attractions and sits just 5km from the station.",
    tags: ["Adventure", "Nature", "Outdoors"],
    top5: [
      "Kungur Ice Cave — stalactites, ice sculptures, underground lakes; guided tours run year-round (icecave.ru)",
      "Sylvensky Rapids — white-water rafting on the Sylva River in summer",
      "Kungur Local History Museum — history of this old merchant town",
      "Historic centre — well-preserved 18th and 19th century merchant architecture",
      "Easy combination with Perm (100km, ~1.5hr) — visit both in the same stop"
    ],
    sourceUrl: "https://icecave.ru",
    sourceLabel: "Kungur Ice Cave — official site",
    wikiPage: "Kungur_Ice_Cave"
  },
  {
    indices: [33],
    name: "Yekaterinburg",
    station: "Ekaterinburg Passazhirskiy",
    tier: 1,
    route: "AB",
    why: "The place where the Romanov dynasty ended — Nicholas II and his family were executed here in 1918 — and where Europe gives way to Asia. Two powerful pilgrimage sites mark the Romanov story, and the city straddles one of history's great geographic boundaries.",
    tags: ["History", "Architecture", "Soviet History"],
    top5: [
      "Church on the Blood — built on the exact site of the Romanov execution; moving and architecturally striking",
      "Ganina Yama Monastery — 7 chapels in the forest where the Romanov remains were discovered; a genuine pilgrimage site",
      "Europe-Asia border obelisk (~40km by taxi/tour) — straddle the continental divide for a photo",
      "Boris Yeltsin Presidential Centre — outstanding museum on the Soviet collapse and Russia's 1990s",
      "Vysotsky Skyscraper observation deck — best city panorama"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/ural-mountains/yekaterinburg",
    sourceLabel: "Lonely Planet — Yekaterinburg",
    wikiPage: "Yekaterinburg"
  },
  {
    indices: [34],
    name: "Tyumen",
    station: "Tyumen",
    tier: 2,
    route: "AB",
    why: "The oldest Russian city in Siberia, founded in 1586 — Tyumen is often rushed through, but its historic wooden architecture with intricately carved window frames is among the finest in western Siberia and disappearing fast.",
    tags: ["History", "Architecture", "Culture"],
    top5: [
      "Historic wooden architecture — carved merchant mansions along Respubliki and Lenin Streets",
      "Znamensky Cathedral — elegant 18th-century cathedral in the city centre",
      "Tyumen Regional Museum — Siberian history from indigenous cultures through the oil boom",
      "Siberian-Tatar Sloboda — historic neighbourhood of the city's Muslim Tatar community",
      "Tobolsk day trip (250km, ~3hr) — Russia's only Siberian kremlin; a full day but very worthwhile"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/western-siberia/tyumen",
    sourceLabel: "Lonely Planet — Tyumen",
    wikiPage: "Tyumen"
  },
  {
    indices: [39],
    name: "Omsk",
    station: "Omsk",
    tier: 2,
    route: "AB",
    why: "Where Dostoevsky spent four years in a prison camp — the experience shaped Crime and Punishment and Notes from the House of the Dead. The museum at his former prison is one of Russia's most powerful literary pilgrimage sites.",
    tags: ["Culture", "History", "Soviet History"],
    top5: [
      "Dostoevsky Museum — in the building of the prison where he was held 1850–54; extraordinary context for anyone who has read his work",
      "Assumption Cathedral — grand white cathedral that anchors the city centre",
      "Omsk Regional Museum of History and Culture — strong natural history and Siberian ethnography collections",
      "Omsk State Drama Theatre — one of Siberia's oldest theatres, in a beautiful classical building",
      "Irtysh River embankment — wide Siberian river; boat trips in summer"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/western-siberia/omsk",
    sourceLabel: "Lonely Planet — Omsk",
    wikiPage: "Omsk"
  },
  {
    indices: [46],
    name: "Novosibirsk",
    station: "Novosibirsk-Glavnyy",
    tier: 1,
    route: "AB",
    why: "Siberia's largest city and Russia's third-largest — young, fast-moving, and home to the country's biggest opera house and Akademgorodok, a Soviet-era science city still buzzing with researchers, markets, and a distinct intellectual energy.",
    tags: ["Culture", "Soviet History", "Nature"],
    top5: [
      "Novosibirsk Opera House — the largest in Russia; opera and ballet of high quality at very reasonable prices",
      "Akademgorodok (30km south) — Soviet science city; browse the open-air market, walk forest paths, feel the unique atmosphere",
      "Novosibirsk Zoo — one of Russia's best, with Siberian tigers, snow leopards, and over 700 species",
      "Novosibirsk Regional Museum — comprehensive Siberian history including indigenous cultures",
      "Ob Sea (Novosibirsk Reservoir) beach area — popular in summer, large enough to feel like a real sea"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/western-siberia/novosibirsk",
    sourceLabel: "Lonely Planet — Novosibirsk",
    wikiPage: "Novosibirsk"
  },
  {
    indices: [58],
    name: "Krasnoyarsk",
    station: "Krasnoyarsk Passazhirskiy",
    tier: 1,
    route: "AB",
    why: "The Yenisei River city best known for the Stolby Nature Reserve — volcanic rock pillars rising from taiga forest where local 'stolbists' have been free-climbing without ropes for over a century — and a regional museum so dramatic it once appeared on the 10-ruble note.",
    tags: ["Nature", "Adventure", "Culture"],
    top5: [
      "Stolby Nature Reserve — volcanic rock pillars up to 100m tall, 45min from city; hiking trails for all levels, traditional free-climbing culture",
      "Paraskeva Pyatnitsa Chapel — small chapel on Karaulnaya Mountain with the city panorama that was printed on the 10-ruble note",
      "Krasnoyarsk Regional Museum — housed in a striking Egyptian-revival building; strong collections on Siberian indigenous cultures",
      "Yenisei River boat trips — the great Siberian river; evening cruises popular in summer",
      "Bobrovy Log Ski Resort — gondola runs year-round for views over the Yenisei valley"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/eastern-siberia/krasnoyarsk",
    sourceLabel: "Lonely Planet — Krasnoyarsk",
    wikiPage: "Krasnoyarsk"
  },
  {
    indices: [66],
    name: "Taishet",
    station: "Taishet",
    tier: 2,
    route: "AB",
    why: "Not a destination in itself, but the junction where the Trans-Siberian meets the legendary BAM Railway — the Baikal-Amur Mainline, a Soviet engineering megaproject through 4,000km of untouched taiga, increasingly sought out by adventure rail travelers.",
    tags: ["Rail History", "Adventure", "Soviet History"],
    top5: [
      "BAM Railway departure point — board the Baikal-Amur Mainline here for one of the world's great rail adventures through remote Siberian wilderness",
      "Taishet Regional Museum — local history including the Gulag camps that built the BAM",
      "Biryusa River — fishing and riverside walks in the taiga surrounding the town",
      "Soviet-era infrastructure — the town itself reflects the scale of the BAM construction project",
      "Gateway stop — use the connection time to orient before the main Trans-Siberian leg continues east"
    ],
    sourceUrl: "https://en.wikivoyage.org/wiki/Taishet",
    sourceLabel: "Wikivoyage — Taishet",
    wikiPage: "Baikal%E2%80%93Amur_Mainline"
  },
  {
    indices: [76, 77],
    name: "Irkutsk",
    station: "Irkutsk Passazhirskiy",
    tier: 1,
    route: "AB",
    why: "The undisputed highlight of most Trans-Siberian journeys — Irkutsk is the gateway to Lake Baikal, the world's deepest lake containing 20% of Earth's unfrozen fresh water. The city itself has beautiful wooden architecture, a vibrant café culture, and excellent day-trip logistics.",
    tags: ["Nature", "Culture", "UNESCO"],
    top5: [
      "Listvyanka village on Lake Baikal (60km, 1hr by bus) — swim in summer, walk the shore, eat fresh omul fish, take the cable car",
      "Olkhon Island (270km, 5hr by marshrutka + ferry) — dramatic shamanic landscapes, the most spectacular Baikal scenery",
      "130 Kvartal (130th Quarter) — beautifully restored historic wooden buildings, now the city's best restaurant and bar district",
      "Circumbaikal Railway (departs Port Baikal/Slyudyanka) — scenic Soviet-era railway along the lake cliffs, one of the world's great rail journeys",
      "Taltsy Architectural Museum (47km toward Listvyanka) — open-air collection of historic Siberian wooden structures"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/eastern-siberia/irkutsk",
    sourceLabel: "Lonely Planet — Irkutsk",
    wikiPage: "Irkutsk"
  },
  {
    indices: [82],
    name: "Ulan-Ude",
    station: "Ulan-Ude Passazhirskiy",
    tier: 1,
    route: "AB",
    why: "The capital of Buryatia is where Russia meets Mongolia and Tibetan Buddhism — it has the largest Buddhist monastery complex in Russia, a Lenin head so enormous it became unintentionally famous, and a cultural atmosphere genuinely distinct from anywhere else on the route.",
    tags: ["Buddhism", "Culture", "History"],
    top5: [
      "Ivolginsky Datsan (40km) — the spiritual centre of Russian Buddhism; see the preserved body of Lama Itigilov, who died in 1927 and was exhumed in 2002 showing no decomposition",
      "Giant Lenin Head — the world's largest Lenin bust, 7.7 metres tall, in the central square; unavoidable and oddly compelling",
      "Rinpoche Bagsha Datsan — hilltop Buddhist temple with panoramic views over the city and surrounding steppe",
      "Open-Air Ethnographic Museum — traditional Buryat and Cossack settlements, shamanic sites, and indigenous artefacts on a large site outside the city",
      "Trans-Mongolian Railway junction — Ulan-Ude is where the route to Mongolia and Beijing branches off; worth understanding if an extension is of interest"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/eastern-siberia/ulan-ude",
    sourceLabel: "Lonely Planet — Ulan-Ude",
    wikiPage: "Ulan-Ude"
  },
  {
    indices: [86],
    name: "Petrovsk-Zabaykalsky",
    station: "Petrovskiy Zavod",
    tier: 2,
    route: "AB",
    why: "A historically significant small Transbaikal town where Decembrist rebels — nobles who staged an uprising against the Tsar in 1825 — were exiled to hard labor. Their houses, a dedicated museum, and the iron factory ruins that defined their exile all survive.",
    tags: ["History", "Decembrists", "Culture"],
    top5: [
      "Decembrist Museum — housed in the original building where the exiles lived; letters, personal effects, and the story of their remarkable wives who followed them to Siberia voluntarily",
      "Petrovsk Iron Factory ruins — the reason the settlement existed; the factory where Decembrists labored still partially stands",
      "Decembrist wives' houses — several preserved 19th-century homes of the women who gave up aristocratic lives to be near their husbands",
      "Local history museum — broader context on the Transbaikal region",
      "Surrounding steppe and mountain landscape — the raw Siberian environment that defined the exiles' experience"
    ],
    sourceUrl: "https://en.wikivoyage.org/wiki/Petrovsk-Zabaykalsky",
    sourceLabel: "Wikivoyage — Petrovsk-Zabaykalsky",
    wikiPage: "Petrovsk-Zabaykalsky"
  },
  {
    indices: [92],
    name: "Chita",
    station: "Chita-2",
    tier: 2,
    route: "AB",
    why: "The administrative capital of Transbaikalia, with an unexpected Decembrist connection — the wooden church where imprisoned nobles were allowed to worship is the oldest building in the city — and a gateway to the vast, remote wilderness of the Transbaikal region.",
    tags: ["History", "Decembrists", "Nature"],
    top5: [
      "Decembrists' Church (Mikhail-Arkhangel Church) — the oldest building in Chita, where exiled Decembrists attended services; now a branch of the regional museum",
      "Zabaykalsky Regional Museum — natural history and ethnography of the Transbaikal region",
      "Tsogchin Dugan Buddhist temple — active temple serving the local Buryat Buddhist community",
      "Regional Art Museum — rotating exhibitions including Siberian and local artists",
      "Sokhondinsky Nature Reserve (4hr south) — remote mountainous biosphere reserve for serious nature travelers"
    ],
    sourceUrl: "https://en.wikivoyage.org/wiki/Chita_(Russia)",
    sourceLabel: "Wikivoyage — Chita",
    wikiPage: "Chita,_Russia"
  },
  {
    indices: [114],
    name: "Svobodny",
    station: "Svobodnyy",
    tier: 2,
    route: "AB",
    why: "An otherwise quiet Amur Region city that is now the gateway to Vostochny Cosmodrome — Russia's newest and most ambitious civilian space launch facility, built in the Amur taiga, which runs public tours and has hosted several high-profile launches.",
    tags: ["Space", "Adventure", "Soviet History"],
    top5: [
      "Vostochny Cosmodrome (100km north, ~1.5hr) — Russia's newest launch site; public tours available, launch viewing possible with advance planning; book through Roscosmos official channels",
      "Zeya River — fishing and boat trips on one of the Amur's major tributaries",
      "Svobodny Local History Museum — regional history including the area's earlier role in Soviet rocket development",
      "Amur River access — the great river forms the Russian-Chinese border nearby",
      "Amur taiga surroundings — the coniferous forest landscape that stretches across the entire region"
    ],
    sourceUrl: "https://www.roscosmos.ru/category/vostochny/",
    sourceLabel: "Roscosmos — Vostochny Cosmodrome",
    wikiPage: "Vostochny_Cosmodrome"
  },
  {
    indices: [116],
    name: "Belogorsk / Blagoveshchensk",
    station: "Belogorsk",
    tier: 2,
    route: "AB",
    why: "Belogorsk is the train stop; Blagoveshchensk, 100km away, is the draw — a Russian border city facing China across the Amur River, where you can stand on the embankment and watch the Chinese skyline of Heihe, and some visitors make an official day trip across.",
    tags: ["Border Crossing", "Culture", "History"],
    top5: [
      "Blagoveshchensk Amur embankment — stand on Russian soil and look directly across to China; the two cities are separated only by the river",
      "Day trip to Heihe, China — official river crossing available; check current border crossing requirements before traveling",
      "Blagoveshchensk Regional Museum — history of the Amur region and Russia-China border relations",
      "Amur River boat tours — see the border from the water",
      "Blagoveshchensk city centre — attractive tsarist-era architecture for a border town this size"
    ],
    sourceUrl: "https://en.wikivoyage.org/wiki/Blagoveshchensk",
    sourceLabel: "Wikivoyage — Blagoveshchensk",
    wikiPage: "Blagoveshchensk"
  },
  {
    indices: [129],
    name: "Birobidzhan",
    station: "Birobidzhan",
    tier: 2,
    route: "AB",
    why: "The capital of Russia's Jewish Autonomous Oblast — one of Stalin's stranger social experiments, established in the 1930s as a Soviet Jewish homeland in the Far East. Yiddish street signs stand alongside Russian, the synagogue is active, and the story of who came here and why is genuinely fascinating.",
    tags: ["Jewish History", "Culture", "Soviet History"],
    top5: [
      "Birobidzhan Synagogue — active community synagogue; the centre of what remains of Jewish cultural life in the region",
      "Bilingual street signs — walk the city centre and spot the Yiddish alongside Russian, a visual reminder of the experiment",
      "Sholem Aleichem monument and cultural centre — named after the Yiddish author; regular cultural events",
      "Friendship Square — central park with Soviet-era monuments and the city's main gathering space",
      "Birobidzhan Regional Museum — the full story of the JAO's founding, the waves of Jewish settlers who came, and what remains today"
    ],
    sourceUrl: "https://en.wikivoyage.org/wiki/Birobidzhan",
    sourceLabel: "Wikivoyage — Birobidzhan",
    wikiPage: "Birobidzhan"
  },
  {
    indices: [131],
    name: "Khabarovsk",
    station: "Khabarovsk-1",
    tier: 1,
    route: "AB",
    why: "A handsome, surprisingly European-feeling city on the Amur River — the view from the embankment is the one printed on Russia's 5,000-ruble note — with one of the country's best regional museums and a lively riverfront that belies its remote Far Eastern location.",
    tags: ["Culture", "Nature", "History"],
    top5: [
      "Amur River embankment — bring a 5,000-ruble note and find the exact viewpoint depicted on it; beautiful in any season",
      "Khabarovsk Regional Museum — consistently rated one of Russia's finest regional museums; natural history, indigenous cultures, Far Eastern history",
      "Sikachi-Alyan petroglyphs (75km, ~1.5hr) — 12,000-year-old rock carvings on the Amur River bank; accessible by organized tour",
      "Far Eastern Art Museum — strong collection of Russian art including works rarely seen outside Moscow or St. Petersburg",
      "Amur River boat trips — river cruises available in summer; the scale of the Amur is remarkable"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/russian-far-east/khabarovsk",
    sourceLabel: "Lonely Planet — Khabarovsk",
    wikiPage: "Khabarovsk"
  },
  {
    indices: [147],
    name: "Vladivostok",
    station: "Vladivostok",
    tier: 1,
    route: "AB",
    why: "The end of the line — a dramatic Pacific port city built on hills above a bay, with military heritage, the freshest seafood in Russia, ferry connections to Japan and South Korea, and an energy that feels entirely unlike anywhere else on the 9,300km journey.",
    tags: ["Culture", "Adventure", "History"],
    top5: [
      "Vladivostok Fortress Museum — extensive coastal fortifications built to defend the Pacific Fleet; tunnels, gun batteries, and panoramic positions across multiple sites",
      "Russky Island & Primorsky Oceanarium — connected to the mainland by a spectacular cable-stayed bridge; the oceanarium has beluga whales and Far Eastern marine life",
      "S-56 Submarine Museum (Golden Horn Bay) — walk through a real Soviet submarine moored on the waterfront",
      "Eagle's Nest Hill viewpoint — the best panorama over the city, bay, and bridges",
      "Ferry to Japan or South Korea — departures to Sakaiminato (Japan) and Donghae/Sokcho (South Korea); turning the Trans-Siberian into a trans-continental journey"
    ],
    sourceUrl: "https://www.lonelyplanet.com/russia/russian-far-east/vladivostok",
    sourceLabel: "Lonely Planet — Vladivostok",
    wikiPage: "Vladivostok"
  }
];
