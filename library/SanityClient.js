import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '435wqwip',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sksitaZhOskQMkmSRDi6agw5QjDGlfR3MXYiwoo8XC7Mhqy0SeVcnjNh1wjZc6TQFDR0ZoIiSGGStDFOHyEET1GsV9KSgmf5qXifvpEMINBGtecGy9L7q3c5mtGyp0w2EhdOMxZTD3bFNzoH3As5HiqU9txV8EvPvvoIfWuZUjuv8io4wu9Y',
  useCdn: false,
})
