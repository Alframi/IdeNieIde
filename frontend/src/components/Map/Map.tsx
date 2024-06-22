import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  OverlayView,
  Circle,
} from "@react-google-maps/api";
import { Categories } from "../Categories/Categories";
import {
  IconContainer,
  IconContainer0,
  IconContainer2,
  IconContainer3,
  IconContainer4,
  IconContainer5,
  BicycleIcon,
  ExcerciseIcon,
  WalkWithDogIcon,
  RunIcon,
  WalkIcon,
  StyledButton,
} from "./Map.styled";
import { OverlayPanel } from "primereact/overlaypanel";
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
  const op = useRef(null);
  const [userCategory, setUserCategory] = useState("");
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
          <div className="userContainer">
            <IconContainer>
              <BicycleIcon />
            </IconContainer>
          </div>
        );
      case "Excercise":
        return (
          <div className="userContainer">
            <IconContainer2>
              <ExcerciseIcon />
            </IconContainer2>
          </div>
        );
      case "WalkWithDog":
        return (
          <div className="userContainer">
            <IconContainer3>
              <WalkWithDogIcon />
            </IconContainer3>
          </div>
        );
      case "Run":
        return (
          <div className="userContainer">
            <IconContainer4>
              <RunIcon />
            </IconContainer4>
          </div>
        );
      case "Walk":
        return (
          <div className="userContainer">
            <IconContainer5>
              <WalkIcon />
            </IconContainer5>
          </div>
        );
      default:
        return null;
    }
  };

  // const handleIconClick = (e, position) => {
  //   setOverlayPosition(position);
  //   op.current.toggle(e);
  // };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleStatusChange = (status: string) => {
    setUserCategory(status);
  };

  return isLoaded ? (
    <>
      <div className="fullscreen-center ">
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
              <div onClick={(e) => op.current.toggle(e)}>
                <IconContainer2>
                  <ExcerciseIcon />
                </IconContainer2>
              </div>
            </OverlayView>
            <OverlayView
              position={user2Position}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div onClick={(e) => op.current.toggle(e)}>
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
                <div onClick={(e) => op.current.toggle(e)}>
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
                <div onClick={(e) => op.current.toggle(e)}>
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
                <div onClick={(e) => op.current.toggle(e)}>
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
                <div onClick={(e) => op.current.toggle(e)}>
                  <IconContainer3>
                    <WalkWithDogIcon />
                  </IconContainer3>
                </div>
              </div>
            </OverlayView>
            <div className="card flex justify-content-center custom">
              <OverlayPanel ref={op} style={{ padding: "5px" }}>
                <StyledButton
                  type="button"
                  label="Dołącz"
                  onClick={(e) => op.current.toggle(e)}
                />
              </OverlayPanel>
            </div>
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
              <Categories
                closeModal={closeModal}
                onStatusChange={handleStatusChange}
              />
            </div>
          </div>
        )}
      </div>
    </>
  ) : (
    <></>
  );
};
