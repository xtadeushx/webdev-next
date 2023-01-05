import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { useRouter } from 'next/router';

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
];
const NavBar = () => {
    const { pathname } = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.log}>Webdev</div>
            <div className={styles.links}>
                {navigation.map(({ id, path, title }) => {
                    return (
                        <Link
                            key={id}
                            href={path}
                            className={pathname === path ? styles.active : ''}
                        >
                            {title}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default NavBar;
