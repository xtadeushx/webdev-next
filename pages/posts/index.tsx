import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Heading from '../../components/Heading';

import { postType } from '../../types';

interface IPostsProps {
    posts: postType[];
}

export async function getStaticProps() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = (await resp.json()) as postType[];
        if (!data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                posts: data,
            },
        };
    } catch {
        return {
            props: {
                posts: null,
            },
        };
    }
}
const Posts: FC<IPostsProps> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading title='Posts list:' />
            <ul>
                {posts?.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Posts;
