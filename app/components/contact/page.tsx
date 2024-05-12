"use client";
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";

import { transitionFromBottom } from "@/app/utils/variants";

const Contact = () => {
  const [visibility, setVisibility] = useState("invisible");
  const [disabled, setDisabled] = useState(false);
  const contactRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setDisabled(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("something's wrong");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      contactRef.current?.reset();
      setDisabled(false);

      setVisibility("visible");
      setTimeout(() => {
        setVisibility("invisible");
      }, 5000);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }
  return (
    <section
      id="contact"
      className="flex relative m-0 overflow-x-hidden flex-col items-center justify-center py-24 px-0 min-h-full sm:h-screen sm:p-0 w-full align-baseline"
    >
      <div className="w-full flex flex-col items-center justify-center space-y-12">
        <header>
          <h2 className="font-['TitleFont'] text-3xl font-extrabold">
            Wanna talk?
          </h2>
        </header>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="max-w-full sm:w-[50%] w-[75%]"
        >
          <motion.div
            variants={transitionFromBottom}
            className="box flex flex-col items-center justify-center my-0 mx-auto m-0 bgtext space-y-4 p-12"
          >
            <form
              ref={contactRef}
              onSubmit={handleSubmit}
              className="mt-8 mb-2 w-full flex flex-col justify-center items-center"
            >
              <div className="w-full flex flex-wrap mb-8">
                <div className="flex-grow-0 flex-shrink-0 mt-6 w-[47%]">
                  <input
                    id="form-name"
                    autoComplete="name"
                    placeholder="Name"
                    maxLength={50}
                    name="name"
                    className="text-black w-full px-4 py-2 rounded-md"
                  />
                </div>

                <div className="flex-grow-0 flex-shrink-0 mt-6 ml-[6%] w-[47%]">
                  <input
                    id="form-email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    maxLength={80}
                    name="email"
                    type="email"
                    className="text-black w-full px-4 py-2 rounded-md"
                  />
                </div>

                <div className="flex-grow-0 flex-shrink-0 mt-6 w-full">
                  <textarea
                    id="form-message"
                    placeholder="Message"
                    required
                    name="message"
                    rows={6}
                    className="text-black w-full px-4 py-2 rounded-md"
                  />
                </div>
              </div>
              <button
                className="rounded bg-sky-400 disabled:bg-gray-400"
                type="submit"
                disabled={disabled}
              >
                Send Email
              </button>
            </form>
            <div className={`text-green-600 ${visibility}`} role="alert">
              I have received your message! Thank you! ❤️
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
