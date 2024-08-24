import React, { useContext } from 'react'
import Sidebar from "./compoments/Sidebar";
import Player from './compoments/Player';
import Display from './compoments/Display';
import { PlayerContext } from './context/PlayerContext';
const App = () => {

  const {audioRef, track} = useContext(PlayerContext)
  
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
};

export default App;
