import Carousel from 'react-grid-carousel'

import styles from './Carousel.module.css'

const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '8px' : '5px',
        width: isActive ? '8px' : '5px',
        background: '#1890ff'
      }}
    ></span>
  )

export default function CarouselSimplified({images}) {
    return (
        <div className = {styles.carousel_container}>
            <div className = {styles.carousel_element_text}>
                <h1>Our Projects</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <Carousel cols={4} rows={1} gap={10} loop showDots dot={MyDot}>
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