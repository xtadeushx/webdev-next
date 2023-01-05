import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Heading from '../components/Heading';
import styles from '../styles/404.module.scss';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Error</title>
            </Head>
            <div>
                <Heading title='404' />
                <h2 className={roboto.className}>
                    Something is going wrong...
                </h2>
            </div>
        </div>
    );
};

export default Error;
