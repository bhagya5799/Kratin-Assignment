import React from 'react'
import Header from '../Header';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import video from '../media/exercise-1.mp4'
import './index.css'

export default function Exercises() {
    const navigate = useNavigate();
    const getResources = (e) => {
        let resource_value = e.target.value
        if (resource_value === 'Exercises') {
            navigate("/exercises");
        }
    }
    return (
        <div className=' d-flex flex-column'>
            <div className='header-bar'>
                <Header />
                <div className='bar d-flex a-center'>
                    <h2>CARE LIFE</h2>
                    <img src='https://img.freepik.com/premium-vector/medical-love-health-care-logo_7888-284.jpg?w=2000' alt='logo'
                        height='50px' width='50px'
                    />
                    <select name="resources" id="Resources" className='select-types' onChange={getResources}>
                        <option value="Resources">Resources</option>
                        <option value="Exercises">Exercises</option>
                        <option value="FINANCIAL OPTIONS">FINANCIAL OPTIONS</option>
                        <option value="CHILDREN'S CHOICE WAVER">CHILDREN'S CHOICE WAVER</option>
                        <option value="LT-PCS WAIVER">LT-PCS WAIVER</option>
                        <option value="HELPFUL LINKS">HELPFUL LINKS</option>
                    </select>
                    &ensp;
                    <Link to='/'>
                        <span> <AiOutlineArrowLeft />Back To Home</span>
                    </Link>
                    <Link to='/getstarted'>
                        <button className='started'>Get Started</button>
                    </Link>
                </div>
            </div>
            
            <div className='d-flex flex-column video-container' >
                <video
                    src={video}
                    autoPlay
                    loop
                    controls
                    muted
                />
                <div class="overlay">
                    <h4 data-ix="navbar-hero" class="hero-headline">The Best Exercises for Seniorsjj <br />
                    </h4>
                </div>
            </div>
            <div className='exercise-container d-flex'>
                <div className='blog-card-1 d-flex flex-column '>
                    <img src='https://slc1.wpengine.com/wp-content/uploads/2020/02/three-older-adults-performing-water-aerobics-in-a-community-pool-1-480x320.jpg'
                        height='200px' width='100%' alt='child' />
                    <h4>Water aerobics</h4>
                    <ul>
                        <li>Aqua jogging</li>
                        <li>Flutter kicking</li>
                        <li>Leg lifts</li>
                        <li>Standing water push-ups</li>
                    </ul>
                </div>
                <div className='blog-card-1 d-flex flex-column '>
                    <img src='https://slc1.wpengine.com/wp-content/uploads/2020/02/class-of-older-women-learning-chair-yoga-positions-1-480x320.jpg'
                        height='200px' width='100%' alt='child' />
                    <h4>Chair yoga</h4>
                    <ul>
                        <li>Overhead stretch</li>
                        <li>Seated cow stretch</li>
                        <li>Seated cat stretch</li>
                        <li>Seated mountain pose</li>
                        <li>Seated twist</li>
                    </ul>
                </div>
                
                <div className='blog-card-1 d-flex flex-column '>
                    <img src='https://slc1.wpengine.com/wp-content/uploads/2020/02/older-man-performing-pilates-exercises-on-a-ball-with-the-help-of-a-young-trainer-1-480x320.jpg'
                        height='200px' width='100%' alt='child' />
                    <h4>Pilates</h4>
                    <ul>
                        <li>Mermaid movement</li>
                        <li>Side circles</li>
                        <li>Food slides</li>
                        <li>Step ups</li>
                        <li>Leg circle</li>
                    </ul>
                </div>
                <div className='blog-card-1 d-flex flex-column '>
                    <img src='https://media.istockphoto.com/id/1282867645/photo/senior-man-in-dressing-gown-using-walking-frame-being-helped-by-female-care-worker.jpg?s=612x612&w=0&k=20&c=OCDKpzFMcrDUubbGPTeYiBIHhd14h1qCXfvR443Bb6g='
                        height='200px' width='100%' alt='child' />
                    <h4>Walking</h4>
                    <ul>
                        <li>Jogging:</li>
                        <li> Brisk walking</li>
                        <li>Walking</li>
                        <li>Help in getting sound sleep</li>
                    </ul>
                   
                </div>
                <div className='blog-card-1 d-flex flex-column '>
                    <img src='https://slc1.wpengine.com/wp-content/uploads/2020/02/older-adult-in-resistance-band-class-1-480x320.jpg'
                        height='200px' width='100%' alt='child' />
                    <h4>Resistance band workouts</h4>
                    <ul>
                        <li>Leg press</li>
                        <li>Triceps press</li>
                        <li>Lateral raise</li>
                        <li>Bicep curl</li>
                        <li>Band pull apart</li>
                    </ul>
                </div>
                <div className='blog-card-1 d-flex flex-column '>
                    <img src='https://media.istockphoto.com/id/600177016/photo/instructor-performing-yoga-with-seniors.jpg?s=612x612&w=0&k=20&c=wisyUUo0b-NpD3foKCn1RAEja6clt6v7ep4PhSXfbds='
                        height='200px' width='100%' alt='child' />
                    <h4>Yoga</h4>
                    <ul>
                        <li>Yoga improves strength, balance and flexibility</li>
                        <li>Yoga relaxes you, to help you sleep bette</li>
                        <li>Yoga can ease arthritis symptoms</li>
                        <li>Bicep curl</li>
                        <li>Band pull apart</li>
                    </ul>
                </div>
                <div className='blog-card-1 d-flex flex-column '>
                    <img src='https://www.ventanabybuckner.com/wp-content/uploads/2021/09/Yoga-vs.-Pilates-for-Seniors.jpeg'
                        height='200px' width='100%' alt='child' />
                    <h4>Yoga</h4>
                    <ul>
                        <li>Yoga improves strength, balance and flexibility</li>
                        <li>Yoga relaxes you, to help you sleep bette</li>
                        <li>Yoga can ease arthritis symptoms</li>
                        <li>Bicep curl</li>
                        <li>Band pull apart</li>
                    </ul>
                </div>
                <div className='blog-card-1 d-flex flex-column '>
                    <img src='https://img.freepik.com/premium-photo/senior-couple-performing-stretching-exercise-exercise-mat_107420-84556.jpg?w=996'
                        height='200px' width='100%' alt='child' />
                    <h4>Yoga</h4>
                    <ul>
                        <li>Yoga improves strength, balance and flexibility</li>
                        <li>Yoga relaxes you, to help you sleep bette</li>
                        <li>Yoga can ease arthritis symptoms</li>
                        <li>Bicep curl</li>
                        <li>Band pull apart</li>
                    </ul>
                </div>
                

            </div>
            
            
        </div>
    )
}
