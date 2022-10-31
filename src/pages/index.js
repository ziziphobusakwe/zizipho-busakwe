
import Hero from '../components/LandingSection/LandingSection';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/TechStack/TechStack';
import Timeline from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      {/* <Section grid> */}
        <Hero />
        {/* <BgAnimation /> */}
      {/* </Section> */}
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
