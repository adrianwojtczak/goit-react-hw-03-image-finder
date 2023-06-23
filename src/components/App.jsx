import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import '../index.css';

const API_KEY = '36109480-a7bba8644b808a178437f4df3';
const API_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    images: [],
  };

  handleSubmit = async query => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          key: API_KEY,
          q: query,
          per_page: 12,
        },
      });
      const images = response.data.hits;
      this.setState({ images });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
      </div>
    );
  }
}
