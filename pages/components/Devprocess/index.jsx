import styles from './devprocess.module.css'
import ScopeIcon from "../../../public/assets/img/scope-icon.svg"
import ResearchIcon from "../../../public/assets/img/research-icon.svg"
import WireframeIcon from "../../../public/assets/img/wireframe-icon.svg"
import DesignIcon from "../../../public/assets/img/design-icon.svg"
import QaIcon from "../../../public/assets/img/qa-icon.svg"
import DeployIcon from "../../../public/assets/img/deploy-icon.svg"

const Data = {
    main_img : "/assets/img/dev-process.png",
    bg: "/assets/img/dev-process-bg.png",
    proccess : [
        {
            icon: <ScopeIcon />,
            title: "Alcance",
            description: "Requerimientos"
        },
        {
            icon: <ResearchIcon />,
            title: "Investigación",
            description: "Investigacion de usuarios"
        },
        {
            icon: <WireframeIcon />,
            title: "Prototipo",
            description: "Wireframe"
        },
        {
            icon: <DesignIcon />,
            title: "Diseño y desarrollo",
            description: "Haciendo software"
        },
        {
            icon: <QaIcon />,
            title: "QA",
            description: "Control de calidad"
        },
        {
            icon: <DeployIcon />,
            title: "Implementación",
            description: "Lanzamiento"
        },
    ]
}

export default function devprocess() {

    return (
        <div style={{width:"100%"}}>
            <div className={styles.devproccess_container}>
                <img src={Data.main_img} className={styles.img} />
                {
                    Data.proccess.map(
                        (proccess) => 
                            <div className={styles.proccess}>
                                <div className={styles.icon}>
                                    {proccess.icon}
                                </div>
                                <h3>{proccess.title}</h3>
                                <p>{proccess.description}</p>
                            </div>
                    )
                }
                <img src={Data.bg} className={styles.bg} />    
            </div>
        </div>
    )
}