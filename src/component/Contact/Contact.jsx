import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import skill1 from "../pic/skill1.png"
import github from '../pic/github.png'
import gmail from '../pic/gmail.png'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact <span style={{color:"#ff014f"}}>With Me</span></h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img_1'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Sagar Pawar</h1>
                  <p>Full Stack Web Developer</p>
                  <p>I am available for Fulltime work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: 9403548260</p>
                  <p>Email: sagarpawar1493@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i class='fab fa-instagram'><a target="_blank" href="https://www.linkedin.com/in/sagar-pawar-285474113/"><img width='20px' src={skill1} alt="linkdin" /></a></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'><a target="_blank" href="https://github.com/SPinfluencers"><img width='20px' src={github} alt="github" /></a></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'><a target="_blank" href="https://www.gmail.com/"><img width='20px' src={gmail} alt="gmail" /></a></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    {/* <span>YOUR NAME</span> */}
                    <input placeholder="YOUR NAME" type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    {/* <span>PHONE NUMBER </span> */}
                    <input placeholder="PHONE NUMBER" type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  {/* <span>EMAIL </span> */}
                  <input placeholder="EMAIL" type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  {/* <span>SUBJECT </span> */}
                  <input placeholder="SUBJECT" type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  {/* <span>YOUR MESSAGE </span> */}
                  <textarea placeholder="YOUR MESSAGE" cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
