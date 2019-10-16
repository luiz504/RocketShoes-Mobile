import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
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
  LoadingContainer,
  LoadingAnimation,
} from './styles';
import colors from '../../styles/color';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });

    this.setState({ loading: false });
  }

  // getProducts = async () => {

  // };

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
    const { products, loading } = this.state;

    return loading ? (
      <LoadingContainer>
        <LoadingAnimation
          isVisible
          size={50}
          type="ChasingDots"
          color={colors.purple}
        />
      </LoadingContainer>
    ) : (
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

Home.propTypes = {
  AddToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.objectOf(PropTypes.number).isRequired,
};
