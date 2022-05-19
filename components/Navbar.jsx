import styles from './Navbar.module.css';
import ActiveLink from './ActiveLink';

const menuItems = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
    {
        name: 'Pricing',
        path: '/pricing',
    }
];

export const Navbar = () => {
    return (
        <nav className={ styles['menu-container'] }>
            {/*<ActiveLink text="Home" href="/">Home</ActiveLink>*/ }
            {/*<ActiveLink text="About" href="/about">About</ActiveLink>*/ }
            {/*<ActiveLink text="Contact" href="/contact">Contact</ActiveLink>*/ }
            {/*<ActiveLink text="Pricing" href="/pricing">Pricing</ActiveLink>*/ }

            {
                menuItems.map( item => (
                    <ActiveLink key={ item.path } text={ item.name } href={ item.path }/>
                ) )
            }
        </nav>
    );
};
