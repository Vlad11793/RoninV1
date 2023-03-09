import React, { useState } from "react";
import styles from "../style";
import Button from "./Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as sending an email
    console.log(name, email, message);
  };

  return (
    <div id ="contact" className={`flex-1 flex-colk justify-center items-center xl:px-0 sm:px-16 px-6`}>
      <div className="mx-auto w-full max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gradient">
         Contact Us
        </h2>
        <h5 className={`${styles.heading5} text-center`}>
         Tell us a little about your business, and we will get back to you with some ideas as soon as possible.
        </h5>
      </div>

      <div className={`${styles.paragraph} flex flex-col justify-center items-center  mt-8 mx-auto w-full max-w-3xl`}>
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
                  className="py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
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
                  className="py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
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
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
            <button
                type="submit"
                className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-red-gradient rounded-[10px] outline-none w-full flex justify-center ${styles}`}>
                Submit
            </button>
            </div>
          </form>
        </div>
      </div>
     </div> 
   )
  }
export default Contact;
