import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'halmuni-hwatujum',
  brand: {
    displayName: '할머니화투점',
    primaryColor: '#8B1C13',
    icon: '',
  },
  web: {
    host: 'localhost',
    port: 3001,
    commands: {
      dev: 'node server.js',
      build: 'echo build done',
    },
  },
  permissions: [],
  outdir: 'dist',
});
