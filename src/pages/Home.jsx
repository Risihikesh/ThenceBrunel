import React from 'react';
import "../CSS/Home.css"
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Faq from '../components/Faq';

export default function Home() {
    return (
        <>
            <NavBar/>
            <div className="homediv">
                <h1 className='home1'>Success stories</h1>
                <h1 className='home2'>Every success journey we&apos;ve encountered.</h1>
            </div>
            <Faq/>
           <Footer/>
        </>
    );
}

