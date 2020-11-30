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
          id: 'glacier-np',
         title: 'Glacier National Park Glaciers',
         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
         description: 'Glacier National Park is dominated by mountains which were carved into their present shapes by the huge glaciers of the last ice age. These glaciers have largely disappeared over the last 12,000 years. Evidence of widespread glacial action is found throughout the park in the form of U-shaped valleys, cirques, arêtes, and large outflow lakes radiating like fingers from the base of the highest peaks.',
         location: {
             center: [-113.91666, 48.66451],
             zoom: 8,
             pitch: 0.00,
             bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'gnpglaciers-1998',
                      opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }

            ],
            onChapterExit: [
              {
                layer: 'gnpglaciers-1998',
                    opacity: 0.25
              },
              {
                  layer: 'glaciernp-boundary',
                  opacity: 0
              }
            ]
        },
        {
          id: 'harrison1998',
          title: 'Harrison Glacier, 1998',
          image: '',
          description: 'Harrison Glacier is located in the US state of Montana in Glacier National Park. Situated on a southeast facing ridge immediately south of Mount Jackson, Harrison Glacier is the largest glacier in Glacier National Park.',
          location: {
              center: [-113.72917, 48.58938],
              zoom: 12.92,
              pitch: 39.50,
              bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
