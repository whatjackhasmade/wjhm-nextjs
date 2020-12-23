import { useQuery } from 'react-query';
import YouTube from 'react-youtube';

import YouTubeComponent from './youtube.styles';

import { ImageLoader } from 'wjhm';

import { Error } from 'wjhm';

import { callGetYouTubeChannelVideos } from 'wjhm';

// https://developers.google.com/youtube/player_parameters
const opts = {
  playerVars: {
    autoplay: 0,
  },
};

const _onReady = event => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

const YouTubeChannel = props => {
  const { data, error: apiError, isLoading: loading } = useQuery(
    [`callGetYouTubeChannelVideos`],
    callGetYouTubeChannelVideos,
  );

  let error = null;
  if (apiError) error = apiError;

  const isDataError = data?.error?.code === 400;
  if (isDataError) error = data?.error?.message;

  return (
    <YouTubeComponent>
      <img alt="" className="youtube__background youtube__background--left" src="/images/youtube-left.png" />
      <img alt="" className="youtube__background youtube__background--right" src="/images/youtube-right.png" />
      <div className="youtube__content">
        <div className="youtube__intro">
          {error && <Error error={error} />}
          <h2>My YouTube Channel</h2>
          <p>
            Early on in my career I knew it was important to document what I was learning, so I started a blog. The next
            step on from that was to start my own YouTube channel. I did this not only for myself, but to also share my
            understanding of topics with others looking to develop their skills.
          </p>
          <p>
            Starting my own YouTube channel encouraged me to understand a topic deeply as to teach a topic, you must
            have a strong grasp on the concepts involved. I don&apos;t claim to be an expert on every subject I cover,
            but if I find it of interest, I will cover it and share my experience with others.
          </p>
          <a className="button" href="https://youtube.com/whatjackhasmade" rel="noopener noreferrer" target="_blank">
            View My YouTube Channel
          </a>
          <MostRecent data={data} />
        </div>
        <div className="youtube__videos">
          <Videos data={data} />
        </div>
      </div>
    </YouTubeComponent>
  );
};

const MostRecent = props => {
  const data = props?.data;

  const hasVideos: boolean = data?.length > 0;
  if (!hasVideos) return null;

  const videos = data.map(({ node }) => node).filter((v, i) => i > 0 && i < 19);
  const [firstVideo] = videos;

  if (!firstVideo) return null;

  return (
    <div className="youtube__video" title={firstVideo.snippet.title}>
      {/* @ts-ignore */}
      <YouTube videoId={firstVideo.snippet.resourceId.videoId} opts={opts} onReady={_onReady} />
    </div>
  );
};

const Videos = props => {
  const data = props?.data;

  const hasVideos: boolean = data?.length > 0;
  if (!hasVideos) return null;

  const videos = data.map(({ node }) => node).filter((v, i) => i > 0 && i < 19);

  return videos.map(video => <Video key={video.snippet.resourceId.videoId} {...video} />);
};

const Video = props => {
  const { snippet } = props;

  const href: string = `https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`;
  const thumbnail: string = snippet?.thumbnails?.medium?.url;
  const title: string = snippet?.title;

  return (
    <div className="youtube__video" title={title}>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <div className="youtube__video__thumbnail">
          <ImageLoader alt={title} src={thumbnail} />
        </div>
      </a>
    </div>
  );
};

export default YouTubeChannel;
