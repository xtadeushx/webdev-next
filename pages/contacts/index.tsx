import React from 'react';
import Heading from '../../components/Heading';
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            contacts: data,
        },
    };
}
const Contacts = ({ contacts }: any) => {
    console.log(contacts);
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading title='Contacts list' />
            <ul>
                {contacts?.map(({ id, name, email }: any) => {
                    return (
                        <li key={id}>
                            <Link href={`/contacts/${id}`}><strong>{name}</strong> ({email})</Link>
                            
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Contacts;
