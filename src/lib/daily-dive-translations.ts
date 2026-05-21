type DiveLocation = {
  id: string;
  name: string;
  level: string;
  type: string;
  maxDepth: string;
  description: string;
  image: string;
};

type DailyDiveTranslations = {
  page: {
    title: string;
    subtitle: string;
    description: string;
    itinerary: string;
    included: string;
    includedItems: string[];
    excluded: string;
    excludedItems: string[];
    refundPolicy: string;
    refundIntro: string;
    refundItems: string[];
    whatToBring: string;
    whatToBringItems: string[];
    bookNow: string;
  };
  locations: {
    hurghada: {
      title: string;
      subtitle: string;
      mapImage: string;
      sites: DiveLocation[];
    };
    safaga: {
      title: string;
      subtitle: string;
      mapImage: string;
      sites: DiveLocation[];
    };
    marsaAlam: {
      title: string;
      subtitle: string;
      mapImage: string;
      sites: DiveLocation[];
    };
  };
};

const dailyDiveEN: DailyDiveTranslations = {
  page: {
    title: "Daily Dives",
    subtitle: "Enjoy the Red Sea with 1 Day / 2 Dives",
    description: `Experience the magic of the Red Sea with our daily diving adventures. Whether you're a certified diver or trying scuba for the first time, our daily dive trips offer an unforgettable underwater journey through vibrant coral reefs and diverse marine life.

Our daily diving trips are scheduled to start at 8:30 AM and end at 4:00 PM. Weather and current conditions permitting, we visit two different dive sites each day, ensuring variety and the best possible experience.

Your first stop is scheduled after 35 to 45 minutes of sailing (or 60 to 90 minutes depending on the locations). During the journey, you'll get to know your fellow passengers and the crew. The dive master will provide you with an onboard briefing about the dive sites and safety procedures.

After each dive, you may wish to participate in a debriefing or identification session of the flora and fauna you have spotted below water level. The actual diving time is determined by your air consumption, local current, and the size of the dive site.`,
    itinerary: `Daily Schedule

Morning Pickup (7:30-8:30 AM): Comfortable, air-conditioned transfer from your hotel.

Marina Departure (~9:00 AM): Board our boat, meet your guide, and enjoy a briefing over tea or coffee.

First Dive (~10:00 AM): Dive one of the famous Red Sea sites.

Surface Interval & Lunch: Relax on the sundeck, enjoy snacks and drinks, and savor a freshly prepared buffet lunch as we cruise to the next site.

Second Dive (~1:30 PM): Explore a different reef profile, encountering new marine landscapes and life.

Return & Drop-off (4:00-5:00 PM): Head back to the marina before your transfer returns you to your hotel.`,
    included: "What's Included",
    includedItems: [
      "12-liter tanks and weights",
      "Hotel pickup and drop-off within Hurghada/Marsa Alam/Safaga",
      "Hot lunch on board with soft drinks",
      "Free water, tea, and coffee all day",
      "Professional dive guide",
      "Dive insurance",
      "Red Sea National Park fees"
    ],
    excluded: "Not Included",
    excludedItems: [
      "Diving equipment rental (available for €20/day)",
      "Nitrox (€8/dive)",
      "Tips for crew and guide (optional)",
      "Diving camera rental (€20/day)"
    ],
    refundPolicy: "Cancellation & Refund Policy",
    refundIntro: "We want you to focus on the fun and adventure – not on payment worries. Your booking is secure.",
    refundItems: [
      "More than 3 days before departure: 100% refund",
      "Less than 3 days before departure: 50% refund",
      "Day before, same day, or missed trip: No refund",
      "Weather-related cancellations: Full refund or free rebooking"
    ],
    whatToBring: "What to Bring",
    whatToBringItems: [
      "Copy of a valid passport",
      "Medical statement from your doctor stating you are fit to dive",
      "Towel and swimwear",
      "Sunscreen and hat",
      "Certification card and logbook (for certified divers)"
    ],
    bookNow: "Book Now"
  },
  locations: {
    hurghada: {
      title: "Hurghada Dive Sites",
      subtitle: "Explore the underwater world of Hurghada",
      mapImage: "/images/daily-dive/hurghada-map.jpg",
      sites: [
        {
          id: "abu-hashish",
          name: "Abu Hashish",
          level: "Beginner",
          type: "Wall/Drop Off",
          maxDepth: "18m",
          description: `Abu Hashish is an island at the centre of a wide bay 90 minutes south of Hurghada. A tongue of reef extends about 1km south of the island. The dive site is at its southernmost tip with a shelf between 15 and 22m outside, and beyond that a steep drop-off with superb visibility. Inside the tongue of reef is a scattering of long ergs. Marine life includes pelagics such as jacks, barracuda, Spanish mackerel, whitetips, and occasionally hammerheads. On the shelf you'll find turtles, bluespotted rays, Spanish dancers, morays, and groupers.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/12/Abu-Hashish-e1612094240465.jpg"
        },
        {
          id: "banana-reef",
          name: "Banana Reef",
          level: "Beginner/Advanced",
          type: "Drift Diving/Macro",
          maxDepth: "18m",
          description: `Just off the end of Ben el Gebel in the middle of the Giftun Strait sits Banana Reef. It's a Y-shaped reef lying in shallow water (15m). The northeast point has some shallow caves, while the northwest point has a particularly stunning erg. A fan-shaped boulder is home to a school of bannerfish. Beyond it is a 4m high pinnacle carpeted in purple soft corals. Marine life includes bannerfish, unicorns, emperor angelfish, and puffers.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/12/bananreef-e1612094227322-300x216.jpg"
        },
        {
          id: "careless-reef",
          name: "Careless Reef",
          level: "Advanced/Expert",
          type: "Wall/Drop Off",
          maxDepth: "25m",
          description: `About one hour northeast of Hurghada, a mid-sea reef plateau pushes up from the abyss. It is mostly in the 12-25m range, gently sloping to 22-24m at its edges where it drops off steeply. Standing on the plateau are two ergs surrounded by a forest of coral that swarms with fish. This place is crawling with just about everything – free swimming morays, whitetips, turtles, tuna, giant trevallies, huge groupers, and in the early morning, hammerheads.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/CARELESS-REEF.jpg"
        },
        {
          id: "el-erug",
          name: "El Erug",
          level: "Beginner/Advanced/Expert",
          type: "Pinnacles",
          maxDepth: "14m",
          description: `Around 60 mins from central Hurghada. Fairly sheltered south of the Giftun Islands, this is a good choice for all levels of diver and training. There are actually three sites: beginning from the southwest with Erug Diana, via Erug Giftun in the middle and finally, Erug Gigi in the northeast. This site is the habitat of a variety of species of moray eels including yellowmouth, giant, snowflake and peppered. You are also likely to bump into napoleon wrasse, blue spotted rays, crocodile fish and scorpionfish.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/EL-ERUG-300x209.jpg"
        },
        {
          id: "el-fanadir",
          name: "El Fanadir",
          level: "Beginner/Advanced",
          type: "Wall/Drop Off/Drift",
          maxDepth: "25m",
          description: `Fanadir is a long narrow reef just north of Hurghada. A shallow hard coral wall slopes at about 60° to a sandy ledge at 12m. This sandy ledge is about 50m wide and narrows as you head northwards. At 20-25m, it drops off to greater depth. This place is crawling with pipefish, stonefish, scorpionfish, and humpback scorpionfish. Near the surface is teeming with silversides and occasionally small packs of tuna and jacks cruise by. Other residents include snowflake morays, yellow mouth morays, octopus and lots of lionfish.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/EL-FANADIR-300x211.jpg"
        },
        {
          id: "el-mina",
          name: "El Mina Wreck",
          level: "Advanced",
          type: "Wreck/Drift",
          maxDepth: "32m",
          description: `Just east of Hurghada harbour, El Mina is an Egyptian minesweeper sunk around 1969 by Israeli fighter planes. She rests on a rocky seabed sloping from 25m under the bow to 32m at the stern. The wreck lies on her portside. The aft section is bristling with winches and anti-aircraft guns whilst the fore-deck guns have been sheared off. The blast-hole area is suitable for penetration. All around, on the seabed are live shells – look but don't touch.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/EL-MINYA-300x202.jpg"
        },
        {
          id: "erg-abu-ramada",
          name: "Erg Abu Ramada",
          level: "Beginner",
          type: "Wall/Drop Off",
          maxDepth: "30m",
          description: `On the southeast side of Abu Ramada (80 minutes out of Hurghada) is a wide sandy shelf stretching eastwards. Just before it drops off, three large ergs rise up from the seabed (18m) to just beneath the surface. They lie in a line, the biggest to the south and the smallest to the north. It would be easier to list what you don't see than what you do – most obvious are morays, napoleons, tuna, barracuda, unicorn schools, groupers and a cloud of millions of tiny anthias.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/ERG-ABU-RAMADA.jpg"
        },
        {
          id: "fanous-east",
          name: "Fanous East (Dolphin Reef)",
          level: "Beginner",
          type: "Wall/Drop Off",
          maxDepth: "27m",
          description: `This reef comes with several names: Torfa el Fanous (meaning "reef with a beacon"), Dolphin Reef or Dolphin's Playground. It's a narrow strip of reef surrounding a large lagoon to the north-west of Giftun Kebir. On its east end a wide channel splits the reef from the mainland and on its slopes are a coral garden and three colourful pinnacles. It is not uncommon to see a pod of 5 or 6 dolphins here even when diving. Turtles, bluespotted rays, eagle rays, jacks and barracuda also reside here.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/FANOUS-EAST-300x206.jpg"
        },
        {
          id: "gota-abu-ramada",
          name: "Gota Abu Ramada (The Aquarium)",
          level: "Beginner",
          type: "Wall/Drop Off",
          maxDepth: "15m",
          description: `This reef, also known as the aquarium, lies between 50 and 90 minutes from Hurghada. It is an elliptical reef surrounded by a sandy seabed at 12-15m. To the west are two large ergs and to the east are three pinnacles and a coral garden. All over the reef, but especially at the west end, there are yellow fish, bannerfish, bluecheek butterflies, masked butterflies, yellow snapper, goatfish and sweetlips. Big morays, jacks, turtles, crocodile fish and more infrequently, eagle rays and leopard sharks visit the reef.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/GOTA-ABU-RAMADA.jpg"
        },
        {
          id: "shaab-eshta",
          name: "Shaab Eshta",
          level: "Beginner",
          type: "Wall/Drop Off",
          maxDepth: "12m",
          description: `Shaab Eshta is 45 minutes to one hour from Hurghada. It is basically two ergs, a small one to the north, a large one to the south. The depth ranges from 9 to 12m and it is surrounded by areas of turtle grass. In the turtle grass look for packs of lionfish, bluelined emperors, southern stingrays, turtles and sea horses. In the gap between the ergs, there is a school of goatfish plus sweetlips, snappers and on the rubble slope, stonefish, humpback scorpionfish and crocodilefish.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/SHAAB-ESHTA-300x204.jpg"
        },
        {
          id: "small-giftun",
          name: "Small Giftun",
          level: "Beginner",
          type: "Wall/Drop Off",
          maxDepth: "25m",
          description: `Around 80 minutes from central Hurghada, opposite the small Giftun police station there is one dive that invokes more enthusiasm than any other. It is a drift along a gorgonian clad wall that merges with an extensive plateau and drop-off. The plateau lies between 15 and 25m and the wall apparently has no bottom. On the plateau, napoleons and morays are guaranteed. There are also many bluespotted rays, painted triggerfish and crocodilefish. On the drop-off are turtles, jackfish and early in the morning, a very good chance of sharks.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/SMALL-GIFTUN.jpg"
        },
        {
          id: "umm-gamaar",
          name: "Umm Gamaar",
          level: "Beginner/Advanced",
          type: "Wall/Drop Off/Drift",
          maxDepth: "40m",
          description: `Umm Gamaar is a long thin streak of reef lying on a north south axis, 90 minutes north of Hurghada. Where the east edge of the plateau merges with the wall there are three coral towers. The first is hollow and round and filled with glassfish, as is the second which is taller and more sculpted in shape. The third has a large sandy cave at 27m. All three are richly swathed in purple soft corals and a swirling mist of glassfish. On the plateau you are sure to encounter napoleons, morays, cornetfish, batfish and schools of bannerfish.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/UMM-GAMAAR-300x202.jpg"
        }
      ]
    },
    safaga: {
      title: "Safaga Dive Sites",
      subtitle: "Discover the underwater world of Safaga",
      mapImage: "/images/daily-dive/safaga-map.jpg",
      sites: [
        {
          id: "salem-express",
          name: "Salem Express",
          level: "Advanced",
          type: "Wreck Dive",
          maxDepth: "30m",
          description: `About 90 minutes from Safaga, south of Shaab Shehr. This wreck sank on December 15th 1991, she hit the Hyndeman reef ripping a massive hole in the hull. The Salem Express is 110m long and 18m wide. She lies at a depth of 12-33m. Resting on her starboard side in 30m of water, the Salem Express is an eerie dive. Begin your dive at the deepest point, the stern, where you find the two intact large screws and the rudders. This is a maritime grave and should be treated as such. Dive her with respect.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/12/SALEM-EXPRESS.jpeg"
        },
        {
          id: "abu-kifan",
          name: "Abu Kifan",
          level: "Advanced/Expert",
          type: "Wall/Drop Off/Drift",
          maxDepth: "26m",
          description: `Abu Kifan is a long thin strip of reef 90 minutes to 2 hours outside Safaga. Its name roughly translated means 'The Deep One.' Its walls plunge vertically from the surface past the 100m mark. To the north, a plateau stretches seawards with two prominent coral blocks down the middle. The walls are smothered with soft corals, black corals and gorgonians. Turtles are common and grey reefs and silvertips are occasionally seen. On the north plateau, look out for big tuna (1-1.5m long). There are several large barracuda resident.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/ABU-KIFAN.jpeg"
        },
        {
          id: "gamul-al-kabeir",
          name: "Gamul Al Kabeir",
          level: "Beginner",
          type: "Wall/Drop Off",
          maxDepth: "15m",
          description: `Just north of Shadwan Island and about 20 minutes from Safaga is a large round reef known as Gamul al Kebeir. At its centre is a perfect, circular lagoon. To the south is a long nondescript reef and to the northeast are three small and colourful ergs. This reef is known for a mean-looking school (15-20) of big barracuda 1.5m+. Eagle rays are also commonly seen here as are whitetips and also, though more rarely, sea cows. Around the ergs are unicornfish, snappers, bigeye emperors, bream and scrolled filefish.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/GAMUL-AL-KABEIR.jpeg"
        },
        {
          id: "gamul-al-saghir",
          name: "Gamul Al Saghir",
          level: "Beginner",
          type: "Wall/Drop Off",
          maxDepth: "20m",
          description: `Less than 15 minutes outside Safaga lies Gamul al Saghir. It is the second in a chain of reefs stretching northwards from Safaga Island. It is round in shape with four outlying ergs to the southeast. On the ergs, schools of bream, batfish, bigeye emperors, sweetlips, bannerfish, fusiliers, red snapper and black snapper. Hunting the glassfish – redmouth grouper and lionfish. On the main reef, squirrelfish, soldierfish, glasseyes and cardinalfish in the many crevices. Bluespotted rays everywhere.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/GAMUL-AL-SAGHIR-300x208.jpeg"
        },
        {
          id: "middle-reef",
          name: "Middle Reef",
          level: "Beginner/Advanced/Expert",
          type: "Drift/Cavern/Cave",
          maxDepth: "20m",
          description: `90 minutes to two hours outside Safaga, Middle Reef is a very large circular reef with dozens of small, shallow ergs on its southeast corner. On the north and west sides are coral gardens that drop off at approximately 30m. Middle Reef is dived more for its picturesque corals than for its fish life. However, all kinds of parrotfish and triggerfish can be seen in abundance. On the drop-offs, tuna, Spanish mackerel, giant trevallies and schooling surgeonfish are usually seen, plus occasionally grey reefs, white tips and, in late summer, hammerheads.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/MIDDLE-REEF-300x207.jpeg"
        },
        {
          id: "panorama",
          name: "Panorama (Abu Alama)",
          level: "Advanced/Expert",
          type: "Wall/Drop Off",
          maxDepth: "26m",
          description: `Panorama is also known as 'Abu Alama' meaning 'Father of the Mast.' It lies 60-90 minutes outside Safaga. It is an elliptical shaped reef on a northwest-southeast axis. On the north end is a dramatic plateau (15-25m) and drop-off. North plateau – if it's big and lives in the sea, you can see it here. Surgeonfish schools, unicornfish schools, barracuda schools, giant trevallies, whitetips, grey reefs, eagle rays, dolphins, silvertips, and even longimanus, the oceanic whitetip. Everywhere are turtles.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/Panorama-300x184.jpeg"
        },
        {
          id: "shaab-shehr",
          name: "Shaab Shehr",
          level: "Beginner/Advanced",
          type: "Wall/Drop Off",
          maxDepth: "30m",
          description: `Around 70 Minutes from Safaga. The reef is a horseshoe shape over 1km long. It is an excellent anchorage with three excellent dive sites close at hand. The illustration shows the east end of Shaab Shehr where three ergs form a channel with the main reef. Outside is a vast brain coral garden with a lunar atmosphere and in the three ergs are some superb caves and grottoes. This site is dived for its unique lunar landscape. You will still see all species of triggerfish – picasso, redfang, orange striped, titans and yellowmargin triggerfish.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/SHAAB-SHEHR.jpeg"
        },
        {
          id: "tobia-al-kabeir",
          name: "Tobia Al Kabeir",
          level: "Beginner/Advanced",
          type: "Wall/Drop Off/Night",
          maxDepth: "18m",
          description: `Ten minutes southeast of Tobia Island and only 30 minutes from Safaga is one large oblong reef with a chain of three ergs stretching southwards. Many species of triggerfish are represented here – redlined, painted, half moon, titan and picasso fish. Abudjubbe wrasse, slingjaw wrasse and especially broomtail wrasse abound. This gaudily painted fish is the drag-queen of the coral reef. In summer this site is sometimes visited by bottle nosed dolphins.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/TOBIA-AL-KABEIR.jpeg"
        }
      ]
    },
    marsaAlam: {
      title: "Marsa Alam Dive Sites",
      subtitle: "Explore the southern underwater world",
      mapImage: "/images/daily-dive/marsa-alam-map.jpg",
      sites: [
        {
          id: "abu-dabbab",
          name: "Marsa Abu Dabbab Bay",
          level: "Beginner/Advanced",
          type: "Shore/Drift",
          maxDepth: "18m",
          description: `20 mins far from port Ghalib bay. Abu Dabbab is a partially enclosed u-shaped bay with one of the best sandy beaches on its innermost western shoreline and one of the largest sandy bottom bays with sea grass in the region. Abu Dabbab is reputedly known as the Turtles Bay and home of the one of a kind stoical dugong, the sea cow. Here, you will have a chance to come eyeball-to-eyeball with the captivating giant sea turtles. The wade-in beach has easy access to the waters with 1-3 meters depth.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg"
        },
        {
          id: "elphinstone",
          name: "Elphinstone Reef",
          level: "Advanced/Expert",
          type: "Wall/Drop Off/Drift",
          maxDepth: "40m",
          description: `This is one of the most famous dive sites in Egypt. 29 km north of Marsa Alam. Located offshore, Elphinstone is a 600 meter long reef, ranging from 5 meters to over 100 meters deep. A spectacular underwater life with a multitude of fish and wonderful drop-offs. The dive site location, environment, and reef formation makes this site one of the most important locations for sharks such as the oceanic whitetip and hammerhead shark. You will also be able to observe schools of snapper, anthias, fusilier, tuna, trevally but also Napoleon, turtle and giant barracuda.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg"
        },
        {
          id: "marsa-mubarak",
          name: "Marsa Mubarak",
          level: "Beginner/Advanced",
          type: "Drift Diving",
          maxDepth: "25m",
          description: `Marsa Mubarak is a well known dive site in the south and used to be a big national park. It consists of a bay with a reef to the north and south. With sandy bottom and enclosed big sea grass area in the middle the bay. As you enter the water, swim calmly out towards the open sea, keeping your eyes open for any movement. The turtles can usually be found munching on the sea grass, or on the surface when they head up for air. The dugong is a bit more unpredictable, and there's an element of luck to seeing him.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg"
        },
        {
          id: "marsa-shouni-kebir",
          name: "Marsa Shouni Kebir",
          level: "Beginner/Advanced",
          type: "Shore/Drift",
          maxDepth: "25m",
          description: `49 km north of Marsa Alam. Ras Shouna is the corner and outside north of Shauna is unique for its sprawling sand plateau. Littered in table corals of all shapes and sizes, pick your depth on the gradual slope and see what's hiding beneath each one. Of course blue spot rays are abundant, but certain times of year bring in breeding guitar rays and other surprises. Marine life includes guitarfish, eagle ray, Mediterranean moray, turtle, napoleonfish, tuna, amberjack, clownfish, and sweetlips.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg"
        },
        {
          id: "marsa-shouni-soraya",
          name: "Marsa Shouni Soraya",
          level: "Beginner/Advanced",
          type: "Shore/Drift",
          maxDepth: "25m",
          description: `Marsa Shouni Soraya is a very narrow bay. It's an hour by boat south of Port Ghalib. It consists of three very different dive sites: Nos Wa Nos, Talata Tabba and El Lesan. Talata Tabba offers a tapestry of soft corals, mullet and blue spotted stingrays. Nos Wa Nos consists of 3 pinnacles with large barracudas and stingrays. At El Lesan you stumble upon a reef tongue and a sandy plateau full of beautiful corals. In the shallow water look for well camouflaged fish such as scorpionfish and crocodile fish.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg"
        },
        {
          id: "shaab-marsa-alam",
          name: "Shaab Marsa Alam",
          level: "Beginner/Expert",
          type: "Drift/Pinnacle",
          maxDepth: "30m",
          description: `Located 4 km south east of Marsa Alam, in direction of the open sea, reachable by boat. Large semi-circle reef in the form of a "bean", surrounded by a sandy bottom, full of rock formations and reefs. The part of the northeast is home to a rich coral garden, descending in the deep. In the inner part, near a big rock, in a depth of 11-12 meters, we find a small wreck, about 25 meters in length. Mainly bannerfish but also unicorns, emperor angelfish and puffers.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg"
        },
        {
          id: "abu-dabbab-ii",
          name: "Abu Dabbab II",
          level: "Beginner/Advanced/Expert",
          type: "Cave/Coral Garden",
          maxDepth: "18m",
          description: `Located 27 km north east of Marsa Alam, accessible by boat/zodiak. These are two large circular reefs, characterized by the gardens of soft and hard corals (mushroom corals, Acropora, staghorn and many other species) in the outer parts. The inner part is famous for its canyons and pinnacles. You can find the wreck of the "One Heaven", a small boat lying at a depth of 14 meters. Here you can clearly see the "fight" between the corals to reach the light, and you can swim spotting almost every kind of fishes – rays, napoleon fish, snapper, moray eels, sharks.`,
          image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg"
        }
      ]
    }
  }
};

const dailyDivePL: DailyDiveTranslations = {
  page: {
    title: "Codzienne Nurkowania",
    subtitle: "Odkryj Morze Czerwone – 1 dzień / 2 nurkowania",
    description: `Doświadcz magii Morza Czerwonego z naszymi codziennymi przygodami nurkowymi. Niezależnie od tego, czy jesteś certyfikowanym nurkiem, czy próbujesz nurkowania po raz pierwszy, nasze codzienne wyprawy nurkowe oferują niezapomnianą podwodną podróż przez vibrantowe rafy koralowe i zróżnicowane życie morskie.

Nasze codzienne wyprawy nurkowe rozpoczynają się o 8:30 i kończą o 16:00. Przy sprzyjających warunkach pogodowych i prądowych, odwiedzamy każdego dnia dwa różne miejsca nurkowe, zapewniając różnorodność i jak najlepsze doświadczenie.

Pierwszy przystanek jest zaplanowany po 35 do 45 minutach żeglugi (lub 60 do 90 minut w zależności od lokalizacji). Podczas podróży poznasz swoich współpasażerów i załogę. Mistrz nurkowania przeprowadzi briefing na pokładzie na temat miejsc nurkowych i procedur bezpieczeństwa.

Po każdym nurkowaniu możesz wziąć udział w sesji debriefingowej lub identyfikacji flory i fauny, którą zaobserwowałeś pod wodą. Rzeczywisty czas nurkowania zależy od twojego zużycia powietrza, lokalnych prądów i wielkości miejsca nurkowego.`,
    itinerary: `Harmonogram Dzienny

Poranny odbiór (7:30-8:30): Komfortowy transfer z klimatyzacją z Twojego hotelu.

Odpłynięcie z mariny (~9:00): Wejdź na pokład łodzi, poznaj swojego przewodnika i ciesz się briefingiem przy herbacie lub kawie.

Pierwsze nurkowanie (~10:00): Nurkuj na jednym ze słynnych miejsc Morza Czerwonego.

Przerwa powierzchniowa i lunch: Zrelaksuj się na pokładzie, ciesz się przekąskami i napojami oraz świeżo przygotowanym lunchem w formie bufetu, gdy płyniemy do następnego miejsca.

Drugie nurkowanie (~13:30): Odkryj inny profil rafy, napotykając nowe morskie krajobrazy i życie.

Powrót i drop-off (16:00-17:00): Wróć do mariny, zanim transfer odwiezie Cię do hotelu.`,
    included: "Co jest w cenie",
    includedItems: [
      "Butle 12-litrowe i obciążniki",
      "Odbiór i dowóz z hotelu w Hurghadzie/Marsa Alam/Safadze",
      "Gorący lunch na pokładzie z napojami bezalkoholowymi",
      "Darmowa woda, herbata i kawa przez cały dzień",
      "Profesjonalny przewodnik nurkowy",
      "Ubezpieczenie nurkowe",
      "Opłaty za Park Narodowy Morza Czerwonego"
    ],
    excluded: "Nie w cenie",
    excludedItems: [
      "Wynajem sprzętu nurkowego (dostępny za 20 €/dzień)",
      "Nitrox (8 €/nurkowanie)",
      "Napiwki dla załogi i przewodnika (opcjonalne)",
      "Wynajem kamery nurkowej (20 €/dzień)"
    ],
    refundPolicy: "Polityka anulowania i zwrotu",
    refundIntro: "Chcemy, abyś skupił się na zabawie i przygodzie – nie na płatnościach. Twoja rezerwacja jest bezpieczna.",
    refundItems: [
      "Więcej niż 3 dni przed wyjazdem: 100% zwrot",
      "Mniej niż 3 dni przed wyjazdem: 50% zwrot",
      "Dzień przed, tego samego dnia lub niepojawienie się: Brak zwrotu",
      "Anulowanie z powodu pogody: Pełny zwrot lub darmowa rezerwacja"
    ],
    whatToBring: "Co zabrać",
    whatToBringItems: [
      "Kopia ważnego paszportu",
      "Oświadczenie lekarskie od lekarza stwierdzające, że jesteś sprawny do nurkowania",
      "Ręcznik i strój kąpielowy",
      "Krem z filtrem i kapelusz",
      "Karta certyfikacji i dziennik nurkowy (dla certyfikowanych nurków)"
    ],
    bookNow: "Zarezerwuj teraz"
  },
  locations: {
    hurghada: {
      title: "Miejsca Nurkowe Hurghada",
      subtitle: "Odkryj podwodny świat Hurghady",
      mapImage: "/images/daily-dive/hurghada-map.jpg",
      sites: [
        { id: "abu-hashish", name: "Abu Hashish", level: "Początkujący", type: "Ściana/Spadek", maxDepth: "18m", description: `Abu Hashish to wyspa w centrum szerokiej zatoki 90 minut na południe od Hurghady. Język rafy rozciąga się około 1 km na południe od wyspy. Miejsce nurkowe znajduje się na jego najbardziej wysuniętym na południe krańcu z półką między 15 a 22 m na zewnątrz, a poza tym stromym spadkiem o wspaniałej widoczności. Życie morskie obejmuje pelagiczne, takie jak tuńczyki, barrakudy, makrele hiszpańskie, biało-płetwe rekiny i okazjonalnie młoty. Na półce znajdziesz żółwie, płaszczki niebieskoplamiste, hiszpańskie tancerki, mureny i groupery.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/12/Abu-Hashish-e1612094240465.jpg" },
        { id: "banana-reef", name: "Banana Reef", level: "Początkujący/Zaawansowany", type: "Drift/Macro", maxDepth: "18m", description: `Tuż za końcem Ben el Gebel w środku Cieśniny Giftun siedzi Banana Reef. To rafa w kształcie Y leżąca na płytkiej wodzie (15m). Północno-wschodni punkt ma kilka płytkich jaskiń, podczas gdy północno-zachodni punkt ma szczególnie oszałamiający erg. Za nim znajduje się 4-metrowy pinnacle pokryty fioletowymi miękkimi koralowcami. Życie morskie obejmuje bannerfish, jednorożce, cesarskie ryby anioł i rozdymki.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/12/bananreef-e1612094227322-300x216.jpg" },
        { id: "careless-reef", name: "Careless Reef", level: "Zaawansowany/Ekspert", type: "Ściana/Spadek", maxDepth: "25m", description: `Około godziny na północny wschód od Hurghady, śród morska płyta rafy wypycha się z głębin. Jest głównie w zakresie 12-25 m, łagodnie opadając do 22-24 m na krawędziach, gdzie stromo opada. Na płycie stoją dwa ergi otoczone lasem koralowców, który roi się od ryb. To miejsce pełne jest wszystkiego – swobodnie pływających muren, biało-płetwych rekinów, żółwi, tuńczyków, gigantycznych trevallies, ogromnych grouperów i wczesnym rankiem młotów.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/CARELESS-REEF.jpg" },
        { id: "el-erug", name: "El Erug", level: "Początkujący/Zaawansowany/Ekspert", type: "Pinnacles", maxDepth: "14m", description: `Około 60 minut od centrum Hurghady. Dość osłonięte na południe od Wysp Giftun, to dobry wybór dla wszystkich poziomów nurków i treningu. Są właściwie trzy miejsca: zaczynając od południowego zachodu z Erug Diana, przez Erug Giftun w środku i na końcu Erug Gigi na północnym wschodzie. To miejsce jest siedliskiem różnych gatunków muren, w tym żółto-pyskich, gigantycznych, śnieżnych i pieprzowych. Możesz również natknąć się na napoleon wrasse, niebieskoplamiste płaszczki, ryby krokodylowe i skorpionowce.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/EL-ERUG-300x209.jpg" },
        { id: "el-fanadir", name: "El Fanadir", level: "Początkujący/Zaawansowany", type: "Ściana/Spadek/Drift", maxDepth: "25m", description: `Fanadir to długa wąska rafa tuż na północ od Hurghady. Płytkość twarda ściana koralowa opada pod kątem około 60° do piaszczystej krawędzi na 12 m. Ta piaszczysta krawędź ma około 50 m szerokości i zwęża się w miarę kierowania się na północ. Na 20-25 m opada na większą głębokość. To miejsce roi się od ryb igłowych, skorpionowców i skorpionowców garbatych. W pobliżu powierzchni roi się od srebrzystych ryb i okazjonalnie małe paczki tuńczyków i tuńczyków krążą polując na nie.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/EL-FANADIR-300x211.jpg" },
        { id: "el-mina", name: "Wrak El Mina", level: "Zaawansowany", type: "Wrak/Drift", maxDepth: "32m", description: `Tuż na wschód od portu w Hurghadzie, El Mina to egipski trałowiec zatopiony około 1969 roku przez izraelskie samoloty myśliwskie. Spoczywa na skalistym dnie morskim opadającym od 25 m pod dziobem do 32 m na rufie. Wrak leży na lewej burcie. Sekcja rufy pełna jest wyciągarek i dział przeciwlotniczych, podczas gdy działa na dziobie zostały odcięte. Obszar dziury po wybuchu nadaje się do penetracji. Wokół, na dnie morskim, znajdują się żywe pociski – patrz, ale nie dotykaj.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/EL-MINYA-300x202.jpg" },
        { id: "erg-abu-ramada", name: "Erg Abu Ramada", level: "Początkujący", type: "Ściana/Spadek", maxDepth: "30m", description: `Na południowy wschód od Abu Ramada (80 minut od Hurghady) znajduje się szeroka piaszczysta półka rozciągająca się na wschód. Tuż przed opadnięciem, trzy duże ergi wznoszą się z dna morskiego (18 m) tuż pod powierzchnią. Leżą w linii, największy na południu, a najmniejszy na północy. Łatwiej byłoby wymienić, czego nie widzisz, niż to, co widzisz – najbardziej oczywiste to mureny, napoleony, tuńczyki, barrakudy, szkoły jednorożców, groupery i chmura milionów małych anthiasów.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/ERG-ABU-RAMADA.jpg" },
        { id: "fanous-east", name: "Fanous East (Rafa Delfinów)", level: "Początkujący", type: "Ściana/Spadek", maxDepth: "27m", description: `Ta rafa ma kilka nazw: Torfa el Fanous (oznaczające "rafa z latarnią"), Rafa Delfinów lub Plac Zabaw Delfinów. To wąski pas rafy otaczający dużą lagunę na północny zachód od Giftun Kebir. Na jej wschodnim krańcu szeroki kanał dzieli rafę od lądu stałego, a na jej stokach znajduje się ogród koralowy i trzy kolorowe pinnacles. Nie jest niczym niezwykłym zobaczyć tu stadko 5 lub 6 delfinów nawet podczas nurkowania. Żółwie, niebieskoplamiste płaszczki, płaszczki orle, tuńczyki i barrakudy również tu mieszkają.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/FANOUS-EAST-300x206.jpg" },
        { id: "gota-abu-ramada", name: "Gota Abu Ramada (Akwarium)", level: "Początkujący", type: "Ściana/Spadek", maxDepth: "15m", description: `Ta rafa, znana również jako akwarium, leży między 50 a 90 minut od Hurghady. To eliptyczna rafa otoczona piaszczystym dnem na 12-15 m. Na zachodzie znajdują się dwa duże ergi, a na wschodzie trzy pinnacles i ogród koralowy. Na całej rafie, ale szczególnie na zachodnim krańcu, znajdują się żółte ryby, bannerfish, niebieskopoliczkowe motylki, maskowane motylki, żółte snappery, koziołki i sweetlips. Duże mureny, tuńczyki, żółwie, ryby krokodylowe i rzadziej płaszczki orle i rekiny lamparcie odwiedzają rafę.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/GOTA-ABU-RAMADA.jpg" },
        { id: "shaab-eshta", name: "Shaab Eshta", level: "Początkujący", type: "Ściana/Spadek", maxDepth: "12m", description: `Shaab Eshta to 45 minut do godziny od Hurghady. To właściwie dwa ergi, mały na północy, duży na południu. Głębokość waha się od 9 do 12 m i jest otoczona obszarami trawy żółwiowej. W trawie żółwiowej szukaj paczek skorpionowców, cesarzy niebiesko-prążkowanych, południowych płaszczek, żółwi i koników morskich. W szczelinie między ergami znajduje się szkoła koziołków plus sweetlips, snappery i na zboczu gruzu, skorpionowce, skorpionowce garbate i ryby krokodylowe.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/SHAAB-ESHTA-300x204.jpg" },
        { id: "small-giftun", name: "Small Giftun", level: "Początkujący", type: "Ściana/Spadek", maxDepth: "25m", description: `Około 80 minut od centrum Hurghady, naprzeciwko małej stacji policyjnej Giftun, znajduje się nurkowanie, które wywołuje więcej entuzjazmu niż jakiekolwiek inne. To drift wzdłuż ściany pokrytej gorgoniami, która łączy się z rozległą płytą i spadkiem. Płyta leży między 15 a 25 m, a ściana najwyraźniej nie ma dna. Na płycie napoleony i mureny są gwarantowane. Jest też wiele niebieskoplamistych płaszczek, malowanych triggerfish i ryb krokodylowych. Na spadku znajdują się żółwie, tuńczyki i wczesnym rankiem bardzo duża szansa na rekiny.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/SMALL-GIFTUN.jpg" },
        { id: "umm-gamaar", name: "Umm Gamaar", level: "Początkujący/Zaawansowany", type: "Ściana/Spadek/Drift", maxDepth: "40m", description: `Umm Gamaar to długi cienki pas rafy leżący na osi północ-południe, 90 minut na północ od Hurghady. Tam, gdzie wschodnia krawędź płyty łączy się ze ścianą, znajdują się trzy wieże koralowe. Pierwsza jest pusta i okrągła, wypełniona glassfish, podobnie jak druga, która jest wyższa i bardziej rzeźbiona w kształcie. Trzecia ma dużą piaszczystą jaskinię na 27 m. Wszystkie trzy są bogato owinięte fioletowymi miękkimi koralowcami i wirującą mgłą glassfish. Na płycie na pewno spotkasz napoleony, mureny, cornetfish, batfish i szkoły bannerfish.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/UMM-GAMAAR-300x202.jpg" }
      ]
    },
    safaga: {
      title: "Miejsca Nurkowe Safaga",
      subtitle: "Odkryj podwodny świat Safagi",
      mapImage: "/images/daily-dive/safaga-map.jpg",
      sites: [
        { id: "salem-express", name: "Salem Express", level: "Zaawansowany", type: "Wrak", maxDepth: "30m", description: `Około 90 minut od Safagi, na południe od Shaab Shehr. Ten wrak zatonął 15 grudnia 1991 roku, uderzył w rafę Hyndeman, rozrywając ogromną dziurę w kadłubie. Salem Express ma 110 m długości i 18 m szerokości. Leży na głębokości 12-33 m. Spoczywając na prawej burcie na 30 m wody, Salem Express jest upiornym nurkowaniem. Zacznij nurkowanie w najgłębszym punkcie, na rufie, gdzie znajdziesz dwa nietknięte duże śruby i stery. To morski grób i należy go traktować z szacunkiem. Nurkuj z szacunkiem.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/12/SALEM-EXPRESS.jpeg" },
        { id: "abu-kifan", name: "Abu Kifan", level: "Zaawansowany/Ekspert", type: "Ściana/Spadek/Drift", maxDepth: "26m", description: `Abu Kifan to długi cienki pas rafy 90 minut do 2 godzin od Safagi. Jego nazwa w przybliżeniu oznacza 'Ten Głęboki'. Jego ściany opadają pionowo od powierzchni poza 100 m. Na północy płyta rozciąga się w kierunku morza z dwoma wyraźnymi blokami koralowymi na środku. Ściany są pokryte miękkimi koralowcami, czarnymi koralowcami i gorgoniami. Żółwie są powszechne, a szare rekiny i srebrne tipsy są czasami widywane. Na północnej płycie szukaj dużych tuńczyków (1-1,5 m długości). Jest kilka dużych barrakud mieszkających.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/ABU-KIFAN.jpeg" },
        { id: "gamul-al-kabeir", name: "Gamul Al Kabeir", level: "Początkujący", type: "Ściana/Spadek", maxDepth: "15m", description: `Tuż na północ od Wyspy Shadwan i około 20 minut od Safagi znajduje się duża okrągła rafa znana jako Gamul al Kebeir. W jej centrum znajduje się idealna, okrągła laguna. Na południu znajduje się długa niepozorna rafa, a na północnym wschodzie trzy małe i kolorowe ergi. Ta rafa jest znana z groźnie wyglądającej szkoły (15-20) dużych barrakud 1,5 m+. Płaszczki orle są również powszechnie widywane tutaj, podobnie jak biało-płetwe rekiny i rzadziej krowy morskie. Wokół ergów znajdują się jednorożce, snappery, cesarze wielkookie, leszcze i ryby pilnikowe.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/GAMUL-AL-KABEIR.jpeg" },
        { id: "gamul-al-saghir", name: "Gamul Al Saghir", level: "Początkujący", type: "Ściana/Spadek", maxDepth: "20m", description: `Mniej niż 15 minut od Safagi leży Gamul al Saghir. To druga w łańcuchu raf rozciągających się na północ od Wyspy Safaga. Jest okrągła w kształcie z czterema ergami na południowym wschodzie. Na ergach szkoły leszczy, batfish, cesarzy wielkookich, sweetlips, bannerfish, fusiliers, czerwonych snapperów i czarnych snapperów. Polując na glassfish – grouper czerwono-pyski i skorpionowce. Na głównej rafie, wiewiórki, żołnierze, szklane oczy i kardynałki w wielu szczelinach. Niebieskoplamiste płaszczki wszędzie.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/GAMUL-AL-SAGHIR-300x208.jpeg" },
        { id: "middle-reef", name: "Middle Reef", level: "Początkujący/Zaawansowany/Ekspert", type: "Drift/Jaskinia", maxDepth: "20m", description: `90 minut do dwóch godzin od Safagi, Middle Reef to bardzo duża okrągła rafa z dziesiątkami małych, płytkich ergów na jej południowo-wschodnim krańcu. Po północnej i zachodniej stronie znajdują się ogrody koralowe, które opadają na około 30 m. Middle Reef jest nurkowane bardziej ze względu na malownicze koralowce niż życie ryb. Jednak wszystkie rodzaje papugoryb i triggerfish można zobaczyć w obfitości. Na spadkach, tuńczyki, makrele hiszpańskie, gigantyczne trevallies i szkoły chirurgów są zwykle widywane, plus okazjonalnie szare rekiny, biało-płetwe i późnym latem młoty.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/MIDDLE-REEF-300x207.jpeg" },
        { id: "panorama", name: "Panorama (Abu Alama)", level: "Zaawansowany/Ekspert", type: "Ściana/Spadek", maxDepth: "26m", description: `Panorama jest również znana jako 'Abu Alama' oznaczające 'Ojciec Masztu'. Leży 60-90 minut od Safagi. To eliptyczna rafa na osi północny zachód-południowy wschód. Na północnym krańcu znajduje się dramatyczna płyta (15-25 m) i spadek. Północna płyta – jeśli jest duże i żyje w morzu, możesz to zobaczyć tutaj. Szkoły chirurgów, szkoły jednorożców, szkoły barrakud, gigantyczne trevallies, biało-płetwe, szare rekiny, płaszczki orle, delfiny, srebrne tipsy, a nawet longimanus, oceaniczny biało-płety. Wszędzie są żółwie.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/Panorama-300x184.jpeg" },
        { id: "shaab-shehr", name: "Shaab Shehr", level: "Początkujący/Zaawansowany", type: "Ściana/Spadek", maxDepth: "30m", description: `Około 70 minut od Safagi. Rafa ma kształt podkowy o długości ponad 1 km. To doskonałe kotwicowisko z trzema doskonałymi miejscami nurkowymi w pobliżu. Ilustracja pokazuje wschodni koniec Shaab Shehr, gdzie trzy ergi tworzą kanał z główną rafą. Na zewnątrz znajduje się rozległy ogród koralowy mózgu z księżycową atmosferą, a w trzech ergach znajdują się wspaniałe jaskinie i groty. To miejsce jest nurkowane ze względu na unikalny księżycowy krajobraz. Nadal zobaczysz wszystkie gatunki triggerfish – picasso, czerwono-płetwe, pomarańczowo-prążkowane, tytany i żółto-płetwe triggerfish.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/SHAAB-SHEHR.jpeg" },
        { id: "tobia-al-kabeir", name: "Tobia Al Kabeir", level: "Początkujący/Zaawansowany", type: "Ściana/Spadek/Nocne", maxDepth: "18m", description: `Dziesięć minut na południowy wschód od Wyspy Tobia i tylko 30 minut od Safagi znajduje się jedna duża prostokątna rafa z łańcuchem trzech ergów rozciągających się na południe. Wiele gatunków triggerfish jest tutaj reprezentowanych – czerwono-prążkowane, malowane, półksiężycowe, tytany i ryby picasso. Abudjubbe wrasse, slingjaw wrasse i szczególnie broomtail wrasse obfitują. Ta jaskrawo pomalowana ryba to drag-queen rafy koralowej. Latem to miejsce jest czasami odwiedzane przez delfiny butlonose.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/TOBIA-AL-KABEIR.jpeg" }
      ]
    },
    marsaAlam: {
      title: "Miejsca Nurkowe Marsa Alam",
      subtitle: "Odkryj południowy podwodny świat",
      mapImage: "/images/daily-dive/marsa-alam-map.jpg",
      sites: [
        { id: "abu-dabbab", name: "Zatoka Marsa Abu Dabbab", level: "Początkujący/Zaawansowany", type: "Brzeg/Drift", maxDepth: "18m", description: `20 minut od zatoki portu Ghalib. Abu Dabbab to częściowo zamknięta zatoka w kształcie litery U z jedną z najlepszych piaszczystych plaż na jej najbardziej wysuniętym na zachód brzegu i jedną z największych piaszczystych zatok z trawą morską w regionie. Abu Dabbab jest powszechnie znany jako Zatoka Żółwi i dom unikalnego dugonga, krowy morskiej. Tutaj będziesz miał szansę spotkać oko w oko z urzekającymi gigantycznymi żółwiami morskimi. Plaża z wejściem do wody ma łatwy dostęp do wód o głębokości 1-3 metrów.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "elphinstone", name: "Rafa Elphinstone", level: "Zaawansowany/Ekspert", type: "Ściana/Spadek/Drift", maxDepth: "40m", description: `To jedno z najsłynniejszych miejsc nurkowych w Egipcie. 29 km na północ od Marsa Alam. Położona na pełnym morzu, Elphinstone to rafa o długości 600 metrów, sięgająca od 5 metrów do ponad 100 metrów głębokości. Spektakularne podwodne życie z mnóstwem ryb i wspaniałymi spadkami. Lokalizacja, środowisko i formacja rafy sprawiają, że to miejsce jest jednym z najważniejszych dla rekinów, takich jak oceaniczny biało-płety i rekin młot. Będziesz również mógł obserwować szkoły snapperów, anthiasów, fusilierów, tuńczyków, trevallies, ale także Napoleon, żółwie i gigantyczne barrakudy.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "marsa-mubarak", name: "Marsa Mubarak", level: "Początkujący/Zaawansowany", type: "Drift", maxDepth: "25m", description: `Marsa Mubarak to dobrze znane miejsce nurkowe na południu i kiedyś był dużym parkiem narodowym. Składa się z zatoki z rafą na północy i południu. Z piaszczystym dnem i zamkniętym dużym obszarem trawy morskiej w środku zatoki. Gdy wchodzisz do wody, płyniesz spokojnie w kierunku otwartego morza, uważnie obserwując każdy ruch. Żółwie zwykle można znaleźć żujące trawę morską lub na powierzchni, gdy wynurzają się po powietrze. Dugong jest nieco mniej przewidywalny i jest element szczęścia, aby go zobaczyć.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "marsa-shouni-kebir", name: "Marsa Shouni Kebir", level: "Początkujący/Zaawansowany", type: "Brzeg/Drift", maxDepth: "25m", description: `49 km na północ od Marsa Alam. Ras Shouna to róg, a na zewnątrz na północ od Shauny jest unikalny ze względu na rozległą piaszczystą płytę. Usłaną koralowcami stołowymi o wszystkich kształtach i rozmiarach, wybierz swoją głębokość na łagodnym zboczu i zobacz, co się ukrywa pod każdym. Oczywiście niebieskoplamiste płaszczki są obfite, ale o pewnych porach roku pojawiają się płaszczki gitarowe i inne niespodzianki. Życie morskie obejmuje płaszczki gitarowe, płaszczki orle, mureny śródziemnomorskie, żółwie, napoleonfish, tuńczyki, amberjack, clownfish i sweetlips.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "marsa-shouni-soraya", name: "Marsa Shouni Soraya", level: "Początkujący/Zaawansowany", type: "Brzeg/Drift", maxDepth: "25m", description: `Marsa Shouni Soraya to bardzo wąska zatoka. To godzina łodzią na południe od Port Ghalib. Składa się z trzech bardzo różnych miejsc nurkowych: Nos Wa Nos, Talata Tabba i El Lesan. Talata Tabba oferuje tapiserię miękkich koralowców, mullet i niebieskoplamistych płaszczek. W dwóch innych rafach krajobraz jest zupełnie inny. Nos Wa Nos składa się z 3 pinnacles z dużymi barrakudami i płaszczkami. W El Lesan natrafiasz na język rafy i piaszczystą płytę pełną pięknych koralowców. Na płytkiej wodzie szukaj dobrze kamuflujących się ryb, takich jak skorpionowce i ryby krokodylowe.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "shaab-marsa-alam", name: "Shaab Marsa Alam", level: "Początkujący/Ekspert", type: "Drift/Pinnacle", maxDepth: "30m", description: `Położony 4 km na południowy wschód od Marsa Alam, w kierunku otwartego morza, dostępny łodzią. Duża półkolista rafa w kształcie "fasoli", otoczona piaszczystym dnem, pełna formacji skalnych i raf. Część północno-wschodnia jest domem bogatego ogrodu koralowego, opadającego w głąb. W części wewnętrznej, w pobliżu dużej skały, na głębokości 11-12 metrów, znajdujemy mały wrak, około 25 metrów długości. Głównie bannerfish, ale także jednorożce, cesarskie ryby anioł i rozdymki.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "abu-dabbab-ii", name: "Abu Dabbab II", level: "Początkujący/Zaawansowany/Ekspert", type: "Jaskinia/Ogród Koralowy", maxDepth: "18m", description: `Położony 27 km na północny wschód od Marsa Alam, dostępny łodzią/zodiakiem. To dwie duże okrągłe rafy, charakteryzujące się ogrodami miękkich i twardych koralowców (koralowce grzybowe, Acropora, staghorn i wiele innych gatunków) w częściach zewnętrznych. Część wewnętrzna jest słynna z kanionów i pinnacles. Możesz znaleźć wrak "One Heaven", małą łódź leżącą na głębokości 14 metrów. Tutaj możesz wyraźnie zobaczyć "walkę" między koralowcami o dotarcie do światła i możesz pływać, obserwując prawie każdy rodzaj ryb – płaszczki, napoleon fish, snappery, mureny, rekiny.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" }
      ]
    }
  }
};

const dailyDiveRU: DailyDiveTranslations = {
  page: {
    title: "Ежедневные Дайв-Туры",
    subtitle: "Наслаждайтесь Красным морем – 1 день / 2 погружения",
    description: `Почувствуйте магию Красного моря с нашими ежедневными дайв-приключениями. Независимо от того, являетесь ли вы сертифицированным дайвером или пробуете дайвинг впервые, наши ежедневные дайв-туры предлагают незабываемое подводное путешествие через яркие коралловые рифы и разнообразную морскую жизнь.

Наши ежедневные дайв-туры начинаются в 8:30 и заканчиваются в 16:00. При благоприятных погодных условиях и течениях мы посещаем два разных места для дайвинга каждый день, обеспечивая разнообразие и наилучший опыт.

Первая остановка запланирована через 35-45 минут плавания (или 60-90 минут в зависимости от местоположения). Во время путешествия вы познакомитесь с другими пассажирами и экипажем. Дайв-мастер проведет брифинг на борту о местах дайвинга и процедурах безопасности.

После каждого погружения вы можете принять участие в брифинге или идентификации флоры и фауны, которую вы наблюдали под водой. Фактическое время дайвинга определяется вашим потреблением воздуха, местным течением и размером места дайвинга.`,
    itinerary: `Ежедневное Расписание

Утренний трансфер (7:30-8:30): Комфортабельный трансфер с кондиционером из вашего отеля.

Отправление из марины (~9:00): Поднимитесь на борт лодки, познакомьтесь с гидом и насладитесь брифингом за чаем или кофе.

Первое погружение (~10:00): Погружение на одном из знаменитых мест Красного моря.

Поверхностный интервал и обед: Отдохните на солнечной палубе, насладитесь закусками и напитками, а также свежеприготовленным обедом «шведский стол», пока мы плывем к следующему месту.

Второе погружение (~13:30): Исследуйте другой профиль рифа, встречая новые морские пейзажи и жизнь.

Возвращение и трансфер (16:00-17:00): Вернитесь в марину, прежде чем трансфер отвезет вас в отель.`,
    included: "Что включено",
    includedItems: [
      "12-литровые баллоны и грузы",
      "Трансфер из/в отель в Хургаде/Марса Алам/Сафаге",
      "Горячий обед на борту с безалкогольными напитками",
      "Бесплатная вода, чай и кофе весь день",
      "Профессиональный гид по дайвингу",
      "Страховка для дайвинга",
      "Взносы в Национальный парк Красного моря"
    ],
    excluded: "Не включено",
    excludedItems: [
      "Аренда дайверского снаряжения (доступна за 20 €/день)",
      "Найтрокс (8 €/погружение)",
      "Чаевые экипажу и гиду (по желанию)",
      "Аренда дайверской камеры (20 €/день)"
    ],
    refundPolicy: "Политика отмены и возврата",
    refundIntro: "Мы хотим, чтобы вы сосредоточились на веселье и приключениях – а не на платежах. Ваше бронирование защищено.",
    refundItems: [
      "Более 3 дней до выезда: 100% возврат",
      "Менее 3 дней до выезда: 50% возврат",
      "За день до, в тот же день или неявка: Без возврата",
      "Отмена из-за погоды: Полный возврат или бесплатное перенос бронирования"
    ],
    whatToBring: "Что взять с собой",
    whatToBringItems: [
      "Копия действительного паспорта",
      "Медицинская справка от врача о пригодности к дайвингу",
      "Полотенце и купальник",
      "Солнцезащитный крем и шляпа",
      "Сертификат и дайверский журнал (для сертифицированных дайверов)"
    ],
    bookNow: "Забронировать сейчас"
  },
  locations: {
    hurghada: {
      title: "Места для Дайвинга Хургада",
      subtitle: "Исследуйте подводный мир Хургады",
      mapImage: "/images/daily-dive/hurghada-map.jpg",
      sites: [
        { id: "abu-hashish", name: "Abu Hashish", level: "Начинающий", type: "Стена/Спад", maxDepth: "18м", description: `Abu Hashish – это остров в центре широкого залива в 90 минутах к югу от Хургады. Язык рифа простирается примерно на 1 км к югу от острова. Место дайвинга находится на его самой южной точке с полкой между 15 и 22 м снаружи, а за ней крутой спад с превосходной видимостью. Морская жизнь включает пелагических рыб, таких как ставриды, барракуды, испанские макрели, белопёрые акулы и иногда акулы-молоты. На полке вы найдёте черепах, голубопятнистых скатов, испанских танцоров, мурен и груперов.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/12/Abu-Hashish-e1612094240465.jpg" },
        { id: "banana-reef", name: "Banana Reef", level: "Начинающий/Продвинутый", type: "Дрифт/Макро", maxDepth: "18м", description: `Прямо за концом Ben el Gebel в середине пролива Giftun сидит Banana Reef. Это риф в форме Y, лежащий на мелководье (15 м). Северо-восточная точка имеет несколько мелких пещер, в то время как северо-западная точка имеет особенно потрясающий эрг. За ним находится 4-метровый пинакл, покрытый фиолетовыми мягкими кораллами. Морская жизнь включает bannerfish, единорогов, императорских рыб-ангелов и рыб-ежей.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/12/bananreef-e1612094227322-300x216.jpg" },
        { id: "careless-reef", name: "Careless Reef", level: "Продвинутый/Эксперт", type: "Стена/Спад", maxDepth: "25м", description: `Примерно в одном часе к северо-востоку от Хургады, морская рифовая платформа поднимается из глубин. Она в основном в диапазоне 12-25 м, плавно опускаясь до 22-24 м на краях, где круто обрывается. На платформе стоят два эрга, окружённые лесом кораллов, который кишит рыбой. Это место кишит всем – свободно плавающими муренами, белопёрыми акулами, черепахами, тунцами, гигантскими тревалли, огромными групперами и ранним утром акулами-молотами.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/CARELESS-REEF.jpg" },
        { id: "el-erug", name: "El Erug", level: "Начинающий/Продвинутый/Эксперт", type: "Пинаклы", maxDepth: "14м", description: `Примерно в 60 минутах от центра Хургады. Довольно защищённое к югу от островов Giftun, это хороший выбор для всех уровней дайверов и тренировок. На самом деле есть три места: начиная с юго-запада с Erug Diana, через Erug Giftun в середине и, наконец, Erug Gigi на северо-востоке. Это место является средой обитания различных видов мурен, включая желторотых, гигантских, снежных и перечных. Вы также можете столкнуться с наполеоном-губаном, голубопятнистыми скатами, крокодиловыми рыбами и скорпенами.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/EL-ERUG-300x209.jpg" },
        { id: "el-fanadir", name: "El Fanadir", level: "Начинающий/Продвинутый", type: "Стена/Спад/Дрифт", maxDepth: "25м", description: `Fanadir – это длинный узкий риф к северу от Хургады. Мелкая твёрдая коралловая стена наклоняется примерно на 60° к песчаной кромке на 12 м. Эта песчаная кромка имеет ширину около 50 м и сужается по мере движения на север. На 20-25 м она обрывается на большую глубину. Это место кишит рыбами-иглами, скорпенами и горбатыми скорпенами. Вблизи поверхности кишат серебрянки и иногда небольшие стаи тунцов и ставрид кружат, охотясь на них.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/EL-FANADIR-300x211.jpg" },
        { id: "el-mina", name: "Wrak El Mina", level: "Продвинутый", type: "Wrak/Дрифт", maxDepth: "32м", description: `Прямо к востоку от порта Хургады, El Mina – это египетский тральщик, затонувший около 1969 года израильскими истребителями. Он покоится на скалистом морском дне, наклоняясь от 25 м под носом до 32 м на корме. Wrak лежит на левом борту. Кормовая часть усеяна лебёдками и зенитными орудиями, в то время как носовые орудия были срезаны. Область взрывной дыры подходит для проникновения. Вокруг, на морском дне, находятся живые снаряды – смотрите, но не трогайте.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/EL-MINYA-300x202.jpg" },
        { id: "erg-abu-ramada", name: "Erg Abu Ramada", level: "Начинающий", type: "Стена/Спад", maxDepth: "30м", description: `На юго-востоке Abu Ramada (80 минут от Хургады) находится широкая песчаная полка, простирающаяся на восток. Прямо перед тем, как она обрывается, три больших эрга поднимаются из морского дна (18 м) прямо под поверхностью. Они лежат в линию, самый большой на юге, а самый маленький на севере. Легче было бы перечислить то, чего вы не видите, чем то, что видите – наиболее очевидны мурены, наполеоны, тунцы, барракуды, стаи единорогов, груперы и облако миллионов мелких анфий.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/ERG-ABU-RAMADA.jpg" },
        { id: "fanous-east", name: "Fanous East (Риф Дельфинов)", level: "Начинающий", type: "Стена/Спад", maxDepth: "27м", description: `Этот риф имеет несколько названий: Torfa el Fanous (означает "риф с маяком"), Риф Дельфинов или Детская площадка Дельфинов. Это узкая полоса рифа, окружающая большую лагуну к северо-западу от Giftun Kebir. На его восточном конце широкий канал разделяет риф от материка, а на его склонах находятся коралловый сад и три цветных пинакла. Не редкость увидеть стаю из 5 или 6 дельфинов здесь даже во время дайвинга. Черепахи, голубопятнистые скаты, скаты-орлы, ставриды и барракуды также обитают здесь.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/FANOUS-EAST-300x206.jpg" },
        { id: "gota-abu-ramada", name: "Gota Abu Ramada (Аквариум)", level: "Начинающий", type: "Стена/Спад", maxDepth: "15м", description: `Этот риф, также известный как аквариум, лежит между 50 и 90 минутами от Хургады. Это эллиптический риф, окружённый песчаным дном на 12-15 м. На западе находятся два больших эрга, а на востоке три пинакла и коралловый сад. По всему рифу, но особенно на западном конце, есть жёлтые рыбы, bannerfish, голубощёкие бабочки, маскированные бабочки, жёлтые снэпперы, козлы и сладкогубки. Большие мурены, ставриды, черепахи, крокодиловые рыбы и реже скаты-орлы и леопардовые акулы посещают риф.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/GOTA-ABU-RAMADA.jpg" },
        { id: "shaab-eshta", name: "Shaab Eshta", level: "Начинающий", type: "Стена/Спад", maxDepth: "12м", description: `Shaab Eshta находится в 45 минутах до одного часа от Хургады. Это в основном два эрга, маленький на севере, большой на юге. Глубина варьируется от 9 до 12 м, и он окружён участками черепаховой травы. В черепаховой траве ищите стаи скорпенов, голубополосых императоров, южных скатов, черепах и морских коньков. В зазоре между эргами находится стая козлов плюс сладкогубки, снэпперы и на обломочном склоне скорпены, горбатые скорпены и крокодиловые рыбы.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/SHAAB-ESHTA-300x204.jpg" },
        { id: "small-giftun", name: "Small Giftun", level: "Начинающий", type: "Стена/Спад", maxDepth: "25м", description: `Примерно в 80 минутах от центра Хургады, напротив маленькой полицейской станции Giftun, есть дайв, который вызывает больше энтузиазма, чем любой другой. Это дрифт вдоль стены, покрытой горгониями, которая сливается с обширной платформой и спадом. Платформа лежит между 15 и 25 м, а стена, по-видимому, не имеет дна. На платформе наполеоны и мурены гарантированы. Также много голубопятнистых скатов, расписных спинорогов и крокодиловых рыб. На спаде находятся черепахи, ставриды и ранним утром очень хороший шанс на акул.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/SMALL-GIFTUN.jpg" },
        { id: "umm-gamaar", name: "Umm Gamaar", level: "Начинающий/Продвинутый", type: "Стена/Спад/Дрифт", maxDepth: "40м", description: `Umm Gamaar – это длинная тонкая полоса рифа, лежащая на оси север-юг, в 90 минутах к северу от Хургады. Там, где восточный край платформы сливается со стеной, находятся три коралловые башни. Первая полая и круглая, заполнена стеклянными рыбами, как и вторая, которая выше и более скульптурна по форме. Третья имеет большую песчаную пещеру на 27 м. Все три богато покрыты фиолетовыми мягкими кораллами и кружащимся туманом стеклянных рыб. На платформе вы обязательно встретите наполеонов, мурен, cornetfish, batfish и стаи bannerfish.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/UMM-GAMAAR-300x202.jpg" }
      ]
    },
    safaga: {
      title: "Места для Дайвинга Сафага",
      subtitle: "Исследуйте подводный мир Сафаги",
      mapImage: "/images/daily-dive/safaga-map.jpg",
      sites: [
        { id: "salem-express", name: "Salem Express", level: "Продвинутый", type: "Wrak", maxDepth: "30м", description: `Примерно в 90 минутах от Сафаги, к югу от Shaab Shehr. Этот wrak затонул 15 декабря 1991 года, ударившись о риф Hyndeman, разорвав огромную дыру в корпусе. Salem Express имеет длину 110 м и ширину 18 м. Он лежит на глубине 12-33 м. Покоясь на правом борту на 30 м воды, Salem Express – это жуткий дайв. Начните дайв в самой глубокой точке, на корме, где вы найдёте два нетронутых больших винта и рули. Это морская могила, и её следует уважать. Ныряйте с уважением.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/12/SALEM-EXPRESS.jpeg" },
        { id: "abu-kifan", name: "Abu Kifan", level: "Продвинутый/Эксперт", type: "Стена/Спад/Дрифт", maxDepth: "26м", description: `Abu Kifan – это длинная тонкая полоса рифа в 90 минутах до 2 часов от Сафаги. Его название примерно переводится как 'Глубокий'. Его стены вертикально опускаются от поверхности за отметку 100 м. На севере платформа простирается в море с двумя заметными коралловыми блоками посередине. Стены покрыты мягкими кораллами, чёрными кораллами и горгониями. Черепахи обычны, а серые рифовые акулы и серебристые акулы иногда видны. На северной платформе ищите больших тунцов (1-1,5 м в длину). Здесь обитают несколько больших барракуд.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/ABU-KIFAN.jpeg" },
        { id: "gamul-al-kabeir", name: "Gamul Al Kabeir", level: "Начинающий", type: "Стена/Спад", maxDepth: "15м", description: `Прямо к северу от острова Shadwan и примерно в 20 минутах от Сафаги находится большой круглый риф, известный как Gamul al Kebeir. В его центре находится идеальная круглая лагуна. К югу находится длинный неприметный риф, а на северо-востоке три маленьких и цветных эрга. Этот риф известен злобно выглядящей стаей (15-20) больших барракуд 1,5 м+. Скаты-орлы также часто видны здесь, как и белопёрые акулы и реже морские коровы. Вокруг эргов находятся единороги, снэпперы, большеглазые императоры, лещи и рыбки-пилы.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/GAMUL-AL-KABEIR.jpeg" },
        { id: "gamul-al-saghir", name: "Gamul Al Saghir", level: "Начинающий", type: "Стена/Спад", maxDepth: "20м", description: `Менее чем в 15 минутах от Сафаги лежит Gamul al Saghir. Это второй в цепи рифов, простирающихся на север от острова Сафага. Он круглой формы с четырьмя эргами на юго-востоке. На эргах стаи лещей, batfish, большеглазых императоров, сладкогубок, bannerfish, фузилеров, красных снэпперов и чёрных снэпперов. Охотясь на стеклянных рыб – красно-ротые груперы и скорпены. На главном рифе белки, солдаты, стеклянные глаза и кардиналы во многих щелях. Голубопятнистые скаты повсюду.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/GAMUL-AL-SAGHIR-300x208.jpeg" },
        { id: "middle-reef", name: "Middle Reef", level: "Начинающий/Продвинутый/Эксперт", type: "Дрифт/Пещера", maxDepth: "20м", description: `От 90 минут до двух часов от Сафаги, Middle Reef – это очень большой круглый риф с десятками маленьких, мелких эргов на его юго-восточном крае. На северной и западной сторонах находятся коралловые сады, которые обрываются примерно на 30 м. Middle Reef ныряют больше из-за живописных кораллов, чем из-за жизни рыб. Однако все виды попугаев и спинорогов можно увидеть в изобилии. На спадах обычно видны тунцы, испанские макрели, гигантские тревалли и стаи хирургов, плюс иногда серые рифовые акулы, белопёрые и поздним летом акулы-молоты.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/MIDDLE-REEF-300x207.jpeg" },
        { id: "panorama", name: "Panorama (Abu Alama)", level: "Продвинутый/Эксперт", type: "Стена/Спад", maxDepth: "26м", description: `Panorama также известна как 'Abu Alama', что означает 'Отец Мачты'. Она лежит в 60-90 минутах от Сафаги. Это эллиптический риф на оси северо-запад-юго-восток. На северном конце находится драматическая платформа (15-25 м) и спад. Северная платформа – если это большое и живёт в море, вы можете увидеть это здесь. Стаи хирургов, стаи единорогов, стаи барракуд, гигантские тревалли, белопёрые, серые рифовые акулы, скаты-орлы, дельфины, серебристые акулы и даже longimanus, океанический белопёр. Везде черепахи.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/Panorama-300x184.jpeg" },
        { id: "shaab-shehr", name: "Shaab Shehr", level: "Начинающий/Продвинутый", type: "Стена/Спад", maxDepth: "30м", description: `Примерно в 70 минутах от Сафаги. Риф имеет форму подковы длиной более 1 км. Это отличная якорная стоянка с тремя отличными местами для дайвинга поблизости. Иллюстрация показывает восточный конец Shaab Shehr, где три эрга образуют канал с главным рифом. Снаружи находится обширный коралловый сад мозга с лунной атмосферой, а в трёх эргах находятся превосходные пещеры и гроты. Это место ныряют из-за уникального лунного пейзажа. Вы всё равно увидите все виды спинорогов – пикассо, красно-плавниковые, оранжево-полосатые, титаны и желто-плавниковые спинороги.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/SHAAB-SHEHR.jpeg" },
        { id: "tobia-al-kabeir", name: "Tobia Al Kabeir", level: "Начинающий/Продвинутый", type: "Стена/Спад/Ночной", maxDepth: "18м", description: `В десяти минутах к юго-востоку от острова Tobia и всего в 30 минутах от Сафаги находится один большой прямоугольный риф с цепью из трёх эргов, простирающихся на юг. Многие виды спинорогов представлены здесь – красно-полосатые, расписные, полумесяцевые, титаны и рыбы пикассо. Abudjubbe wrasse, slingjaw wrasse и особенно broomtail wrasse в изобилии. Эта ярко окрашенная рыба – drag-queen кораллового рифа. Летом это место иногда посещают дельфины-афалины.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2020/11/TOBIA-AL-KABEIR.jpeg" }
      ]
    },
    marsaAlam: {
      title: "Места для Дайвинга Марса Алам",
      subtitle: "Исследуйте южный подводный мир",
      mapImage: "/images/daily-dive/marsa-alam-map.jpg",
      sites: [
        { id: "abu-dabbab", name: "Залив Марса Абу Даббаб", level: "Начинающий/Продвинутый", type: "Берег/Дрифт", maxDepth: "18м", description: `В 20 минутах от залива порта Ghalib. Абу Даббаб – это частично закрытый залив в форме буквы U с одним из лучших песчаных пляжей на его самом западном берегу и одним из крупнейших песчаных заливов с морской травой в регионе. Абу Даббаб широко известен как Залив Черепах и дом уникального дюгоня, морской коровы. Здесь у вас будет шанс встретиться лицом к лицу с завораживающими гигантскими морскими черепахами. Пляж с входом в воду имеет лёгкий доступ к водам глубиной 1-3 метра.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "elphinstone", name: "Риф Эльфинстоун", level: "Продвинутый/Эксперт", type: "Стена/Спад/Дрифт", maxDepth: "40м", description: `Это одно из самых известных мест для дайвинга в Египте. В 29 км к северу от Марса Алам. Расположенный в открытом море, Эльфинстоун – это риф длиной 600 метров, простирающийся от 5 метров до более 100 метров в глубину. Зрительная подводная жизнь с множеством рыб и прекрасными спадами. Расположение, окружающая среда и формирование рифа делают это место одним из самых важных для акул, таких как океанический белопёр и акула-молот. Вы также сможете наблюдать стаи снэпперов, анфий, фузилеров, тунцов, тревалли, а также Наполеонов, черепах и гигантских барракуд.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "marsa-mubarak", name: "Марса Мубарак", level: "Начинающий/Продвинутый", type: "Дрифт", maxDepth: "25м", description: `Марса Мубарак – это хорошо известное место для дайвинга на юге и когда-то было большим национальным парком. Оно состоит из залива с рифом на севере и юге. С песчаным дном и закрытой большой зоной морской травы в середине залива. Когда вы входите в воду, спокойно плывите к открытому морю, внимательно наблюдая за любым движением. Черепах обычно можно найти жующими морскую траву или на поверхности, когда они поднимаются за воздухом. Дюгонь немного менее предсказуем, и есть элемент удачи, чтобы увидеть его.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "marsa-shouni-kebir", name: "Марса Шуни Кебир", level: "Начинающий/Продвинутый", type: "Берег/Дрифт", maxDepth: "25м", description: `В 49 км к северу от Марса Алам. Рас Шуна – это угол, а снаружи на север от Шауны уникален своей обширной песчаной плитой. Усеян столовыми кораллами всех форм и размеров, выберите свою глубину на пологом склоне и посмотрите, что скрывается под каждым. Конечно, голубопятнистые скаты в изобилии, но в определённое время года появляются скаты-гитары и другие сюрпризы. Морская жизнь включает скатов-гитар, скатов-орлов, средиземноморских мурен, черепах, наполеонов, тунцов, амберджаков, клоунов и сладкогубок.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "marsa-shouni-soraya", name: "Марса Шуни Сорая", level: "Начинающий/Продвинутый", type: "Берег/Дрифт", maxDepth: "25м", description: `Марса Шуни Сорая – это очень узкий залив. Это час на лодке к югу от Порт Галиб. Он состоит из трёх очень разных мест для дайвинга: Nos Wa Nos, Talata Tabba и El Lesan. Talata Tabba предлагает гобелен мягких кораллов, кефали и голубопятнистых скатов. В двух других рифах пейзаж совершенно другой. Nos Wa Nos состоит из 3 пинаклов с большими барракудами и скатами. В El Lesan вы натыкаетесь на язык рифа и песчаную платформу, полную красивых кораллов. На мелководье ищите хорошо замаскированных рыб, таких как скорпены и крокодиловые рыбы.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "shaab-marsa-alam", name: "Shaab Marsa Alam", level: "Начинающий/Эксперт", type: "Дрифт/Пинакл", maxDepth: "30м", description: `Расположен в 4 км к юго-востоку от Марса Алам, в направлении открытого моря, доступен на лодке. Большой полукруглый риф в форме "боба", окружённый песчаным дном, полный скальных образований и рифов. Северо-восточная часть является домом богатого кораллового сада, спускающегося в глубину. Во внутренней части, рядом с большой скалой, на глубине 11-12 метров, мы находим маленький wrak, около 25 метров в длину. В основном bannerfish, но также единороги, императорские рыбы-ангелы и рыбы-ежи.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" },
        { id: "abu-dabbab-ii", name: "Abu Dabbab II", level: "Начинающий/Продвинутый/Эксперт", type: "Пещера/Коралловый Сад", maxDepth: "18м", description: `Расположен в 27 км к северо-востоку от Марса Алам, доступен на лодке/зодиаке. Это два больших круглых рифа, характеризующихся садами мягких и твёрдых кораллов (грибные кораллы, Acropora, staghorn и многие другие виды) во внешних частях. Внутренняя часть известна своими каньонами и пинаклами. Вы можете найти wrak "One Heaven", маленькую лодку, лежащую на глубине 14 метров. Здесь вы можете ясно увидеть "борьбу" между кораллами за свет, и вы можете плавать, наблюдая почти каждый вид рыб – скаты, наполеоны, снэпперы, мурены, акулы.`, image: "https://swisswellnessdive.ch/wp-content/uploads/2021/02/coming-soon.jpg" }
      ]
    }
  }
};

const dailyDives = { en: dailyDiveEN, pl: dailyDivePL, ru: dailyDiveRU };

export function getDailyDiveTranslations(lang: string) {
  return dailyDives[lang as keyof typeof dailyDives] || dailyDiveEN;
}

export function getAllDiveSites(lang: string) {
  const data = getDailyDiveTranslations(lang);
  return [
    ...data.locations.hurghada.sites.map(s => ({ ...s, region: 'hurghada' })),
    ...data.locations.safaga.sites.map(s => ({ ...s, region: 'safaga' })),
    ...data.locations.marsaAlam.sites.map(s => ({ ...s, region: 'marsaAlam' }))
  ];
}

export function getDiveSiteById(id: string, lang: string) {
  const sites = getAllDiveSites(lang);
  return sites.find(s => s.id === id);
}
