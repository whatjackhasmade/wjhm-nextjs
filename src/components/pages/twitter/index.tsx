import { useEffect, useState } from 'react';

import { Hero } from 'wjhm';

import { Base } from 'wjhm';

import TweetsContainer from './twitter.styles';

declare type TwitterPageProps = {};
declare type TweetProps = {
  favorite_count: number;
  id: string;
  text: string;
};

const Twitter = (props: TwitterPageProps) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch('https://wjhm-node-twitter-feed.herokuapp.com/')
      .then(res => {
        return res.json();
      })
      .then(tweets => {
        setTweets(tweets);
      });
  }, []);

  const heartGenerator = count => {
    let hearts = [];
    for (var i = 0; i < count; i++) {
      hearts.push('❤');
    }
    return hearts;
  };

  const seo = null;

  const allProps = {
    ...props,
    seo,
  };

  return (
    <Base {...allProps}>
      <Hero>
        <h1>Tweets</h1>
        <h3>Some of my social media ramblings</h3>
      </Hero>
      <TweetsContainer>
        {tweets.map(({ favorite_count, id, text }: TweetProps) => (
          <div className="tweet" key={id}>
            {text}
            <div className="tweet__favourites">{heartGenerator(favorite_count)}</div>
          </div>
        ))}
      </TweetsContainer>
    </Base>
  );
};

export default Twitter;
