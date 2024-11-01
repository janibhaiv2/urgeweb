
import ImageGallery from "../components/about-sec/ImageGallery";
import Paragraph from "../components/about-sec/Paragraph";
import WhyChooseUs from "../components/about-sec/WhyChooseUs";
import Endling from "../components/Endling";
import FaqList from "../components/FaqList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Page from "../components/page";
import SmoothScroll from "../components/SmoothScroll";

export default function About() {
  return (
  <Page>

    <SmoothScroll>
      <Navbar />
      <ImageGallery/>
      <Paragraph/>
      <WhyChooseUs/>
      <Endling/>
      <FaqList/>
      <Footer/>

    </SmoothScroll>
  </Page>

    
  );
}
