import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Heading from '../../components/Heading';

import { contactType } from '../../types';

type ContactsInfoProps = {
    contacts: contactType[];
};

export async function getStaticProps() {
    try {
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
    } catch {
        return {
            props: {
                contacts: null,
            },
        };
    }
}
const Contacts: FC<ContactsInfoProps> = ({ contacts }) => {
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
                            <Link href={`/contacts/${id}`}>
                                <strong>{name}</strong> ({email})
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Contacts;
