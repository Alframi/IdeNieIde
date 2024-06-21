import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";

const containerStyle = {
  width: "390px",
  height: "70vh",
};

const defaultCenter = {
  lat: 52.2297,
  lng: 21.0122,
};

const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
];

export const MapComponent = () => {
  const [currentPosition, setCurrentPosition] = useState(defaultCenter);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    // Sprawdza, czy przeglądarka obsługuje API geolokalizacji
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          // Sukces: aktualizuje stan z bieżącą pozycją użytkownika
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          // Błąd: wyświetla komunikat w konsoli
          console.error("Error fetching the geolocation: ", error);
        },
        {
          // Opcjonalne ustawienia
          enableHighAccuracy: true, // Używa GPS, jeśli dostępny
          timeout: 10000, // Czas oczekiwania na odpowiedź (w ms)
          maximumAge: 0, // Nie używaj zbuforowanych danych
        }
      );

      // Clean up the watcher on component unmount
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition}
            zoom={15}
            options={{ styles: mapStyles }}
          >
            <Marker />
            <OverlayView
              position={currentPosition}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    background: "orange",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    color: "black",
                    textAlign: "center",
                    fontSize: "8px",
                    padding: "5px",
                  }}
                >
                  Idę biegać
                </div>
              </div>
            </OverlayView>
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};
