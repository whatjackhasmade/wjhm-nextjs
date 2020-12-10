import { parseHTML } from 'wjhm';

import GithubComponent from './github.styles';

import { Intro } from 'wjhm';

type GithubProps = {
  content: string;
};

const Github = ({ content }: GithubProps) => (
  <GithubComponent>
    <Intro heading={`Development Activity`} subheading={`I love GitHub and open source projects`} marginReduced />
    <a className="github__calendar" href="https://github.com/whatjackhasmade" rel="noopener noreferrer" target="_blank">
      <img src="https://ghchart.rshah.org/whatjackhasmade" alt="2016rshah's Github chart" />
    </a>
    <div>{parseHTML(content)}</div>
  </GithubComponent>
);

export default Github;
