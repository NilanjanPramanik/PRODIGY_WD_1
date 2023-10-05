import React, { useEffect, useState } from 'react';
import './Nav.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`nav-bar ${show ? 'nav__black' : ''}`}>
            <div className='logo__container'>
                
                    <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
                
            </div>
            <div className='login__containers'>
                <div className='logout__btn'>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
