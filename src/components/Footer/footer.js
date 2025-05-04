import React from 'react';
import './footer.css'; // Import the CSS file for custom styling
import { Link } from 'react-router-dom';


const Footer = () => {

    const handleclick = () => {
        window.location.href = '/student-activities';
    }
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* <div className="row"> */}
                <div className="footer-col">
                    <ul>
                        <li> INDIAN INSTITUTE OF TECHNOLOGY DHARWAD</li>
                        <li>PERMANENT CAMPUS</li>
                        <li>CHIKKAMALLIGAWAD</li>
                        <li>DHARWAD - 580 011</li>
                        <li>KARNATAKA</li>
                        <li>BHARATA (INDIA)</li>
                    </ul>
                </div>
                <div className="footer-col a">
                    {/* <h4>LINKS</h4> */}
                    <h3 style={{color:"white"}}>Our Links </h3>
                    <div style={{border: "2px solid grey" , width:"20%"}}>
                    </div>
                    <ul>
                        <li>
                            <p><a href='https://intranet.iitdh.ac.in:444/'> Intranet</a> </p>
                        </li>
                        <li>
                        <p>
                            <Link to="#" >
                            Student Activities
                            </Link>{" "}

                        </p>
                        </li>
                        <li>
                        <p>
                            <Link to="#" >
                            RTI
                            </Link>{" "}
                        </p>
                        </li>

                    </ul>
                </div>


                {/* </div> */}
            </div>
        </footer>
    );
};

export default Footer;
