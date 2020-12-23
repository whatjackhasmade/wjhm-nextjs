import * as React from 'react';

import { InferGetServerSidePropsType } from 'next';

import { Base } from 'wjhm';

import { getServerPropsHomepage as getServerSideProps } from 'wjhm';

export { getServerSideProps };

const NodePage = (context: InferGetServerSidePropsType<typeof getServerSideProps>) => <Base {...context} />;

export default NodePage;
