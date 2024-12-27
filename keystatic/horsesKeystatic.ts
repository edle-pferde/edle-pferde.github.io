import { collection, fields } from '@keystatic/core'

export const contentBase = 'content/horses'
export const keystaticHorsesConfig = collection({
  columns: ['name', 'birth_year'],
  label: 'Horses',
  slugField: 'name',
  path: 'src/content/horses/*',
  format: { contentField: 'content' },
  schema: {
    name: fields.slug({ name: { label: 'Full name' } }),
    family: fields.text({ label: 'Family' }),
    gender: fields.select({
      label: 'Gender',
      options: [
        { label: 'Hengst', value: 'Hengst' },
        { label: 'Wallach', value: 'Wallach' },
        { label: 'Stute', value: 'Stute' },
      ],
      defaultValue: 'Hengst',
    }),
    profile_picture: fields.image({
      label: 'Profile picture',
      directory: 'public/images/horses',
      publicPath: '/images/horses/',
      validation: {
        isRequired: true,
      },
    }),
    profile_picture_alt_text: fields.text({ label: 'Profile picture / Alt text' }),
    status: fields.select({
      label: 'Status',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Fro sale', value: 'for-sale' },
      ],
      defaultValue: 'active',
    }),
    birth_year: fields.text({
      label: 'Birth year',
    }),
    breed: fields.text({ label: 'Breed' }),
    size: fields.text({ label: 'Size' }),
    color: fields.text({ label: 'Color' }),
    bio: fields.text({ label: 'Bio', multiline: true }),
    content: fields.mdx({
      label: 'Content',
      options: {
        divider: true,
        link: true,
        image: {
          directory: 'public/images/horses',
          publicPath: 'images/horses',
          schema: {
            title: fields.text({
              label: 'Caption',
            }),
          },
        },
      },
    }),
    father: getHorseInput('Father'),
    mother: getHorseInput('Mother'),
    fathers_father: getHorseInput("Father's Father"),
    fathers_mother: getHorseInput("Father's Mother"),
    mothers_father: getHorseInput("Mother's Father"),
    mothers_mother: getHorseInput("Mother's Mother"),
    children: fields.array(
      fields.relationship({
        label: 'Children',
        collection: 'horses',
      }),
      {
        label: 'Children',
        itemLabel: (item) => item.value || 'Please select an horse',
      },
    ),
  },
})

function getHorseInput(label: string) {
  return fields.conditional(fields.checkbox({ label: 'Is ' + label + ' our horse?' }), {
    true: fields.relationship({
      label: label,
      collection: 'horses',
    }),
    false: fields.text({
      label: label,
    }),
  })
}
