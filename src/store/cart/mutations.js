export default {
  addItemToCart(state, payload) {
    const itemData = payload.item;
    const itemInCartIndex = state.cart.findIndex(
      (cartItem) => cartItem.id === itemData.id,
    );

    if (itemInCartIndex >= 0) {
      state.cart[itemInCartIndex].qty += payload.qty;
    } else {
      const newItem = {
        id: itemData.id,
        image: itemData.image,
        category: itemData.category,
        name: itemData.name,
        price: itemData.price,
        qty: 1,
      };
      state.cart.push(newItem);
    }
    state.qty += payload.qty;
    state.total += itemData.price * payload.qty;
  },
};
