import Carousel from 'react-grid-carousel'
import styles from './grid.module.css'

export default function Grid({images}) {
    return (
            <div className = {styles.carousel_container}>
                <div className = {styles.carousel_element_text} >
                    <h1>Our All Projects</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <Carousel responsiveLayout = {[
                {
                    breakpoint: 0,
                    cols: 3,
                    rows: 3,
                    gap: 10,
                    loop: true,
                    autoplay: 400
                }
                ]}mobileBreakpoint= {0} cols={3} rows={3} gap={10}>
                    {
                    images.map(image =>(
                        <Carousel.Item>
                                <div className={styles.carousel_element} style={{backgroundImage: `url(${image})`}}>
                                    <div className={styles.carousel_element_text_container}>
                                        <div className={styles.carousel_element_text}>
                                            <span>asdsa</span>
                                            <h3>qwerty</h3>
                                            <button className={styles.button_text}>Read More</button>
                                        </div>
                                    </div>
                                </div>
                        </Carousel.Item>
                                ))
                    }
                </Carousel>
            </div>
    )
}