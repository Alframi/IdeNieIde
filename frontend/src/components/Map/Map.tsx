import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  OverlayView,
  Circle,
} from "@react-google-maps/api";
import { Categories } from "../Categories/Categories";
import {
  IconContainer,
  IconContainer2,
  IconContainer3,
  IconContainer4,
  IconContainer5,
  BicycleIcon,
  ExcersiseIcon,
  WalkWithDogIcon,
  RunIcon,
  WalkIcon,
} from "./Map.styled";
import { BicycleIcon, ExcersiseIcon, IconContainer } from "./Map.styled";
import faceIcon from "../../assets/svg/face.svg";
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
  lat: 54.3569645,
  lng: 18.5821798,
};

const user3Position = {
  lat: 54.3575645,
  lng: 18.5999198,
};

const user4Position = {
  lat: 54.3527939,
  lng: 18.5899198,
};

const user5Position = {
  lat: 54.3597939,
  lng: 18.5910671,
};

const user6Position = {
  lat: 54.3489939,
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${apiKey}`,
  });

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     const watchId = navigator.geolocation.watchPosition(
  //       (position) => {
  //         setCurrentPosition({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         });
  //       },
  //       (error) => {
  //         console.error("Error fetching the geolocation: ", error);
  //       },
  //       {
  //         enableHighAccuracy: true,
  //         timeout: 10000,
  //         maximumAge: 0,
  //       }
  //     );

  //     return () => {
  //       navigator.geolocation.clearWatch(watchId);
  //     };
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }, []);

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
      case "WalkWithDog":
        return (
          <IconContainer>
            <WalkWithDogIcon />
          </IconContainer>
        );
      case "Run":
        return (
          <IconContainer>
            <RunIcon />
          </IconContainer>
        );
      case "Walk":
        return (
          <IconContainer>
            <WalkIcon />
          </IconContainer>
        );
      default:
        return null;
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return isLoaded ? (
    <>
      <div className="fullscreen-center">
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition}
            zoom={14}
            options={{
              styles: mapStyles,
              mapTypeControl: false,
              fullscreenControl: false,
              zoomControl: false,
              streetViewControl: false,
            }}
          >
            <Circle
              center={currentPosition}
              radius={1000}
              options={{
                fillColor: "lightblue",
                fillOpacity: 0.5,
                strokeColor: "lightblue",
                strokeOpacity: 1,
                strokeWeight: 1,
              }}
            />
            <OverlayView
              position={currentPosition}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div>
                {userCategory ? <>{IconRender(userCategory)}</> : <></>}
              </div>
            </OverlayView>
            <OverlayView
              position={user1Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div>
                <IconContainer2>
                  <ExcersiseIcon />
                </IconContainer2>
              </div>
            </OverlayView>
            <OverlayView
              position={user2Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div>
                <IconContainer4>
                  <RunIcon />
                </IconContainer4>
              </div>
            </OverlayView>
            <OverlayView
              position={user3Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="overlay-view-container">
                <div>
                  <IconContainer4>
                    <RunIcon />
                  </IconContainer4>
                </div>
              </div>
            </OverlayView>
            <OverlayView
              position={user4Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="overlay-view-container">
                <div>
                  <IconContainer4>
                    <RunIcon />
                  </IconContainer4>
                </div>
              </div>
            </OverlayView>
            <OverlayView
              position={user5Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="overlay-view-container">
                <div>
                  <IconContainer>
                    <BicycleIcon />
                  </IconContainer>
                </div>
              </div>
            </OverlayView>
            <OverlayView
              position={user6Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="overlay-view-container">
                <div>
                  <IconContainer3>
                    <WalkWithDogIcon />
                  </IconContainer3>
                </div>
              </div>
            </OverlayView>
          </GoogleMap>
        </div>
        {!isModalOpen && (
          <img
            src={faceIcon}
            alt="Map Icon"
            className="open-modal-button"
            onClick={openModal}
          />
        )}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}></span>
              <Categories closeModal={closeModal} />
            </div>
          </div>
        )}
      </div>
    </>
  ) : (
    <></>
  );
};
