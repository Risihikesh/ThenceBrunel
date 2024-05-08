import React from 'react';
import "../CSS/Home.css"
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <NavBar/>
            <div className="homediv">
                <h1 className='home1'>Success stories</h1>
                <h1 className='home2'>Every success journey we&apos;ve encountered.</h1>
            </div>
           <Footer/>
        </>
    );
}

