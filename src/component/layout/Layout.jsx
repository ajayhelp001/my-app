import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../header/Header'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import Footer from '../footer/Footer'

const Layout = ({ Component }) => {
    const location = useLocation()
    const [dark, setDark] = useState(false)

    useEffect(() => {
        if (location?.pathname === '/') {
            setDark(false)
        } else {
            setDark(true)
        }
    }, [location])
    return (
        <>
            <Header darkHeader={dark} />
            <article data-scroll-container>
                {Component}
                <Footer />
            </article>
            {/* <Menu/>
            <BookNow/>
            <Pointer/> */}
            
        </>
    )
}

export default Layout