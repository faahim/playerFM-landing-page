import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import styles from './Tagline.module.scss';

const prefixes = [
  style => <animated.p style={{ ...style }}>Get motivated</animated.p>,
  style => <animated.p style={{ ...style }}>Have a laugh</animated.p>,
  style => <animated.p style={{ ...style }}>Follow the news</animated.p>,
  style => <animated.p style={{ ...style }}>Improve your skills</animated.p>,
  style => <animated.p style={{ ...style }}>Learn a language</animated.p>,
  style => <animated.p style={{ ...style }}>Read a book</animated.p>,
  style => <animated.p style={{ ...style }}>Recap a movie</animated.p>,
  style => <animated.p style={{ ...style }}>Lift your spirits</animated.p>,
  style => <animated.p style={{ ...style }}>Discover foreign lands</animated.p>,
  style => <animated.p style={{ ...style }}>Track industry trends</animated.p>,
];

const suffixes = [
  style => <animated.p style={{ ...style }}>ride the train</animated.p>,
  style => <animated.p style={{ ...style }}>cook a meal</animated.p>,
  style => <animated.p style={{ ...style }}>wait in line</animated.p>,
  style => <animated.p style={{ ...style }}>drive to work</animated.p>,
  style => <animated.p style={{ ...style }}>workout</animated.p>,
  style => <animated.p style={{ ...style }}>clean the house</animated.p>,
  style => <animated.p style={{ ...style }}>go for a run</animated.p>,
  style => <animated.p style={{ ...style }}>walk the dog</animated.p>,
  style => <animated.p style={{ ...style }}>play a game</animated.p>,
];

class Taglines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prefix: 0,
      suffix: 0,
    };
  }

  componentDidMount() {
    // Find the current tagline items and changes it to next one if not current one is the last one
    const selectRandomTag = (tagItems, state) => {
      if (this.state[state] !== tagItems.length - 1) {
        this.setState({
          [state]: this.state[state] + 1,
        });
      } else {
        this.setState({
          [state]: 0,
        });
      }
    };

    // Start the interval for prefix items
    this.prefixInterval = setInterval(
      selectRandomTag.bind(null, prefixes, 'prefix'),
      4000,
    );

    // Start the interval for suffix items with some delay
    setTimeout(() => {
      this.suffixInterval = setInterval(
        selectRandomTag.bind(null, suffixes, 'suffix'),
        4000,
      );
    }, 1500);
  }

  componentWillUnmount() {
    // Clears the interval set in componentWillMount
    clearInterval(this.prefixInterval);
    clearInterval(this.suffixInterval);
  }

  render() {
    const { prefix, suffix } = this.state;
    return (
      <div className={styles.tagline}>
        <div className={styles.prefixes}>
          <Transition
            native
            from={{ opacity: 0, transform: 'translate3d(20px,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(-20%,0,0)' }}
          >
            {prefixes[prefix]}
          </Transition>
        </div>
        <p>while you</p>
        <div className={styles.suffixes}>
          <Transition
            native
            from={{ opacity: 0, transform: 'translate3d(-20px,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(20%,0,0)' }}
          >
            {suffixes[suffix]}
          </Transition>
        </div>
      </div>
    );
  }
}

export default Taglines;
