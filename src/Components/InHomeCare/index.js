import { Link } from 'react-router-dom'
import Header from '../Header'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Footer from '../Footer';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import './index.css'

export default function InHomeCare() {
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
                    
                    <Link to='/getstarted'>
                        <button className='started'>Get Started</button>
                    </Link>
                    &ensp; &ensp;
                    &ensp;

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
                            src="https://media.istockphoto.com/id/1250269879/photo/panoramic-view-of-an-idyllic-montreal-apartment-complex-with-a-landscaped-courtyard.jpg?s=612x612&w=0&k=20&c=nGQcxmIBSLTyewrWJUzW4CC7g7BrxQWBRugjM0MD0xg="
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>In-Home Care</h2>
                            <h5>CARE, Inc offers your loved ones the freedom and comfort of living in their own home without any worries.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/489582909/photo/caretaker-with-retired-people-in-nursing-home.jpg?s=612x612&w=0&k=20&c=6bPcYlVAc1HrzZyqEDoNGDmjoXas26EwZyOTW4RfGSY="
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>In-Home Care</h2>
                            <h5>CARE, Inc offers your loved ones the freedom and comfort of living in their own home without any worries.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/1180156927/photo/male-and-female-nurse-checking-senior-mans-blood-pressure-on-house-call.jpg?s=612x612&w=0&k=20&c=islYMolqFnG7-9UOkFcOQEY-R1vHx3MOCXNX52w1GlM="
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>In-Home Care</h2>
                            <h5>
                                CARE, Inc offers your loved ones the freedom and comfort of living in their own home without any worries.
                            </h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://thumbs.dreamstime.com/b/nurse-serving-breakfast-to-elderly-man-indoors-assisting-senior-people-151729334.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>In-Home Care</h2>
                            <h5>CARE, Inc offers your loved ones the freedom and comfort of living in their own home without any worries.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='home-care-description'>
                <h1>
                    It’s the simple things that mean the most.
                </h1>
                <p>Living at home, receiving in-home care, and having the freedom to live in privacy,
                    peace, and comfort is something everyone can appreciate. We provide in-home care services which allow your loved one to maintain a level of independence that is not provided at a nursing home or assisted living facility
                    . Because, for your loved one, is there any place on earth better than home?
                    </p>
    
            </div>
            <Footer />

        </div>
    )
}
