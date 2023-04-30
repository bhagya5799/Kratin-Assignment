
import { Link } from 'react-router-dom'
import Header from '../Header'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Footer from '../Footer';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import './index.css'


export default function ElderCare() {
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
                <div className='bar d-flex a-center'>
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
                    &nbsp;
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
                            src="https://media.istockphoto.com/id/1134451603/photo/she-knows-just-how-to-make-each-patient-feel-special.jpg?s=612x612&w=0&k=20&c=OLZuce52LblJl9JFp0dwtyFlDWbD3sTCxJYKhkLTxW8="
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Elder Care</h2>
                            <h5>CARE, Inc offers your senior loved ones their independence and allows them the comfort of living in their own home.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/1307369109/photo/nurse-helping-senior-woman-walk-at-nursing-home.jpg?s=612x612&w=0&k=20&c=P__ohozBDnIuVWlVT4LCzdZehUXs0u05XsIk22sVtLg="
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Elder Care</h2>
                            <h5>CARE, Inc offers your senior loved ones their independence and allows them the comfort of living in their own home.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/1307433364/photo/female-nurse-taking-care-of-a-senior-woman-at-home.jpg?s=612x612&w=0&k=20&c=x505gK9pKXpFcfjfJo9rzFkNwMry1pYaZYkQg2XRBhE="
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>Elder Care</h2>
                            <h5>CARE, Inc offers your senior loved ones their independence and allows them the comfort of living in their own home.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/1282348252/photo/home-caregiver-wearing-a-facemask-while-assisting-a-senior-woman-walking-with-a-mobility.jpg?s=612x612&w=0&k=20&c=774hLPT6pu8qRL6owQ297xUOyVkrJ-EHcz6cm06o8sA="
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Elder Care</h2>
                            <h5>CARE, Inc offers your senior loved ones their independence and allows them the comfort of living in their own home.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/1346880686/photo/nurse-doctor-senior-care-caregiver-help-walker-assistence-retirement-home-nursing-elderly-man.jpg?s=612x612&w=0&k=20&c=EsRXyKcH-ojL_VAU-0F48n4JFvfnfZTUHoLgmqiQ9QY="
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Elder Care</h2>
                            <h5>CARE, Inc offers your senior loved ones their independence and allows them the comfort of living in their own home.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='home-care-description '>
                <h2>
                    Providing loving Elder Care Services throughout Louisiana
                </h2>
                <p>
                    Often times, a loved one in charge of caring for a person who is sick or disabled, needs a break—especially if it’s a 24-hour job. CARE, Inc. has a team of trained, professional caregivers who can come to your home for breaks whenever needed. Respite Care can be a few hours, days or even weeks. Many caregivers use respite care for a simple break, to shop, exercise, run errands or even go on vacation.
                </p>
                <div className='d-flex j-between'>
                    <div className='card-1'>
                        <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/6154e41d1efdd4732e216107_2021-EdlerCare-1.svg'
                            alt='card-logo' height='100' width='100' />
                        <h6>Long Term Care</h6>
                    </div>
                    <div className='card-1'>
                        <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/6154e4366cacd1c92caaed0a_2021-EdlerCare-2.svg'
                            alt='card-logo' height='100' width='100' />
                        <h6>Companion care</h6>
                    </div>
                    <div className='card-1'>
                        <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/6154e42a07ad7dcaa42d9cd0_2021-EdlerCare-3.svg'
                            alt='card-logo' height='100' width='100' />
                        <h6>Personal assistance Care</h6>
                    </div>
                    <div className='card-1'>
                        <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/6154e444d80d6118225d465e_2021-special-needs-care%20copy%204.svg'
                            alt='card-logo' height='100' width='100' />
                        <h4>Alzheimer's & Other Dementias Care</h4>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
