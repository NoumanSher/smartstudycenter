import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_SANITY_PROJECT_ID || '9yu25vkg';
const dataset = process.env.NEXT_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/studio',
  name: 'SmartStudyCenter_Studio',
  title: 'Smart Study Center Studio',
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
