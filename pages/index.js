import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/common/header'
import Banner from './components/common/banner'
import Context from './Context';
import TestimonialSlider from './components/common/TestimonialSlider'
import Devprocess from './components/Devprocess'
import Team from "./components/Team"
import Cta from "./components/Cta"
import LatestBlog from "./components/LatestArticles"
import Footer from "./components/Footer/index"

export default function Home() {
  const [screenSize, setScreenSize] = useState('phone');
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    handleWidthScreen()
    window.addEventListener('resize', handleWidthScreen);
    return () => {
      window.removeEventListener('resize', handleWidthScreen);
    }
  }, []);

  const handleWidthScreen = () => {
    const _width = window.outerWidth;
    setScreenWidth(_width)
    if (_width >= 600) {
      setScreenSize('phone-large')
    }
    else if (_width >= 768) {
      setScreenSize('tablet')
    }
    else if (_width >= 992) {
      setScreenSize('tablet-large')
    }
    else if (_width >= 1200) {
      setScreenSize('desktop')
    }
    else if (_width >= 1440) {
      setScreenSize('desktop-medium')
    }
    else if (_width >= 1600) {
      setScreenSize('desktop-large')
    } else {
      setScreenSize('phone')
    }
  }


  return (
    <Context.Provider value={{
      screenSize: screenSize,
      screenWidth: screenWidth
    }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <div className={styles.container}>
        <section className={styles.home_about_us}>
          <div className={styles.grid}>
            <div className={styles.home_about_img}>
              <img className={styles.bg} src="/assets/img/home-about-img.jpg" />
              <div className={styles.home_about_play_button}>
                <img src="/assets/img/play-button.svg" />
              </div>
            </div>
            <div className={styles.home_about_caption}>
              <h1 class="title">Quienes somos</h1>
              <p>En <b>Businet</b> somos un grupo de apasionados por transformar sus visiones en realidad, impartiendo una experiencia digital increíble para sus usuarios. Desde el diseño y el desarrollo de sitios web, aplicaciones móviles escalables hasta plataformas SaaS, la solución que diseñamos acelera la eficiencia e impulsa el crecimiento de nuestros clientes.</p>
              <p>Nos comprometemos a alcanzar e impulsar el nivel de desempeño en todo momento. Aprovechando el poder de la tecnología, ofrecemos soluciones integrales para empresas emergentes, pequeñas y medianas empresas.</p>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.home_services}>
        <div className={styles.container}>
          <h1 class="title text-center">Nuestros Servicios</h1>
          <div className={styles.home_services_grid}>
            <div className={styles.home_services_item}>
              <div className={styles.bg}>
                <img src="./assets/img/home-services-consultoria.jpg" className={styles.bg_img} />
                <div className={styles.circle}></div>
              </div>
              <div className={styles.caption}>
                <div className={styles.header}>
                  <h2 className={styles.title}>Consultoría</h2>
                  <p className={styles.text}>Podemos ayudar a que su idea tenga visibilidad al implementar la estrategia de diseño y desarrollo adecuada en este mercado tan concurrido con nuestra experiencia en consultoría.</p>
                </div>
                <div className={styles.servicios}>
                  <ul>
                    <li>
                      <a>Startups</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.home_services_item}>
              <div className={styles.bg}>
                <img src="./assets/img/home-services-apps-moviles.jpg" className={styles.bg_img} />
                <div className={styles.rectangle}></div>
              </div>
              <div className={styles.caption}>
                <div className={styles.header}>
                  <h2 className={styles.title}>Apps Móviles</h2>
                  <p className={styles.text}>Aprovechando la movilidad para brindarle estabilidad y visibilidad comercial, hacemos que su producto esté listo para la próxima generación con la mejor tecnología.</p>
                </div>
                <div className={styles.servicios}>
                  <ul>
                    <li>
                      <a>iOS</a>
                    </li>
                    <li>
                      <a>Android</a>
                    </li>
                    <li>
                      <a>React Native</a>
                    </li>
                    <li>
                      <a>Ionic</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.home_services_item}>
              <div className={styles.bg}>
                <img src="./assets/img/home-services-software.jpg" className={styles.bg_img} />
                <div className={styles.triangle}></div>
              </div>
              <div className={styles.caption}>
                <div className={styles.header}>
                  <h2 className={styles.title}>Software</h2>
                  <p className={styles.text}>Mejoramos la experiencia del usuario con una combinación de enfoque centrado en el ser humano e ingenio de desarrollo</p>
                </div>
                <div className={styles.servicios}>
                  <ul>
                    <li>
                      <a>Web Apps</a>
                    </li>
                    <li>
                      <a>Ecommerce</a>
                    </li>
                    <li>
                      <a>UI / UX</a>
                    </li>
                    <li>
                      <a>PWA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.home_testimonials}>
        <div className={styles.container}>
          <TestimonialSlider
            items={[
              {
                testimonial: "Trabajo de gran calidad y perfecta atención, volvería a trabajar con ellos en un futuro.",
                person: "Luis Gonzales",
                charge: "CEO - Founder - Katzen"
              },
              {
                testimonial: "Excelente trabajo y comunicación, estoy completamente satisfecho con la labor.",
                person: "Edwin Carhuamaca",
                charge: "CEO - Founder - Studiog911"
              },
            ]}
          />
        </div>
      </section>

      <section className={styles.home_devprocess}>
        <div className={styles.container}>
          <h1 class="title text-center">Proceso de trabajo</h1>
          <Devprocess />
        </div>
      </section>

      <section className={styles.home_creative_team}>
        <div className={styles.container}>
          <h1 className="title text-center" style={{ marginBottom: 0 }}>Equipo Creativo</h1>
          <p className={styles.text} style={{ marginBottom: "50px" }}>Te presentamos a nuestro equipo de profesionales</p>
          <Team />
        </div>
      </section>
      
      <Cta />

      <LatestBlog />


      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        

        <footer className={styles.footer}>
          
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >

          

            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
      
      <Footer/>
    </Context.Provider>
  )
}
