import React, { useEffect } from 'react';
import './Health.css';
import { LiaHospital } from 'react-icons/lia';
import { IoIosArrowDown } from 'react-icons/io';
import { SiGotomeeting } from 'react-icons/si';
import { useRef } from 'react';

import OmkarBembalge from '../../../images/faculty/omkar-basavaraj-bembalge.jpg';
import RidhimaTewari from '../../../images/faculty/ridhima-tewari.jpg';

import BootstrapCard from '../../../components/Cards/BootstrapCard.js';

import wellnesscentre from '../../../images/wellnesscentre.jpg';
import yourDost from '../../../documents//YourDOST_steps_2023_07_19.pdf';
import telemanasa from '../../../documents//teleMANASA.pdf';
import { motion } from 'framer-motion';
import Scrollevent from '../../Scrollerevent2';



// this section is for Health




export default function WellnessSection() {



    const wellness = useRef();
    const counselling = useRef();
    const scrollHandler = (elmRef) => {
        console.log(elmRef.current)
        window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    }


    return (
        <>
            <motion.div className='pb-5 pt-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 className='mb-2'>Wellness - Health</h1>

                <div className='mt-5'>
                    <div className='custom-sub-header fs-2'>
                        <p>Wellness Centre</p>
                    </div>

                    <div className='custom-content text-start fs-4'>
                        <p>
                            The Wellness Centre hosts Medical and Mental Wellness services for all the campus residents. A panel of eminent visiting Doctors provide consultations at the Centre which is 24x7 facility with Nurses and Ambulance service.
                            The Psychological Counselling services are operated online by service providers.
                            A Volunteering Counselling Psychologist is available on campus by appointment.
                        </p>
                    </div>

                    <div className='mt-5 card custom-important-container text-center p-5' style={{ width: '50%', margin: 'auto' }}>
                        <img className='card-img-top img-fluid w-75 h-auto' src={wellnesscentre} alt="Wellness Centre" />
                        <div className='card-body'>
                            <p className='p1'>Ambulance No:</p>
                            <p className='p2'>+91 81054 05107</p>
                            <a href="https://maps.app.goo.gl/vLfZWxkLpektRyc16" className='btn btn-primary'>View in Map</a>
                        </div>
                    </div>
                </div>

                <div className='mt-5 custom-sub-header fs-2'>
                    <p>Visiting Doctors</p>
                </div>

                <div className='mcustom-content text-start fs-4'>
                    <p>
                        <li>Dr. S S Mudakavi, General Physician</li>
                        <li>Dr. K.V Achyutha, Pediatrician</li>
                        <li>Dr. Reshma Rathod, Consultant Obstetrician & Gynecologist</li>
                        <li>Dr. Aditya Pandurangi, Consultant Psychiatrist</li>
                        <li>Dr. Sudhir Bhatbolan, Physiotherapist</li>
                        <li>Dr. Shrikrishna.N. Javali, General Physician</li>
                    </p>
                </div>

                <div className='mt-5 custom-sub-header fs-2'>
                    <p>Associate Dean & Faculty in Charge</p>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <div className="rounded custom-important-container w-50">

                        <div className="row p-2 justify-content-center">
                            <div className="col-md-6">
                                <BootstrapCard
                                    image={RidhimaTewari}
                                    name="Prof. Ridhima Tewari"
                                    title="Associate Dean, Students Welfare, Wellness"
                                    link="https://www.iitdh.ac.in/node/1999"
                                    email="adean.sww@iitdh.ac.in"
                                />
                            </div>
                            <div className="col-md-6">
                                <BootstrapCard
                                    image={OmkarBembalge}
                                    name="Prof. Omkar Basavaraj Bembalge"
                                    title="Faculty-In-Charge, Students Welfare (Health and Ambulance)"
                                    link="https://www.iitdh.ac.in/user-profile/omkar-baswaraj-bembalge"
                                    email="fic.health@iitdh.ac.in"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
