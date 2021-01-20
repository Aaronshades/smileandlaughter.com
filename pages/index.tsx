import Head from 'next/head'
import styles from '../styles/Home.module.css';

interface IJoke {
  joke: {
    id: number;
    type: string;
    setup: string;
    punchline: string;
  }
}

const Home: React.FC<IJoke> = ({ joke }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smile and laugther</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to smile and laughter!<br/>
          Todays joke
        </h1>
        <div className={styles.card}>
          <h2>{joke.setup}</h2>
          <h2>{joke.punchline}</h2>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  
  const jokeResponse = await fetch('https://official-joke-api.appspot.com/jokes/random')
  const joke = await jokeResponse.json()

  return {
    props: {
      joke
    }
  }
}

export default Home;