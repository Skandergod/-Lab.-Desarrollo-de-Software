import styles from './team.module.css'
import LindeinIcon from "../../../public/assets/img/linkedin-icon.svg"

const Data = {
    team : [
        {
            img: "/assets/img/team/ivan-guerrero.jpg",
            name: "Ivan Guerrero",
            position: "Frontend & Mobile Developer",
            linkedin: "https://www.linkedin.com/in/ivan-guerrero-businet-web/",
            twitter: ""
        },
        {
            img: "/assets/img/team/christian-gonzalez.jpg",
            name: "Christian Gonzalez",
            position: "Marketing",
            linkedin: "https://www.linkedin.com/in/christian-gonzalez-26711a163/",
            twitter: ""
        },
        {
            img: "/assets/img/team/daniel-da-costa.jpg",
            name: "Daniel Da Costa",
            position: "Backend Developer",
            linkedin: "https://www.linkedin.com/in/thedanidacosta/",
            twitter: ""
        },
        /*{
            img: "/assets/img/team/kevin-martinez.jpeg",
            name: "Kevin Martinez",
            position: "Backend Developer",
            linkedin: "https://www.linkedin.com/in/kevin-martinez-97359392/",
            twitter: ""
        },*/
    ]
}

export default function Team() {

    return (
        <div className={styles.team_row}>
            {
                Data.team.map(
                    (person) => 
                        <div className={styles.person}>
                            <div  className={styles.img} ><img src={person.img} /></div>
                            <h5 className={styles.name}>{person.name}</h5>
                            <p className={styles.position}>{person.position}</p>
                            <ul className={styles.socialList}>
                                <li>
                                    <a href={person.linkedin}>
                                        <LindeinIcon className={styles.icon}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                )
            }
            <img src={Data.bg} className={styles.bg} />    
        </div>
    )
}