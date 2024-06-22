import { Button } from "primereact/button";
import { useState } from "react";
import { Modal } from "./Modal";
import "./Categories.css";
import mapIcon from "../../assets/svg/map.svg";
import listIcon from "../../assets/svg/list.svg";

export const Categories: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleListButtonClick = () => {
    setModalVisible(true);
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
            <Button className="c-button" label="Bieganie" />
          </li>
          <li className="button-list">
            <Button className="c-button" label="Pływanie" />
          </li>
          <li className="button-list">
            <Button className="c-button" label="Jazda konna" />
          </li>
          <li className="button-list">
            <Button className="c-button" label="Bombel spacer" />
          </li>
          <li className="button-list">
            <Button className="c-button" label="Jazda rowerem" />
          </li>
        </ul>
      </div>
      <Modal visible={modalVisible} onHide={() => setModalVisible(false)} />
    </>
  );
};
