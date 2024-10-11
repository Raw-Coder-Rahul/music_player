// Define playlists
const playlists = {
    anger: {
        songs: [
            { name: 'Alpha Mission - Jimena Contreras', file: 'music/anger/Alpha Mission - Jimena Contreras.mp3' },
            { name: 'Atlantis Rage - Jimena Contreras', file: 'music/anger/Atlantis Rage - Jimena Contreras.mp3' },
            { name: 'Chasing Time - SYBS', file: 'music/anger/Chasing Time - SYBS.mp3' },
            { name: 'Goddess of the Sea - Jimena Contreras', file: 'music/anger/Goddess of the Sea - Jimena Contreras.mp3' },
            { name: 'Head of The Snake - Everet Almond', file: 'music/anger/Head of The Snake - Everet Almond.mp3' },
            { name: 'Restless Natives - Doug Maxwell_Media Right Productions', file: 'music/anger/Restless Natives - Doug Maxwell_Media Right Productions.mp3' },
            { name: 'Sci-Fi Swamp Chase - Sir Cubworth', file: 'music/anger/Sci-Fi Swamp Chase - Sir Cubworth.mp3' }
        ],
        images: [
            'music/anger/images/depositphotos_279613010-stock-photo-electronic-wall-with-bas-relief.webp',
            'music/anger/images/image-angry-demon-lion-terrifying-flames-dark-background-wildlife-animals-illustration-generative-ai_132416-7316.avif',
            'music/anger/images/image-angry-demon-panda-terrifying-flames-dark-background-wildlife-animals-illustration-generative-ai_132416-6030.avif',
            'music/anger/images/wp12867941.jpg'
        ]
    },
    calm: {
        songs: [
            { name: 'A Stroll Alone - Everet Almond', file: 'music/Calm/A Stroll Alone - Everet Almond.mp3' },
            { name: 'Any Thing You Can Dream - The Whole Other', file: 'music/Calm/Any Thing You Can Dream - The Whole Other.mp3' },
            { name: 'First Dream - Brian Bolger.mp3', file: 'music/Calm/First Dream - Brian Bolger.mp3' },
            { name: 'In Memory of Jean Talon - The Mini Vandals.', file: 'music/Calm/In Memory of Jean Talon - The Mini Vandals.mp3' },
            { name: 'In the Temple Garden - Aaron Kenny', file: 'music/Calm/In the Temple Garden - Aaron Kenny.mp3' },
            { name: 'No.7 Alone With My Thoughts - Esther Abrami', file: 'music/calm/No.7 Alone With My Thoughts - Esther Abrami.mp3' },
            { name: 'Pastorale - Joel Cummins', file: 'music/Calm/Pastorale - Joel Cummins.mp3' },
            { name: 'Star Spangled Banner - Cooper Cannell', file: 'music/Calm/Star Spangled Banner - Cooper Cannell.mp3' },
            { name: 'Yoga Style - Chris Haugen', file: 'music/Calm/Yoga Style - Chris Haugen.mp3' }
        ],
        images: [
            'music/Calm/images/9f2e38cf-39cf-4cc8-9505-3eeb56d1028f.avif',
            'music/Calm/images/blurry-sunset-reflected-water_303714-28227.avif',
            'music/Calm/images/calm-aesthetic-desktop-em3zhejov40rr4yj.jpg',
            'music/Calm/images/HD-wallpaper-day-and-night-stars-space-beautiful-clouds-fog-planet-universe-dark-love-peaceful-day-night.jpg',
            'music/Calm/images/hq720.jpg',
            'music/Calm/images/images.jpg',
            'music/Calm/images/man-is-rowing-boat-lake-with-mountains-star-filled-sky_1306097-79022.avif'
        ]
    },
    dark: {
        songs: [
            { name: 'A Stroll Alone - Everet Almond', file: 'music/Dark/Alien or Cake - Jimena Contreras.mp3' },
            { name: 'Any Thing You Can Dream - The Whole Other', file: 'music/Dark/Cosmic Nightmares - Jimena Contreras.mp3' },
            { name: 'First Dream - Brian Bolger.mp3', file: 'music/Dark/Dead Wrong - Jeremy Blake.mp3' },
            { name: 'In Memory of Jean Talon - The Mini Vandals.', file: 'music/Dark/Deep Space Sector 9 - Ezra Lipp.mp3' },
            { name: 'In the Temple Garden - Aaron Kenny', file: 'music/Dark/Horror Bass Choir - John Patitucci.mp3' },
            { name: 'No.7 Alone With My Thoughts - Esther Abrami', file: 'music/Dark/House on the Hill - Everet Almond.mp3' },
            { name: 'Pastorale - Joel Cummins', file: 'music/Dark/Martian Outback - John Patitucci.mp3' },
            { name: 'Star Spangled Banner - Cooper Cannell', file: 'music/Dark/Mayan Ritual - Jimena Contreras.mp3' },
            { name: 'Yoga Style - Chris Haugen', file: 'music/Dark/Minor Lament for Solo Bass - John Patitucci.mp3' },
            { name: 'Star Spangled Banner - Cooper Cannell', file: 'music/Dark/The Journey Ahead - Ezra Lipp.mp3' },
            { name: 'Yoga Style - Chris Haugen', file: 'music/Dark/The Sax of Ancient Terror - Jimena Contreras.mp3' }

        ],
        images: [
            'music/Dark/images/1.webp',
            'music/Dark/images/dark-modern-technology-background-abstract-blue-purple-texture-laser-squares-drops-53084081.webp',
            'music/Dark/images/dghz035-615c0bc3-a113-4fba-adac-aa8929582a29.jpg',
            'music/Dark/images/evil-dark-hell-gate_1192741-13.avif',
            'music/Dark/images/HD-wallpaper-fallen-guardian-stars-wings-angel-dark-heaven-guardian-sky.jpg',
            'music/Dark/images/images.jpg'
        ]
    },
    dramatic: {
        songs: [
            { name: 'Body of Water - TrackTribe', file: 'music/Dramatic/Body of Water - TrackTribe.mp3' },
            { name: 'Burlesque - National Sweetheart', file: 'music/Dramatic/Burlesque - National Sweetheart.mp3' },
            { name: 'Doc and Wyatt - Everet Almond', file: 'music/Dramatic/Doc and Wyatt - Everet Almond.mp3' },
            { name: 'Les-ly - Mini Vandals', file: 'music/Dramatic/Les-ly - Mini Vandals.mp3' },
            { name: 'Missing Persons - Jeremy Blake', file: 'music/Dramatic/Missing Persons - Jeremy Blake.mp3' },
            { name: 'Nature Nurture - Quincas Moreira', file: 'music/Dramatic/Nature Nurture - Quincas Moreira.mp3' },
            { name: 'Splinters Lair - Ezra Lipp.mp3', file: 'music/Dramatic/Splinters Lair - Ezra Lipp.mp3' },
            { name: 'Tales from Southern Mexico - Jimena Contreras', file: 'music/Dramatic/Tales from Southern Mexico - Jimena Contreras.mp3' },
            { name: 'Head of The Snake - Everet Almond', file: 'music/Dramatic/Head of The Snake - Everet Almond.mp3' },
            { name: 'Restless Natives - Doug Maxwell_Media Right Productions', file: 'music/Dramatic/Restless Natives - Doug Maxwell_Media Right Productions.mp3' },
            { name: 'Sci-Fi Swamp Chase - Sir Cubworth', file: 'music/Dramatic/Sci-Fi Swamp Chase - Sir Cubworth.mp3' }
        ],
        images: [
            'music/Dramatic/images/abstract-image-dark-room-concrete-600nw-2218093253.webp',
            'music/Dramatic/images/fantasy-powerful-wolf-animal-wildlife-dramatic-background-ai-generated-image_595532-3746.avif',
            'music/Dramatic/images/images.jpg'
        ]
    },
    happy: {
        songs: [
            { name: 'Celestial caravan - Patrick Patrikios', file: 'music/Happy/Celestial caravan - Patrick Patrikios.mp3' },
            { name: 'DaDaDum - The Soundlings', file: 'music/Happy/DaDaDum - The Soundlings.mp3' },
            { name: 'Desert Rhythms - Patrick Patrikios', file: 'music/Happy/Desert Rhythms - Patrick Patrikios.mp3' },
            { name: 'God Rest Ye Merry Gentlmen - DJ Williams', file: 'music/Happy/God Rest Ye Merry Gentlmen - DJ Williams.mp3' },
            { name: 'O Come All Ye Faithful - DJ Williams', file: 'music/Happy/O Come All Ye Faithful - DJ Williams.mp3' },
            { name: 'O Holy Night - DJ Williams', file: 'music/Happy/O Holy Night - DJ Williams.mp3' },
            { name: 'Oh Christmas Tree - DJ Williams', file: 'music/Happy/Oh Christmas Tree - DJ Williams.mp3' },
            { name: 'Old Movie Danzon - Jimena Contreras', file: 'music/Happy/Old Movie Danzon - Jimena Contreras.mp3' },
            { name: 'Siestita - Quincas Moreira', file: 'music/Happy/Siestita - Quincas Moreira.mp3' },
            { name: 'Silent Night - DJ Williams', file: 'music/Happy/Silent Night - DJ Williams.mp3' },
            { name: 'Violin Huasteco - Jimena Contreras', file: 'music/Happy/Violin Huasteco - Jimena Contreras.mp3' },
            { name: 'We Wish You A Merry Christmas - DJ Williams', file: 'music/Happy/We Wish You A Merry Christmas - DJ Williams.mp3' }
        ],
        images: [
            'music/Happy/images/images.jpg',
            'music/Happy/images/images2.jpg',
            'music/Happy/images/images3.jpg'
        ]
    },
    inspirational: {
        songs: [
            { name: 'Alone - Emmit Fenn', file: 'music/Inspirational/Alone - Emmit Fenn.mp3' },
            { name: 'Dream Big - Jeremy Korpas', file: 'music/Inspirational/Dream Big - Jeremy Korpas.mp3' },
            { name: 'Dulcinea - Steve Adams', file: 'music/Inspirational/Dulcinea - Steve Adams.mp3' },
            { name: 'Future Glider - Brian Bolger', file: 'music/Inspirational/Future Glider - Brian Bolger.mp3' },
            { name: 'Hopeful Freedom - Asher Fulero', file: 'music/Inspirational/Hopeful Freedom - Asher Fulero.mp3' },
            { name: 'Mosswood - Steve Adams', file: 'music/Inspirational/Mosswood - Steve Adams.mp3' },
            { name: 'No.4 Piano Journey - Esther Abrami', file: 'music/Inspirational/No.4 Piano Journey - Esther Abrami.mp3' },
            { name: 'Rene s Song - Loopop', file: 'music/Inspirational/Rene s Song - Loopop.mp3' },
            { name: 'Saucers Unaware - JAde Wii', file: 'music/Inspirational/Saucers Unaware - JAde Wii.mp3' },
            { name: 'Snowy Peaks pt I - Chris Haugen', file: 'music/Inspirational/Snowy Peaks pt I - Chris Haugen.mp3' },
            { name: 'Spring Migration - The Great North Sound Society', file: 'music/Inspirational/Spring Migration - The Great North Sound Society.mp3' },
            { name: 'Temple of treasures - Patrick Patrikios', file: 'music/Inspirational/Temple of treasures - Patrick Patrikios.mp3' },
            { name: 'Waiting - Andrew Langdon', file: 'music/Inspirational/Waiting - Andrew Langdon.mp3' }
        ],
        images: [
            'music/Inspirational/images/a350f195ce1e172fac678676fdb37ea6.jpg ',
            'music/Inspirational/images/focus-inspirational-laptop-du8zsz1tyqkz1fcy.jpg ',
            'music/Inspirational/images/silhouette-business-man-looking-out-high-rise-office-window-night-business-finance_63313-2817.avif'
        ]
    },
    sad: {
        songs: [
            { name: 'Allégro - Emmit Fenn', file: 'music/Sad/Allégro - Emmit Fenn.mp3' },
            { name: 'Falling Rain - Myuu', file: 'music/Sad/Falling Rain - Myuu.mp3' },
            { name: 'First Class - DJ Williams', file: 'music/Sad/First Class - DJ Williams.mp3' },
            { name: 'Golden Cage - Jimena Contreras', file: 'music/Sad/Golden Cage - Jimena Contreras.mp3' },
            { name: 'Good Gig In the Clouds - Joel Cummins', file: 'music/Sad/Good Gig In the Clouds - Joel Cummins.mp3' },
            { name: 'I Drank Alone - TrackTribe', file: 'music/Sad/I Drank Alone - TrackTribe.mp3' },
            { name: 'Lobe - Mini Vandals', file: 'music/Sad/Lobe - Mini Vandals.mp3' },
            { name: 'Ponderous Days - Joel Cummins', file: 'music/Sad/Ponderous Days - Joel Cummins.mp3' },
            { name: 'Rain Fuse - French Fuse', file: 'music/Sad/Rain Fuse - French Fuse.mp3' },
            { name: 'Slow Hammers - The Mini Vandals', file: 'music/Sad/Slow Hammers - The Mini Vandals.mp3' }
        ],
        images: [
            'music/Sad/images/hq720.jpg ',
            'music/Sad/images/images.jpg ',
            'music/Sad/images/sad-anime-death-06tz2kd9vb8bv6f8.jpg ',
            'music/Sad/images/sea-turtle-struggling-sea-plastic-sad-reality-sea-turtle-struggling-sea-plastic-sad-reality-329438497.webp'
        ]
    },
    romantic: {
        songs: [
            { name: 'Arabian nights - Patrick Patrikios', file: 'music/Romantic/Arabian nights - Patrick Patrikios.mp3' },
            { name: 'Bittersweet Waltz - Sir Cubworth', file: 'music/Romantic/Bittersweet Waltz - Sir Cubworth.mp3' },
            { name: 'Do You Love This World_ - The Westerlies', file: 'music/Romantic/Do You Love This World_ - The Westerlies.mp3' },
            { name: 'Floating Home - Brian Bolger', file: 'music/Romantic/Floating Home - Brian Bolger.mp3' },
            { name: 'Jesse s Carnival Waltz - The Great North Sound Society', file: 'music/Romantic/Jesse s Carnival Waltz - The Great North Sound Society.mp3' },
            { name: 'Large Smile Mood - Nico Staf', file: 'music/Romantic/Large Smile Mood - Nico Staf.mp3' },
            { name: 'Lost Love Song - Sir Cubworth', file: 'music/Romantic/Lost Love Song - Sir Cubworth.mp3' },
            { name: 'Mi Dispiace - The Mini Vandals', file: 'music/Romantic/Mi Dispiace - The Mini Vandals.mp3' },
            { name: 'Miss U - Everet Almond', file: 'music/Romantic/Miss U - Everet Almond.mp3' },
            { name: 'No.1 A Minor Waltz - Esther Abrami', file: 'music/Romantic/No.1 A Minor Waltz - Esther Abrami.mp3' },
            { name: 'Orange Chicken - DJ Williams', file: 'music/Romantic/Orange Chicken - DJ Williams.mp3' },
            { name: 'To Loom Is to Love - Mini Vandals', file: 'music/Romantic/To Loom Is to Love - Mini Vandals.mp3' },
            { name: 'Vaquero Perdido - The Mini Vandals', file: 'music/Romantic/Vaquero Perdido - The Mini Vandals.mp3' }
        ],
        images: [
            'music/Romantic/images/360_F_565267081_0CLNF0GbVCsaXjIRXz1x06hXm3fPZ2aR.jpg ',
            'music/Romantic/images/desktop-wallpaper-dark-love-in-love-n-romance-id-172208-buzzerg-background-dark-romantic.jpg ',
            'music/Romantic/images/fcacac13b7e1a337387491e2b44077eb.jpg ',
            'music/Romantic/images/wp8948459.webp'
        ]
    }
};