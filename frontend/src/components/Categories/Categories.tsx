import { Button } from "primereact/button";
import "./Categories.css";

export const Categories: React.FC = () => {
  return (
    <ul className="button-list">
      <li>
        <Button className="c-button" label="Bieganie" />
        <Button className="c-button" label="Pływanie" />
        <Button className="c-button" label="Jazda konna" />
        <Button className="c-button" label="Bombel spacer" />
      </li>
    </ul>
  );
};
