import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
