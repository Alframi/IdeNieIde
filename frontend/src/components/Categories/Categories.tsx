import { Button } from "primereact/button";
import "./Categories.css";

export const Categories: React.FC = () => {
  return (
    <div className="container">
      <div className="button-wrapper">
        <Button className="w-button" label="Mapa" />
        <Button className="w-button" label="Lista" />
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
  );
};
