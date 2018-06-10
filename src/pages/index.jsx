import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import WalkSVG from '../components/WalkSVG';
import Taglines from '../components/Taglines';

const IndexPage = () => (
  <Layout>
    <Container>
      <WalkSVG />
      <Taglines />
    </Container>
  </Layout>
);

export default IndexPage;
