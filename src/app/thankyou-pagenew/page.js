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
            <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=AW-16476280714"></Script>
            <GoogleAnalytics gaId="AW-16476280714" />
            <Script
                id="gtag-conversion-new"
                dangerouslySetInnerHTML={{
                    __html: `gtag('event', 'conversion', {'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'});`,
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
