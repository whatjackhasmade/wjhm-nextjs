/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from 'react-query';
import YouTube from 'react-youtube';

import YouTubeComponent from './youtube.styles';

import { SmartImage } from 'wjhm';

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

const YouTubeChannel = () => {
  const count: number = 18;
  const { data, error, isLoading: loading } = useQuery([`callGetYouTubeChannelVideos`], () =>
    callGetYouTubeChannelVideos(count),
  );

  return (
    <YouTubeComponent>
      <div className="youtube__background youtube__background--left">
        <SmartImage alt="" src="/images/youtube-left.png" width={189} height={1080} />
      </div>
      <div className="youtube__background youtube__background--right">
        <SmartImage alt="" src="/images/youtube-right.png" width={189} height={1080} />
      </div>
      <div className="youtube__content">
        <div className="youtube__intro">
          <h2>My YouTube Channel</h2>
          {loading && <p>Loading...</p>}
          {error && <Error error={error} />}
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
          <MostRecent data={data?.items} />
        </div>
        <div className="youtube__videos">
          <Videos data={data?.items} />
        </div>
      </div>
    </YouTubeComponent>
  );
};

const MostRecent = props => {
  const data = props?.data;

  const hasVideos: boolean = data?.length > 0;
  if (!hasVideos) return null;

  const allVideos = data.map(({ node }) => node);
  const [firstVideo] = allVideos;

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

  const allVideos = data.map(({ node }) => node);
  const videos = allVideos.filter((_, i) => i !== 0);

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
          <SmartImage alt={title} src={thumbnail} width={1920} height={1080} />
        </div>
      </a>
    </div>
  );
};

export default YouTubeChannel;
