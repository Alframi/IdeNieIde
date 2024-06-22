import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { useState } from "react";
import { Modal } from "./Modal";
import "./Categories.css";
import mapIcon from "../../assets/svg/map.svg";
import listIcon from "../../assets/svg/list.svg";

export const Categories: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <Modal visible={modalVisible} onHide={() => setModalVisible(false)} />
    <div className="container">
      <div className="button-wrapper">
        <div className="button-icon">
          <img src={mapIcon} alt="Map Icon" className="button-icon" />
        </div>
        <div className="button-icon">
          <img src={listIcon} alt="List Icon" className="button-icon" />
        </div>
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
    </>
  );
};
