import React, { useEffect, useState } from 'react'

import mobileIllustration from '../images/illustration-woman-online-mobile.svg'
import desktopIllustration from '../images/illustration-woman-online-desktop.svg'
import mobilePattern from '../images/bg-pattern-mobile.svg'
import desktopPattern from '../images/bg-pattern-desktop.svg'
import boxIllustration from '../images/illustration-box-desktop.svg'

function CardHeader() {
    const [isMobile, setIsMobile] = useState(window.innerWidth > 950 ? false : true)
    const mobileScreen = window.matchMedia("(min-width: 950px)")

    function detectScreenSize(e) {
        e.matches ? setIsMobile(false) : setIsMobile(true)
    }

    useEffect(() => {
        mobileScreen.addEventListener("change", detectScreenSize)

        return () => {
            mobileScreen.removeEventListener("change", detectScreenSize)
        }
    }, [mobileScreen])

    return (
        <div className='card-header'>
            <div className='illustration'>
                <img src={isMobile ? mobileIllustration : desktopIllustration} className='mobile-illustration' />
                <img src={isMobile ? mobilePattern : desktopPattern} className='mobile-pattern' />
            </div>
            {
                isMobile ?
                    null :
                    <img src={boxIllustration} className='box-illustration' />
            }
        </div>
    )
}

export default CardHeader
