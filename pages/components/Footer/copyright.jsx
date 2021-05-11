import styles from './copyright.module.css'

export default function Copyright() {

    return (
        <div className={styles.copyright_area}>
            <div className= "container">
                <p>
                    Copyright © 2021 Businet 
                    <br/>
                </p>
            </div>
        </div>
    )
}