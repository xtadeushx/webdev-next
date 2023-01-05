import React from 'react';
import Header from './Header';
import Footer from './Footer';

type ILayoutProps = {
    children: unknown;
};
const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
