import styles from "./style";
import { Business, Certs, Footer, Navbar, Stats, Testimonials, Hero, Contact } from "./components";
import './fonts.css';
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
   </div>

   <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Certs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);
 
export default App;