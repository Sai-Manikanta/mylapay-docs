import Head from 'next/head'
import SandboxWrapper from '../components/sandbox/SandboxWrapper'
import withAuth from '../hoc/withAuth'

function sandbox() {
    return (
        <div>
            <Head>
                <title>Sandbox | Mylapay</title>
            </Head>
            <SandboxWrapper />
        </div>
    )
}

export default withAuth(sandbox)