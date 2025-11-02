import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'
import insta from '../../assets/instagram-svgrepo-com.svg'
import facebook from '../../assets/facebook-svgrepo-com (2).svg'
import Github from '../../assets/github-logo-svgrepo-com.svg'
import Linkdin from '../../assets/linkedin-svgrepo-com (1).svg'

const Contact = () => {




    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "557597b3-1796-48b1-800f-008495ed990c");
    
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
          alert(res.message);
        }
      };




  return (
    
    <div id='contact' className='contact'>

        <div className="contact-title">
            <h1>Contact Me</h1>
            <img src={theme} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p> I’m always excited to connect with like-minded individuals and collaborate on new ideas. Whether you have a project in mind, need some advice, or just want to chat about tech, feel free to reach out. Let's make something great together!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="" /><p>ameenknejeeb8701@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" /><p>Reach Me Online</p>
                    </div>


                    <div className="contact-detail">
                    <div className="social">
                        <a href="https://www.instagram.com/its._me._ameen/" target="_blank" rel="noopener noreferrer">
                           <img   src={insta} alt=""  /><p></p>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/ameen.amee.5851" target="_blank" rel="noopener noreferrer">
                           <img   src={facebook} alt=""  /><p></p>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://github.com/Ameen-K-Nejeeb" target="_blank" rel="noopener noreferrer">
                           <img   src={Github} alt=""  /><p></p>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/ameen-k-nejeeb-002167284/" target="_blank" rel="noopener noreferrer">
                           <img   src={Linkdin} alt=""  /><p></p>
                        </a>
                    </div>
                    
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
