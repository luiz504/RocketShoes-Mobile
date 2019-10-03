import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

import { AddToCartSucess, UpdateAmountSucess } from './action';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Sry', 'The quantity exceeds the stock availability');
    return;
  }

  if (productExists) {
    yield put(UpdateAmountSucess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(AddToCartSucess(data));
  }
}
function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Sry', 'The quantity exceeds the stock availability');
    return;
  }

  yield put(UpdateAmountSucess(id, amount));
}
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
