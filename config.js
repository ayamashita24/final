var config = {
    style: 'mapbox://styles/ayamashita24/cki4qqws400n719qv85jx5yhi',
    accessToken: 'pk.eyJ1IjoiYXlhbWFzaGl0YTI0IiwiYSI6ImNraTNucjd5bTF2bGEzM28yOW8wN2hlcnIifQ.zkkuVYV-XG6cudnqNKC_og',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The COVID Pandemic through the Lens of Vulnerable Youth',
    subtitle: 'How much has NYC been prepared for this unprecedented situation?',
    byline: 'Final Project for 11.154/11.454 Big Data, Visualization, and Society / By Naroa Coretti Sanchez, Ayaka Yamashita, Hyun-Chae Chad Loh',
    footer: 'Source: NYC OpenData, CDC/ATSDR, US Census',
    chapters: [
        {
            id: 'preview',
            title: 'Youth Situation in NYC during Covid-19',
            description: 'Eat, play, and learn are the most important elements of youth wellness. However, when the stay-at-home order and school closures went into effect, New York City's youth were subjected to the triple burden of not being able to access school meals, school playground, and in-person classes. First, our project shows how much NYC has been prepared for this unprecedented situation by analyzing access to food, open spaces, and the internet. Then, we further observe how races and social vulnerability relate to access to those essentials. ',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 10.50,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'food_access',
            title: 'Food Access',
            //image: './path/to/image/source.png',
            description: 'Measures to combat the situations such as food, park, and internet access became extremely important! How much NYC youth have been prepared? First, let us check about food access by analyzing Food Stamps (SNAP) distribution.',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 9.50,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 1
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0.4
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'park_access',
            title: 'Openspace Access',
            //image: './path/to/image/source.png',
            description: 'Let us check how NYC has been prepared for openspace access via park access.',
            location: {
              center: { lon: -73.99589, lat: 40.67057 },
              zoom: 9.00,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 1
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0.4
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'internet_access',
            title: 'Internet Access',
            //image: './path/to/image/source.png',
            description: 'And the same happens in The Bronx. Both Brooklyn and The Bronx have higher percentages of BIPOC people than Manhattan.',
            location: {
              center: { lon: -73.95390, lat: 40.82081 },
              zoom: 9.00,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0.8
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0.8
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'svi',
            title: 'Social Vulnerability Index',
            //image: './path/to/image/source.png',
            description: '.',
            location: {
              center: { lon: -73.96962, lat: 40.78139 },
              zoom: 9.00,
              pitch: 0,
              bearing: 0
            },
          onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0.5
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0.5
                 }
            ]
        },
        
        {
            id: 'transition',
            title: 'Comparison',
            //image: './path/to/image/source.png',
            description: ' ',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 10.50,
              pitch: 0.00,
              bearing: 0.00
            },
    onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
    ]
};
