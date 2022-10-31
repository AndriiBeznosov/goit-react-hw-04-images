import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppContainer } from './App.styled';

export const App = () => {
  const [name, setName] = useState('');

  const handlerNameChange = name => {
    setName(name);
  };

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
      <Searchbar handlerNameChange={handlerNameChange} />
      <ImageGallery nextName={name} />
    </AppContainer>
  );
};
