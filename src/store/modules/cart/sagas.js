import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

import { AddToCartSucess, UpdateAmount } from './action';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    console.tron.warn('stock djf');
    return;
  }

  if (productExists) {
    yield put(UpdateAmount(id, amount));
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

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
