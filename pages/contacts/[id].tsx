import React from 'react';
import Heading from '../../components/Heading';
import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';

export async function getServerSideProps(context: any) {
    const { id } = context.params;
    console.log(context);
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
}

const Contact = ({ contact }: any) => {
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
