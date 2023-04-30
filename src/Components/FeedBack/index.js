import React, { useState } from 'react'
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './index.css'

export default function FeedBack() {
    const [click, setClick] = useState(false)
    const [down, setDown] = useState(false)
    const [toggle, setToggle] = useState(false)
    const clickThumbsUp = () => {
        if (!click) {
            setClick(true)
            setDown(false)
        }
        else {
            setClick(false)

        }
    }

    const clickThumbsDown = () => {
        if (down) {
            setDown(false)

        }
        else {
            setDown(true)
            setClick(false)

        }

    }
    const colorBtnUp = click ? 'green' : ''
    const colorBtnDown = down ? 'red' : ''


    const sendBtn = () => {
        if (!toggle) {
            setToggle(true)
        }
        else {
            setToggle(false)
        }

    }
    return (
        <div className='feed-back'>
            <h2>Feed Back Form</h2>
            {toggle ? (<div className='thankyou'>
                <img src='https://media.istockphoto.com/id/1127929106/vector/thank-you-lettering-sign-with-black-gold-stars.jpg?s=612x612&w=0&k=20&c=SyEdWTO9gOy_pyVXAtR72DF71xLdYnLn-35rAGUeSD8='
                    alt='thankyou' width='200px' height='200px' />
                <br />


            </div>) : (
                <div className='feedback-form'>
                    <h6>How would you Rate the Support you received</h6>
                    <div className='d-flex'>
                        <button className={`button ${colorBtnUp}`} onClick={clickThumbsUp}><BsHandThumbsUp />Good I'm Satisfied</button>
                        <button className={`button ${colorBtnDown}`} onClick={clickThumbsDown}><BsHandThumbsDown />Bad I'm  Not Satisfied</button>
                    </div>
                    &nbsp;
                    <label htmlFor='support'>Add a Comment About Quality of a Support you Received</label>
                    <textarea id="support" name="prb" rows="4" cols="50" placeholder='What are you seeking? *' value={'text'} >
                    </textarea>
                    &nbsp;
                    <button className='send-btn' onClick={sendBtn}>Send</button>
                    &nbsp;
                    <Link to='/'>
                        <span> <AiOutlineArrowLeft />Back To Home</span>
                    </Link>
                </div>)}


        </div>
    )
}
