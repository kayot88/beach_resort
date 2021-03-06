import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';
const Room = ({ room }) => {
  // console.log(room);
  const { name, slug, images, price, maxSize } = room;
  // console.log(maxSize);
  return (
    <>
      <article className="room">
        <div className="image-container">
          <img src={images[0] || defaultImg} alt="single room"></img>
          <div className="room-price-top">
            <h6>{price}</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${slug}`} className="room-link btn-primary">
            Featured
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    </>
  );
};
Room.propTypes = {
  room: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};

export default Room;
