import React, { Component } from 'react';
import items from '../data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breackfast: false,
    pets: false
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured);
    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));
    console.log(this.state.pets);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
    // console.log(this.state.pets);
  }
  formatData = items => {
    const tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => {
      return room.slug === slug;
    });
    return room;
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  checkClick = (pets) => {
    // console.log(pets);
    // console.log(this.state.pets);
    this.setState({
      pets: !this.state.pets
    })
    // console.log(this.state.pets);
  }
  
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breackfast,
      pets
    } = this.state;
    // console.log(this.state.breackfast);
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

      tempRooms = tempRooms.filter(room => {
        return room.price <= price;
      });


      tempRooms = tempRooms.filter(room => {
        return room.size >= minSize && room.size <= maxSize;
      });

    if (breackfast) {
      tempRooms = tempRooms.filter(room => {
        return room.breakfast === true;
      });
    }
    if (pets) {
      // console.log(pets);
      tempRooms = tempRooms.filter(room => {
        return room.pets === true;
      });
    }
    this.setState({
      sortedRooms: tempRooms
    });
    // console.log(this.state.pets);
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          // checkClick: this.checkClick
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => {
          return <Component {...props} context={value} />;
        }}
      </RoomConsumer>
    );
  };
}

export { RoomConsumer, RoomContext, RoomProvider };
