import React from 'react';
import Room from './Room';
import { withRoomConsumer } from './context';

const RoomsList = ({ context }) => {
  const { sortedRooms, loading } = context;
  // console.log(rooms);
  if (sortedRooms.length > 0) {
    return (
      <section className="roomList">
        <div className="roomList-center">
          {sortedRooms.map(room => (
            <Room key={room.id} room={room} className="room" />
          ))}
        </div>
      </section>
    );
  }
  return <div className="empty-search">No room found</div>;
};

export default withRoomConsumer(RoomsList);
