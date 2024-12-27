import { fields, singleton } from '@keystatic/core'

export const contentBase = 'content/texts'
export const keystaticTextsConfig = singleton({
  label: 'Texts',
  path: 'src/content/texts',
  schema: {
    homepage_about_text: fields.text({
      label: 'Homepage: About text',
      multiline: true,
    }),
    homepage_horses_headline: fields.text({
      label: 'Homepage: Horses headline',
    }),
    homepage_horses_description: fields.text({
      label: 'Homepage: Horses description',
      multiline: true,
    }),
    homepage_about_headline: fields.text({
      label: 'Homepage: About headline',
    }),
    homepage_about_description: fields.text({
      label: 'Homepage: About description',
      multiline: true,
    }),
    homepage_gallery_headline: fields.text({
      label: 'Homepage: Gallery headline',
    }),
    homepage_gallery_description: fields.text({
      label: 'Homepage: Gallery description',
      multiline: true,
    }),
    footer: fields.text({
      label: 'Footer',
      multiline: true,
    }),
    about_page: fields.mdx({
      label: 'About page',
      options: {
        divider: true,
        link: true,
        image: {
          directory: 'public/images/about_page',
          publicPath: 'images/about_page',
          schema: {
            title: fields.text({
              label: 'Caption',
            }),
          },
        },
      },
    }),
    impressum_page: fields.mdx({
      label: 'Impressum page',
      options: {
        divider: true,
        link: true,
        image: {
          directory: 'public/images/impressum_page',
          publicPath: 'images/impressum_page',
          schema: {
            title: fields.text({
              label: 'Caption',
            }),
          },
        },
      },
    }),
  },
})
