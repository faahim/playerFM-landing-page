import React from 'react';
import Feature from './Feature';
import FeatureCrossplatformSVG from './FeatureCrossplatformSVG';
import FeatureRecommendationSVG from './FeatureRecommendationSVG';
import FeatureFreeSVG from './FeatureFreeSVG';
import styles from './FeatureSection.module.scss';

const FeatureSection = () => {
  // Store of features information.
  // New feature can be simply added to this array to add to page
  const featuresData = [
    {
      featureTtile: 'One account, many interfaces',
      featureDetails:
        'Manage and play your podcasts on both web and phone. Fling to your TV with Chromecast, launch shows from your wrist with Android Wear, and soon you can enjoy your car ride with Android Auto (under review). iPhone will be launched later too.',
      featureSVG: <FeatureCrossplatformSVG />,
    },
    {
      featureTtile: 'Fresh recommendations',
      featureDetails:
        'Player FM has built a curated catalogue with over 500 niche topics to make sure you always have something to play. Follow Downton Abbey, Learning Chinese, or Pop Culture and receive fresh recommendations every day.',
      featureSVG: <FeatureRecommendationSVG />,
    },
    {
      featureTtile: 'Free forever',
      featureDetails:
        "The app costs nothing to install, is free of ads, and uses minimal permissions. Use it as long as you want and you can upgrade to our Gold plan, launching later this year, for extra goodies including sync of play position and history. (Trial mode is already available until Gold plan launches.) You'll never have to worry about paying for upgrades or separate versions for new devices.",
      featureSVG: <FeatureFreeSVG />,
    },
  ];

  return (
    <section id={styles.features}>
      {featuresData.map(feature => (
        <Feature
          featureTtile={feature.featureTtile}
          featureDetails={feature.featureDetails}
          featureSVG={feature.featureSVG}
        />
      ))}
    </section>
  );
};

export default FeatureSection;
