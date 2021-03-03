export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '603f19b96bfd88b09f45932a',
                  title: 'Sanity Studio',
                  name: 'cross-blog-posting-sanity-gatsby-studio',
                  apiId: '4d62d9a8-5362-487a-83a3-d45df51862ff'
                },
                {
                  buildHookId: '603f19b971dff3b519d48a3b',
                  title: 'Blog Website',
                  name: 'cross-blog-posting-sanity-gatsby',
                  apiId: '7ea97314-8ab5-47fa-a8d8-d3370fe110c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vivekneem/cross-blog-posting-sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://cross-blog-posting-sanity-gatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
