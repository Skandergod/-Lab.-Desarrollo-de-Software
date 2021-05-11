import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/common/header'
import SimplifiedBanner from './components/common/simplifiedBanner'
import Context from './Context';
import TestimonialSlider from './components/common/TestimonialSlider'
import Devprocess from './components/Devprocess'
import Team from "./components/Team"
import Cta from "./components/Cta"
import LatestBlog from "./components/LatestArticles"
import Footer from "./components/Footer/index"
import CarouselSimplified from "./components/common/carousel"
import Grid from "./components/common/grid"

const images = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
  'https://picsum.photos/800/600?random=4',
  'https://picsum.photos/800/600?random=5',
  'https://picsum.photos/800/600?random=6',
  'https://picsum.photos/800/600?random=7',
  'https://picsum.photos/800/600?random=8',
]

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
        <SimplifiedBanner />
        <CarouselSimplified images = {images} />
        <Grid images = {images}/>

        <Footer/>
        </Context.Provider>
  )
}
