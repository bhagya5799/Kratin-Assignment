import {useState} from 'react'
import './index.css'
import NavBar from '../NavBar'
import  Header  from '../Header'
import video from '../media/bg-vedio.mp4'
import Cards from '../Cards'
import Description from '../Description'
import CareBlog from '../CareBlog'
import Footer from '../Footer'
import { FiMenu } from 'react-icons/fi'

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [show,setShow]=useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    const clickShow =() => {
        if(!show){
            setShow(true)
        }
        else{
            setShow(false)
        }
        
    }
    return (
        <div className='home d-flex flex-column'>
            <div className='header-bar'>
                <Header />
                <NavBar isScrolled={isScrolled} />
            </div>
            <div className='Mobile-view'>
                <Header />
                <NavBar isScrolled={isScrolled} />
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
                    <h4 data-ix="navbar-hero" class="hero-headline">Because there's no place like home. <br/>
                        <span>Whether you’re seeking someone to simply help with errands and companionship,
                        or looking for around the clock assistance,
                            we provide in-home care services 24/7.</span>
                    </h4>
                </div>
            </div>
            <div className='card-container'>
                <Cards/>
                <Description/>
            </div>
            <div className='care-bg-container'>
                <h1>Supporting independent living helps your special family member to 
                    <br /> <br />maintain comfort and live life to the fullest.
                </h1>
            </div>
            <div className='protect-hand'>
                <h1>Leave your family in hands you can trust.</h1>
                <div className='d-flex j-center a-center'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXUGrQgLhA3aloTcBdO9PE41GVd1QbW9yIufWRq9Ghjdk7xOuheu2UrcI3aUmX3r335w&usqp=CAU'
                        alt='hands' />
                    <h3>CARE, Inc. is fully licensed and insured to give you peace
                        of mind that your loved one is provided the highest quality compassionate care. We take pride in the ongoing training and supervision that the hundreds of CARE, Inc. workers receive and you will find that our employees strive to exceed expectations with a genuine attitude of helpfulness. From meal planning and household chores; to transportation and errands,
                        we work diligently to make sure your family member’s needs are met.</h3>
                </div>
            </div>
            <CareBlog />
            <Footer/>
        </div>
    )
}

