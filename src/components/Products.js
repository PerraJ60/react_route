import React, { useCallback, useContext, useMemo, useState } from 'react';
import { GlobalContext } from './GlobalState';
import { ConfigContext } from '../App';
import ProductDetail from './ProductDetail';
import Search from './Search';

const Products = () => {
    
const context = useContext(ConfigContext);
const [showTools, setShowTools] = useState(true);
const [showAccessories, setShowAccessories] = useState(true);

const {
    isLoading,
    productList,
    toggleMarkProduct,
    hasErrored,
    error,
  } = useContext(GlobalContext);

  const handleShowTools = () => {
    setShowTools(!showTools);
  };
  const handleShowAccessories = () => {
    setShowAccessories(!showAccessories);
  };

  const itemsCartHandler = useCallback((e, prodRec) => {
      e.preventDefault();
      toggleMarkProduct(prodRec);
    },[]);

  const newProductList = useMemo(
    () =>
      productList
        .filter(
          ({ type }) =>
            (showTools && type === 'tool') || (showAccessories && type === 'accessories'),
        )
        .sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }),
    [showTools, showAccessories, productList],
  );

  const productListFiltered = isLoading ? [] : newProductList;
  if (hasErrored === true) return <div>Error: {error.message} (Probably json-server not running...)</div>;
  if (isLoading) return <div>Loading...</div>;
  return (

    <div className='container'>
      <div>
        <Search requestSearch= {console.log}/>
      </div>
        <div className='btn-toolbar  margintopbottom5 checkbox-bigger'>
          {context.showCategories === false ? null : (
            <div className='hide'>
              <div className='form-check-inline'>
                <label className='form-check-label'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    onChange={handleShowTools}
                    checked={showTools}
                  />
                  Tools
                </label>
              </div>
              <div className='form-check-inline'>
                <label className='form-check-label'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    onChange={handleShowAccessories}
                    checked={showAccessories}
                  />
                  Accessories
                </label>
              </div>
            </div>
		  )}
        </div>
        <div className='row'>
          <div className='card-deck'>
            {productListFiltered.map((prodRec) => {
              return (
                <ProductDetail
                  key={prodRec.id}
                  prodRec={prodRec}
                  onItemsCartHandler={itemsCartHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
  )}
export default Products;