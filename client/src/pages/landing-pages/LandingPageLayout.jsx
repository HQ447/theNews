import React from 'react'
import Nav from '../../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import ad from "../../assets/images/ad.jpg"

function LandingPageLayout() {
    return (
        <div>
            <Nav />
            <div className='px-20'>
                <div className="advertisment flex justify-center items-center w-full py-10">
                    <a href="#"><img src={ad} alt="" /></a>
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPageLayout