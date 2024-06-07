import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

// Corrige problemas con los iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMarker = ({ position, onLocationSelect }) => {
  const map = useMapEvents({
    click(e) {
      onLocationSelect(e.latlng); // Llama a la función de selección de ubicación al hacer clic en el mapa
    },
  });

  // Centra el mapa en la posición del marcador
  useEffect(() => {
    if (position) {
      map.setView(position);
    }
  }, [map, position]);

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
};

const Location = ({ onLocationSelect, showPopup, onClose }) => {
  const [position, setPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [selectedByClick, setSelectedByClick] = useState(false); // Estado para rastrear si la ubicación fue seleccionada por clic

  // Obtener la geolocalización actual al cargar el componente
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition({ lat: latitude, lng: longitude });
          console.log("Geolocalización obtenida:", { lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error obteniendo la geolocalización:", error);
        }
      );
    }
  }, []);

  // Manejar la búsqueda de dirección
  const handleSearch = () => {
    if (!searchQuery.trim()) return; // No buscar si el input está vacío

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}&addressdetails=1`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setSearchResult({ lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) });
          setSelectedByClick(false); // Reiniciar el estado de selección por clic
          console.log("Resultado de búsqueda:", { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) });
        } else {
          alert('No se encontraron resultados para la búsqueda.');
        }
      });
  };

  // Manejar la búsqueda al presionar Enter
  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  // Manejar la aceptación de la ubicación seleccionada
  const handleAcceptClick = () => {
    const selectedPosition = selectedByClick ? position : searchResult; // Usar la ubicación del pin si fue seleccionada por clic

    if (!selectedPosition) {
      alert('Por favor, seleccione una ubicación antes de aceptar.');
      return;
    }

    console.log("Ubicación seleccionada:", selectedPosition);
    onLocationSelect(selectedPosition);
    onClose();
  };

  // Manejar la geolocalización actual
  const handleGeolocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { lat: latitude, lng: longitude };
          setPosition(newLocation);
          setSearchResult(newLocation); // Actualizar la posición de búsqueda a la geolocalización actual
          setSelectedByClick(false); // Reiniciar el estado de selección por clic
          console.log("Geolocalización clickeada:", newLocation);
        },
        (error) => {
          console.error("Error obteniendo la geolocalización:", error);
        }
      );
    }
  };

  // Actualizar la posición cuando cambia la búsqueda
  useEffect(() => {
    if (searchResult && !selectedByClick) { // Solo actualizar si no se seleccionó por clic en el mapa
      setPosition(searchResult);
    }
  }, [searchResult, selectedByClick]);

  if (!showPopup) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <form className='searchform d-flex align-items-center justify-content-center mb-2' onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className='searchInp'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleSearchEnter}
            placeholder="Buscar dirección"
          />
          <button type="button" className='searchbtn' onClick={handleSearch}>Buscar</button>
        </form>
        <MapContainer center={position || [0, 0]} zoom={13} style={{ height: '400px', width: '100%' }} zoomControl={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker position={position} onLocationSelect={(pos) => {
            setPosition(pos);
            setSelectedByClick(true);
            console.log("Ubicación seleccionada por clic:", pos);
          }} />
          <ZoomControl position="topright" />
          <div className="leaflet-top leaflet-right">
            <button className="leaflet-control-zoom-in leaflet-control zoom-home-boton geolocation-button leaflet-control-zoom leaflet-bar" onClick={handleGeolocationClick}>
              <FontAwesomeIcon icon={faLocationCrosshairs} />
            </button>
          </div>
        </MapContainer>
        <div className="searchform d-flex align-items-center justify-content-center mt-2 mb-0">
          <button className="aceptloc" onClick={handleAcceptClick}>Aceptar</button>
          <button className='cancelloc' onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Location;