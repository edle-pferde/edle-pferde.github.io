import { fields, singleton } from '@keystatic/core'

export const contentBase = 'content/contact'
export const keystaticContactConfig = singleton({
  label: 'Contact',
  path: 'src/content/contact',
  format: { data: 'json' },
  schema: {
    email_address: fields.text({
      label: 'Email address',
    }),
    phone_number: fields.text({
      label: 'Phone number',
    }),
    mobile_phone_number: fields.text({
      label: 'Mobile phone number',
    }),
    facebook: fields.text({
      label: 'Facebook',
      description: 'The Facebook handle (not full URL!)',
    }),
    instagram: fields.text({
      label: 'Instagram',
      description: 'The Instagram username (not full URL!)',
    }),
  },
})
