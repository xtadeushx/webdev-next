import React, { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type ILayoutProps = {
    children: ReactNode;
};
const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
