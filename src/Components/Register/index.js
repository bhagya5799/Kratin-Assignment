import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'

import './index.css'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phoneNbr, setPhoneNbr] = useState('')
    const [city,setCity]=useState('')
    const [errorMessage, setErrMessage] = useState('')
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();

    const SubmitForm = async (event) => {
        // event.preventDefault()
        if (name.length > 1 && email.length > 1 && phoneNbr.length >2 && city.length>2) {
            console.log('ok')
            navigate("/");
            setErrMessage('Register SuccessFull')
            setToggle(true)
        }
        else {
            console.log('no')
            setErrMessage('Enter Valid Details')
            setToggle(false)
        }

    }


    return (
        <div className='Register-form-container'>
            <form autoComplete="off" onSubmit={SubmitForm} className="r-form">
                <h4 className='loginPage-title'>Register Form</h4>
                <label htmlFor='email'>Name</label>
                <div className='input-card'>
                    <input id='email' type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    <p className='icons' ></p>
                </div>&nbsp; <br />
                <label htmlFor='email'>Email</label>
                <div className='input-card'>
                    <input id='email' type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <p className='icons' ></p>
                </div>&nbsp; <br /> 
                <label htmlFor='Mailpassword'>Phone Nbr</label>
                <div className='input-card'>
                    <input id='Mailpassword' type="password" value={phoneNbr} placeholder='password' onChange={(e) => setPhoneNbr(e.target.value)} />
                    <p className='icons'></p>
                </div>&nbsp; <br /> 
                <label htmlFor='City'>State Name</label>
                <div className='input-card'>
                    <input id='City' type="text" value={city} placeholder='State' onChange={(e) => setCity(e.target.value)} />
                    <p className='icons'></p>
                </div>&nbsp; <br /> 
                <button type='submit' className='login-btn'>Register</button>
                {!toggle && <p className='error-message'>{errorMessage}</p>}
                <Link to='/' className='back'><BiArrowBack/> Back To Home</Link>
            </form>
            
        </div>
    )
}
export default Register