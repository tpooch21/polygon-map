import React from 'react';

import classes from './Sidebar.module.css';

const Sidebar = props => {
  return (
    <div className={classes.Sidebar}>
        <h2>Highlight a Region on the Map</h2>
        <p>Use the toggle button below to show/hide a polygon covering the specified area</p>
        <button onClick={props.togglePolygon}>Toggle Polygon</button>
    </div>
  );
};

export default Sidebar;