import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from '../components/SmoothScroll';
import ServicesSection from '../components/ServicesSection';
import BriefcaseSection from '../components/BriefcaseSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Earth = dynamic(() => import('../components/index'), {
  ssr: false,
  loading: () => <img src="/assets/download.png" />
});
const HeroSection = dynamic(() => import('../components/HeroSection'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png" />
});
const Testimonials = dynamic(() => import('../components/Testimonials'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png" />
});
const OutroComponent = dynamic(() => import('../components/OutroComponent'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png" />
});
const FaqList = dynamic(() => import('../components/FaqList'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png" />
});



export default function Home() {
  return (
    <SmoothScroll>
      
      <Navbar/>

      <HeroSection/>
      <BriefcaseSection/>
      <ServicesSection/>
      <main className='main'>
        <Earth />
      </main>
      <Testimonials/>
      <OutroComponent/>
      <FaqList/>
      <Footer/>
    </SmoothScroll>
  );
}
