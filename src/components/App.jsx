import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { AppContainer } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    name: '',
  };
  handlerNameChange = name => {
    this.setState({ name });
  };

  render() {
    return (
      <AppContainer>
        <ToastContainer />
        <Searchbar handlerNameChange={this.handlerNameChange} />
        <ImageGallery nextName={this.state.name} />
      </AppContainer>
    );
  }
}
