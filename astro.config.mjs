import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  integrations: [react(), markdoc(), keystatic()]
});