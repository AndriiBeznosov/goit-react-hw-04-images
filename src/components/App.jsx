import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppContainer } from './App.styled';

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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Searchbar handlerNameChange={this.handlerNameChange} />
        <ImageGallery nextName={this.state.name} />
      </AppContainer>
    );
  }
}
