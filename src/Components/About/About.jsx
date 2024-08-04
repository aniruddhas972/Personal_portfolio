import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about_title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about_sections">
                <div className="about_left">
                    <img src={about_profile} alt="" />
                </div>
                <div className="about_right">
                    <div className="about-para">
                        <p>I am a passionate and dedicated Java Full Stack Developer with a strong foundation in both front-end and back-end technologies. My expertise includes Java, Spring Boot, Hibernate, React and MySQL. I excel at developing robust and scalable web applications, implementing seamless user interfaces, and creating efficient database solutions. My projects demonstrate my ability to combine technical proficiency with creative problem-solving to deliver high-quality software solutions.</p>
                        <p>I stay updated with the latest industry trends and technologies. With a commitment to continuous learning and innovation. I thrive in collaborative environments and enjoy tackling complex challenges that require thoughtful and innovative approaches. My goal is to contribute to impactful projects that enhance user experiences and drive business success. Explore my portfolio to see how I leverage my Java Full Stack skills to create efficient and effective software solutions.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Java</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Hibernate</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>SpringBoot</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>MySQL</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About