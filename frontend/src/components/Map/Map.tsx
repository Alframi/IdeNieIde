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
  const [userCategory, setUserCategory] = useState("Excersise");
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${apiKey}`,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching the geolocation: ", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const IconRender = (userCategory: string) => {
    switch (userCategory) {
      case "Bicycle":
        return <BicycleIcon />;
      case "Excersise":
        return <ExcersiseIcon />;

      default:
        return null;
    }
  };

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
          options={{
            styles: mapStyles,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControl: false,
            streetViewControl: false,
          }}
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
                {userCategory ? (
                  <IconContainer>{IconRender(userCategory)}</IconContainer>
                ) : (
                  <></>
                )}
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
