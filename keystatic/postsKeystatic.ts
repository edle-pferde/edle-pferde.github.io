import { collection, fields } from '@keystatic/core'

export const contentBase = 'src/content/posts'
export const keystaticPostsConfig = collection({
  columns: ['title', 'date'],
  label: 'Posts',
  entryLayout: 'content',
  slugField: 'title',
  path: 'content/posts/*',
  format: { contentField: 'content' },
  schema: {
    title: fields.slug({ name: { label: 'Title' } }),
    content: fields.mdx({
      label: 'Content',
      options: {
        divider: true,
        link: true,
        image: {
          directory: 'public/' + 'images/posts',
          publicPath: 'images/posts',
          schema: {
            title: fields.text({
              label: 'Caption',
            }),
          },
        },
      },
    }),
    cover_image: fields.image({
      label: 'Cover image',
      directory: 'public/images/posts/cover_images',
      publicPath: '/images/posts/cover_images/',
      validation: {
        isRequired: true,
      },
    }),
    date: fields.date({
      label: 'Event date and time',
      defaultValue: new Date().toISOString().split('T')[0],
      validation: {
        isRequired: true,
      },
    }),
    horses: fields.array(
      fields.relationship({
        label: 'Horses',
        collection: 'horses',
        validation: {
          isRequired: true,
        },
      }),
      {
        label: 'Horses',
        itemLabel: (item) => item.value || 'Please select an horse',
      },
    ),
  },
})
