import productsReducer from './productsReducer';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

function useProductsDataManager() {
    const [
      { isLoading, productList, itemsInCartCount, hasErrored, error },
      dispatch,
    ] = useReducer(productsReducer, {
      isLoading: true,
      productList: [],
      itemsInCartCount: 0,
      hasErrored: false,
      error: null
    });

    function incrementItemsInCartCount() {
        dispatch({ type: 'incrementItemsInCartCount' });
    }
    function decrementItemsInCartCount() {
        dispatch({ type: 'decrementItemsInCartCount' });
    }

    function toggleMarkProduct(prodRec) {
        const updateData = async function () {
          try{
              axios.put(`http://localhost:4000/products/${prodRec.id}`, prodRec).then(res => {
                //console.log(res);
                console.log(res.data);
          })
          }catch (e) {
            dispatch({ type: 'errored', error: e });
          }
          prodRec.marked === true
            ? dispatch({ type: 'unmark', id: prodRec.id })
            : dispatch({ type: 'mark', id: prodRec.id });
          };
          updateData();
          
      }
      useEffect(() => {
        const fetchData = async function () {
          try {
            let result = await axios.get('http://localhost:4000/products');
            dispatch({ type: 'setProductList', data: result.data });
          } catch (e) {
            dispatch({ type: 'errored', error: e });
          }
        };
        fetchData();
    
        return () => {
          console.log('cleanup');
        };
      }, []);
    
      return {
        isLoading,
        productList,
        itemsInCartCount,
        incrementItemsInCartCount,
        decrementItemsInCartCount,
        toggleMarkProduct,
        hasErrored,
        error,
      };
}
export default useProductsDataManager;