export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e65269fe695daf059a8a7e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hbj7r6mt',
                  apiId: '1e09e9cf-52ae-483e-bdf2-7b34ee20f629'
                },
                {
                  buildHookId: '5e65269f115ce0e01a432712',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6tze86pq',
                  apiId: '5a6d75a3-59e4-44f6-86ba-d9abbca0f304'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/craftygreenguru/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6tze86pq.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
