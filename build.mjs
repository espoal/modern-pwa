import { buildHelper } from '@espoal/build'


await buildHelper({
  entryPoints: ['main/index.mjs', 'main/ssr.mjs']
})
