// lib/sanity.js
import { createClient } from "next-sanity";


export const client = createClient({
  projectId: 'z5fdqcai', // find your project ID and dataset in `sanity.json` or your Sanity project settings
  dataset: 'production', // or the name of your dataset
  apiVersion: '2021-03-25', // use a current date to freeze the API version
  useCdn: true, // `false` if you want to ensure fresh data
})
