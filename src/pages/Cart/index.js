import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import * as CartActions from '../../store/modules/cart/action';
import { formatPrice } from '../../util/format';

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
  EmptyContainer,
  EmptyContainerText,
} from './styles';

function Cart({ cartProducts, RmFromCart, UpdateAmountRequest, total }) {
  function increment(product) {
    UpdateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    UpdateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cartProducts.length ? (
        <>
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
                  <ProductDelete onPress={() => RmFromCart(item.id)}>
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.purple}
                    />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => decrement(item)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.purple}
                    />
                  </ProductControlButton>
                  <Productamount value={String(item.amount)} />
                  <ProductControlButton onPress={() => increment(item)}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.purple}
                    />
                  </ProductControlButton>
                  <ProductSubTotal>{item.subtotal}</ProductSubTotal>
                </ProductControls>
              </Product>
            )}
          />
          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <Checkout>
              <CheckoutText>Checkout</CheckoutText>
            </Checkout>
          </TotalContainer>
        </>
      ) : (
        <EmptyContainer>
          <Icon
            name="remove-shopping-cart"
            size={64}
            color={colors.whiteContrast}
          />
          <EmptyContainerText>Your Shopping Cart is empty.</EmptyContainerText>
        </EmptyContainer>
      )}
    </Container>
  );
}
const mapStateToProps = state => ({
  cartProducts: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

Cart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  RmFromCart: PropTypes.func.isRequired,
  UpdateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};
