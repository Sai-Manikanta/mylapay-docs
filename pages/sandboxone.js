// "use client";

import Head from 'next/head'
import Sidebar from '../components/sandboxone/Sidebar'
import withAuth from '../hoc/withAuth'

function sandbox() {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
                />
            </Head>
            <Sidebar />
        </div>
    )
}

export default withAuth(sandbox)