import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import lottieAnimationData from '../json/LOGO-ANI'; // Lottie animation path
import Head from 'next/head';
import "./globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Manual scroll restoration to prevent automatic scroll reset
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Head>
        {/* Global Meta Tags */}
        <meta property="og:title" content="URGE OF IMMIGRATION | Trusted Visa Consultancy" />
        <meta property="og:description" content="Explore visa options and immigration support with URGE OF IMMIGRATION. Discover paths for study, work, and living abroad." />
        <meta property="og:image" content="/images/default-OG.jpg" /> {/* Ensure this image path is correct */}
        <meta property="og:url" content="https://urgeofimmigration.com" />
        <link rel="icon" href="/LOGO.svg" />
      </Head>

      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)} // Scroll to top when page transition is complete
      >
        <motion.div key={router.pathname}>
          <Component {...pageProps} />

          {/* Page Transition Animation */}
          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Page Content */}
          </motion.div>

          {/* Optional Slide-out Animation with Centered Lottie */}
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 6 }}
          >
            <Lottie 
              animationData={lottieAnimationData} 
              loop={false}
              className="lottie-center"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
