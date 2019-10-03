export function AddToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}
export function AddToCartSucess(product) {
  return {
    type: '@cart/ADD_SUCESS',
    product,
  };
}

export function RmFromCart(id) {
  return {
    type: '@cart/RM_REQUEST',
    id,
  };
}

export function UpdateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}
export function UpdateAmountSucess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCESS',
    id,
    amount,
  };
}
