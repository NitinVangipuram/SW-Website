import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineMail } from 'react-icons/ai';
import { FaChevronLeft } from 'react-icons/fa'
import background1 from '../../images/administrativeblock.jpg';
import hostel1 from '../../images/homeimage2.jpg';
import hostel2 from '../../images/homeimage3.jpg';
import hostel3 from '../../images/homeimage4.jpg';
import hostel4 from '../../images/homeimage5.jpg';
import hostel5 from '../../images/homeimage6.jpg';
import hostel6 from '../../images/homeimage7.jpg';
import hostel7 from '../../images/homeimage8.jpg';
import hostel8 from '../../images/homeimage9.jpg';
import hostel9 from '../../images/homeimage1.jpg';
import hostel10 from '../../images/homeimage10.jpg';
import hostel11 from '../../images/homeimage11.jpg';
import hostel12 from '../../images/homeimage12.jpg';
import hostel13 from '../../images/homeimage13.png';
import hostel14 from '../../images/homeimage14.png';
import './Home.css';
import { NavLink } from 'react-router-dom';
import FootBar from '../FootBar';
import { motion } from 'framer-motion';
function Home() {
  return (
    <motion.div className='home' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="App">
        <div>
          <Marquee direction="left" speed={130} delay={2} onmouseover="stop()"  >
            <div className="image_wrapper">
              <img src={hostel5} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel1} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel2} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel3} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel4} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={background1} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel6} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel8} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel7} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel10} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel9} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel11} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel12} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel13} alt="loading" />
            </div>
            <div className="image_wrapper">
              <img src={hostel14} alt="loading" />
            </div>
          </Marquee>
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px", fontSize: "1.2rem", flexWrap: "wrap" }} className='wrapper-about'>
        <div className='about-page' >
          <ul>
            <p style={{ marginBottom: "50px", fontWeight: "600" }} >About Us</p>
            <li>  <p>The office of the Dean Students Welfare at IIT Dharwad administers  all aspects of Students Welfare including Hostels, Health and Wellness,  Cocurricular activities, Sports, Social Service, Cultural events, Technical clubs, NSO and Social outreach activities of Students.</p></li>
            <li>  <p style={{ marginTop: "10px" }}>It is  responsible for implementing students' code of conduct.
              The Students Welfare Team at IIT Dharwad believes in all round development of holistic personality  of  its students. IIT Dharwad practices gender equality, respects  neurodivergence and is socially all inclusive  residential campus.</p></li>
            <li> <p style={{ marginTop: "20px" }}>The Students Welfare team administers Hostels, Mess, Canteens, Sports, NSO/NSS and other infrastructure facilities extensively used by Students as well as  Campus residents.
            </p></li> <li><p style={{ marginTop: "15px" }}>It also manages the Wellness Centre which hosts Health and Counselling services.

            </p></li>

            <li><p style={{ marginTop: "20px" }}>The Hostels and other Students Activity facilities  are spread over two campuses, one at WALMI Campus and the other at Permanent Campus.</p></li>

          </ul>
        </div>


        <div style={{ border: "2px solid #d1d5db", backgroundColor: "#fdf4ff" }} className='charter' >
          <p className='location-header' style={{ textAlign: "center", marginBottom: "20px", marginTop: "15px" }}>Students Welfare Charter</p>
          <p className='location-header' style={{ textAlign: "center", marginBottom: "23px", borderBottom: "1px solid #f8fafc" }}>Ten key values that are foundational to everything we do:</p>
          <div className='marqueee' style={{ backgroundColor: "#fae8ff", lineHeight: "10px" }}>
            <p><ul><li style={{ lineHeight: "25px", marginBottom: "19px" }}><li style={{ marginBottom: "15px" }}>1. Students and their welfare is our first priority.</li>
              <li style={{ marginBottom: "15px" }}> 2.  We strive for excellence and encourage development of an all-rounded personality.</li>
              <li style={{ marginBottom: "15px" }}> 3.  We thrive on ethnic diversity and promote multicultural environments.</li>
              <li style={{ marginBottom: "15px" }}> 4.  We celebrate collaboration, co-creation and community living.</li>
              <li style={{ marginBottom: "15px" }}>5.  We champion innovation, appreciate merit and practice social inclusion.</li>
              <li style={{ marginBottom: "15px" }}> 6.  We safeguard freedom of self-expression and respect privacy.</li>
              <li style={{ marginBottom: "15px" }}>7.  We nurture Mental and Physical wellbeing and strive for a healthy mind in a healthy body.</li>
              <li style={{ marginBottom: "15px" }}> 8.  We value ethics, politeness, courteous behavior and respect for all living beings.</li>
              <li style={{ marginBottom: "15px" }}>9.  We are responsible to the students, parents, institution, nation and humanity.</li>
              <li style={{ marginBottom: "15px" }}> 10. We believe that happy students make a happy institution. </li>
            </li></ul></p>
          </div>

        </div>

      </div>
      <div className='contact-banner' style={{ fontSize: "1.2rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }} className='div-main'>
          <div className='contact-info' >
            <div className='email'></div>
            <div className='address'>
              <div className='home-h'>  <p style={{ marginBottom: "10px", borderLeft: "4px solid #c00404", paddingLeft: "10px", fontWeight: "600" }} >Location</p></div>

              <div style={{ display: "flex", gap: "10px" }}>
                <p className='fs' style={{ color: "#86198f" }}><FaLocationDot /></p>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }} className='location-sw'>
                  <p >Students Welfare Office - IIT Dharwad</p>
                  <p >Administration Block, NE 015</p>
                  <p >Belur Industrial Area, Chikkamalligawad,</p>
                  <p >Dharwad - 580 011,</p>
                  <p >Karnataka, India</p>
                </div>
              </div>
              <div className='div-contact'>For more information, contact us-</div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }} className='email-contact'>
                <p style={{ color: "#86198f" }}><AiOutlineMail /></p>
                <p>studentswelfare.office@iitdh.ac.in</p>
              </div>
            </div>
          </div>
          <div className='image-div'>
            <img src={background1} alt='loading'></img>
          </div>
        </div>


      </div>
      <div className='f-b-I'>
        {/* <FootBar /> */}
      </div>
    </motion.div>
  );
}
export default Home;
