import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal.jsx';
import { Image, Item } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const toggleModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  return (
    <Item>
      <Image src={item.webformatURL} alt={item.tags} onClick={openModal} />
      {isOpenModal && <Modal item={item} onClose={toggleModal} />}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
