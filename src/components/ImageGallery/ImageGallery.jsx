import { getApi } from '../../utils/Api';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from '../Button/Button';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ nextName }) => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [listImage, setListImage] = useState(null);
  const [visibleBtnLoading, setVisibleBtnLoading] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const getPage = () => {
    setPage(page => page + 1);
  };
  //перевірка для показу кнопки завантажити ще
  const onVisibleBtnLoading = hits => {
    if (hits.length / 12 === 1) {
      setVisibleBtnLoading(true);
      toast.success('✅ Запит пройшов успішно');
    } else if (hits.length === 0) {
      setVisibleBtnLoading(false);
      toast.warn(
        '🤔 На жаль по даному запиту нічого не знайдено. Спробуйте змінити запит!📝'
      );
    } else {
      setVisibleBtnLoading(false);
      toast.info('Це максимальна кількість фото по данній темі!!!✅');
    }
  };
  // запит при самбміті форми пошуку
  useEffect(() => {
    if (nextName === '' || name === nextName) {
      return;
    }
    setPage(1);
    setListImage([]);
    getApi(1, nextName, setIsLoader).then(res => {
      setListImage(res.hits);
      onVisibleBtnLoading(res.hits);
    });
    setName(nextName);
  }, [name, nextName]);

  //запит при довантажені фото при натисканні кнопки завантажити ще
  useEffect(() => {
    if (page === 1 || name !== nextName) {
      return;
    }
    try {
      getApi(page, nextName, setIsLoader).then(res => {
        setListImage(prevState => [...prevState, ...res.hits]);
        onVisibleBtnLoading(res.hits);
      });
    } catch (error) {
      setVisibleBtnLoading(false);
      toast.warn(
        '🤔 На жаль по даному запиту нічого не знайдено. Спробуйте змінити запит!📝'
      );
    }
  }, [name, nextName, page]);

  return (
    <>
      <List>
        {listImage &&
          listImage.map(item => <ImageGalleryItem key={item.id} item={item} />)}
      </List>
      <Loader visible={isLoader} />
      {visibleBtnLoading && !isLoader && <Button onClick={getPage} />}
    </>
  );
};

ImageGallery.propTypes = {
  nextName: PropTypes.string,
};
