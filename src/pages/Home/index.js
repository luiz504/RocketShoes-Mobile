import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  Product,
  ProducImage,
  ProductTitle,
  PoductPrice,
  AddButtonContainer,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';
import colors from '../../styles/color';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  render() {
    const { products } = this.state;
    console.tron.log(products);
    return (
      <Container>
        <List
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product key={item.id}>
              <ProducImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductTitle>{item.title}</ProductTitle>
              <PoductPrice>{item.priceFormatted}</PoductPrice>
              <AddButtonContainer>
                <ProductAmount>
                  <Icon
                    name="add-shopping-cart"
                    size={20}
                    color={colors.whiteBase}
                  />
                  <ProductAmountText>300</ProductAmountText>
                </ProductAmount>
                <AddButtonText> Add to cart</AddButtonText>
              </AddButtonContainer>
            </Product>
          )}
        />
      </Container>
    );
  }
}
