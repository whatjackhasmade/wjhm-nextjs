import styled from 'styled-components';
import { device } from 'particles';

export const BreakImage = styled.section`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  min-height: ${props => (props.height ? props.height : `200px`)};
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 9;

  @supports (margin-left: -50vw) {
    height: auto;
    left: 50%;
    margin-left: -50vw;
    min-height: ${props => (props.height ? props.height : `400px`)};
    width: 100vw;
  }

  @media ${device?.xs} {
    height: 500px;
    min-height: 50vh;
  }

  img,
  picture {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const BlockContainer = styled.section`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 48px auto;

  opacity: 0;
  transform: translateY(100px);
  transition: 1s all ease;

  @media ${device?.sm} {
    margin: 64px auto;
  }

  @media ${device?.lg} {
    margin: 96px auto;
    max-width: 90%;
  }

  &.block--show {
    opacity: 1;
    transform: translateY(0px);
  }

  .block__column {
    width: 100%;

    @media ${device?.lg} {
      max-width: calc(50% - 32px);
    }
  }

  .block__column--full {
    max-width: 100%;
  }
`;

export const Devices = styled.section`
/*!
 * html5-device-mockups (https://github.com/pixelsign/html5-device-mockups)
 * Copyright 2013 - 2018 pixelsign
 * Licensed under MIT (https://github.com/pixelsign/html5-device-mockups/blob/master/LICENSE.txt)
 * Last Build: Thu Dec 20 2018 14:05:50
 */
.device-wrapper {
  max-width: 300px;
  width: 100%; }

.device {
  position: relative;
  background-size: cover; }
  .device::after {
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    pointer-events: none; }
  .device .screen {
    position: absolute;
    background-size: cover;
    pointer-events: auto; }
  .device .button {
    position: absolute;
    cursor: pointer; }

.device[data-device="Macbook2015"][data-orientation="portrait"][data-color="white"] {
  padding-bottom: 57.51565762%; }
  .device[data-device="Macbook2015"][data-orientation="portrait"][data-color="white"] .screen {
    top: 7.3502722323%;
    left: 12.4217118998%;
    width: 75.1565762004%;
    height: 81.7604355717%; }
  .device[data-device="Macbook2015"][data-orientation="portrait"][data-color="white"]::after {
    content: '';
    background-image: url('/images/device-mockups/Macbook2015/portrait_white.png');
    z-index: -1; }
  .device[data-device="Macbook2015"][data-orientation="portrait"][data-color="white"] .button {
    display: none;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%; }

.device[data-device="iPhone7"][data-orientation="portrait"][data-color="white"] {
  padding-bottom: 203.103448276%; }
  .device[data-device="iPhone7"][data-orientation="portrait"][data-color="white"] .screen {
    top: 11.9977362762%;
    left: 6.2068965517%;
    width: 87.3563218391%;
    height: 76.0611205433%; }
  .device[data-device="iPhone7"][data-orientation="portrait"][data-color="white"]::after {
    content: '';
    background-image: url('/images/device-mockups/iPhone7/portrait_white.png');
    z-index: -1; }
  .device[data-device="iPhone7"][data-orientation="portrait"][data-color="white"] .button {
    top: 89.5302773062%;
    left: 42.2988505747%;
    width: 15.7471264368%;
    height: 7.753254103%; }


  display: block;
  margin: 96px 0;

  opacity: 0;
  transform: translateY(100px);
  transition: 1s all ease;

  a {
    align-items: center;
    display: flex;
  }

  &.devices--show {
    opacity: 1;
    transform: translateY(0px);
  }

  > * {
    width: 100%;
  }

  .macbook {
    max-width: 74%;

    .screen {
      transform: scale(1.01);
    }

    .screen > div {
      position: relative;
      padding-bottom: 63.25%;
      height: 0;
      overflow: hidden;
      max-width: 100%;
    }
  }

  .iphone {
    margin-left: 5%;
    max-width: 21%;

    .screen > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  .macbook,
  .iphone {
    .screen > div iframe,
    .screen > div object,
    .screen > div embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .screen {
    overflow: hidden;
  }
`;

export const GalleryContainer = styled.section`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(1, 1fr);
  margin: 32px 0;

  opacity: 0;
  transform: translateY(100px);
  transition: 1s all ease;

  @media ${device?.sm} {
    grid-template-columns: repeat(2, 1fr);
    margin: 64px 0;
  }

  &.gallery--small {
    grid-gap: 26px;
    grid-template-columns: repeat(2, 1fr);

    @media ${device?.sm} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &.gallery--show {
    opacity: 1;
    transform: translateY(0px);
  }
`;
