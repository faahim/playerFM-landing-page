import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Testimonials.module.scss'

class Testimonials extends Component {
  constructor({ testimonials }) {
    super()

    this.state = {
      testimonials,
      activeItem: testimonials.length - 1,
    }

    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
  }

  nextCard() {
    this.setState(prevState => ({
      activeItem: !(prevState.activeItem - 1 < 0)
        ? prevState.activeItem - 1
        : this.state.testimonials.length - 1,
    }))
  }

  previousCard() {
    this.setState(prevState => ({
      activeItem: !(
        prevState.activeItem + 1 >
        this.state.testimonials.length - 1
      )
        ? prevState.activeItem + 1
        : 0,
    }))
  }

  render() {
    const activeStyle = {
      transform: `perspective(300px) translate3d(-70px, 30px, 60px) rotate3d(5, -7, 2, 55deg)`,
      opacity: '0',
      visibility: 'hidden',
    }
    const { testimonials, activeItem } = this.state

    return (
      <div
        className={styles.testimonialWrapper}
        style={{ marginTop: `${testimonials.length * 12}px` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            className={styles.testimonialItem}
            style={Object.assign(
              {},
              {
                zIndex: `${index + 1}`,
                transform: `translateY(-${
                  activeItem === index
                    ? 132
                    : 120 - (activeItem - index - 1) * 12
                }px) scale(${
                  activeItem === index ? 1 : 1 - (activeItem - index) * 0.05
                })`,
              },
              index > activeItem ? activeStyle : null,
            )}
          >
            <p>{testimonial.message}</p>
            <p>-- {testimonial.vendor}</p>
          </div>
        ))}
        <div className={styles.btnContainer}>
          <button type="button" onClick={this.previousCard}>
            ◀
          </button>
          <button type="button" onClick={this.nextCard}>
            ▶
          </button>
        </div>
      </div>
    )
  }
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Testimonials
