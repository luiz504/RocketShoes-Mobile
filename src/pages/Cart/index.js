import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/color';

import {
  Container,
  ProductsTable,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  Productamount,
  ProductSubTotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Checkout,
  CheckoutText,
} from './styles';

function Cart({ cartProducts }) {
  console.tron.warn(cartProducts);
  return (
    <Container>
      <ProductsTable
        data={cartProducts}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductInfo>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductDetails>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
              </ProductDetails>
              <ProductDelete>
                <Icon name="delete-forever" size={24} color={colors.purple} />
              </ProductDelete>
            </ProductInfo>
            <ProductControls>
              <ProductControlButton>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color={colors.purple}
                />
              </ProductControlButton>
              <Productamount value={String(505)} />
              <ProductControlButton>
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color={colors.purple}
                />
              </ProductControlButton>
              <ProductSubTotal>R$ 1250.00</ProductSubTotal>
            </ProductControls>
          </Product>
        )}
      />
      <TotalContainer>
        <TotalText>Total</TotalText>
        <TotalAmount>R$ 1250.00</TotalAmount>
        <Checkout>
          <CheckoutText>Checkout</CheckoutText>
        </Checkout>
      </TotalContainer>
    </Container>
  );
}
const mapStateToProps = state => ({
  cartProducts: state.cart,
});

export default connect(
  mapStateToProps,
  null
)(Cart);
