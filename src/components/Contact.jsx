import React, { useState } from "react";
import styles from "../style";
import Button from "./Button";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { footerLinks, socialMedia } from "../constants";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!recaptchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }
  
    try {
      await axios.post("https://formspree.io/f/xnqybzyd", {
        email,
        message,
      });
  
      console.log("Email sent");
      alert("Your message has been sent. Thank you!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };
  

  return (
    <div id="contact" className={`flex-1 flex-colk justify-center items-center xl:px-0 sm:px-16 px-6`}>
      <div className="mx-auto w-full max-w-md">
        <h2 className="font-poppins text-center text-3xl font-extrabold text-gradient ">
          Contact Us
        </h2>
        <h5 className={`${styles.heading5} text-center font-poppins font-normal text-[16px] leading-[24px] text-dimWhite`}>
          Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back to you with some ideas as soon as possible.
        </h5>
      </div>

      <div className={`${styles.paragraph} flex flex-col justify-center items-center mt-8 mx-auto w-full max-w-3xl`}>
        <div className="font-poppins bg-white mt-8 mx-auto w-full max-w-3xl py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                ></textarea>
              </div>
            </div>
            {/* Add the ReCAPTCHA component here */}
            <div className="mt-4 flex justify-center">
            <ReCAPTCHA sitekey="6LfYDQUlAAAAAImNh7aEoFGMt-dwvzlhI6o-3LyB" onChange={(value) => setRecaptchaValue(value)} />
            </div>     


            <div className="flex justify-center mt-4">
              <button type="submit" className={`py-4 px-6 w-auto font-poppins font-medium text-[18px] text-primary bg-red-gradient rounded-[10px] outline-none ${styles}`}> 
                Submit
              </button>
        </div>
      </form>
    </div>
    <p className="text-center mt-4">
  <span className="text-gradient">Ronin Technology Solutions</span><br />
  Albuquerque, New Mexico, United States<br />
  <a href="mailto:contact@roninnetsol.com" className="text-gradient">contact@roninnetsol.com</a>
</p>
<p className="text-center mt-4">
  <span className="text-gradient">Hours</span><br />
  08:00 am – 05:00 pm<br />
  Monday - Friday: 8am - 5pm<br />
  Saturday - Sunday: Closed
</p>
  </div>
 <div className="flex justify-center mt-4">
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
);
};

                  
export default Contact;
                  
