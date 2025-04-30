import React from "react";
import './contact.css';
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "79cdb917-1e3c-417d-b6c7-b2e049833038");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert('Email sent successfully!!!')
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <h2>Let's talk</h2>
                    <div className="contact-left-items"><MdEmail className="text-2xl" /><p>andres@afriano.com</p></div>
                    <div className="contact-left-items"><IoLogoWhatsapp className="text-2xl" /><p>+52 55-7640-4233</p></div>
                    <div className="contact-left-items"><FaLocationDot className="text-2xl" /><p>Mexico city, Mexico</p></div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <div className="contact-form">
                        <label htmlFor="">Name: </label>
                        <input type="text" name="name" id="input-name" placeholder="Enter your name here" required className="bg-neutral-600 rounded-lg"/>
                    </div>
                    <div className="contact-form">
                        <label htmlFor="">Email: </label>
                        <input type="email" name="email" id="" placeholder="Enter your email here" required
                        className="bg-neutral-600 rounded-lg"/>
                    </div>
                    <div className="contact-form">
                        <label htmlFor="">Message: </label>
                        <textarea name="message" id="" rows='6' placeholder="Enter your message here" required
                        className="bg-neutral-600 rounded-lg"></textarea>
                    </div>
                    <button type="submit" className="contact-submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;