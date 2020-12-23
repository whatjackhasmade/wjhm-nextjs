const GAPI = process.env.GATSBY_GOOGLE_API;
const channelID = `UUIOm-HME4V_STS9yWM5aXIg`;

export const callGetYouTubeChannelVideos = async (count?: number): Promise<any> => {
  let max = 12;
  if (count) max = count;
  const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelID}&key=${GAPI}&maxResults=${max}`;

  try {
    const res = await fetch(youtubeURL);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
