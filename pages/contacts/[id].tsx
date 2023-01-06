import React, { FC } from 'react';
import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';
import { contactType } from '../../types';
import { GetServerSideProps } from 'next';

type ContactInfoProps = {
    contact: contactType;
};
export const getServerSideProps: GetServerSideProps = async (context : any) => {
    const { id } = context.params;
    const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await resp.json();
    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            contact: data,
        },
    };
};
const Contact: FC<ContactInfoProps> = ({ contact }) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact} />;
        </>
    );
};
export default Contact;
