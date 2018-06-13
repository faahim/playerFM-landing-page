import React from 'react'
import PropTypes from 'prop-types'
import styles from './Testimonials.module.scss'

const Testimonials = ({
  message,
  vendor,
  itemNumber,
  activeItem,
  itemAmount,
}) => {
  let activeStyle = {}
  if (itemNumber === activeItem) {
    activeStyle = { zIndex: '9999' }
  } else if (itemNumber > activeItem) {
    activeStyle = {
      transform: `perspective(300px) translate3d(-70px, 30px, 60px) rotate3d(5, -7, 2, 55deg)`,
      opacity: '0',
      visibility: 'hidden',
    }
  }

  return (
    <div
      className={styles.testimonialItem}
      style={Object.assign(
        {},
        {
          zIndex: `${itemNumber + 1}`,
          transform: `translateY(-${itemNumber *
            12}px) translateX(-${itemNumber * 0}px) scale(${1 -
            (itemAmount - itemNumber - 1) * 0.05})`,
        },
        activeStyle,
      )}
    >
      <p>{message}</p>
      <p>-- {vendor}</p>
    </div>
  )
}

Testimonials.propTypes = {
  message: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  itemNumber: PropTypes.number.isRequired,
  activeItem: PropTypes.number.isRequired,
  itemAmount: PropTypes.number.isRequired,
}

export default Testimonials
