import * as React from 'react';
import styled from 'styled-components';

import { Link } from 'wjhm';

import { Base } from 'wjhm';

declare type PatternsThreeProps = {
  posts: any[];
};

const PatternsThree = (props: PatternsThreeProps) => {
  const seo = null;

  const allProps = {
    ...props,
    cta: false,
    seo,
  };

  return (
    <Base {...allProps}>
      <Link href="/patterns">Patterns</Link>
      <Three />
    </Base>
  );
};

const StyledThree = styled.div`
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

    transform: rotate(45deg);
  }

  .circle {
    backface-visibility: visible;
    perspective-origin: 150% 150%;
    transform-style: preserve-3d;

    align-items: center;
    border-radius: 100%;
    display: flex;
    height: 200px;
    justify-content: center;
    width: 200px;

    border: 20px solid var(--accent);
    opacity: 1;

    animation-timing-function: ease;
    animation-name: animationMove;
    animation-duration: 4s;
    animation-direction: forwards;
    animation-iteration-count: infinite;
  }

  .circle ~ .circle {
    position: absolute;
    top: 0;
    left: 0;
  }

  .middle {
    align-items: center;
    border-radius: 100%;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: var(--accent);
    opacity: 0;

    animation-timing-function: linear;
    animation-name: animationOpacity;
    animation-duration: 4s;
    animation-direction: forwards;
    animation-iteration-count: infinite;
  }

  @keyframes animationOpacity {
    0% {
      opacity: 0;
    }
    12% {
      opacity: 0;
    }
    12.01% {
      opacity: 1;
    }
    52% {
      opacity: 1;
    }
    52.01% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
  }

  @keyframes animationMove {
    0% {
      transform: translateX(0%) translateY(0%);
    }
    40% {
      transform: translateX(var(--transform-x)) translateY(var(--transform-y));
    }
    80% {
      transform: translateX(0%) translateY(0%);
    }
  }
`;

interface CSSProperties extends React.CSSProperties {
  '--accent'?: string;
  '--background'?: string;
  '--position'?: number;
  '--transform-x'?: string;
  '--transform-y'?: string;
}

const n = 4; // Or something else

const Three = () => {
  const [accent, setAccent] = React.useState<string>(`#000000`);
  const [background, setBackground] = React.useState<string>(`#FF0000`);

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

  return (
    <React.Fragment>
      <StyledThree style={style}>
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
                let transformY = `0%`;
                let transformX = `0%`;
                const position: number = i + 1;
                const key = `pattern-three-${position}`;

                switch (position) {
                  case 1:
                    transformY = `-100%`;
                    break;
                  case 2:
                    transformY = `100%`;
                    break;
                  case 3:
                    transformX = `-100%`;
                    break;
                  case 4:
                    transformX = `100%`;
                    break;
                }

                const style: CSSProperties = {
                  '--position': position,
                  '--transform-x': transformX,
                  '--transform-y': transformY,
                };

                return <Circle key={key} style={style} />;
              })}
              <div className="middle" />
            </div>
          </div>
        </div>
      </StyledThree>
    </React.Fragment>
  );
};

const Circle = props => {
  return <div className="circle" {...props} />;
};

export { PatternsThree };
export default PatternsThree;
