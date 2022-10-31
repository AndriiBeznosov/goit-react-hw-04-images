import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ item, onClose }) => {
  const hendleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const hendlerKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', hendlerKeydown);
    return () => {
      window.removeEventListener('keydown', hendlerKeydown);
    };
  });

  return createPortal(
    <Overlay onClick={hendleBackdropClick}>
      <ModalContainer>
        <img src={item.webformatURL} alt={item.tags} />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
