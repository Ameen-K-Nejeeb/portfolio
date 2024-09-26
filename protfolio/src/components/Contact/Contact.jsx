import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'

const Contact = () => {




    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "de09731b-6710-45b3-a937-558e0af0d98b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };





  return (
    
    <div id='contact' className='contact'>

        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p> way to organize longer pieces of writing, and they help readers understand the structure of an essay and its main points.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="" /><p>ameenameen987@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" /><p>654654654</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" /><p>kerala</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>

                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email' />

                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>

                <button type='submit' className="contect-submit">Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
