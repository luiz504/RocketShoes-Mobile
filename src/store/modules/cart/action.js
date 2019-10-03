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
    type: '@cart/RMREQUEST',
    id,
  };
}

export function UpdateAmount(id, amount) {
  return {
    type: '@cart/UPDATE',
    id,
    amount,
  };
}
