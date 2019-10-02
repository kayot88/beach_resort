import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RoomContext } from '../components/context';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Banner from '../components/Banner';
import Loading from '../components/Loading';
import defaultBcg from '../images/defaultBcg.jpeg';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultImg: '../images/defaultBcg.jpeg'
  };
  static contextType = RoomContext;
  componentDidMount() {}
  render() {
    const { loading, rooms, getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="errors">
          <h3>no rooms could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
      id
    } = room;
    const [mainImg, ...defaultBcg] = images;
    console.log(extras);
    return (
      <>
        <StyledHero img={mainImg || defaultBcg} hero="roomsHero">
          <Banner title={name} className="services-header">
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-img">
            {defaultBcg.map((image, i) => (
              <img key={i} src={image}></img>
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: ${size}</h6>
              <h6>
                max capacity:
                {capacity > 1 ? ` ${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowed' : 'not pets allowed'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className='extras'>
              {extras.map((extra, i) => (
                <li key={i}>- {extra}</li>
              ))}
            </ul>
        </section>
      </>
    );
  }
}

// SingleRoom.propTypes = {};

export default SingleRoom;
