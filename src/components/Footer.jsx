import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
    <section >
      <div className="flex-[1] flex flex-col justify-center items-center ">
        <img
          src={logo}
          alt="Ronin"
          className="w-[50%] md:w-[25%] h-[50%] md:h-[25%] object-contain mb-4" // Adjusted size for smaller devices
        />
    
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright © 2022 Ronin Network Solutions - All Rights Reserved.
      </p>
      <p className="font-poppins font-normal text-center text-[15px] leading-[27px] text-gradient">
        contact@roninnetsol.com
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
