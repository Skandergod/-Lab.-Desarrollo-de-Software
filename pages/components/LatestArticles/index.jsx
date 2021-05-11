import styles from './latestArticles.module.css';
import Slider from "react-slick";
import { getLatestBlog } from "../../api/blog";


export default function LatestArticles() {
    const Data = getLatestBlog();
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className={styles.section} id="latestBlog">
            <h3 className={styles.title}>Latest Articles</h3>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={styles.container}>
                <Slider {...settings}>
                    {
                        Data.map(item =>
                            <div className={styles.sliderItem}>
                                <div className={styles.thumbnailContainer}>
                                    <img className={styles.thumbnail} src={item.thumbnail} />
                                    <span className={styles.category}>{item.category}</span>
                                </div>
                                <div className={styles.sliderCaption}>
                                    <p className={styles.sliderDate}>{item.date}</p>
                                    <h4 className={styles.sliderTitle}>{item.title}</h4>
                                    <p className={styles.SliderExerpt}>{item.exerpt}</p>
                                    <a className={styles.sliderLink} href={item.link}>Leer más</a>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </section>
    )
}