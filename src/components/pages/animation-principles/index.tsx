import { Button } from 'wjhm';

import { Hero } from 'wjhm';

import { Base } from 'wjhm';

import { VideoGrid } from './animation-principles.styles';

const VideosArray = [
  '/videos/ux-motion/1.mp4',
  '/videos/ux-motion/2.mp4',
  '/videos/ux-motion/3.mp4',
  '/videos/ux-motion/4.mp4',
  '/videos/ux-motion/5.mp4',
  '/videos/ux-motion/6.mp4',
  '/videos/ux-motion/7.mp4',
  '/videos/ux-motion/8.mp4',
  '/videos/ux-motion/9.mp4',
  '/videos/ux-motion/10.mp4',
  '/videos/ux-motion/11.mp4',
  '/videos/ux-motion/12.mp4',
];

type AnimationPrinciplesProps = {};

const AnimationPrinciples = (props: AnimationPrinciplesProps) => {
  const seo = null;

  const allProps = {
    ...props,
    seo,
  };

  return (
    <Base {...allProps}>
      <Hero>
        <h1>The 12 Principles of UX in Motion</h1>
        <p>
          As part of my undergraduate degree in Website design and Development, we looked at the 12 Principles of UX in
          Motion.
        </p>
        <p>After researching each principle, I recreated the examples in HTML, CSS and JS using Codepen.</p>
        <ul>
          <li>Easing and Offset &amp; Delay relate to timing.</li>
          <li>Parenting relates to object relationship.</li>
          <li>Transformation, Value Change, Masking, Overlay, and Cloning all relate to object continuity.</li>
          <li>Parallax relate to temporal hierarchy.</li>
          <li>Obscuration, Dimensionality and Dolly &amp; Zoom both relate to spatial continuity.</li>
        </ul>
        <Button href="https://codepen.io/collection/nVPpNK?grid_type=list" target="_blank" rel="noopener noreferrer">
          View Collection of Code Examples
        </Button>
      </Hero>
      <VideoGrid>
        {VideosArray.map(video => (
          <a href="https://codepen.io/collection/nVPpNK?grid_type=list" target="_blank" rel="noopener noreferrer">
            <video src={video} autoPlay loop muted />
          </a>
        ))}
      </VideoGrid>
    </Base>
  );
};

export default AnimationPrinciples;
