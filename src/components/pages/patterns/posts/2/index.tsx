import * as React from 'react';
import styled from 'styled-components';

import { Link } from 'wjhm';

import { Base } from 'wjhm';

declare type PatternsTwoProps = {
  posts: any[];
};

const PatternsTwo = (props: PatternsTwoProps) => {
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
  .controls {
    display: flex;

    > * {
      flex: 1;
    }
  }

  .wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    padding: 200px 0;

    background-color: var(--background);
  }

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

    border-radius: 50%;
    width: 3px;
    height: 3px;
    background-color: var(--accent);

    animation-timing-function: ease;
    animation-delay: var(--delay);
    animation-name: animationRotation;
    animation-duration: var(--duration);
    animation-direction: forwards;
    animation-iteration-count: infinite;

    opacity: var(--opacity);
    transform: scale(var(--scale)) rotate(0deg);
  }

  .cell ~ .cell {
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes animationRotation {
    0% {
      border-radius: 50%;
      transform: scale(var(--scale)) rotate(0deg);
    }
    20% {
      border-radius: 40%;
    }
    40% {
      transform: scale(calc(var(--scale) * 2)) rotate(var(--rotationMid));
    }
    50% {
      border-radius: 40%;
    }
    80% {
      border-radius: 50%;
      transform: scale(var(--scale)) rotate(var(--rotationEnd));
    }
    100% {
      border-radius: 50%;
      transform: scale(var(--scale)) rotate(var(--rotationEnd));
    }
  }
`;

export interface CSSProperties extends React.CSSProperties {
  '--accent'?: string;
  '--background'?: string;
  '--border'?: string;
  '--delay'?: string;
  '--duration'?: string;
  '--opacity'?: number;
  '--position'?: number;
  '--rotationEnd'?: string;
  '--rotationMid'?: string;
  '--scale'?: number;
  '--scaleSeconds'?: string;
}

const n = 10; // Or something else

const One = () => {
  const [accent, setAccent] = React.useState<string>(`#000000`);
  const [background, setBackground] = React.useState<string>(`#ffffff`);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case `accent`:
        setAccent(value);
        break;
      case `background`:
        setBackground(value);
        break;
    }
  };

  const style: CSSProperties = {
    '--accent': accent,
    '--background': background,
  };

  const round = val => Math.round(val * 10) / 10;

  return (
    <React.Fragment>
      <StyledOne style={style}>
        <div className="controls">
          <div>
            <label htmlFor="accent">Accent</label>
            <input type="color" id="accent" name="accent" onChange={handleChange} value={accent}></input>
          </div>
          <div>
            <label htmlFor="background">Background</label>
            <input type="color" id="background" name="background" onChange={handleChange} value={background}></input>
          </div>
        </div>
        <div className="wrapper">
          <div className="grid">
            <div className="grid__contents">
              {[...Array(n)].map((e, i) => {
                const position = i + 1;

                const delayNumber: number = 1 - position * 0.1;
                const delayRounded: number = round(delayNumber);
                const delay: string = `${delayRounded}s`;

                const durationMax: number = 5;
                const durationTotal: number = durationMax;

                const duration: string = `${durationTotal}s`;

                const opacity = 0.17;

                const scale = 1 + position * 8;
                const scaleRounded = round(scale);

                const style: CSSProperties = {
                  '--delay': delay,
                  '--duration': duration,
                  '--opacity': opacity,
                  '--rotationMid': `-${position * 45}deg`,
                  '--rotationEnd': `-${position * 90}deg`,
                  '--position': position,
                  '--scale': scaleRounded,
                };

                return <div className="cell" key={i} style={style}></div>;
              })}
            </div>
          </div>
        </div>
      </StyledOne>
    </React.Fragment>
  );
};

export { PatternsTwo };
export default PatternsTwo;
