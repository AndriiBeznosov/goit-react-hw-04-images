import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({ visible }) => {
  return (
    <ThreeDots
      height="30"
      width="100"
      radius="9"
      color="#303f9f"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
      wrapperClassName=""
      visible={visible}
    />
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};
