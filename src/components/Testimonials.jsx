import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";


const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mx-auto`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-center items-center md:flex-row flex-col relative z-[1] mx-auto">
    <h2 className={`${styles.heading2} flex justify-center`}>
        <span className={`whatPeopleAre`}>What People are</span>
        <br className="sm:block hidden" />
        <span className="text-gradient">saying about us</span>
    </h2>

    </div>

    <div className="flex flex-wrap sm:flex-nowrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
