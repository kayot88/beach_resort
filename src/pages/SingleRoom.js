import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../components/context';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Title from '../components/Title'
import Banner from '../components/Banner';
import Loading from '../components/Loading';

class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug
  };
  static contextType = RoomContext; 
  componentDidMount(){

  }
  render() {
    const { loading, rooms, getRoom } = this.context;
    const room = getRoom(this.state.slug);
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    console.log(room);
    if (room.length == 0) {
      return (
        <div className="errors">
          <h3>no rooms could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    console.log(room[0].name);
    return (
      <Hero hero="roomsHero">
        <Banner title={room[0].name}>
          <Link to='/rooms' className='btn-primary'>back to rooms</Link>
        </Banner>
      </Hero>
    );
  }
}

// SingleRoom.propTypes = {};

export default SingleRoom;
