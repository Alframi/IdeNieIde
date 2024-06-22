import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import {
  ExcersiseIcon,
  WalkWithDogIcon,
  BicycleIcon,
  RunIcon,
  WalkIcon,
  IconContainer,
  IconContainer2,
  IconContainer3,
  IconContainer4,
  IconContainer5,
} from "./Map.styled";

const colors = [
  "#FF6384",
  "#FF9F40",
  "#FFCD56",
  "#4BC0C0",
  "#36A2EB",
  "#9966FF",
  "#C9CBCF",
  "#FF69B4",
  "#D2F53C",
  "#5A9BD4",
  "#28A745",
  "#4972ff",
];

const containerStyle = {
  width: "390px",
  height: "70vh",
};

const defaultCenter = {
  lat: 54.35451,
  lng: 18.593777,
};

const user1Position = {
  lat: 54.3497939,
  lng: 18.5970676,
};

const user2Position = {
  lat: 54.3529645,
  lng: 18.6071798,
};

const user3Position = {
  lat: 54.3575645,
  lng: 18.5999198,
};

const user4Position = {
  lat: 54.3427939,
  lng: 18.5999198,
};

const user5Position = {
  lat: 54.3477939,
  lng: 18.5910671,
};

const user6Position = {
  lat: 54.3419939,
  lng: 18.5919676,
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
            position={user1Position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              className="icon-wrapper"
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
            position={user2Position}
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
                <IconContainer2>
                  <ExcersiseIcon />
                </IconContainer2>
              </div>
            </div>
          </OverlayView>
          <OverlayView
            position={user3Position}
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
                <IconContainer2>
                  <ExcersiseIcon />
                </IconContainer2>
              </div>
            </div>
          </OverlayView>
          <OverlayView
            position={user4Position}
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
            position={user5Position}
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
                <IconContainer3>
                  <RunIcon />
                </IconContainer3>
              </div>
            </div>
          </OverlayView>
          <OverlayView
            position={user6Position}
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
                <IconContainer4>
                  <WalkWithDogIcon />
                </IconContainer4>
              </div>
            </div>
          </OverlayView>
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
                <IconContainer5>
                  <WalkIcon />
                </IconContainer5>
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
