import React from 'react'
import Sidebar from "./compoments/Sidebar";
import Player from './compoments/Player';
import Display from './compoments/Display';
const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
    </div>
  );
};

export default App;
