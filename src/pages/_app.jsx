import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
}

App.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape({}),
};

App.defaultProps = {
  pageProps: {},
};
