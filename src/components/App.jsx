import React, { Component } from 'react';

// import Searchbar from './Searchbar/Searchbar';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import '../index.css';

export class App extends Component {
  handleSubmit = query => {
    console.log('Submitted query:', query);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
      </div>
    );
  }
}
