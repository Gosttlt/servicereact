import Head from 'next/head'
import React from 'react'

export default React.memo(function Layout({ children, title, description, keywords }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                {keywords && <meta name="Keywords" content={keywords} />}
            </Head>
            {children}
        </>
    )
})
