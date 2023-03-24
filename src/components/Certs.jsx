
// import { certs} from "../constants";
// import styles from "../style";

// const Certs = () => (
//   <section id ="about" className={`${styles.flexCenter} my-4`}>
//     <div className={`${styles.flexCenter} flex-wrap w-full`}>
//       {certs.map((cert) => (
//         <div key={cert.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
//           <img src={cert.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
//         </div>
//       ))}
//     </div>
//     <div className="w-full flex justify-center items-center md:flex-row flex-col relative z-[1] mx-auto">
//       <h2 className={styles.heading2}>
//       We are Industry Certified <span className="text-gradient">Professionals!</span><br className="sm:block hidden" />
//       </h2>
//     </div>

//   </section>
// );
//    export default Certs;





import { certs } from "../constants";
import styles from "../style";

const Certs = () => (
  <section id="about" className={`my-4`}>
    <div className="w-full text-center mb-4">
      <h2 className={styles.heading2}>
        We are Industry Certified <span className="text-gradient">Professionals!</span>
      </h2>
    </div>
    <div className={`flex flex-wrap justify-center items-center w-full`}>
      {certs.map((cert) => (
        <div key={cert.id} className={`sm:min-w-[192px] min-w-[120px] mx-2 my-2`}>
          <img src={cert.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Certs;



