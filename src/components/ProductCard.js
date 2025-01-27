import React from 'react';

const ProductCard = ({ title, price, category, image }) => {
  const capitalizeCategory = (category) => {
    return category
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="product-card">
      <img className="product-img" src={image} alt={title} />
      <p className="text-align-left" style={{color: "#4169E1", fontSize: "14px"}}>{capitalizeCategory(category)}</p>
      <p className="text-align-left" style={{fontSize: "18px"}}><b>{title}</b></p>
      <p style={{fontSize: "24px"}}><b>${price}</b></p>
    </div>
  );
};

export default ProductCard;
