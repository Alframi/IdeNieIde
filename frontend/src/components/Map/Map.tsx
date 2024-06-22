import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import { Categories } from "../Categories/Categories";
import { BicycleIcon, ExcersiseIcon, IconContainer } from "./Map.styled";

import "./Map.css";

const containerStyle = {
  width: "100%",
  height: "100%",
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
        return (
          <IconContainer>
            <BicycleIcon />
          </IconContainer>
        );
      case "Excersise":
        return (
          <IconContainer>
            <ExcersiseIcon />
          </IconContainer>
        );

      default:
        return null;
    }
  };

  return isLoaded ? (
    <>
      <div className="fullscreen-center">
        <div className="map-container">
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
              <div className="overlay-view-container">
                <div>
                  {userCategory ? <>{IconRender(userCategory)}</> : <></>}
                </div>
              </div>
            </OverlayView>
            <OverlayView
              position={user1Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              {/* <div className="overlay-view-container"> */}
              <div>
                <IconContainer>
                  <ExcersiseIcon />
                </IconContainer>
              </div>
              {/* </div> */}
            </OverlayView>
            <OverlayView
              position={user2Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="overlay-view-container">
                <div>
                  <IconContainer>
                    <ExcersiseIcon />
                  </IconContainer>
                </div>
              </div>
            </OverlayView>
            <OverlayView
              position={user3Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="overlay-view-container">
                <div>
                  <IconContainer>
                    <ExcersiseIcon />
                  </IconContainer>
                </div>
              </div>
            </OverlayView>
          </GoogleMap>
          <div className="modal-container">
            <Categories />
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
