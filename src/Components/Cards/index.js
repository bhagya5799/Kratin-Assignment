import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const index = () => {
    return (
        <div className='d-flex flex-column '>
            <div className='cards d-flex'>
                <Link to='/homecare' className='link'>
                    <div className='card'>
                        <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/614d042018e4d21b3bbc524a_2021in-home%20care.svg'
                            alt='card-logo' height='40' width='40' />
                        <h4>In-Home-Care</h4>
                    </div>
                </Link>
                <Link to='eldercare' className='link'>
                    <div className='card'>
                        <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/614d042ddabfa523ae686014_2021elder-care.svg'
                            alt='card-logo' height='50' width='50' />
                        <h4>Elder Care</h4>
                    </div>
                </Link>
                
                <Link to='/respitcare' className='link'>
                    <div className='card'>
                        <img src='https://assets.website-files.com/5a562cd029f1720001dfe1e0/614d04422945633a04375d27_2021medication%20copy.svg'
                            alt='card-logo' height='50' width='50' />
                        <h4>Respite CARE</h4>
                    </div>
                </Link>
                <Link to='/exercises' className='link'>
                    <div className='card'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqeJCEyG7mj9aQuVgWotdzEbjWGdi1vGQfHhR2E8&s'
                            alt='card-logo' height='50' width='50' />
                        <h4>exercise</h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default index