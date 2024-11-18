import React from 'react';
import './AdministrativeOffice.css';
import chetanKumar from './images/ChetanKumarM - Chetan Kumar M.jpg';
import janardanReddy from './images/Janardhan Reddy S.jpg';
import raviM from './images/RaviM.jpg';
import raviSG from './images/Ravi - Ravi Ghalimath.jpg';
import keerthiK from './images/Keerthi Kumar.jpeg';
import GRamesh from './images/Ramesh - Ramesh G.png';
// import ramjee from './images/ramjee.png';
import Ramjee from './images/Ramjee_Image.jpeg';
import amoldiwate from './images/amoldiwate.jpg';
import Arun from "../Img/Arun_Verma.jpg";
import Avinash from "../Img/IMG_20240115_154113 - AVINASH B.jpg";
import RameshKumar from './images/RameshKumar.png';
import { motion } from 'framer-motion';
export default function AdministrativeOffice() {
    return (
        <>
            <motion.div className='admin-office' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='student-admin-office' style={{ borderBottom: "5px solid #86198f", marginTop: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className='admin-header'>
                        <p style={{ textAlign: "center" }} >STUDENT WELFARE ADMINISTRATION OFFICE</p>
                    </div>

                    <div style={{ margin: "auto", display: "flex", margin: "50px 0px", flexWrap: "wrap" }} className='admin-office-main'>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "50px" }}>
                            {/* <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }} > */}
                            <div>
                                
                            </div>
                            <div className='adm-r'>
                                <div className='img-wrap'>
                                <img src={Ramjee} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%",backgroundColor:"white" }}></img>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}><p className='name' style={{ color: "#4338ca", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>Prof. Ramjee Repaka <p></p></p><p className='name' style={{ color: "#4338ca" }}> Reddy</p></div>
                                    <p className='des' style={{ marginTop: "5px" }}>Dean Student Welfare</p>
                                </div>
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div className='adm-r'>
                                <div className='img-wrap'>
                                <img style={{ height: "100px", width: "100px", borderRadius: "50%"}} src={Arun} alt='loading'></img>
                                </div>
                                    
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5px" }}>
                                    <div style={{ color: "#4338ca", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "3px", fontWeight: "600" }}>    <p className='name-e' style={{}}>Mr. Arun Verma</p><p className='name-e'></p></div>
                                    <p className='des' style={{ marginTop: "5px" }}>Assistant Registrar</p>
                                    <p className='des' style={{ marginTop: "5px" }}>Student Welfare</p>

                                </div>
                            </div>
                            <div>

                            </div>
                            <div className='adm-r-r'>
                                <div className="img-wrap">
                                    <img src={amoldiwate} style={{ height: "100px", width: "100px", borderRadius: "50%" }} alt='loading'></img>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p className='name' style={{ color: "#4338ca" }}>Mr. Amol Diwate</p>
                                    <div style={{ marginTop: "5px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "3px" }}> <p className='des'>Junior</p><p className='des'>Superintendent</p></div>
                                    {/* <p className='des' style={{ marginTop: "5px" }}>Member Of HCU</p> */}

                                </div>
                            </div>
                            <div className='adm-r-r-r'>
                                <div className="img-wrap">

                                <img alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }} src ={Avinash}></img>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p className='name' style={{ color: "#4338ca" }}>Mr. Avinash B</p>
                                    <p className='des' style={{ marginTop: "5px" }}>Junior Assistant</p>
                                    {/* <p className='des'>Member Of HCU</p> */}
                                </div>
                            </div>
                            {/* </div> */}
                            {/* <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }} > */}
                            <div className='adm-r-r'>
                                <div className="img-wrap">

                                <img src={janardanReddy} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}><p className='name' style={{ color: "#4338ca", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>Mr. Janardhan Reddy S <p></p></p><p className='name' style={{ color: "#4338ca" }}> Reddy</p></div>
                                    <p className='des' style={{ marginTop: "5px" }}>Junior Assistant</p>
                                    {/* <p className='des'>Hostel Manager -2</p>
                                        <p className='des'>Member Of HCU</p> */}
                                </div>
                            </div>
          
                            
                            {/* </div> */}
                            {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}> */}
                                {/* 
                                <div className='adm-r-r'>
                                    <img src={raviM} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                        <p className='name' style={{ color: "#4338ca" }}>Ravi M</p>
                                        <p className='des' style={{ marginTop: "5px" }}>Hostel Manager -1</p>
                                        <p className='des'>Member Of HCU</p>
                                    </div>
                                </div> */}
                            {/* </div> */}
                        </div>

                        {/* <div style={{ display: "flex", gap: "25px", flexDirection: "column" }} className='officers'>
                            <div>  <p style={{ textAlign: "center" }} className='officer-header'>Officers</p>
                                <p style={{ textAlign: "center" }} className='hostels-unit'>Hostels Coordinating Unit</p></div>
                            <div className='adm-r-r'>
                                <img src={keerthiK} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <div style={{ color: "#4338ca", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "4px" }}>    <p className='name' >Dr Keerthi Kumar</p> <p className='name' style={{ color: "#4338ca" }}>M</p></div>
                                    <p className='des' style={{ marginTop: "5px" }}>Member Of HCU</p>
                                </div>
                            </div>
                            <div className='adm-r-r'>
                                <img src={GRamesh} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p className='name' style={{ color: "#4338ca" }}>G Ramesh</p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", alignItems: "center" }}>   <p className='des' style={{ marginTop: "5px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>Member Of</p><p className='des' style={{ marginTop: "5px" }}>HCU</p></div>
                                </div>
                            </div>
                            <div className='adm-r-r'>
                                <img src={raviSG} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p className='name' style={{ color: "#4338ca" }}>Ravi Shivaprakash</p>
                                    <p className='name' style={{ color: "#4338ca" }}>Ghalimath</p>
                                    <p className='des' style={{ marginTop: "5px" }}>Member Of HCU</p>
                                </div>
                            </div>
                        </div>*/}
                    </div>





                </div >
                <div className='about-office-p-p'>
                    <div className='sub-header-r'>   <p style={{ borderLeft: "5px solid #312e81", color: "rgb(30, 64, 175)", paddingLeft: "10px" }} >About</p></div>
                    <div className='about-office-p'>    <p className='fs-fs' style={{ color: " #666", marginTop: "20px" }}>The Student Welfare Administrative Office Team at IIT Dharwad believes in all round development of holistic personality of its students and ensures students stay in the campus is comfortable, fruitful and happy. The SW Team is on duty 24 hours round the clock with Hostel Managers residing with the students in the Hostels.</p><p style={{ marginTop: "10px", color: " #666" }} className='fs-fs'> IIT Dharwad practices gender equality, respects neurodivergence and is a socially all-inclusive residential campus. The Campus buildings, including Hostels are designed for accessibility by persons with disability (PWD).</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
