import React, { useContext } from 'react';
import { RoomContext } from './context';
import Title from './Title';
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });
  // console.log(types);

  let {
    handleChange,
    checkClick,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breackfast,
    pets
  } = context;
  return (
    <section className="filter-container">
      <Title title="room search"></Title>
      <form action="" className="filter-form">
        {/* Select type */}
        <div className="form-group">
          <label htmlFor="type" className="form-group-label">
            room type
          </label>
          <select
            className="form-control"
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* Guest input */}
        <div className="form-group">
          <label htmlFor="capacity" className="form-group-label">
            Guests
          </label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
            {people}
          </select>
        </div>
        {/* Room price */}
        <div className="form-group">
          <label className="form-group-label" htmlFor="price">
            Room price${price}
          </label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* Size */}
        <div className="form-group">
          <label htmlFor="size" className="form-group-label">
            Room size
          </label>
          <div className="size-input">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="form-control size-input"
              // placeholder="min size"
            />
            <input
              placeholder="max size"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="form-control size-input"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <label htmlFor="breackfast" className="form-group-label">
              Breackfast
            </label>
            <input
              type="checkbox"
              name="breackfast"
              id="breackfast"
              checked={breackfast}
              onChange={handleChange}
            />
            <label htmlFor="pets" className="form-group-label">
              pets
            </label>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
              // onClick={checkClick}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
