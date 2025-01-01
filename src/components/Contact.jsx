// const Contact = () => {
//     return (
//       <section id="contact" className="py-20 text-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Contact</h2>
//           <p className="text-lg mb-8">Feel free to reach out to me for any opportunities or collaborations.</p>
//           <button className="btn btn-accent px-6 py-3 rounded-full text-xl">Contact Me</button>
//         </div>
//       </section>
//     )
//   }
  
//   export default Contact
  
"use client"; 
import { useState } from "react";
import emailjs from '@emailjs/browser';

//Import environment variables for EmailJS
const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const emailjsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID


const Contact = () => {
  const [formData, setFormData] = useState({
    to_name: "Jennifer", 
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // to show success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    try {
       
        // Send email with EmailJS
        const result = await emailjs.send(
            emailjsServiceId, //EmailJS service ID
            emailjsTemplateId, //EmailJS template ID
            formData,
            emailjsUserId //EmailJS user ID
        );

      setStatus("Submitting...");

      // Simulate success
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setStatus("Thank you for reaching out! I will get back to you soon.");
      }, 2000);
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows="6"
              placeholder="Your Message"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-violet-500 text-white p-3 rounded-lg hover:bg-violet-600 transition duration-300"
            >
              Send Message
            </button>
          </div>

          {status && <p className="text-lg mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
