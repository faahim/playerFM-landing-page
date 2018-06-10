import React from 'react';
import Container from '../components/Container';
import PhoneFrame from './PhoneFrame';
import styles from './CTA.module.scss';

const CTA = () => (
  <div className={styles.ctaSection}>
    <Container>
      <h3>Play epic talk shows anywhere, anytime.</h3>
      <PhoneFrame />
      <p>
        Player FM is the multi-platform podcast app that helps you find shows on
        the topics you care about and play them at your convenience, even when
        you&#39;re offline.
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=fm.player"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="imgs/play-store.png" alt="Get the app from Play Store" />
      </a>
    </Container>
  </div>
);

export default CTA;
