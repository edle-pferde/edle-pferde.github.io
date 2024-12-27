import { config } from '@keystatic/core'
import { KEYSTATIC_STORAGE_KIND } from 'astro:env/client'
import { keystaticHorsesConfig } from 'keystatic/horsesKeystatic'
import { keystaticPostsConfig } from 'keystatic/postsKeystatic'
import { keystaticTextsConfig } from 'keystatic/textsKeystatic'
import { keystaticContactConfig } from 'keystatic/contactKeystatic'

export default config({
  storage: {
    // https://keystatic.com/docs/github-mode#setting-up-git-hub-mode
    kind: KEYSTATIC_STORAGE_KIND,
    repo: {
      owner: 'edle-pferde',
      name: 'edle-pferde.github.io',
    },
  },
  ui: {
    brand: {
      name: 'Edle Pferde',
      // mark: () => <img src="/logo.png" height={27} />,
    },
    navigation: {
      content: ['posts', 'horses'],
      defaults: ['texts', 'contact'],
    },
  },
  collections: {
    posts: keystaticPostsConfig,
    horses: keystaticHorsesConfig,
  },
  singletons: {
    texts: keystaticTextsConfig,
    contact: keystaticContactConfig,
  },
})
