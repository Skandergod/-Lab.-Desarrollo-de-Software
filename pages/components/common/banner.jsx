import styles from '../../../styles/Banner.module.css'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.item}>
                <img src="assets/img/banner--1.jpg" className={styles.bg} />
                <div className={styles.caption}>
                    <h1>Haz crecer tu negocio con soluciones tecnológicas profesionales</h1>
                    <p>¡Diseñamos y desarrollamos soluciones de software móviles y web exitosas, que impulsan la innovación y aumentan la eficiencia empresarial!</p>
                </div>
            </div>
        </div>
    )
}