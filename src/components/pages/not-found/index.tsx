import * as React from 'react';
import { useQuery } from 'react-query';
import { Container, Row, Col } from 'react-grid-system';

import { Image } from 'wjhm';
import { Link } from 'wjhm';
import { Hero } from 'wjhm';
import { Related } from 'wjhm';

// API
import { callGetPosts } from 'wjhm';

type NotFoundProps = {};

const NotFound = (props: NotFoundProps) => {
  const args = { count: 3 };
  const { data } = useQuery([`callGetPosts`, args], () => callGetPosts(args));

  const posts = data;
  const hasPosts = posts?.length > 0;

  return (
    <React.Fragment>
      <Hero align="center" maxWidth="890px">
        <Container fluid>
          <Row>
            <Col lg={7}>
              <h1>
                <span aria-label="hushed face emoji" role="img">
                  😯
                </span>
                {` `}
                Sorry, we couldn&apos;t find that
              </h1>
              <p>
                Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation certificate? Where is
                the chocolate cake I baked for my Aunt’s birthday? And why did you take your dog to the vet on that same
                Thursday?!
              </p>
              <Link to="/">Return to the homepage</Link>
            </Col>
            <Col lg={4} offset={{ lg: 1 }}>
              <Image alt="Illustration of a dog eating paper" src="/images/404-dog.png" height={800} width={800} />
            </Col>
          </Row>
        </Container>
      </Hero>
      {hasPosts && <Related data={posts} title="Find something that... works!" />}
    </React.Fragment>
  );
};

export default NotFound;
