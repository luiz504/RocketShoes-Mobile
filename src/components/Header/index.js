import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/color';
import {
  Logo,
  Container,
  CartContainer,
  ItemCount,
  Wrapper,
  LogoContainer,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={() => navigation.navigate('Home')}>
          <Logo resizeMode="cover" />
        </LogoContainer>
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color={colors.whiteBase} size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});
export default connect(
  mapStateToProps,
  null
)(Header);

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cartSize: PropTypes.number.isRequired,
};
