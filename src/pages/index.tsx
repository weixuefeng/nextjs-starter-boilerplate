import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import ThemeToggleButton from 'components/Layout/ThemeToggleButton'

export default Home

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title hello</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className={styles.header}>
      header
      <ThemeToggleButton />
    </header>
  )
}

function Main() {
  return <main className={styles.main}>body</main>
}

function Footer() {
  return <footer className={styles.footer}>footer</footer>
}
