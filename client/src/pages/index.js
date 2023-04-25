import styles from "@/styles";
import {
  Billing,
  Business,
  Button,
  CTA,
  CardDeal,
  Clients,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Statistics,
  Testimonials,
} from "../components/exports";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
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
