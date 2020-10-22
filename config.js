var config = {
    style: 'mapbox://styles/naroacs/ckgjvqjmu0qsh19se2difw4ks',
    accessToken: 'pk.eyJ1IjoibmFyb2FjcyIsImEiOiJja2dmdWpxYWswczZuMnhtaTd6d3Z4cG52In0.B3Ia8g3cPWCwjXR8j6gy8Q',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Homeschooling during COVID-19',
    subtitle: 'Vulnerability and education of children during COVID-19',
    byline: 'By Chad, Ayaka and Naroa',
    //footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'preview',
            title: 'NYC',
            //image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            title: 'Intertet Access',
            //image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            title: 'Intertet Access',
            //image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            title: 'Intertet Access',
            //image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            title: 'Wifi',
            //image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            title: 'Wifi',
            //image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
