import React, { useState } from 'react';
import './App.css';

import Map from './components/Map/Map';

function App() {
  const [showSidebar, toggleSidebarHandler] = useState(true);

  return (
    <div className="App">
      <main className="App-main">
        <Map />
        {/* Sidebar */}
      </main>
    </div>
  );
}

export default App;
