import React from "react"
import "./Home.css"
import sagar from "../pic/sagar.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import github from '../pic/github.png'
import gmail from '../pic/gmail.png'
import twitter from '../pic/twitter.png'
import { useTypewriter } from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index'

const Home = () => {

  const {text} = useTypewriter({
    words: [ " Full Stack Developer."," MERN Developer"],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
    })

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>Hello, my name is</h3>
            <h1>
              Sagar Pawar
            </h1>
            <h2>
              I'm a
              <span style={{color:'#ff014f'}}>
                {/* <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
                { text }
                <span className="cursor">|</span>
              </span>
            </h2>

            {/*  TechStack  */}
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'><a target="_blank" href="https://www.linkedin.com/in/sagar-pawar-285474113/"><img src={skill1} alt="linkdin" /></a></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'><a target="_blank" href="https://github.com/SPinfluencers"><img src={github} alt="github" /></a></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'><a target="_blank" href="https://www.gmail.com/"><img src={gmail} alt="gmail" /></a></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'><a target="_blank" href="https://twitter.com/sagarpawar1493"><img src={twitter} alt="twitter" /></a></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                {/* <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img  alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button> */}
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={sagar} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
