import React from 'react'
import Nav from '../../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

function LandingPageLayout() {
    return (
        <div>
            <Nav />
            <div className='px-20'>

                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPageLayout