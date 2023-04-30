import React from 'react'
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './index.css'
import {Link}  from 'react-router-dom'


export default function NavBar({ isScrolled }) {
    const navigate = useNavigate();

    const getSelectItem = (e) => {
        let input_value = e.target.value
        if (input_value ==='IN-Home-CARE'){
            navigate("/homecare");
        }
        if (input_value === 'ELDER CARE') {
            navigate("/eldercare");
        }
        if (input_value === 'RESPITE CARE') {
            navigate("/respitcare");
        }
        if (input_value === 'SPECIAL NEED CAR') {
            navigate("/care");
        }
    }
    const getResources =(e) => {
        let resource_value = e.target.value
        if (resource_value === 'Exercises') {
            navigate("/exercises");
        }
        if (resource_value === 'FeedBack') {
            navigate("/feedback");
        }
    }
    return (
        <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
            <div className='navbar d-flex a-center '>
                <div className='d-flex'>
                    <h1 className='care-life'>CARE LIFE</h1>
                    <img src='https://img.freepik.com/premium-vector/medical-love-health-care-logo_7888-284.jpg?w=2000' alt='logo'
                        height='50px' width='50px'
                    />
                </div>
                <div className='nav-items d-flex'>
                    <Popup trigger={<button className='contact-btn'>Contact Us</button>} >
                        <div className='get-card'>
                            <p>phoneNbr:1-400-568-6565 </p>
                            <p>Email:info@carrier.com </p>
                        </div>
                    </Popup>
                    <select name="care" id="care" className='select-types'
                        onChange={getSelectItem} >
                        <option value="Types of Care" selected="selected">Types of Care</option>
                        <option value="IN-Home-CARE">
                            IN-Home-CARE
                        </option>
                        <option value="ELDER CARE">ELDER CARE</option>
                        <option value="RESPITE CARE">RESPITE CARE</option>
                  
                    </select>
                    <select name="resources" id="Resources" className='select-types' onChange={getResources}>
                        <option value="Resources">Resources</option>
                        <option value="Exercises">Exercises</option>
                        <option value="FeedBack">FeedBack</option>
                      
                    </select>
                  
                    <Link to='/feedback'>
                        <button className='feedback-btn'>FeedBack</button>
                    </Link>
                    <Link to='register'>
                        <button className='register-btn'>Register</button>
                    </Link>
                    <Link to='/getstarted'>
                        <button className='started'>Get Started</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

