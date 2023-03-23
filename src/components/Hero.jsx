import styles from "../style";
import { server, server2 } from "../assets";
// import ContactUs from "./ContactUs";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col items-center md:flex-row ${styles.paddingY}`}>
      <div className="flex md:flex-row flex-col w-full">
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-biger font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Find All Your <br className="sm:block hidden" />{" "}
              <span className="text-gradient">IT Solutions</span>{" "}
            </h1>
          </div>

          <h1 className="font-biger font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Here.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
           We're not just tech experts – we're problem solvers.
           We provide sophisticated IT services tailored to your unique needs, so you can focus on what you do best. 
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
              <span className="text-gradient">Let us be your partner in success.</span>{" "}  
          </p>
          <div className={`flex flex-col items-center md:flex-row ${styles.paddingY}`}>
          <Button/>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={server} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </div>
    </section>
  );


};

export default Hero;
