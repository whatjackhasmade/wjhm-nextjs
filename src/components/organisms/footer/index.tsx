import React, { useEffect } from 'react';
// import MailtoUI from 'mailtoui/dist/mailtoui-min.js';

import FooterComponent from './footer.styles';

import { Github as IconGithub } from '../../atoms/icons/brands';
import { Linkedin as IconLinkedIn } from '../../atoms/icons/brands';
import { Twitter as IconTwitter } from '../../atoms/icons/brands';
import { Youtube as IconYouTube } from '../../atoms/icons/brands';

type FooterProps = {};

const Footer = (props: FooterProps) => {
  useEffect(() => {
    // if (typeof window !== `undefined`) {
    //   MailtoUI.run(); // <--- Run MailtoUI manually
    // }
  });

  return (
    <FooterComponent>
      <div className="footer__contents">
        <nav className="footer__cta">
          <a className="mailtoui" href="mailto:jack@noface.co.uk">
            <div className="footer__arrow" />
            <div className="footer__cta__content">
              <span className="footer__tagline">Always available for a chat</span>
              <span className="footer__name">Jack Pritchard</span>
            </div>
          </a>
        </nav>
        <nav className="footer__contact">
          <a href="tel:07776 812750">07776 812750</a>
          <a className="mailtoui" href="mailto:jack@noface.co.uk">
            jack@noface.co.uk
          </a>
        </nav>
        <nav className="footer__social">
          <a href="https://twitter.com/whatjackhasmade" rel="noopener noreferrer" target="_blank">
            <IconTwitter /> Twitter
          </a>
          <a href="https://github.com/whatjackhasmade" rel="noopener noreferrer" target="_blank">
            <IconGithub /> Github
          </a>
          <a href="https://linkedin.com/in/whatjackhasmade" rel="noopener noreferrer" target="_blank">
            <IconLinkedIn /> LinkedIn
          </a>
          <a href="https://youtube.com/whatjackhasmade" rel="noopener noreferrer" target="_blank">
            <IconYouTube /> YouTube
          </a>
        </nav>
      </div>
    </FooterComponent>
  );
};

export default Footer;
