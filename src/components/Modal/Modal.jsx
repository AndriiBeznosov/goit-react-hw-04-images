import { Overlay, ModalContainer } from './Modal.styled';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendlerKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendlerKeydown);
  }

  hendlerKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { webformatURL, tags } = this.props.item;
    return createPortal(
      <Overlay onClick={this.hendleBackdropClick}>
        <ModalContainer>
          <img src={webformatURL} alt={tags} />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
