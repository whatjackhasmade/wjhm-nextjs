/* eslint-disable react/react-in-jsx-scope */
import YouTube from 'react-youtube';
import { youtubeID } from 'wjhm';

type CaseYouTubeProps = {
  url: string;
};

const getOptions = id => {
  const opts = {
    height: `780`,
    width: `1280`,
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      mute: 1,
      rel: 0,
      playerVars: {
        playlist: id,
        loop: 1,
      },
    },
  };

  return opts;
};

const onReady = e => {
  const target = e?.target;
  if (!target) return;

  try {
    target.mute();
    target.playVideo();
  } catch (error) {
    console.error(error);
  }
};

const onEnd = e => {
  const target = e?.target;
  if (!target) return;

  try {
    target.mute();
    target.playVideo();
  } catch (error) {
    console.error(error);
  }
};

const CaseYouTube = (props: CaseYouTubeProps) => {
  const { url } = props;
  if (!url) return null;

  const ID = youtubeID(url);
  const opts = getOptions(ID);

  // @ts-ignore
  return <YouTube videoId={ID} opts={opts} onReady={onReady} onEnd={onEnd} />;
};

export default CaseYouTube;
