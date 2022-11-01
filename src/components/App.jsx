import React, { useState } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ContainerToast } from './ToastContainer/ToastContainer';
import { AppContainer } from './App.styled';

export const App = () => {
  const [name, setName] = useState('');

  const handlerNameChange = name => {
    setName(name);
  };

  return (
    <AppContainer>
      <ContainerToast />
      <Searchbar handlerNameChange={handlerNameChange} />
      <ImageGallery nextName={name} />
    </AppContainer>
  );
};
