import React, { useEffect, useRef } from 'react';

const Map = props => {
  const currentMapRef = useRef(null);
  const HRef = useRef(null);
  const map = useRef(null);

  const mapStyle = {
    position: 'fixed',
    width: '100%',
    height: '100vh'
  };

  const addPolygon = () => {
    const H = HRef.current;
    const hMap = map.current;
    const lineString = new H.geo.LineString(
      [52, 13, 100, 48, 2, 100, 48, 16, 100, 52, 16, 100],
    );

    // Add polygon to map
    hMap.addObject(
      new H.map.Polygon(lineString, {
        style: {
          fillColor: '#b3ffff',
          strokeColor: '#bbb',
          lineWidth: 4
        }
      })
    );
  };

  // re-renders map if currentMapRef changes
  useEffect(() => {
    if (!currentMapRef.current) return;

    HRef.current = window.H;
    console.log(HRef.current);
    const H = HRef.current;

    const platform = new H.service.Platform({
      apikey: 'B5nrcCmj3Oa1kwgLB1SHUEqg_6HuSx5BTv51MjDoQJM'
    });
    const defaultLayers = platform.createDefaultLayers();

    map.current = new H.Map(currentMapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });
    const hMap = map.current;

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    // Cleanup to avoid memory leaks
    return () => {
      console.log('[Map] unmounting');
      hMap.dispose();
    };
  }, [currentMapRef]);

  // Hook to toggle polygon without re-rendering entire map
  useEffect(() => {
    console.log('[Updating polygon] => ', props.showPolygon);
    if (props.showPolygon) {
      addPolygon()
    }
  }, [props.showPolygon]);

  return (
    <div className="map" ref={currentMapRef} style={mapStyle} />
  );
};

export default Map;
