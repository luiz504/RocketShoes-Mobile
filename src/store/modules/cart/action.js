export function AddToCart(product) {
  return {
    type: '@cart/ADDREQUEST',
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
