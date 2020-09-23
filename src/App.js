import React, { useState } from 'react';
import './App.css';

import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [showSidebar, toggleSidebarHandler] = useState(true);
  const [displayPolygon, togglePolygonHandler] = useState(true);

  return (
    <div className="App">
      <main className="App-main">
        <Map showPolygon={displayPolygon}/>
        <Sidebar
          togglePolygon={() => togglePolygonHandler(!displayPolygon)}
          toggleSidebar={() => toggleSidebarHandler(!showSidebar)}/>
      </main>
    </div>
  );
}

export default App;
