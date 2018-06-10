import React from 'react';
import WalkSVG from './WalkSVG';
import Taglines from './Taglines';
import styles from './Banner.module.scss';

const Banner = () => (
  <section id={styles.banner}>
    <WalkSVG />
    <Taglines />
  </section>
);

export default Banner;
