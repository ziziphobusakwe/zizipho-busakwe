

import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>WhatsApp/Call</LinkTitle>
          <LinkItem href="cell:082 842 5927">082 842 5927</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Pop me a mail</LinkTitle>
          <LinkItem href="mailto:zzbusakwe@gmail.com">
            zzbusakwe@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Come along...</LinkTitle>
          <SocialIconsContainer>
          <SocialContainer>
          <SocialIcons href="https://github.com/ziziphobusakwe">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/zizipho-b-99969372/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/ziziafrica_/?hl=en">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;