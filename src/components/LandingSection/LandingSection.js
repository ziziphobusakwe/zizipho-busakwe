import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './LandingSectionStyles';

const Hero = (props) => (

  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        My Portfolio
        </SectionTitle>
        <SectionText>
        Welcome! I am a backend software engineer based in Cape Town, South Africa. I have created this website to share a bit about myself. I have also included details on technologies I have used and some of the projects I have worked on so far.
        </SectionText>
        <Button onClick = {(href) => href - "mailto:zzbusakwe@gmail.com"}> Get In Touch </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;