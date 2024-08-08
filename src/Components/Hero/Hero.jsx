import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I am Aniruddha Sutar,</span> Full Stack Developer based in India</h1>
            <p>Welcome to my portfolio! I'm Aniruddha Ramesh Sutar, a dedicated software developer skilled in Java, React, and MySQL. Explore my projects to see my journey and expertise in creating efficient web applications.</p>
            <div className='hero_action'>
                <div className='hero_connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className='hero_resume'><a className='anchor-link' href="Aniruddha_Sutar_FullStackResume.pdf" download="Aniruddha Sutar Resume.pdf">My Resume</a></div>
            </div>
        </div>
    )
}

export default Hero