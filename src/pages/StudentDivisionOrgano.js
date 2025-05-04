import React from 'react';
import "./StudentDivisionOrgano.css";
import PradeepYammiyavar from '../images/faculty/pradeep-yammiyavar.jpg';
import RPrabhu from '../images/faculty/r-prabhu.jpg';
import GopalSharanParashari from '../images/faculty/gopal-sharan-parashari.jpg';
import PrahladJoshi from '../images/faculty/prahlad-joshi.jpg';
import ChetanKumarM from '../images/staff/chetan-kumar-m.jpg';
import JanardanReddyS from '../images/staff/janardhan-reddy-s.jpg';
import RaviM from '../images/staff/ravi-m.jpg';
import RaviGalimath from '../images/staff/ravi-galimath.jpg';
import KeerthiKumarM from '../images/staff/keerthi-kumar-m.jpeg';
import GRamesh from '../images/staff/ramesh-g.png';
import SuryaPrakashRamesh from "../images/faculty/surya-prakash-ramesh.jpg"
import ArunVerma from "../images/staff/arun-verma.jpg";
import RajeshwaraRao from "../images/faculty/rajeshwara-rao.jpg";
import AvinashB from "../images/staff/avinash-b.jpg";
import AmolDiwate from '../images/staff/amol-diwate.jpg';
import VSPrakash from '../images/staff/v-s-prakash.jpg';
import RidhimaTewari from '../images/faculty/ridhima-tewari.jpg'
import BLTembe from '../images/faculty/b-l-tembe.png';
import RameshKumar from '../images/staff/ramesh-kumar.png';
import RamjeeRepaka from '../images/faculty/ramjee-repaka.jpeg';

import { NavLink } from 'react-router-dom';
import { FaArrowDownLong } from 'react-icons/fa6';
import BackToTop from './BackToTop';
import { FaArrowLeft } from 'react-icons/fa6';
import { motion } from 'framer-motion';
export default function StudentDivisionOrgano() {


    return (
        <>
            <div className='student-division-organo' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className='organogram'>
                    <p>O</p>
                    <p>R</p>
                    <p>G</p>
                    <p>A</p>
                    <p>N</p>
                    <p>O</p>
                    <p>G</p>
                    <p>R</p>
                    <p>A</p>
                    <p>M</p>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                        <FaArrowDownLong style={{ marginTop: "10px", color: "#52525b" }} className='below-arrow' />
                        <FaArrowDownLong style={{ marginTop: "10px", color: "#52525b" }} className='below-arrow' />
                    </div>
                </p>
                <div className='container-sw'>
                    <div className='container-sw-1'>
                        <div className='heading' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: '10px' }}>
                            <h4 style={{ fontWeight: "600", color: "#313132" }} className='entity-header'>STUDENT  WELFARE  DIVISION</h4>
                            <h3 style={{ fontWeight: "600", color: "#313132" }} className='entity-header'>ORGANOGRAM</h3>
                        </div>
                        <div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='info-1' style={{ marginTop: "20px" }}>
                                <img src={RamjeeRepaka} alt='loaidng'></img>
                                <div className='name-fs'>  <p><span style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Ramjee Repaka</span></p></div>
                                <div className='des-fs'>    <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Dean, Student Welfare</h4></div>

                            </motion.div>
                        </div>
                    </div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='associate-deans'>
                        <div className='associate-dean-1'>
                            <img src ={RajeshwaraRao} alt='loading'></img>
                            <div className='name-fs'>  <div style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}><p><span style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Rajeshwara</span></p></div>  </div>
                            <p><span style={{ fontWeight: "600", color: "#4338ca" }}>Rao</span></p>
                            <div className='des-fs'>    <div style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}> <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Associate Dean</h4>
                                <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>-Gymkhana,</h4>
                                <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Sports & Clubs</h4>

                            </div></div>
                        </div>
                        <div className='associate-dean-1'>
                            <img src ={SuryaPrakashRamesh} alt='loading'></img>
                            <div className='name-fs'>    <div style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}> <p><span style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Suryaprakash</span></p>
                                <p><span style={{ fontWeight: "600", color: "#4338ca" }}>Ramesh</span></p></div></div>
                            <div className='des-fs'>    <div style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}> <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Associate Dean</h4>
                                <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>-Socio</h4>
                                <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Cultural Activities</h4>

                            </div></div>

                        </div>
                        <div className='associate-dean-1'>
                            <img src={RidhimaTewari} alt='loading'></img>
                            <div className='name-fs'>    <div style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}> <p><span style={{ fontWeight: "600", color: "#4338ca", textAlign: "center" }}>Dr. Ridhima</span></p>
                                <p><span style={{ fontWeight: "600", color: "#4338ca", textAlign: "center" }}>Tewari</span></p></div></div>
                            <div className='des-fs'>    <div style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}> <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Associate Dean</h4>
                                <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>-Wellness</h4></div></div>
                        </div>

                        {/* <div className='associate-dean-1'>
                            <img src={PrahladJoshi} alt='loading'></img>
                            <div className='name-fs'>    <div style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}> <p><span style={{ fontWeight: "600", color: "#4338ca", textAlign: "center" }}>Group Captain</span></p>
                                <p><span style={{ fontWeight: "600", color: "#4338ca", textAlign: "center" }}>Dr. Prahlad S</span></p>
                                <p><span style={{ fontWeight: "600", color: "#4338ca", textAlign: "center" }}>Joshi</span></p></div></div>
                            <div className='des-fs'>    <div style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}>  <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Students Welfare</h4>
                                <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Advisor</h4></div></div>
                        </div> */}
                        {/* <div className='associate-dean-1'>
                            <img src={VSPrakash} alt='loading'></img>
                            <div className='name-fs' style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}>   <p><span style={{ fontWeight: "600", color: "#4338ca" }}>Col. V. C.</span></p>
                                <p><span style={{ fontWeight: "600", color: "#4338ca" }}>Prakash</span></p>
                            </div>
                            <div className='des-fs'>    <div style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}>    <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Students Welfare</h4>
                                <h4 style={{ fontWeight: "600", color: "#313132" }} className='designation'>Advisor</h4></div></div>
                        </div> */}
                    </motion.div>
                </div>

                <div className='student-admin-office-1'>
                    <div className='student-admin-office' style={{ borderBottom: "5px solid #86198f" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                            <div className='alumni-fs'>   <h3>STUDENT WELFARE ADMINISTRATION OFFICE</h3></div>
                        </div>
                        <div className='information' style={{ marginTop: "30px", display: "flex", gap: "50px", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img style={{ height: "100px", width: "100px", borderRadius: "50%" }} src ={ArunVerma} alt='loading'></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }} className='name'>Arun Verma</p></div>
                                    <div className='designation-fs' style={{ display: "flex", gap: "3px", justifyContent: "center", flexWrap: "wrap" }}><h4 style={{ marginTop: "5px" }}>Assistant Registrar</h4>
                                        <h4 style={{ marginTop: "5px" }}>Student Welfare</h4></div>
                                    {/* <h4 style={{ marginTop: "5px" }}>Member Of HCU</h4> */}


                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={AmolDiwate} style={{ height: "100px", width: "100px", borderRadius: "50%" }} alt='loading'></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Amol Diwate</p></div>
                                    <div style={{ display: "flex", gap: "4px", justifyContent: "center", flexWrap: "wrap" }}><h4 style={{ marginTop: "5px" }}>Junior</h4>
                                        <h4 style={{ marginTop: "5px" }}>Superintendent</h4></div>
                                    {/* <h4 style={{ marginTop: "5px" }}>Member Of HCU</h4> */}

                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }} src ={AvinashB}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Avinash B</p></div>
                                    <h4 style={{ marginTop: "5px" }}>Junior Assistant</h4>
                                    {/* <h4>Member Of HCU</h4> */}
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={JanardanReddyS} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }} className='janardan'></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>S Janardhan Reddy</p></div>
                                    <h4 style={{ marginTop: "5px" }}>Junior Assistant</h4>
                                    {/* <h4>Hostel Manager -2</h4> */}
                                    {/* <h4>Member Of HCU</h4> */}
                                </div>
                            </div>

                            {/* <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={RaviGalimath} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Ravi Shivaprakash</p>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Galimath</p></div>
                                    <h4 style={{ marginTop: "5px" }}>Member Of HCU</h4>
                                </div>
                            </div> */}
                            {/* <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={KeerthiKumarM} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr Keerthi Kumar M</p></div>
                                    <h4 style={{ marginTop: "5px" }}>Member Of HCU</h4>
                                </div>
                            </div> */}
                            {/* <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={GRamesh} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>G Ramesh</p></div>
                                    <h4 style={{ marginTop: "5px" }}>Member Of HCU</h4>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>


                {/* HOSTELS */}
                <div className='hostels' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className='alumni-fs'>    <h3 style={{ marginBottom: "30px" }}>HOSTELS</h3></div>
                    <div className='alumni-fs'>   <h3 style={{}} >WARDENS</h3></div>
                    <div style={{ width: "50px", height: "3px", backgroundColor: "#86198f", marginBottom: "20px", marginTop: "7px" }}></div>


                    <div className='wardens' style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <div className='warden-1' style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Subhash Mehto</p></div>
                                <h4>Warden, Hostel-1, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Sudhir Sahoo</p></div>
                                <h4>Warden, Hostel-1, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Santosh Kumar</p></div>
                                <h4>Warden, Hostel-1, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Saroj Mondal</p></div>
                                <h4>Warden, Hostel-2, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Hirnaya Deka</p></div>
                                <h4>Warden, Hostel-2, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rakesh Lingam</p></div>
                                <h4>Warden, Hostel-2, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Mohana Rao Balaga</p></div>
                                <h4>Warden, Hostel-2, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Ruma Ghosh</p></div>
                                <h4>Warden, Hostel-1, Girls</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Nagaveni S</p></div>
                                <h4>Warden, Hostel-1, Girls</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Ambukkarasi Rajendran</p></div>
                                <h4>Warden, Hostel-1, Girls</h4>
                            </div>
                            {/* <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rakesh Lingam</p></div>
                                <h4>Warden, Hostel 1 (Asavari)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Mohan Rao Balaga</p></div>
                                <h4>Warden, Hostel 1 (Asavari)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Dhriti Ranjan Dolai</p></div>
                                <h4>Warden, Hostel 2 (Bhairavi)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'><p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Satyapriya Gupta</p></div>
                                <h4>Warden, Hostel 2 (Bhairavi)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Dhriti Ranjan Dolai</p></div>
                                <h4>Warden, Hostel 3 (Abheri)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Satyapriya Gupta</p></div>
                                <h4>Warden, Hostel 3 (Abheri)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rahul J Pandya</p></div>
                                <h4>Warden, Hostel 4 (Behag)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Surya Prakash R

                                </p></div>
                                <h4>Warden, T-7 Hostel 7 (Durga)
                                </h4>
                            </div> */}

                        </div>
                        {/* <div className='warden-2' style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Jolly  Thomas</p>
                                <h4>Warden, Hostel 4 (Behag)
                                </h4>
                            </div>

                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rahul J Pandya</p>
                                <h4>Warden, Hostel 8 (Kedar)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Jolly  Thomas</p>
                                <h4>Warden, Hostel 8 (Kedar)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Dhriti Ranjan  Dolai</p>
                                <h4>Warden, Hostel 9 (Khamaj)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Satyapriya Gupta
                                </p>
                                <h4>Warden, Hostel 9 (Khamaj)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rahul J Pandya
                                </p>
                                <h4>Warden, Hostel 10 (Hindol)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Jolly  Thomas
                                </p>
                                <h4>Warden, Hostel 10 (Hindol)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Aniket V Kataware
                                </p>
                                <h4>Warden, T-7 Hostel 3 (Amritavarshini)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Nilkamal Mahanta
                                </p>
                                <h4>Warden, T-7 Hostel 3 (Amritavarshini)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rahul J Pandya
                                </p>
                                <h4>Warden, T-7 Hostel 4 (Kalawati)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Jolly  Thomas
                                </p>
                                <h4>Warden, T-7 Hostel 4 (Kalawati)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Aniket V Kataware

                                </p>
                                <h4>Warden, T-7 Hostel 5 (Darbar)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Nilkamal Mahanta

                                </p>
                                <h4>Warden, T-7 Hostel 5 (Darbar)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Aniket V Kataware

                                </p>
                                <h4>Warden, T-7 Hostel 6 (Surya)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Nilkamal Mahanta</p>
                                <h4>Warden, T-7 Hostel 6 (Surya)</h4>
                            </div>


                        </div>
                        <div className='warden-3' style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Dhriti Ranjan  Dolai
                                </p>
                                <h4>Warden, T-7 Hostel 8 (Bageshri)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Satyapriya Gupta
                                </p>
                                <h4>Warden, T-7 Hostel 8 (Bageshri)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>_
                                </p>
                                <h4>Warden, T-7 Hostel 9 (Kafi)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Aniket V Kataware
                                </p>
                                <h4>Warden, T-7 Hostel 10 (Todi)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Nilkamal Mahanta
                                </p>
                                <h4>Warden, T-7 Hostel 10 (Todi)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Ruma Ghosh
                                </p>
                                <h4>Warden, 5 Hostel 5 (Chayyanat)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Gayatri Ananthanarayanan
                                </p>
                                <h4>Warden, 5 Hostel 5 (Chayyanat)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Kavita Devi
                                </p>
                                <h4>Warden, 5 Hostel 5 (Chayyanat)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Ridhima Tewari
                                </p>
                                <h4>Warden, T-5 Hostel 6 (Saveri)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Surya Prakash R
                                </p>
                                <h4>Warden, T-5 Hostel 6 (Saveri)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Ruma Ghosh
                                </p>
                                <h4>Warden, T-5 Hostel 7 (Hamsadhwani)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Gayatri Ananthanarayanan
                                </p>
                                <h4>Warden, T-5 Hostel 7 (Hamsadhwani)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Kavita Devi

                                </p>
                                <h4>Warden, T-5 Hostel 7 (Hamsadhwani)
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr.  Ridhima Tewari

                                </p>
                                <h4>Warden, T-7 Hostel 7 (Durga)
                                </h4>
                            </div>

                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Prabhuchandran K.J

                                </p>
                                <h4>Mess Warden, Bhoopali Mess and Permanent Campus Mess
                                </h4>
                            </div>
                            <div className='row-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Ramchandra Phawade

                                </p>
                                <h4>Mess Warden, Bhoopali Mess and Permanent Campus Mess
                                </h4>
                            </div>


                        </div> */}
                    </div>

                    <hr />

                    <div className='hco-info' style={{ marginTop: "20px", display: "flex", gap: "20px", flexDirection: "column" }}>
                        <div>
                            <div className='alumni-fs'>    <h3 >HOSTELS CO-ORDINATING UNIT</h3></div>
                            <div style={{ width: "50px", height: "3px", backgroundColor: "#86198f", marginTop: "7px" }}></div>
                        </div>

                        <div className='information' style={{ marginTop: "20px", display: "flex", gap: "50px", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={RaviGalimath} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Ravi Shivaprakash</p>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Galimath</p>
                                    <h4 style={{ marginTop: "5px" }}>Member Of HCU</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={KeerthiKumarM} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr Keerthi Kumar M</p>
                                    <h4 style={{ marginTop: "5px" }}>Member Of HCU</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={GRamesh} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>G Ramesh</p>
                                    <h4 style={{ marginTop: "5px" }}>Member Of HCU</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={AmolDiwate} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Amol Diwate</p>
                                    <h4 style={{ marginTop: "5px" }}>Junior Superintendent</h4>
                                    <h4 style={{ marginTop: "5px" }}>Member Of HCU</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={ChetanKumarM} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Chetan Kumar M</p>
                                    <h4 style={{ marginTop: "5px" }}>Junior Assistant</h4>
                                    <h4>Member Of HCU</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={JanardanReddyS} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>S Janardhan Reddy</p>
                                    <h4 style={{ marginTop: "5px" }}>Junior Assistant</h4>
                                    <h4>Hostel Manager -2</h4>
                                    <h4>Member Of HCU</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={RaviM} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>

                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Ravi M</p>
                                    <h4 style={{ marginTop: "5px" }}>Hostel Manager -1</h4>
                                    <h4>Member Of HCU</h4>

                                </div>
                            </div>

                        </div>
                    </div>

                    <hr />

                    <div className='faculty-in' >
                        <div>
                            <div className='alumni-fs'>  <h3 style={{ marginTop: "25px" }} >FACULTY-IN-CHARGE, Hostels</h3></div>
                            <div style={{ width: "50px", height: "1px", backgroundColor: "#86198f", marginTop: "7px" }}></div>
                        </div>

                        <div style={{ width: "50px", height: "3px", backgroundColor: "#86198f", marginBottom: "20px" }}></div>
                        <div className='faculty-in-hostel' style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
                            <div className='f-c-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rakesh Lingam </p>
                                <h4>Faculty-In-Charge, Students Welfare (Hostel Affairs)</h4>
                            </div>
                            <div className='f-c-1'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Mohana Rao Balaga</p>
                                <h4>Faculty-In-Charge, Students Welfare (Hostel Affairs)</h4>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='mess-committe' style={{ display: "flex", flexDirection: "column", marginTop: "30px", marginBottom: "30px" }}>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <div className='bopali-mess'>

                                <div className='alumni-fs'>     <h3 style={{ marginBottom: "20px" }}>FACULTY-IN-CHARGE, Mess And Canteen</h3></div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Ramchandra Phawade</p>
                                            <h4>Faculty-In-Charge, Mess And Canteen</h4>

                                        </div>
                                        <div className='g-s' style={{ marginTop: "20px" }}>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Prabuchandran K J</p>
                                            <h4>Faculty-In-Charge, Mess And Canteen</h4>

                                        </div>
                                    </div>


                                </div>

                            </div>
                            {/* <div className='mess-pc'>
                                <div className='alumni-fs'>    <h3 style={{ marginBottom: "20px" }}>FACULTY-IN-CHARGE, Mess & Canteen -Permanent Campus</h3></div>
                                <div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Prabhuchandran KJ</p>
                                        <h4>Faculty-In-Charge, Mess Permanent Campus</h4>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <hr />

                        <div style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}>

                        </div>
                    </div>
                    <div className='general-secre'>
                        <div>
                            <div className='alumni-fs'>   <h3 style={{ marginBottom: "6px" }} >GENERAL SECRETARIES, Hostels</h3></div>
                            <div style={{ width: "50px", height: "3px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                        </div>

                        <div className='general-secre-hostel' style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Mr. Kodati Tharun</p>
                                    <h4>General Secretary of Hostel Affairs</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Mr. Krishna Karthik</p>
                                    <h4>General Secretary of Mess Affairs</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Mr. Amartya Sanjay Gawali</p>
                                    <h4>Junior General Secretary of Hostel Affairs</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Mr. Harshit Verma </p>
                                    <h4>1st floor Hostel secretary</h4>
                                </div>

                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Mr. Vikas Jain Sai </p>
                                    <h4>3rd Floor Hostel Secretary</h4>
                                </div>

                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Mr. Patel Saurya Ashokbhai</p>
                                    <h4>Junior General Secretary of Mess Affairs</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Ms. Katageri Anjali Gangadhar</p>
                                    <h4>Girls floor hostel secretary</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Mr. Krutay Jitesh Upadhyay</p>
                                    <h4>Ground floor Hostel secretary</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Mr. Shivam Sharma </p>
                                    <h4>2nd floor Hostel Secretary</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <BackToTop />


                <div className='gymkhana' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className='alumni-fs'>    <h3 style={{ marginBottom: "20px" }}>GYMKHANA</h3></div>
                    <div className='faculty-in-gymhkana'>
                        <div>
                            <div className='alumni-fs-fs'>     <h3 style={{ marginTop: "25px" }} >FACULTY-IN-CHARGE, Gymkhana</h3></div>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                        </div>

                        <div className='general-secre-hostel' style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rajeswara Rao M</p>
                                    <h4>Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Vigneshwara Raja P</p>
                                    <h4>Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Kavita Devi</p>
                                    <h4>Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Surya Prakash Ramesh</p>
                                    <h4>Faculty-In-Charge, Students Welfare (Culture & Events & Technical)</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Nagaveni S</p>
                                    <h4>Faculty-In-Charge, Students Welfare (Culture & Events & Technical)</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='alumni-fs'>     <h3 style={{ marginTop: "20px" }} >ASSISTANT SPORTS OFFICERS</h3></div>
                        <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                    </div>

                    <div className='information' style={{ marginTop: "20px", display: "flex", gap: "50px", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <img src={KeerthiKumarM} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr Keerthi Kumar M</p>
                                <h4 style={{ marginTop: "5px" }}>Sports Officer</h4>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <img src={RaviGalimath} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Ravi Shivaprakash</p>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Galimath</p>
                                <h4 style={{ marginTop: "5px" }}>Assistant Sports Officer</h4>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <img src={GRamesh} alt="assistan officer" style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>G Ramesh</p>
                                <h4 style={{ marginTop: "5px" }}>Assistant Sports Officer</h4>
                            </div>
                        </div>
                    </div>
                    <hr />


                    <div className='sports-section'>
                        <div>
                            <div className='alumni-fs'>    <h3 style={{ marginTop: "25px" }} >CLUB SECRETARIES -Gymkhana</h3></div>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                        </div>

                        <div className='secrataries' style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>

                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='alumni-fs-fs'>   <h3 style={{ marginTop: "25px", marginBottom: "20px" }} >TECH CLUB SECRETARIES, Gymkhana</h3></div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Pranav Kumar Pandey</p>
                                    <h4>Tech Club Secretary, AI</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Nishant Shailesh Mehta </p>
                                    <h4>Tech Club Secretary, Space Data Science</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Animesh Jain</p>
                                    <h4>Tech Club Secretary, Robotics</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Amogh R</p>
                                    <h4>Tech Club Secretary, Coding</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Jai Sharma</p>
                                    <h4>Tech Club Secretary, Finance</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Ratish Sinha</p>
                                    <h4>Tech Club Secretary, Ingene Motorsport </h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Upakramanika Bishnu</p>
                                    <h4>Tech Club Secretary, Design  </h4>
                                </div>
                            </div>
                            <div className='sports-club'>
                                <div className='alumni-fs-fs'><h3 style={{ marginTop: "25px", marginBottom: "50px" }} >SPORTS CLUB SECRETARIES, Gymkhana</h3></div>
                                <div style={{ display: "flex", gap: "20px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        {/* <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Vikas Kumawat</p>
                                                <h4>Sports Club Secretary, Yoga </h4>
                                            </div> */}
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Shivam Kumar </p>
                                            <h4>Sports Club Secretary, Athletics</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Maddela Vaishwitha</p>
                                            <h4>Sports Club Secretary, Badminton</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Nipun Gupta </p>
                                            <h4>Sports Club Secretary, Basketball</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Khot Atharva Deepak</p>
                                            <h4>Sports Club Secretary, Chess</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Tanishq Singh </p>
                                            <h4>Sports Club Secretary, Weightlifting</h4>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Suharsh Agarwal</p>
                                            <h4>Sports Club Secretary, Cricket</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Krishnanshu Yadav</p>
                                            <h4>Sports Club Secretary, E- Sports </h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Vedansh Chaudhary</p>
                                            <h4>Sports Club Secretary, Football</h4>
                                        </div>
                                        {/* <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Atharv Gade</p>
                                                <h4>Sports Club Secretary, Table Tennis</h4>
                                            </div> */}
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Omkar Shivram Kulkarni</p>
                                            <h4>Sports Club Secretary, Tennis </h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Gullipalli Rishikesh </p>
                                            <h4>Sports Club Secretary, Volleyball </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='sports-section'>

                        <div className='secrataries' style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
                            <div className='sports-club'>
                                <div className='alumni-fs'>    <h3 style={{ marginTop: "25px", marginBottom: "20px" }}>CULTURE CLUB SECRETARIES, Gymkhana</h3></div>
                                <div style={{ display: "flex", gap: "20px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>.</p>
                                            <h4>Culture Club Secretary, Dance</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Vedant Kannur</p>
                                            <h4>Culture Club Secretary, Dramatics</h4>
                                        </div>
                                        {/* <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Suharsh Agrawal</p>
                                            <h4>Culture Club Secretary, EBSB</h4>
                                        </div> */}
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Yogits Darji</p>
                                            <h4>Culture Club Secretary, Fine Arts</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Prachi Prasoon</p>
                                            <h4>Culture Club Secretary, Literary</h4>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Mann Manoj Maru</p>
                                            <h4>Culture Club Secretary, Music</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Bidipta Saha</p>
                                            <h4>Culture Club Secretary, Photography</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Singhal Gaurav Ritesh Kumar</p>
                                            <h4>Culture Club Secretary, Quiz</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}></p>
                                            <h4>Culture Club Secretary, Prabodhini</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Shende Lavanya Jayant </p>
                                            <h4>Culture Club Secretary, Dhristi </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='nso'>
                        <div className='alumni-fs'>    <h3 style={{ marginTop: "25px", marginBottom: "20px" }} >NSO/NSS/NCC</h3></div>
                        <div className='g-s'>
                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Keerthi Kumar M</p>
                            <h4>Officer-In-Charge, (NSO/NSS/NCC)</h4>
                        </div>
                    </div>


                </div>

                <div className='wellness' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className='alumni-fs'>    <h3 style={{ marginBottom: "20px" }} >WELLNESS</h3></div>
                    <div className='alumni-fs'>    <h3 style={{ marginBottom: "20px" }}>HEALTH CENTER</h3></div>
                    <div>
                        <div className='alumni-fs-fs'>   <h3 style={{ marginTop: "20px" }} >FACULTY-IN-CHARGE, Health</h3></div>
                        <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                    </div>

                    <div style={{ display: "flex", gap: "330px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div className='g-s'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Satish Naik B</p>
                                <h4>Faculty-In-Charge, Students Welfare (Health and Ambulance)</h4>
                            </div>
                            <div className='g-s'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Shreedevi K Masuti</p>
                                <h4>Faculty-In-Charge, Students Welfare (Health and Ambulance)</h4>
                            </div>
                        </div>
                        {/* <div className='ambulance' style={{ display: "flex", flexDirection: "column", gap: "10px", border: "2px solid red", padding: "10px" }}>
                            <h3 style={{ color: "red" }}>Ambulance</h3>
                            <h4 style={{ color: "red" }}>Mob 8105405107</h4>

                        </div> */}
                    </div>
                    <hr></hr>
                    <div className='alumni-fs'>    <h3 style={{ marginBottom: "20px", marginTop: "20px" }} >COUNSELLING CENTER</h3></div>
                    <div>
                        <div className='alumni-fs-fs'>   <h3 style={{ marginTop: "20px" }} >FACULTY-IN-CHARGE, Counselling</h3></div>
                        <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                    </div>

                    <div style={{ display: "flex", gap: "50px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div className='g-s'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Pradeep Yammiyavar</p>
                                <div className='alumni-fs-fs'>    <h4>Faculty-In-Charge, Students Welfare (Wellness Counselling)</h4></div>
                            </div>
                            <div className='g-s'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rajshekar. K</p>
                                <div className='alumni-fs-fs'>    <h4>Faculty-In-Charge, Students Welfare (Wellness Counselling)</h4></div>
                            </div>

                        </div>


                    </div>
                    <hr></hr>
                    <div>
                        <div className='alumni-fs'>   <h3 style={{ marginBottom: "20px", marginTop: "20px" }} >STUDENTS MENTORSHIP</h3></div>
                        <div>
                            <div className='alumni-fs-fs'>   <h3 style={{ marginTop: "20px" }} >FACULTY-IN-CHARGE, Mentorship</h3></div>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div className='g-s'>
                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rahul Jashvantbhai Pandya</p>

                                <div className='alumni-fs-fs'>   <h4>Faculty-In-Charge, Mentorship</h4></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='alumni-fs'><h3 style={{ marginBottom: "20px", marginTop: "30px" }}>STUDENT MENTORS</h3></div>
                        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Varad Kamtekar</p>
                                    <h4>Student Mentor Co-ordinator</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Agrim Jain</p>
                                    <h4>Assistant Student Mentor Co-ordinator</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Suharsh Agrawal</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Ayush Mallick</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Yash Sandip Gholkar</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Sachin Kumar</p>
                                    <h4>Assistant Student Mentor Co-ordinator</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dantuluri Mahima</p>
                                    <h4>Assistant Student Mentor Co-ordinator</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Deekshith Kumar</p>
                                    <h4>Assistant Student Mentor Co-ordinator</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Ameya Langer</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prachi Prasoon</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Neha Rajendrakumar Gaonkar</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Vivek Sharma</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Mann Maru</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Om Nilesh Nakrani</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Vineeta nihalani</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Vedant Patwardhan</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Nipun Gupta</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Vedansh Chaudhary</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Anjali Katageri</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Pranav Kumar Pandey</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prajwal Biradar</p>
                                    <h4>Assistant Student Mentor Co-ordinator</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>N Soumya</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Rohit Garg</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prabhav patel</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Nishant Shailesh Mehta</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Adarsh Gupta</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Samarth Chitnis</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Aman Patidar</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Krunal Patel</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Arpan Sahu</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Jai Sharma</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Aayush Vats</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Atharva Tijare</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Amogh R</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Vatista Kachroo</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Sai Dhruthi K V L</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Soumya Ranjan Sahoo</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Shivain Anandl</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Tanvi Nayak</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Sanjana Mittapally</p>
                                    <h4>Assistant Student Mentor Coordinator</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Velivela Mohith Naga Sai</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>M Vishnu Charan</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Surya Narayan Upadhyay</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Sarthak Chaturvedi</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dhruv Pani Chandra</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Omkar Kulkarni</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Priyanshu Mishra</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prabhanshu Kumar Jha</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prakriti Tripathi</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Luv Shanker</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Aryan Bandaru</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Gaurav Singhal</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Kulkarni Atharva Suresh</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Gurjaipal Singh</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Ratish Sinha</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Utkarsh Gupta</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Shubham Raj</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Ramank sharma</p>
                                    <h4>Institute Student Mentor</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='alumni' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className='alumni-fs'><h3 style={{ marginBottom: "20px" }}>ALUMNI ASSOCIATION</h3></div>
                    <div>
                        <div className='alumni-fs-fs'><h3 style={{}} >FACULTY-IN-CHARGE, Alumni Activities</h3></div>

                        <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                    </div>

                    <div>
                        <div className='g-s'>
                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Hiranya Deka</p>
                            <h4>Faculty-In-Charge, Alumni activities</h4>
                        </div>
                    </div>



                    <div>
                        <div className='g-s' style={{ marginTop: "20px" }}>
                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Kunal Kumar</p>
                            <h4>President</h4>
                        </div>
                    </div>

                </div>
                <div className='former-fs'>
                    <div className='alumni-fs'><p style={{ marginTop: "20px", marginLeft: "10px", fontWeight: "600" }}>Former Deans -Students Welfare Division</p></div>
                    <div className='dean-fs' style={{ marginTop: "auto", backgroundColor: "#fae8ff" }}>
                        <div className='first-fs' style={{ display: "flex", gap: "6px", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                            <img src={BLTembe} alt='loading'></img>
                            <p style={{ color: "#4338ca" }} className='name'>Prof. B.L.Tembe </p>
                            <p style={{ color: "rgb(51, 72, 120)" }} className='designation'>July 2019 - June 2023</p>

                        </div>
                    </div>
                </div>
                <NavLink to="/dean_associate_deans"  >
                    <div className="link-class" style={{ backgroundColor: "#fecaca", float: "left", borderRadius: "5px", padding: "5px", display: "flex", fontSize: "1.4rem", margin: "20px", alignItems: "center", color: "", justifyContent: "center", width: "100px" }}><FaArrowLeft /><p style={{ padding: "10px 5px 10px 5px" }}>Back</p></div>
                </NavLink>

            </div >
        </>
    )
}
