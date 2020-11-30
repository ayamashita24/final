var config = {
    style: 'mapbox://styles/naroacs/ckgjvqjmu0qsh19se2difw4ks',
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
            title: 'NYC',
            //image: './path/to/image/source.png',
            description: 'The COVID pandemic has further increased some social inequalities due to the different levels of vulnerability found in different sectors of society. One of these inequalities is access to education. We would like to explore the possible relationship of race and income level on the access to education of children, which under the pandemic is directly related to the access to internet. Lets explore together the access to internet of different areas in NY. ',
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
            id: 'internet_access_manhattan',
            title: 'Manhattan',
            //image: './path/to/image/source.png',
            description: 'Here we can see the maxium available broadband speeds for all the census blocks. Manttan in general has high maximum speeds. This does not mean that all the homes in that block do indeed have access to internet, but if they do, the speed will be equal or lower than the maximum.',
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
            id: 'internet_access_brooklyn',
            title: 'Brooklyn',
            //image: './path/to/image/source.png',
            description: 'In Brooklyn instead, we can see that there are several blocks with a much lower maximum speed.',
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
            id: 'internet_access_bronx',
            title: 'The Bronx',
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
            id: 'wifi-manthattan',
            title: 'Wifi in Manhattan',
            //image: './path/to/image/source.png',
            description: 'In a similar way, if we look at the free Wifi hotspots, the density is very high in Manhattan.',
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
            id: 'wifi-brooklyn',
            //title: 'Wifi',
            //image: './path/to/image/source.png',
            description: 'While there are much less hotspots, for example, in Brooklyn.' ,
            location: {
              center: { lon: -73.94924, lat: 40.63436 },
              zoom: 12.24,
              pitch: 53.00,
              bearing: 8.00
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
            description: 'This is the first iteration for a larger project. Stay tuned. Data source NYC Open Data. Broadband speed: https://data.cityofnewyork.us/dataset/Internet-Master-Plan-Broadband-Choice-and-Speed-by/8ess-ssnw Wifi hotspots: https://data.cityofnewyork.us/City-Government/NYC-Wi-Fi-Hotspot-Locations/yjub-udmw  ',
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
