import { useQuery } from 'react-query';

import { Github as IconGithub } from '../../atoms/icons/brands';
import { Linkedin as IconLinkedIn } from '../../atoms/icons/brands';
import { Twitter as IconTwitter } from '../../atoms/icons/brands';
import { Youtube as IconYouTube } from '../../atoms/icons/brands';

import { callGetMenu } from 'wjhm';

import FooterComponent from './footer.styles';

import type { Menu } from 'wjhmtypes';

declare type FooterProps = {};

const args: { slug: string } = { slug: `footer-menu` };

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { data, error, isLoading: loading } = useQuery([`callGetMenu`, args], () => callGetMenu(args));
  const footerMenu: Menu = data?.menus?.nodes?.[0];

  return (
    <FooterComponent>
      <div className="footer__contents">
        <nav className="footer__cta">
          <a href="mailto:jack@noface.co.uk">
            <div className="footer__arrow" />
            <div className="footer__cta__content">
              <span className="footer__tagline">Always available for a chat</span>
              <span className="footer__name">Jack Pritchard</span>
            </div>
          </a>
        </nav>
        <nav className="footer__contact">
          <a href="tel:07776 812750">07776 812750</a>
          <a href="mailto:jack@noface.co.uk">jack@noface.co.uk</a>
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
