import { CompletedChallenges } from "../componets/CompletedChallenges";
import { Countdown } from "../componets/Countdown";
import { ExperienceBar } from "../componets/ExperienceBar";
import { Profile } from "../componets/Profile";

import styles from "../styles/pages/Home.module.css"

import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
