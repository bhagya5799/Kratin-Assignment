import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'
import Header from '../Header';
import './index.css'

const GetStarted = (props) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phoneNbr, setPhoneNbr] = useState('')
    const [city, setCity] = useState('')
    const [service,setService]=useState('')
    const [joineName, setjoineName]=useState('')
    const [age,setAge]=useState('')
    const [text,setText]=useState('')
    const [hear,setHear]=useState('')
    const [errorMessage, setErrMessage] = useState('')
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();

    const SubmitDate = async (event) => {
        event.preventDefault()
        console.log(name,age,hear,text,phoneNbr,joineName,service,city)
        if (name.length > 1 && email.length > 1 && phoneNbr.length>3 && city.length > 2 &&
            service.length>2 && joineName.length>2 && age.length>1 && text.length>4 && 
            hear.length>1 ) {
            navigate("/");
            setToggle(false)
        }
        else {
            console.log('no')
            setToggle(true)
            setErrMessage('Enter Valid Details')

            
        }

    }


    return (
        <div className='getStart'>
            <div className='header-bar'>
                <Header />
                <div className='bar-2 d-flex a-center'>
                    <h2>CARE LIFE</h2>
                    <img src='https://img.freepik.com/premium-vector/medical-love-health-care-logo_7888-284.jpg?w=2000' alt='logo'
                        height='50px' width='50px'
                    />
                    &ensp;
                    <Link to='/'>
                        <span> <BiArrowBack />Back To Home</span>
                    </Link>
                </div>
            </div>
            <div className='get-start-form'>
                <p className='get-start'>Get Started ToDay</p>
                <form className='form-container d-flex flex-column' onSubmit={SubmitDate}>
                    <label htmlFor='name' className='name'>First Name & Last Name</label>
                    <input id="name" type='text' placeholder='Name' onChange={(e) =>setName(e.target.value)}  value={name}/>
                    &nbsp;
                    <label htmlFor='email' className='name'>Email Address</label>
                    <input id="email" type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}  value={email}/>
                    &nbsp;
                    <label htmlFor='phone' className='name'>Phone Number</label>
                    <input id="phone" type='text' placeholder='Name' onChange={(e) => setPhoneNbr(e.target.value)} />
                    &nbsp;
                    <label htmlFor='phone' className='name'>What city and state are you located in?*r</label>
                    <input id="phone" type='text' placeholder='Enter City or State' onChange={(e) => setCity(e.target.value)} />
                    &nbsp;
                    <label htmlFor='service' className='name'>Are these services for you or someone else?</label>
                    <select name='service' id='service' value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="My self" selected='selected'>My self</option>
                        <option value="Some one">Some one</option>
                    </select>
                    &nbsp;
                    <label htmlFor='some' className='name'>If someone else - please enter their first and last name here.</label>
                    <input id="some" type='text' placeholder='Enter their Name ' onChange={(e) => setjoineName(e.target.value)} />
                    &nbsp;
                    <label htmlFor='age' className='name'>What is the age of person seeking services? *</label>
                    <input id="age" type='number' placeholder='Enter Person Age Here ' value={age} onChange={(e) => setAge(e.target.value)} />
                    &nbsp;
                    <label name='prb' htmlFor='prb' className='name'>What is the age of person seeking services? *</label>
                    <textarea id="prb" name="prb" rows="4" cols="50" placeholder='What are you seeking? *' value={text} onChange={(e) => setText(e.target.value)}>
                    </textarea>
                    &nbsp;
                    <label htmlFor='hear'>How did you hear about us? *</label>
                    <select name='hear' id='hear'  value={hear} onChange={(e) => setHear(e.target.value)}>
                        <option value="TV">TV</option>
                        <option value="Radio">Radio</option>
                        <option value="FaceBook">FaceBook</option>
                        <option value="Google">Google</option>
                    </select>
                    &nbsp;
                    <input type='submit' className='started' />
                    {toggle && <p className='error-message'>{errorMessage}</p>}
                </form>
            </div>



        </div>
    )
}
export default GetStarted