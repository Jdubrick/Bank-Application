import styles from "@/styles";
import Head from "next/head";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Statistics,
  Testimonials,
} from "../components/exports";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Head>
        <title>HooBank Financial</title>
        <link rel="shortcut icon" href="/assets/logo.svg" />
      </Head>
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </header>
      <main className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </main>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Statistics />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
