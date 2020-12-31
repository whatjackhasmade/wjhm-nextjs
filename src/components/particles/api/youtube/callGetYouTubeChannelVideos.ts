const GAPI = process.env.NEXT_PUBLIC_GOOGLE_API;
const channelID = `UUIOm-HME4V_STS9yWM5aXIg`;

export const callGetYouTubeChannelVideos = async (count?: number): Promise<any> => {
  let max = 12;
  if (count) max = count;

  const maxString: string = String(max);
  const youtubeURL: string = `https://youtube.googleapis.com/youtube/v3/channels?part=id&part=snippet&categoryId=${channelID}&maxResults=${maxString}&key=${GAPI}`;

  await fetch(youtubeURL);
};
