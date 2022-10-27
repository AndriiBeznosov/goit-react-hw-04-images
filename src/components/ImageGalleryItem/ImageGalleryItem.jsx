import { Component } from 'react';
import Modal from 'components/Modal/Modal.jsx';
import { Image, Item } from './ImageGalleryItem.styled.js';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };
  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  //закрытие модалки по клику на бекдроп
  hendleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  toggleModal = () => {
    this.setState(({ isOpenModal }) => ({
      isOpenModal: !isOpenModal,
    }));
  };

  render() {
    const { webformatURL, tags } = this.props.item;
    return (
      <Item>
        <Image src={webformatURL} alt={tags} onClick={this.openModal} />
        {this.state.isOpenModal && (
          <Modal item={this.props.item} onClose={this.toggleModal} />
        )}
      </Item>
    );
  }
}
