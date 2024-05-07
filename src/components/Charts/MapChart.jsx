import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [animalLocations, setAnimalLocations] = useState([]);

  useEffect(() => {
    // Generate random animal location data for testing
    const generateRandomData = () => {
      const data = [];
      const numberOfAnimals = Math.floor(Math.random() * 10) + 1; // Generate between 1 to 10 animals
      const minLatitude = -90;
      const maxLatitude = 90;
      const minLongitude = -180;
      const maxLongitude = 180;

      for (let i = 0; i < numberOfAnimals; i++) {
        const latitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
        const longitude = Math.random() * (maxLongitude - minLongitude) + minLongitude;
        const animalName = `Animal ${i + 1}`;
        const description = `Description for ${animalName}`;

        data.push({ latitude, longitude, animalName, description });
      }

      return data;
    };

    // Update animalLocations state with random data
    setAnimalLocations(generateRandomData());
  }, []);

  useEffect(() => {
    // Initialize Leaflet map
    const map = L.map('map').setView([0, 0], 2);

    // Add Tile layer (you can use any tile provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add markers for each animal location
    const markers = animalLocations.map(location =>
      L.marker([location.latitude, location.longitude]).bindPopup(`<b>${location.animalName}</b><br>${location.description}`)
    );

    // Add markers to map
    markers.forEach(marker => marker.addTo(map));

    // Cleanup function to remove existing map instance
    return () => {
      map.remove();
    };
  }, [animalLocations]);

  return (
    <div className="">
      <div className="container mx-auto py-6 px-4">
        <div id="map" className="w-full h-96"></div>
      </div>
    </div>
  );
};

export default Map;
