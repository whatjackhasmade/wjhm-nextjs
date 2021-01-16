import React, { useState } from 'react';
import styled from 'styled-components';
import { htmlDecode } from 'wjhm';
import { randomID } from 'wjhm';

import { Base } from 'wjhm';

import { Hero } from 'wjhm';
import { Grid } from 'wjhm';

const InspiratioNavigation = styled.nav`
  margin: 56px 0 0;

  button {
    margin-right: 8px;
    margin-top: 8px;

    opacity: 0.5;
    text-transform: capitalize;

    &:active,
    &:focus,
    &:hover {
      opacity: 1;
    }
  }

  .focused {
    opacity: 1;
  }
`;

const Inspiration = props => {
  const allInspiration = []; // TODO: Fetch
  const hasInspiration = allInspiration?.length > 0;
  if (!hasInspiration) return null;

  const inspiration = allInspiration.map(item => {
    return {
      ...item,
      ...item.acf,
      title: htmlDecode(item.title),
    };
  });

  const tags = inspiration.map(node => node.tags.nodes[0].slug);
  const validTags = tags.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);
  const sortedTags = validTags.sort();

  const [currentTag, setTag] = useState(null);

  const updateTag = (e, tag) => {
    e.preventDefault();
    tag === currentTag ? setTag(null) : setTag(tag);
  };

  return (
    <Base {...props}>
      <Hero>
        <h1>Get Inspired</h1>
        <p>You are only limited by your imagination.</p>
        <p>Let all these little things happen. Don't fight them. Learn to use them. You can't make a mistake.</p>
        <p>Anything that happens you can learn to use - and make something beautiful out of it.</p>
        <p>This is your world, whatever makes you happy you can put in it.</p>
        <p>Go crazy.</p>
        {currentTag}
      </Hero>
      <InspiratioNavigation>
        {sortedTags.map(tag => (
          <button
            key={`${tag}-${randomID()}`}
            className={currentTag && currentTag === tag ? `focused` : `focused`}
            onClick={e => {
              updateTag(e, tag);
            }}
          >
            {tag}
          </button>
        ))}
      </InspiratioNavigation>
      <Grid items={inspiration} type="images" filter={currentTag} />
    </Base>
  );
};

export default Inspiration;
