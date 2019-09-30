import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/color';
import {
  Logo,
  Container,
  CartContainer,
  ItemCount,
  Wrapper,
  LogoContainer,
} from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={() => navigation.navigate('Home')}>
          <Logo resizeMode="cover" />
        </LogoContainer>
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart" color={colors.whiteBase} size={24} />
          <ItemCount>3</ItemCount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}
