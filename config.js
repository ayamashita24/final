var config = {
    style: 'mapbox://styles/ayamashita24/cki9g6s3y4i1319rwxek2kyoq',
    accessToken: 'pk.eyJ1IjoiYXlhbWFzaGl0YTI0IiwiYSI6ImNraTNucjd5bTF2bGEzM28yOW8wN2hlcnIifQ.zkkuVYV-XG6cudnqNKC_og',
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
            title: 'Access to Food',
            description: 'Food Insecurity is the lack of access, at times, to enough nutritionally adequate food for an active, healthy life for all members of a household. To solve this issue, NYC has worked to make it easier to access benefits programs by investing in SNAP outreach, language access services, and mobile platforms that streamline processes.  (Food Policy Report, 2019). Visualizing SNAP (food stamp) benefits (% households, US Census 2018) gives us a sense of how much NYC city was prepared for food insecurity and how worse it could have been if there were not exiting the SNAP program. ',
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
