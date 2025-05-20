import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'c901wzwd', // z.B. 'abc123'
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-02-19', // oder aktuelles Datum
}) as any;