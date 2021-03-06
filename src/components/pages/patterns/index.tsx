import * as React from 'react';
import styled from 'styled-components';

import { Base } from 'wjhm';

declare type PatternsProps = {
  posts: any[];
};

const Patterns = (props: PatternsProps) => {
  const seo = null;

  const allProps = {
    ...props,
    seo,
  };

  return (
    <Base {...allProps}>
      <One />
    </Base>
  );
};

const StyledOne = styled.div`
  .grid {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 200px auto;
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
    border: var(--border) solid black;

    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);

    animation-name: animationRotation;
    animation-delay: var(--scaleSeconds);
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
    50% {
      transform: scale(var(--scale)) rotate(360deg);
    }
    100% {
      transform: scale(var(--scale)) rotate(360deg);
    }
  }
`;

export interface CSSProperties extends React.CSSProperties {
  '--border'?: string;
  '--scale'?: number;
  '--scaleSeconds'?: string;
}

const n = 20; // Or something else

const One = () => {
  return (
    <StyledOne>
      <div className="grid">
        <div className="grid__contents">
          {[...Array(n)].map((e, i) => {
            const position = i + 1;
            const scale = position * 0.1;
            const rounded = Math.round(scale * 10) / 10;

            const large = rounded * 10;
            const border = 50 / large;

            const style: CSSProperties = {
              '--border': `${border}px`,
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

export default Patterns;
