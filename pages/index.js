import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import BlogPost from '../components/BlogPost'

export default function Home() {
  const posts = [
    {
      slug: 'primer',
      title: 'Primer: When You Have Too Much to Do',
      content: 'You have a to-do list that scrolls on for days. You are managing multiple projects, getting lots of email and messages on different messaging systems, managing finances and personal health habits and so much more. It all keeps piling up, and it can feel overwhelming. How do you keep up with it all? How do you find focus and peace and get stuff accomplished when you have too much on your plate? In this primer, I’ll look at some key strategies and tactics for taking on an overloaded life with an open heart, lots of energy, and a smile on your face.'

    },
    {
      slug: 'primer2',
      title: 'Primer: When You Have Too Much to Do',
      content: 'You have a to-do list that scrolls on for days. You are managing multiple projects, getting lots of email and messages on different messaging systems, managing finances and personal health habits and so much more. It all keeps piling up, and it can feel overwhelming. How do you keep up with it all? How do you find focus and peace and get stuff accomplished when you have too much on your plate? In this primer, I’ll look at some key strategies and tactics for taking on an overloaded life with an open heart, lots of energy, and a smile on your face.'

    }

  ]
  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     <main className={styles.main}>
       <Header />
       {
           posts.map(p => (
             <div className={styles.post}>
               <BlogPost key={p.slug} {...p}/>
               </div>
           ))
           }
      </main>
  </>
  )
}
