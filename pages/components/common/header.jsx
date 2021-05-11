import React, { useState, useEffect } from 'react';

import styles from '../../../styles/Header.module.css'
import Navigation from './navigation'

export default function Header() {
    
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          }
    }, []);

    const handleScroll = (event) => {
        window.scrollY > 0 ? setScroll(true) : setScroll(false)
    }

    return (
        <header class={styles.header+ " " + (scroll ? styles.headerScrolled : styles.headerNotScrolled)}>
            <div className={styles.logo}>
                {
                    scroll ?
                        <img src="assets/img/logo-header.png" />
                    : 
                        <img src="assets/img/logo-header--blank.png" />
                }
            </div>
            <Navigation scrolled={scroll}/>
        </header>
    )
}