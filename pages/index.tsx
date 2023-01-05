import React from 'react';
import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss';
import  Head from 'next/head';

const Home = () => {
    return (
        <><Head>
            <title>Home</title>
            </Head>
        <div className={styles.wrapper}>
            <Heading title='Next.js application' />
        </div>
        </>
    );
};

export default Home;
