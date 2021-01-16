/* eslint-disable react/react-in-jsx-scope */
import { parseHTML } from 'wjhm';

import { SmartImage } from 'wjhm';

import { Intro } from 'wjhm';

import GithubComponent from './github.styles';

type GithubProps = {
  content: string;
};

const Github = (props: GithubProps) => {
  const { content } = props;

  const heading: string = `Development Activity`;
  const subheading: string = `I love GitHub and open source projects`;

  return (
    <GithubComponent>
      <Intro heading={heading} subheading={subheading} marginReduced />
      <a
        className="github__calendar"
        href="https://github.com/whatjackhasmade"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          alt="Jack Pritchard's Github chart"
          height={104}
          priority={true}
          src="https://ghchart.rshah.org/whatjackhasmade"
          width={702}
        />
      </a>
      {content && <div>{parseHTML(content)}</div>}
    </GithubComponent>
  );
};

export default Github;
