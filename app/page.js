export const revalidate = 30 
import Image from "next/image";
import styles from "./page.module.css";
import { client } from '@/sanity'
const newsQuery = `*[_type == "news"]{
  title,
  _id,
}`

export default async function Home() {
  const news = await client.fetch(newsQuery)
  return (
    <main className={styles.main}>
        {news.map((post,i) => (
          <div key={i}>{post.title}</div>
        ))}
    
    </main>
  );
}
