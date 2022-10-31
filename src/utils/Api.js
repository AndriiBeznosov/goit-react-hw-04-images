import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export const getApi = async (nextStatePage, nextName, setIsLoader) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '25684992-ec31d25fc66c7364d0851b638',
    q: `${nextName}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${nextStatePage}`,
    per_page: '12',
  };

  try {
    setIsLoader(true);
    const resolve = await axios(BASE_URL, { params });
    return resolve.data;
  } catch (error) {
    console.log(error);
    toast.error(' Помилка від серверу. Спробуйте перезавантажити сторінку!', {
      autoClose: 5000,
    });
  } finally {
    setIsLoader(false);
  }
};

getApi.propTypes = {
  nextStatePage: PropTypes.number.isRequired,
  nextName: PropTypes.string.isRequired,
  setIsLoader: PropTypes.func.isRequired,
};
