import React, { useState, useEffect } from 'react';
import styles from '../../../styles/Navigation.module.css'
import Context from '../../Context'
import MenuIcon from "../../../public/assets/img/menu.svg"
import CloseIcon from "../../../public/assets/img/close.svg"

export default function Navigation({scrolled}) {  
    
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <Context.Consumer>
            {({screenSize, screenWidth}) => {
                
                return(
                    <div className={
                        styles.navigation + " " + 
                        (scrolled ? styles.scrolled : "")  + " " + 
                        (screenWidth < 992 ? styles.mobile : "")
                    }>
                        <nav>
                            <div className={styles.toggler}>
                                <MenuIcon onClick={()=>setMobileMenu(true)}/>
                            </div>
                            <CloseIcon style={{display: mobileMenu?"block":"none"}}  className={styles.closeMenu}  onClick={()=>setMobileMenu(false)}/>
                            <ul style={{display: mobileMenu || screenWidth >= 992?"flex":"none"}}>
                                <li>
                                    <a>
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Servicios
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Nosotros
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Casos de éxito
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Blog
                                    </a>
                                </li>
                                <li className={styles.button}>
                                    <a>
                                        Empecemos
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}