import { FC } from 'react';
import { postType } from '../types';
import Heading from './Heading';

interface IPostInfoProps {
    post: postType;
}
const PostInfo: FC<IPostInfoProps> = ({ post }) => {
    const { title, body } = post || {};

    if (!post) {
        return <h3>Empty post</h3>;
    }

    return (
        <>
            <Heading title={title} />
            <p>{body}</p>
        </>
    );
};

export default PostInfo;
