import React, { FC } from 'react';

import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

import PostInfo from '../../components/PostInfo';

import { postType } from '../../types';

interface IPostProps {
    post: postType;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = (await resp.json()) as postType[];

    const paths = data.map(({ id }) => ({
        params: { id: id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context?.params?.id;
    const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = (await resp.json()) as IPostProps[];
    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post: data,
        },
    };
};

const Post: FC<IPostProps> = ({ post }) => {
    return (
        <>
            <Head>
                <title>Contact page</title>
            </Head>
            <PostInfo post={post} />
        </>
    );
};

export default Post;
