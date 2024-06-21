import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import { BicycleIcon, IconContainer, ExcersiseIcon } from "./Map.styled";

const containerStyle = {
  width: "390px",
  height: "70vh",
};

const defaultCenter = {
  lat: 54.3486938,
  lng: 18.5990675,
};

const otherUserPosition = {
  lat: 54.3497939,
  lng: 18.5970676,
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

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${apiKey}`,
  });

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

  return isLoaded ? (
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
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={15}
          options={{ styles: mapStyles }}
        >
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
              <div>
                <IconContainer>
                  <BicycleIcon />
                </IconContainer>
              </div>
            </div>
          </OverlayView>
          <OverlayView
            position={otherUserPosition}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <IconContainer>
                  <ExcersiseIcon />
                </IconContainer>
              </div>
            </div>
          </OverlayView>
        </GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
};
