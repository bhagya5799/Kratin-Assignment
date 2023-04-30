
import { Link } from 'react-router-dom'
import Header from '../Header'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Footer from '../Footer';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import './index.css'

export default function Respite() {
    const navigate = useNavigate();
    const getSelectItem = (e) => {
        let input_value = e.target.value
        if (input_value === 'IN-Home-CARE') {
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
    return (
        <div className='home-care d-flex flex-column j-between' >
            <div className='header-bar'>
                <Header />
                <div className='bar d-flex a-center' >
                    <h2>CARE LIFE</h2>
                    <img src='https://img.freepik.com/premium-vector/medical-love-health-care-logo_7888-284.jpg?w=2000' alt='logo'
                        height='50px' width='50px'
                    /> 
                    <select name="care" id="care" className='select-types'
                        onChange={getSelectItem} >
                        <option value="Types of Care" selected="selected">Types of Care</option>
                        <option value="IN-Home-CARE">
                            IN-Home-CARE
                        </option>
                        <option value="ELDER CARE">ELDER CARE</option>
                        <option value="RESPITE CARE">RESPITE CARE</option>
                    
                    </select>
                    &ensp;
                  
                    <Link to='/getstarted'>
                        <button className='started'>Get Started</button>
                    </Link>
                    
                        <Link to='/'>
                            <span> <AiOutlineArrowLeft />Back To Home</span>
                        </Link>
                
                  
                </div>
            </div>
            <div className='home-care-container'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/583980184/photo/happy-healthcare-worker-and-senior-woman-talking-together.jpg?s=612x612&w=0&k=20&c=hc6iUXINBk_UAlaaeDCJfZ68g19z8vYcLAcpcJKg5nw="
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Respite Care</h2>
                            <h5>CARE, Inc offers your loved ones the freedom and comfort of living in their own home without any worries.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/638886566/photo/seniors-participating-in-group-activities-in-adult-daycare-center.jpg?s=612x612&w=0&k=20&c=Icbgby5VV3MiXmowHVtpS_VLsbP4Qo_rzPf96lhMu3g="
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Respite Care</h2>
                            <h5>CARE, Inc offers your loved ones the freedom and comfort of living in their own home without any worries.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/1407579041/photo/senior-woman-with-young-teacher-playing-at-piano-in-choir-rehearsal.jpg?s=612x612&w=0&k=20&c=OJiOEsoKQ8AkUzc_afZb-8Mr1goaoU91M-w3hvFKbfg="
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>Respite Care</h2>
                            <h5>CARE, Inc offers your loved ones the freedom and comfort of living in their own home without any worries.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/599264780/photo/caregiver-and-senior-man-on-a-wheelchair-walking-outdoors.jpg?s=612x612&w=0&k=20&c=UBdSr693Ml-Ig6azn67b9eMnUHgSHF7HuVeSWD0r9Y0="
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Respite Care</h2>
                            <h5>CARE, Inc offers your loved ones the freedom and comfort of living in their own home without any worries.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='home-care-description'>
                <h2>
                    It’s the simple things that mean the most.
                </h2>
                <p>Living at home, receiving in-home care, and having the freedom to live in privacy,
                    peace, and comfort is something everyone can appreciate. We provide in-home care services which allow your loved one to maintain a level of independence that is not provided at a nursing home or assisted living facility
                    . Because, for your loved one, is there any place on earth better than home?
                </p>
                
                <div className=''>
                    <h3 className='RespiteCare'>Respite Care Services</h3>
                    <p>While you’re away, trained professionals come to your home and provide a variety of services for your loved one.</p>
                    <div className='d-flex j-between'>
                        <div>
                            <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/5a9cf3a0a2f0dc0001b5efc4_icon-bathing.svg' alt='bath'
                            height='100px' width='100px'/>
                            <p>Bathing</p>
                        </div>
                        <div>
                            <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/5a9cf3a0dcda0a0001b03fa7_icon-dressing.svg' alt='cloth'
                                height='100px' width='100px' />
                            <p>Dressing</p>
                        </div>
                        <div>
                            <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/5a9cf3a1a5e9fa00010ca80e_icon-feeding.svg'
                             alt='food'
                                height='100px' width='100px' />
                            <p>Feeding, Preparing Meals</p>
                        </div>
                        <div>
                            <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/5a9cf3a1a2f0dc0001b5efc5_icon-medication.svg' alt='medical'
                                height='100px' width='100px' />
                            <p>Medication Reminders</p>
                        </div>
                         <div>
                            <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/5a9cf3a1dcda0a0001b03fa8_icon-exercising.svg' alt='medical'
                                height='100px' width='100px' />
                            <p>Exercising, Going for Walks</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
