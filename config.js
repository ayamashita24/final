var config = {
    style: 'mapbox://styles/ayamashita24/cki9g6s3y4i1319rwxek2kyoq',
    accessToken: 'pk.eyJ1IjoiYXlhbWFzaGl0YTI0IiwiYSI6ImNraTlvd3N1NTBhNHMydW14c3V2Y242NGkifQ.Ej7QL5RXwMlo9fAAtqwZUg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The COVID Pandemic through the Lens of Vulnerable Youth in NYC',
    subtitle: 'Was NYC prepared for this unprecedented social disaster?',
    byline: 'Final Project for 11.154/11.454 Big Data, Visualization, and Society / By Naroa Coretti Sanchez, Ayaka Yamashita, Hyun-Chae Chad Loh',
    //footer: '',
    chapters: [
        {
            id: 'preview',
            title: 'Elements of Youth Wellness; EAT, PLAY, and LEARN',
              //image: './path/to/image/source.png',
            description: 'When the stay-at-home order and school closures went into effect, youth in NYC were subjected to the triple burden of not being able to access school meals, school playgrounds, and in-person classes. By analyzing census data, we are able to display where the city may need to focus in the future.',
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
            title: 'How about Food Access?',
            description: 'The stronger yellow means less access to food. Which part of the city suffers more from food insecurity?',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 9.70,
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
            id: 'upper_east_side',
            title: 'Upper East Side?',
            //image: './path/to/image/source.png',
            description: 'No, one of the most richest neightborhood in NYC.' ,
            location: {
              center: { lon: -73.956555, lat: 40.773565 },
              zoom: 12.7,
              pitch: 53.00,
              bearing: 28.00
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
            id: 'brownsville',
            title: 'What about Brownsville?',
            //image: './path/to/image/source.png',
            description: 'Can neighborhood with relatively high food insecurity even before COVID-19 bear with the situation that children cannot eat at school?' ,
            location: {
              center: { lon:  -73.9065, lat: 40.6564 },
              zoom: 12.7,
              pitch: 53.00,
              bearing: 8.00
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
            id: 'openspace_access',
            title: 'Access to Open Space ',
            //image: './path/to/image/source.png',
            description: 'We calculated access to open spaces using NYC’s park property data. However, not all parks listed in the dataset were the same – some were well-managed parks while some were just lots with a patch of green – and therefore, we deleted properties that were not suitable for youth’s recreational use. In addition, we used the park maintenance budget data(NYC OpenData 2019) and population data to calculate how much of the city budget is being used for each youth. ',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 9.70,
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
                     opacity: 0.75
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
            id: 'upper_east_side2',
            title: 'Upper East Side',
            //image: './path/to/image/source.png',
            description: '.' ,
            location: {
              center: { lon: -73.956555, lat: 40.773565 },
              zoom: 13.0,
              pitch: 53.00,
              bearing: 28.00
            },
            onChapterEnter: [
                         {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0.75
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
                             opacity: 0.4
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
            ]
        },
        {
            id: 'brownsville2',
            title: 'Brownsville',
            //image: './path/to/image/source.png',
            description: '.' ,
            location: {
              center: { lon:  -73.9065, lat: 40.6564 },
              zoom: 13.0,
              pitch: 53.00,
              bearing: 8.00
            },
            onChapterEnter: [
                         {
                             layer: 'eat',
                             opacity: 0
                         },
                         {
                             layer: 'play',
                             opacity: 0.75
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
            title: 'Access to the Internet',
            //image: './path/to/image/source.png',
            description: 'Covid-19 has changed drastically youth education from in-person to online. To understand how much NYC has been prepared for this shift, we analyze the data of internet access for under 18 years old (US Census 2018). ',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 9.70,
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
                     opacity: 0.58
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
                     opacity: 0.4
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },

        {
            id: 'upper_east_side3',
            title: 'Upper East Side',
            //image: './path/to/image/source.png',
            description: '.' ,
            location: {
              center: { lon: -73.956555, lat: 40.773565 },
              zoom: 13.0,
              pitch: 53.00,
              bearing: 28.00
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
                             opacity: 0.58
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
                             opacity: 0.4
                         },
                        {
                             layer: 'svi',
                             opacity: 0
                         }
            ]
        },
        {
            id: 'brownsville3',
            title: 'Brownsville',
            //image: './path/to/image/source.png',
            description: '.' ,
            location: {
              center: { lon:  -73.9065, lat: 40.6564 },
              zoom: 13.0,
              pitch: 53.00,
              bearing: 8.00
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
                             opacity: 0.58
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
                             opacity: 0.4
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
            description: 'We use CDC SVI, which uses 15 U.S. census variables to help local officials identify communities that may need support before, during, or after disasters (CDC/ATSDR 2018). In our case, it will help us to identify youth who have been vulnerable. ',
            location: {
              center: { lon: -74.09232, lat: 40.73593 },
              zoom: 9.70,
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
                     opacity: 0.7
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
                     opacity: 0.4
                 }
            ]
        },

    ]
};
