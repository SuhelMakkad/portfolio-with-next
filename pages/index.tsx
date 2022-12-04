import Head from "next/head";

import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SUHEL MAKKAD</title>
        <meta name="description" content="Personla webiste of Suhel Makkads" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>MAIN</main>

      <Footer />
    </div>
  );
}
