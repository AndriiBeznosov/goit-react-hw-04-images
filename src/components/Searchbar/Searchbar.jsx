import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  Label,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ handlerNameChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearchQuery = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('🔴 Введіть, будь ласка, назву для запиту! 🛫');
      return;
    }
    handlerNameChange(searchQuery);
    setSearchQuery('');
  };
  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <Label>Search</Label>
          <FaSearch size={25} />
        </SearchFormButton>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChangeSearchQuery}
        />
      </SearchForm>
    </SearchbarContainer>
  );
};

Searchbar.propTypes = {
  handlerNameChange: PropTypes.func.isRequired,
};
