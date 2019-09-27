import React from 'react';

const Banner = ({children, title, subtitle}) => {
  return (
    <div className="banner">
      <h1 className="banner-title">{title}</h1>
      <p className="banner-subtitle">{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;