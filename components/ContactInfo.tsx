import React from 'react';
import Heading from './Heading';

const ContactInfo = ({ contact }: any) => {
    const { name, email, address } = contact || {};
    const { street, suite, zipcode, city } = address || {};

    if (!contact) {
        return <Heading title='Empty contact' />;
    }

    return (
        <>
            <Heading title={name}/>
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    );
};

export default ContactInfo;
