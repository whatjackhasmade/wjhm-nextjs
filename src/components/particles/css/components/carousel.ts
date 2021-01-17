import { css } from 'styled-components';

const exportedCSS = css`
  .keen-slider {
    display: flex;
    overflow: hidden;
    position: relative;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .keen-slider__slide {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100%;
  }
  .keen-slider[data-keen-slider-v] {
    flex-wrap: wrap;
  }
  .keen-slider[data-keen-slider-v] .keen-slider__slide {
    width: 100%;
  }
  .keen-slider[data-keen-slider-moves] * {
    pointer-events: none;
  }
  /*# sourceMappingURL=keen-slider.css.map */
`;

export default exportedCSS;
