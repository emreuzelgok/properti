import Head from 'next/head'
import styles from '@/pages/index.module.css'
import { RomanNumberConverter } from '../components';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RomanNumberConverter />
      </main>
      <footer className={styles.footer}>
        Properti Assignment.
      </footer>
    </div>
  )
}
