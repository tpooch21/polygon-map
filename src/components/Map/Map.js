import React, { useLayoutEffect, useRef } from 'react';

const Map = props => {
  const mapRef = useRef(null);

  const mapStyle = {
    position: 'fixed',
    width: '100%',
    height: '100vh'
  };

  useLayoutEffect(() => {
    if (!mapRef.current) return;

    const H = window.H;
    const platform = new H.service.Platform({
      apikey: 'B5nrcCmj3Oa1kwgLB1SHUEqg_6HuSx5BTv51MjDoQJM'
    });
    const defaultLayers = platform.createDefaultLayers();

    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);
    // Cleanup to avoid memory leaks
    return () => {
      hMap.dispose();
    };
  }, [mapRef]);

  return (
    <div className="map" ref={mapRef} style={mapStyle} />
  );
};

export default Map;
