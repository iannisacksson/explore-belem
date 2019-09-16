import React from 'react';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import { Container, LImage } from './styles';

export default function Logo({ style, ...rest }) {
  return (
    <Container style={style}>
      <LImage {...rest} source={logo} />
    </Container>
  );
}

Logo.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Logo.defaultProps = {
  style: {},
};
