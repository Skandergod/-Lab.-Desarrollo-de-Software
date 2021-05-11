import styles from '../../../styles/TestimonialSlider.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider({items}) {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "testimonialSlider_dots slick-dots"
      };
    return (
        <div className={styles.testimonialSlider}>
            <div className={styles.container}>
                <div className={styles.quoteContainer}>
                    <img src="/assets/img/quotes.png" className={styles.quoteImg} />
                </div>
                <div className={styles.testimonialImgContainer }>
                    <img src="/assets/img/testimonial1.png" className={styles.testimonialImg} />
                    <img src="/assets/img/testimonial2.png" className={styles.testimonialImg} />
                    <img src="/assets/img/testimonial3.png" className={styles.testimonialImg} />
                    <img src="/assets/img/testimonial4.png" className={styles.testimonialImg} />
                    <img src="/assets/img/testimonial5.png" className={styles.testimonialImg} />
                    <img src="/assets/img/testimonial6.png" className={styles.testimonialImg} />
                    <img src="/assets/img/testimonial7.png" className={styles.testimonialImg} />
                    <img src="/assets/img/testimonial8.png" className={styles.testimonialImg} />
                </div>                
                <Slider {...settings}>
                    {
                        items.map(item=>(
                            <div className={styles.testimonialSlider_item}>
                                <p className={styles.testimonial}>{item.testimonial}</p>
                                <div className={styles.divider}></div>
                                <p className={styles.person}>{item.person}</p>                                
                                <p className={styles.charge}>{item.charge}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}