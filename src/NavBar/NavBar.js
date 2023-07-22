import React from 'react';
import styles from './styles.module.css';
import logo from './icons/logo.svg';
import useMediaQuery from '../Hooks/useMediaQuery.js';
import MobileNavBar from './MobileNavBar'

function NavBar(){
    const mobile = useMediaQuery('(max-width: 500px)');

    return mobile ? <MobileNavBar logo={logo}/> :
        <nav className={styles.container}>
            <img className={styles.logo} src={logo}/>
            <ul className={styles.links}>
                <li className={styles.link}>
                    Home
                </li>
                <li className={styles.link}>
                    New
                </li>
                <li className={styles.link}>
                    Popular
                </li>
                <li className={styles.link}>
                    Trending
                </li>
                <li className={styles.link}>
                    Categories
                </li>
            </ul>
        </nav>
    
}

export default NavBar;