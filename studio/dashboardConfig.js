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
                  buildHookId: '5e8f596d9b874e03293b569a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yb81arf2',
                  apiId: '5047ca58-5e23-42d5-8461-8625fa24de13'
                },
                {
                  buildHookId: '5e8f596d9e8a85b998463509',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ts3rrze7',
                  apiId: '61bf1292-0550-42e3-b3a0-c047c05b6e4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zacksang/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ts3rrze7.netlify.com',
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
