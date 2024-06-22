import { Button } from "primereact/button";
import { useState } from "react";
import { Modal } from "./Modal";
import "./Categories.css";
import mapIcon from "../../assets/svg/map.svg";
import listIcon from "../../assets/svg/list.svg";

export const Categories: React.FC<{ closeModal: () => void }> = ({
  closeModal,
  onStatusChange,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleListButtonClick = () => {
    setModalVisible(true);
  };
  const handleClickedRun = () => {
    onStatusChange("Run");
    closeModal();
  };
  const handleClickedBicycle = () => {
    onStatusChange("Bicycle");
    closeModal();
  };
  const handleClickedDog = () => {
    onStatusChange("WalkWithDog");
    closeModal();
  };

  return (
    <>
      <div className="container">
        <div className="button-wrapper">
          <button className="button-icon" onClick={closeModal}>
            <img src={mapIcon} alt="Map Icon" className="button-icon" />
          </button>
          <button className="button-icon" onClick={handleListButtonClick}>
            <img src={listIcon} alt="List Icon" className="button-icon" />
          </button>
        </div>
        <ul className="button-item">
          <li className="button-list">
            <Button
              className="c-button"
              label="Bieganie"
              onClick={handleClickedRun}
            />
          </li>
          <li className="button-list">
            <Button
              className="c-button"
              label="Rower"
              onClick={handleClickedBicycle}
            />
          </li>
          <li className="button-list">
            <Button className="c-button" label="Tenis" />
          </li>
          <li className="button-list">
            <Button
              className="c-button"
              label="Wyjście z psem"
              onClick={handleClickedDog}
            />
          </li>
          <li className="button-list">
            <Button className="c-button" label="Bombel spacer" />
          </li>
        </ul>
      </div>
      <Modal visible={modalVisible} onHide={() => setModalVisible(false)} />
    </>
  );
};
