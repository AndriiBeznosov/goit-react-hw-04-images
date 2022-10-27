import axios from 'axios';
import PropTypes from 'prop-types';

export const getApi = async (nextStatePage, nextName) => {
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

  const resolve = await axios(BASE_URL, { params });

  return resolve.data;
};

getApi.propTypes = {
  nextStatePage: PropTypes.number.isRequired,
  nextName: PropTypes.string.isRequired,
};
