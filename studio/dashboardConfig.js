export default {
  widgets: [
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
                  buildHookId: '630ce97e569223078c6a27ac',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2n73u5zn',
                  apiId: '784665ca-a1c1-4d50-8f10-d4ccd217e787'
                },
                {
                  buildHookId: '630ce97f99878a0875f5507c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-e3kfcis3',
                  apiId: 'b6b73d63-9382-4c3f-ba87-6e60c44181f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StefHC92/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-e3kfcis3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
