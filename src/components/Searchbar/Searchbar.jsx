import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  Label,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChangeSearchQuery = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('🔴 Введіть, будь ласка назву для запиту! 🛫', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.handlerNameChange(this.state.searchQuery);
    this.setState({ searchQuery: '' });
    e.target.reset();
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <Label>Search</Label>
            <FaSearch size={25} />
          </SearchFormButton>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeSearchQuery}
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}
