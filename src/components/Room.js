import React from 'react';
const Room = ({ room }) => {
  console.log(room);
  return (
    <>
      <div>{room.name}</div>
      <div>{room.images.map(image => {
        return(
          <img src={image}/>
        )
      })}</div>
    </>
  );
};

export default Room;
