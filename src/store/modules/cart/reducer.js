export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADDREQUEST':
      return [...state, action.product];
    default:
      return state;
  }
}
