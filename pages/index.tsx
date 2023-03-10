import React, { FC } from 'react';

import Head from 'next/head';
import { GetStaticProps } from 'next';

import Heading from '../components/Heading';
import Socials from '../components/Socials';

import styles from '../styles/Home.module.scss';
import { socialsType } from '../types';

interface IHomeProps {
    socials: socialsType[];
}

const API_URI = process.env.API_HOST;

export const getStaticProps: GetStaticProps = async () => {
    const URL = `${API_URI}/socials`;
    try {
        const resp = await fetch(URL);
        const data = (await resp.json()) as socialsType[];
        if (!data) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                socials: data,
            },
        };
    } catch {
        return {
            props: {
                socials: null,
            },
        };
    }
};

const Home: FC<IHomeProps> = ({ socials }) => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading title='Next.js Application' />
        <Socials socials={socials} />
    </div>
);

export default Home;
