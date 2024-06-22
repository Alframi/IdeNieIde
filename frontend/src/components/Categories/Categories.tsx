import "./Categories.css";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { useState } from "react";
import { Modal } from "./Modal";

export const Categories: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal visible={modalVisible} onHide={() => setModalVisible(false)} />
      <ul className="button-list">
        <li>
          <Button className="c-button" label="Bieganie" />
          <Button className="c-button" label="Pływanie" />
          <Button className="c-button" label="Jazda konna" />
          <Button className="c-button" label="Bombel spacer" />
        </li>
      </ul>
      <ConfirmDialog />
    </>
  );
};
