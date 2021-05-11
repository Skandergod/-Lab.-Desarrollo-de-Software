import styles from './footerinfo.module.css'
import Context from '../../Context'

export default function FooterInfo() {
    return (
            <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.img_container}>
                            <img className={styles.img} src="assets/img/logo-header.png" />
                        </div>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={styles.icon_display}>
                            <a href='#'>
                            
                                <img className={styles.icon} src="assets/img/facebook.png"/>
                                
                            </a>
                            <a>
                                <img className={styles.icon} src="assets/img/gorjeo.png">
                                </img>
                            </a>
                            <a href='#'>
                                <img className={styles.icon} src="assets/img/instagram.png">
                                </img>
                            </a>
                            <a href='#'>
                                <img className={styles.icon} src="assets/img/linkedin.png">
                                </img>
                            </a>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.single_footer_widget}>
                            <h3>
                                Explorar
                            </h3>
                            <div className={styles.text_bar}></div>
                            <ul className={styles.list}>
                                <li className={styles.list_element}>
                                    <a href='#'>
                                        Home
                                    </a>
                                </li>
                                <li className={styles.list_element}>
                                    <a href='#'>
                                        About
                                    </a>
                                </li>
                                <li className={styles.list_element}>
                                    <a href='#'>
                                        Servicios
                                    </a>
                                </li>
                                <li className={styles.list_element}>
                                    <a href='#'>
                                        Portafolio
                                    </a>
                                </li>
                                <li className={styles.list_element}>
                                    <a href='#'>
                                        Equipo
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.column}>
                    <div className={styles.single_footer_widget}>
                            <h3>
                                Quick Links
                            </h3>
                            <div className={styles.text_bar}></div>
                        </div>
                        <ul className={styles.list}>
                            <li>
                                <a href='#'>
                                    Contactenos
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Preguntas Frecuentes
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Politicas de Privacidad
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Terminos y Condiciones
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Precios
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div>
                            <span>
                                Recibe nuestras noticias!
                            </span>
                            <form>
                                    <input className={styles.input} type="email" placeholder="Ejemplo@correo.com"/>
                                    <button className={styles.button_cool} type = "submit">
                                        Suscribete
                                    </button>
                            </form>
                        </div>
                    </div>
            </div>
    )
}