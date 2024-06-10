import Head from 'next/head'
import SandboxWrapper from '../components/sandbox/SandboxWrapper'
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
            <SandboxWrapper />
        </div>
    )
}

export default withAuth(sandbox)