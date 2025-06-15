import SectionSectionSection from "../components/SectionSectionSection";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import SectionSection from "../components/SectionSection";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section from "../components/Section";
import Section1 from "../components/Section1";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./WLight.module.css";
import ScrollProgress from "./Scrollprogress";
import HomeFooter from "../pages/HomeFooter";

const WLight = () => {
  return (
    <>
    <div className={styles.wLight}>
      {/* <div className="w-full h-full"> */}
        <Header  />
        {/* <main data-spy="scroll" data-target="#navbar-example2" data-offset={0}> */}
          <SectionSectionSection />
          <Section2 />
          <Section3 />
          <SectionSection />
          <Section4 />
          <Section5 />
          <Section6 />
          {/* <section className={styles.section} /> */}
          <Section7 />
          <section className={styles.section1}>
            <Section1 />
            <Section />
          </section>
        {/* </main> */}
      {/* <div className={styles.link}>
        <div className={styles.container}>
          <div className={styles.overlay} />
          <div className={styles.background} />
          <img className={styles.envatosvgIcon} alt="" src="/envatosvg.svg" />
          <div className={styles.overlay1} />
        </div>
      </div>*/}
    {/* </div> */}
    {/* </div> */}

 <Footer />
 <ScrollProgress/>
 </div>
 
 </>
  );
};

export default WLight;
