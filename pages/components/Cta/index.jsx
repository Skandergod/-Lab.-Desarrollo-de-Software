import styles from './cta.module.css'
import Checked from "../../../public/assets/img/checked.svg"
import Happy from "../../../public/assets/img/happy.svg"
import Clipboard from "../../../public/assets/img/clipboard.svg"
const Data = [
    {
        title: "Proyectos completados",
        number: "50+",
        icon: <Checked />,
    },
    {
        title: "Clientes satisfechos",
        number: "15+",
        icon: <Happy />,
    },
    {
        title: "Proyectos en curso",
        number: "5+",
        icon: <Clipboard />,
    },
]


export default function Cta() {

    return (
        <section className={styles.cta}>
            <div className="container">
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Siempre intentamos comprender las expectativas de nuestros usuarios</h1>
                </div>
                <div className={styles.ctasContainer}>
                    {
                        Data.map(
                            cta=>
                                <div className={styles.ctaItem}>
                                    <div className={styles.ctaIconContainer}>
                                        {cta.icon}
                                    </div>
                                    <span className={styles.number}>{cta.number}</span>
                                    <span className={styles.ctatitle}>{cta.title}</span>
                                </div>
                        )
                    }
                    
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.contactBox}>
                        <div className={styles.contactCaption}>
                            <h4>¿Si tienes alguna consulta sobre nosotros?</h4>
                            <p>no dudes en contactarnos</p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <a className={styles.button} href="#">
                                Contáctanos
                            </a>
                            <div className={styles.buttonBg} ></div>
                        </div>
                    </div>                    
                </div>
                <div className={styles.bg}>
                    <img src="/assets/img/map-bg.png" alt="map" />
                </div>
            </div>
        </section>
    )
}