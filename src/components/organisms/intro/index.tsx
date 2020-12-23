/* eslint-disable react/react-in-jsx-scope */
import { parseHTML } from 'wjhm';

import IntroComponent from './intro.styles';

import { AcfIntroBlock_Introfields as IntroProps } from 'wjhmtypes';

type Props = {
  children?: any;
  illustration?: {
    mediaItemUrl?: string;
  };
  index?: number;
  maxWidth?: string;
  marginReduced?: boolean;
} & IntroProps;

const Intro: React.FC<Props> = (props: Props) => {
  const { children, content, heading, illustration, index, maxWidth, marginReduced, subheading } = props;

  const isFirstModule: boolean = index === 0;

  const Subheading: 'h1' | 'h2' = isFirstModule ? `h1` : `h2`;
  const Heading: 'h2' | 'h3' = isFirstModule ? `h2` : `h3`;

  if (content) {
    return (
      <IntroComponent className="intro" marginReduced={!marginReduced} maxWidth={maxWidth}>
        <div className="intro__wrapper">
          <Subheading className="h4 intro__subheading">{subheading}</Subheading>
          <Heading className="h1 intro__heading">{heading}</Heading>
          {content && <div className="intro__contents">{parseHTML(content)}</div>}
        </div>
        {illustration && <img alt={heading} className="intro__illustration" src={illustration.mediaItemUrl} />}
      </IntroComponent>
    );
  }

  return (
    <IntroComponent className="intro" marginReduced={!marginReduced} maxWidth={maxWidth}>
      <div className="intro__wrapper">
        <Subheading className="h4 intro__subheading">{subheading}</Subheading>
        <Heading className="h1 intro__heading">{heading}</Heading>
        <div className="intro__contents">{children}</div>
      </div>
    </IntroComponent>
  );
};

export default Intro;
