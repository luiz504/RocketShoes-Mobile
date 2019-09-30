import React from 'react';
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

export default function Cart() {
  return (
    <Container>
      <ProductsTable>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/crocs-classic-clog/06/FDT-0204-006/FDT-0204-006_zoom1.jpg?ims=120x',
              }}
            />
            <ProductDetails>
              <ProductTitle>Crocs Classic Clog</ProductTitle>
              <ProductPrice>R$139.00</ProductPrice>
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
              <Icon name="add-circle-outline" size={20} color={colors.purple} />
            </ProductControlButton>
            <ProductSubTotal>R$ 1250.00</ProductSubTotal>
          </ProductControls>
        </Product>
      </ProductsTable>
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
