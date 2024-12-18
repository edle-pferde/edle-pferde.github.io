import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],

  adapter: node({
    mode: 'standalone'
  })
});