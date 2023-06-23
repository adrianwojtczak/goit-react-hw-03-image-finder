import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  handleClick = () => {
    const { onclick, image } = this.props;
    onclick(image);
  };

  render() {
    const { image } = this.props;

    return (
      <li className={styles['gallery-item']}>
        <img
          src={image.webformatURL}
          alt=""
          className={styles['gallery-item-image']}
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
