import * as React from 'react';
import styled from 'styled-components';

import { Link } from 'wjhm';

import { Base } from 'wjhm';

declare type PatternsOneProps = {
  posts: any[];
};

const PatternsOne = (props: PatternsOneProps) => {
  const seo = null;

  const allProps = {
    ...props,
    cta: false,
    seo,
  };

  return (
    <Base {...allProps}>
      <Link href="/patterns">Patterns</Link>
      <One />
    </Base>
  );
};

const StyledOne = styled.div`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 200px 0;

  background-color: #e07d3c;

  .grid {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .grid__contents {
    position: relative;
  }

  .cell {
    align-items: center;
    display: flex;
    justify-content: center;

    border-radius: 9000px;
    width: 200px;
    height: 200px;
    border: var(--border) solid white;

    clip-path: polygon(0 0%, 100% 0%, 100% 50%, 0% 50%);

    animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
    animation-name: animationRotation;
    animation-duration: 8s;
    animation-direction: forwards;
    animation-iteration-count: infinite;

    transform: scale(var(--scale)) rotate(0deg);
  }

  .cell ~ .cell {
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes animationRotation {
    0% {
      transform: scale(var(--scale)) rotate(0deg);
    }
    99.99% {
      transform: scale(var(--scale)) rotate(var(--rotation));
    }
    100% {
      transform: scale(var(--scale)) rotate(var(--rotation));
    }
  }
`;

export interface CSSProperties extends React.CSSProperties {
  '--border'?: string;
  '--position'?: number;
  '--rotation'?: string;
  '--scale'?: number;
  '--scaleSeconds'?: string;
}

const n = 18; // Or something else

const One = () => {
  return (
    <StyledOne>
      <div className="grid">
        <div className="grid__contents">
          {[...Array(n)].map((e, i) => {
            const position = i + 1;
            const scale = 2 - position * 0.1;
            const rounded = Math.round(scale * 10) / 10;

            const large = rounded * 10;
            const border = 120 / large;

            const style: CSSProperties = {
              '--border': `${border}px`,
              '--position': position,
              '--rotation': `${position * 360}deg`,
              '--scale': rounded,
              '--scaleSeconds': `${rounded}s`,
            };

            return <div className="cell" key={i} style={style}></div>;
          })}
        </div>
      </div>
    </StyledOne>
  );
};

export { PatternsOne };
export default PatternsOne;
