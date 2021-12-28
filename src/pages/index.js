import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import { buttonContent } from '../buttonContent'
import Locations from '../components/Locations'
import Footer from '../components/Footer'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero {...buttonContent}/>
            <Locations />
            <Footer />
        </>
    )
}

export default Home
