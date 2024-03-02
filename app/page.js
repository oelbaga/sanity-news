import Image from "next/image";
import styles from "./page.module.css";
import { client } from '@/sanity'
const newsQuery = `*[_type == "news"]{
  title,
  _id,
}`

export default async function Home() {
  const news = await client.fetch(newsQuery, { next: { revalidate: 60 } })
  return (
    <main className={styles.main}>
        {news.map((post,i) => (
          <div key={i}>{post.title}</div>
        ))}
    
    </main>
  );
}
