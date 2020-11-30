var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoiYXlhbWFzaGl0YTI0IiwiYSI6ImNraTNucjd5bTF2bGEzM28yOW8wN2hlcnIifQ.zkkuVYV-XG6cudnqNKC_og',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The COVID Pandemic through the lens of vulnerable youth',
    subtitle: 'Final Project for 11.154/11.454 Big Data, Visualization, and Society',
    byline: 'By Naroa Coretti Sanchez, Ayaka Yamashita, Hyun-Chae Chad Loh',
    footer: 'Source: NYC OpenData, CDC/ATSDR, US Census',
    chapters: [
        {
            id: 'preview',
            title: 'Youth in NYC during Covid-19',
            //image: './path/to/image/source.png',
            description: 'Eat, play, and learn are the most important elements for children’s wellness. Covid-19 has changed the situation around those three because of the closure of schools; No more meals from school (Eat), No access to school playground (Play), No more in-person class opportunity (Learn)',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 10.44,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'nyc-wi-fi-hotspot-locations',
                     opacity: 0
                 },
                 {
                     layer: 'new-87f2lz',
                     opacity: 0
                 }
            ],
            onChapterExit: [

              {
                  layer: 'nyc-wi-fi-hotspot-locations',
                  opacity: 0
              },
              {
                  layer: 'new-87f2lz',
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
              center: { lon: -74.00038, lat: 40.77675 },
              zoom: 12.91,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'new-87f2lz',
                     opacity: 0.4
                 }
            ],
            onChapterExit: [

              {
                  layer: 'nyc-wi-fi-hotspot-locations',
                  opacity: 0
              },
              {
                  layer: 'new-87f2lz',
                  opacity: 0.4
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
              zoom: 12.24,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'new-87f2lz',
                     opacity: 0.4
                 }
            ],
            onChapterExit: [
              {
                  layer: 'new-87f2lz',
                  opacity: 0.4
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
              zoom: 12.24,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'nyc-wi-fi-hotspot-locations',
                     opacity: 0
                 },
                 {
                     layer: 'new-87f2lz',
                     opacity: 0.4
                 }
            ],
            onChapterExit: [

              {
                  layer: 'nyc-wi-fi-hotspot-locations',
                  opacity: 0
              },
              {
                  layer: 'new-87f2lz',
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
              zoom: 12.24,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'nyc-wi-fi-hotspot-locations',
                     opacity: 1
                 }
            ],
            onChapterExit: [

              {
                  layer: 'nyc-wi-fi-hotspot-locations',
                  opacity: 1
              }
            ]
        },
        
        {
            id: 'preview-wifi',
            title: 'End',
            //image: './path/to/image/source.png',
            description: ' ',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 10.44,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'nyc-wi-fi-hotspot-locations',
                     opacity: 1
                 }
            ],
            onChapterExit: [

              {
                  layer: 'nyc-wi-fi-hotspot-locations',
                  opacity: 0
              }
            ]
        },
    ]
};
