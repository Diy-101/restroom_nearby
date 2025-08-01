import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function ToiletMap() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) {
      return;
    }
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${
        import.meta.env.VITE_MAPTILER_API_KEY
      }`,
      center: [37.6173, 55.7558], // Москва
      zoom: 12,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    new maplibregl.Marker({ color: "#1d9bf0" })
      .setLngLat([37.6173, 55.7558])
      .setPopup(new maplibregl.Popup().setText("Общественный туалет"))
      .addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className="map-container" />;
}
