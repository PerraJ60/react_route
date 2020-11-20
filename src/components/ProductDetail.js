import React, { useContext } from 'react';
import { CartContext } from './CartContext'; 

const ProductDetail = React.memo(({ prodRec, onItemsCartHandler }) => {
    const { id, name, image, qty, price } = prodRec;
  console.log(`ProductDetail:${id} ${name} ${image} ${qty}`);

  const { incrementItemsInCartCount } = useContext(CartContext);

  return (
    <div className='card col-4 cardmin'>
        <img
            className='card-img-top'
            src= {`/images/products/${id}.jpg`}
            alt=''
        />
      <div className='card-body'>
        <div className='card-title'>

          <span>
            <h6>{name}</h6><br/>
			      <h6>{price}</h6>
          </span><br/>
          <button 
                className={'cartbutton'} 
                onClick={(e) => {
                onItemsCartHandler(e, prodRec);
                incrementItemsInCartCount();
            }}>
            <em>Add to Cart</em>
          </button>
        </div>
         <span>{}</span>
      </div>
    </div>
  );
});

export default ProductDetail;