const productsReducer = (state, action) => {
    function updateCart(markedValue) {
      return state.productList.map((item, index) => {
        if (item.id === action.id) {
          return { ...item, marked: markedValue };
        }
        return item;
      });
    }
    switch (action.type) {
      case 'setProductList': {
        return {
          ...state,
          productList: action.data,
          isLoading: false,
          hasErrored: false,
        };
      }
      case 'mark': {
        return { ...state, productList: updateCart(true) };
      }
      case 'unmark': {
        
        return { ...state, productList: updateCart(false) };
      }
      case 'incrementItemsInCartCount': {
        //To be implemented.
        return { ...state, itemsInCartCount: state.itemsInCartCount + 1 };
      }
      case 'decrementItemsInCartCount': {
        //To be implemented.
        return { ...state, itemsInCartCount: state.itemsInCartCount - 1 };
      }
      case 'errored': {
        return { ...state, hasErrored: true, error: action.error };
      }
      default:
        return state;
    }
  };
  export default productsReducer;