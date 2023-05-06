import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiHeart} from 'react-icons/fi';
import "./ProductDetail.scss"
import { useSelector,useDispatch } from "react-redux";
import { addtocart } from "../../redux/reducers/CartReducer";


const ProductDetail = () => {
  const [productData, setProductData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProductData(json));
  });

  const dispatch = useDispatch();
  const handleAddCart = () =>{
    dispatch(addtocart(productData))
  }


  return <div className="productdetail">
    <div className="productdetail__left">
        <img src={productData?.image} alt="" />
        <div className="productdetail__left__buttons">
            <button onClick={handleAddCart}>ADD TO CART</button>
            <button><FiHeart/> SHORTLIST</button>
        </div>
    </div>
    <div className="productdetail__right">
        <h4>{productData?.title}</h4>
        <div className="productdetail__right__price">
            <span>${productData?.price}</span>
            <span>MRP: ${productData?.price}</span>
        </div>
        <p>{productData?.description}</p>
    </div>
  </div>;
};

export default ProductDetail;
