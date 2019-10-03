import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/action';

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

class Home extends Component {
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

  handleAddToCart = id => {
    const { AddToCartRequest } = this.props;

    AddToCartRequest(id);
  };

  renderProducts = ({ item }) => {
    const { amount } = this.props;
    return (
      <Product key={item.id}>
        <ProducImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <PoductPrice>{item.priceFormatted}</PoductPrice>
        <AddButtonContainer onPress={() => this.handleAddToCart(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" size={20} color={colors.whiteBase} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText> Add to cart</AddButtonText>
        </AddButtonContainer>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    // console.tron.log(this.props);
    return (
      <Container>
        <List
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProducts}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
