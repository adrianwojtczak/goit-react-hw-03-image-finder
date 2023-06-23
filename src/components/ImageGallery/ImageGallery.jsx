import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';

import styles from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  handleImageClick = () => {
    // Obsługa kliknięcia na obrazek
  };

  handleLoadMore = () => {
    // Obsługa ładowania kolejnej porcji obrazków
  };

  render() {
    const { images } = this.props;

    return (
      <div>
        <ul className={styles.gallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={this.handleImageClick}
            />
          ))}
          <Button onClick={this.handleLoadMore} />
        </ul>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  // handleImageClick: PropTypes.func.isRequired,
  // handleLoadMore: PropTypes.func.isRequired,
};
