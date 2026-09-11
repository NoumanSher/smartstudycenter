import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_SANITY_PROJECT_ID || '9yu25vkg';
export const dataset = process.env.NEXT_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // false ensures immediate freshness when client publishes daily articles
});
