import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import styles from './Feature.module.scss';

const Feature = ({ featureSVG, featureTtile, featureDetails }) => (
  <div className={styles.featureItem}>
    {featureSVG}
    <Container>
      <div className={styles.featureDetails}>
        <h3>{featureTtile}</h3>
        <p>{featureDetails}</p>
        <a
          href="https://play.google.com/store/apps/details?id=fm.player"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get it Now!
        </a>
      </div>
    </Container>
  </div>
);

Feature.propTypes = {
  featureTtile: PropTypes.string.isRequired,
  featureDetails: PropTypes.string.isRequired,
  featureSVG: PropTypes.element.isRequired,
};

export default Feature;
