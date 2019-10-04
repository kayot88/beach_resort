import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { withRoomConsumer } from './context';
const RoomsContainer = ({context}) => {
  if (context) {
    const { loading, sortedRooms, rooms } = context;
    if (!loading) {
      return (
        <>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={rooms} />
        </>
      );
    }
    return <Loading />;
  }
};

export default withRoomConsumer(RoomsContainer);
