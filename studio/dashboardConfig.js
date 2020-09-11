export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f5b659c460fe218b1baf934',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zwvt54uu',
                  apiId: 'ae435530-cebf-437c-beaa-4a2eda8ccddc'
                },
                {
                  buildHookId: '5f5b659d9ab1a71b0d66970e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1479r5pu',
                  apiId: '43168b61-2ffd-40a7-b287-21465302f53b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/parthks/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1479r5pu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
