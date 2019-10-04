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
  // console.log(types);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfastalse,
    petsalse
  } = context;
  return (
    <section className="filter-container">
      <Title title="room search"></Title>
      <form action="" className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} onChange={handleChange}>
            {types}
          </select>
          <input name="maxPrice" onChange={handleChange}></input>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
