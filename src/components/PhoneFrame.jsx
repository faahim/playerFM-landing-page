import React, { Component } from 'react';
import styles from './PhoneFrame.module.scss';

class PhoneFrame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenIndex: 0,
    };

    this.slideScreens = this.slideScreens.bind(this);
  }

  componentDidMount() {
    this.screenInterval = setInterval(this.slideScreens, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.screenInterval);
  }

  slideScreens() {
    if (this.state.screenIndex !== 3) {
      this.setState(prevState => ({
        screenIndex: prevState.screenIndex + 1,
      }));
    } else {
      this.setState({
        screenIndex: 0,
      });
    }
  }

  render() {
    return (
      <div className={styles.phoneWrapper}>
        <div
          className={styles.screens}
          style={{
            backgroundPosition: `-${this.state.screenIndex * 275}px 0px`,
          }}
        />
        <img className={styles.phoneFrame} src="imgs/phone-frame.png" alt="" />
      </div>
    );
  }
}

export default PhoneFrame;
