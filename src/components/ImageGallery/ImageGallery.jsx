import React, { Component } from 'react';
import ImageGalleryItem from './components/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return (
      <div>
        <ul>
          <ImageGalleryItem />
        </ul>
      </div>
    );
  }
}
