import styles from '../../../styles/simplifiedBanner.module.css'

export default function SimplifiedBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.item}>
                <img src="assets/img/banner--1.jpg" className={styles.bg} />
                <div className={styles.caption}>
                    <h1>Nuestro Portafolio</h1>
                </div>
            </div>
        </div>
    )
}