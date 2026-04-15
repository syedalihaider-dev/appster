import React from 'react'
import Banner from '@/src/components/NewThankYou/Banner' 
import GlobalPresence from '@/src/components/servicePage/GlobalPresence/GlobalPresence'
import SuccessfulApp from '@/src/components/servicePage/SuccessfulApp/SuccessfulApp'
import Conviced from '@/src/components/NewThankYou/Convinced/Convinced'

import Script from "next/script"
import { GoogleAnalytics } from '@next/third-parties/google'

const page = () => {
    return (
        <>
            {/* Event snippet for Website lead conversion page */}
            <Script
                id="gtag-conversion-new"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('event', 'conversion', {'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'});
                    `,
                }}
            />
            <Banner />
            <Conviced />
            <SuccessfulApp />
            <GlobalPresence />
        </>
    )
}

export default page
