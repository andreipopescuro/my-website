import React, { useRef } from "react";
import FadeIn from "../Projects/FadeIn";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const notify = () =>
    toast("Thank you for your email!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i5we4tb",
        "template_ac35qz5",
        form.current,
        "-fikMHt9Z99zGhpy_"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {/* <FadeIn> */}
      <ToastContainer />
      <div
        id="contact"
        className="flex flex-col justify-between gap-20 items-center py-5"
      >
        <div className="text-cyan-900  text-3xl">Contact me</div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:w-full gap-3 justify-center items-center text-purple-300 md:px-20 px-5"
        >
          <div className="sm:flex-row flex flex-col w-full justify-center gap-3">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-md outline-purple-700 w-full"
              required
              name="user_name"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="p-2 rounded-md outline-purple-700 w-full"
              name="user_email"
            />
          </div>
          <input
            required
            type="text"
            placeholder="Subject"
            className="p-2 rounded-md w-full outline-purple-700"
            name="user_subject"
          />
          <textarea
            placeholder="Message"
            className="p-2 rounded-md w-full h-20 max-h-24 outline-purple-700"
            required
            name="message"
          ></textarea>
          <button
            type="submit"
            className="w-1/2 relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
          >
            <span className="w-full  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Send
            </span>
          </button>
        </form>
      </div>
      <div className="source-code">
        <a href="https://github.com/andreipopescuro/my-website" target="_blank">
          Source code
        </a>
      </div>
      {/* </FadeIn> */}
    </>
  );
};

export default Contact;
