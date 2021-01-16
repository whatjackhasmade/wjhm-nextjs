import * as React from 'react';

import { InferGetStaticPropsType } from 'next';

import { Base } from 'wjhm';

import { getStaticPropsHomepage as getStaticProps } from 'wjhm';

export { getStaticProps };

const NodePage = (context: InferGetStaticPropsType<typeof getStaticProps>) => <Base {...context} />;

export default NodePage;
