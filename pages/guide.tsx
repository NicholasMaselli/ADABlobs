import Head from 'next/head'

import { GuideContainer } from "../src/components/Elements/Guide/GuideContainer"

const Guide = () =>
{
    return (
        <>         
            <Head>
                <meta name="description"
                      content="This guide shows you how to connect to ADA Blobs which is a collection of 300 pet blob NFTs on the Cardano blockchain." />
                <title>ADA Blobs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>            
            <GuideContainer />
        </>
    )
}

export default Guide;
