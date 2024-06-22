import "./Categories.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { ListBox } from "primereact/listbox";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { useState } from "react";

export const Modal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const categories = [
    { name: "Idę na rower" },
    { name: "Idę z dzieckiem na spacer" },
    { name: "Idę na jogę" },
    { name: "Idę na grzyby" },
    { name: "Idę z psem na spacer" },
    { name: "Idę na basen" },
    { name: "Idę na siłownię" },
    { name: "Idę na rolki" },
    { name: "Idę na narty" },
    { name: "Idę na spacer z przyjaciółmi" },
    { name: "Idę na kawę" },
    { name: "Idę na piknik" },
    { name: "Idę na koncert" },
    { name: "Idę na warsztaty" },
    { name: "Idę na wycieczkę górską" },
    { name: "Idę na plażę" },
    { name: "Idę na kurs tańca" },
    { name: "Idę na zwiedzanie miasta" },
    { name: "Idę na grę w piłkę" },
    { name: "Idę na zajęcia grupowe" },
    { name: "Idę na targi" },
    { name: "Idę na ognisko" },
    { name: "Idę na spotkanie integracyjne" },
    { name: "Idę na wolontariat" },
  ];

  const sortCategories = (categories, selectedItems) => {
    return categories.slice().sort((a, b) => {
      const aSelected = selectedItems.some((item) => item.name === a.name);
      const bSelected = selectedItems.some((item) => item.name === b.name);
      return bSelected - aSelected;
    });
  };

  const sortedCategories = sortCategories(categories, selectedItems);

  const itemTemplate = (option) => {
    const isSelected = selectedItems.some((item) => item.name === option.name);
    return (
      <div className="p-d-flex p-ai-center listbox-item">
        <span className="item-name">{option.name}</span>
        <i
          className={`pi pi-star-fill item-icon ${
            isSelected ? "selected" : "unselected"
          }`}
          onClick={(e) => handleIconClick(e, option)}
        ></i>
      </div>
    );
  };

  const handleIconClick = (e, option) => {
    e.preventDefault();
    e.stopPropagation();
    handleItemClick(option);
  };

  const handleItemClick = (option) => {
    setSelectedItems((prevSelected) => {
      const alreadySelected = prevSelected.some(
        (item) => item.name === option.name
      );
      if (alreadySelected) {
        return prevSelected.filter((item) => item.name !== option.name);
      } else if (prevSelected.length < 5) {
        return [...prevSelected, option];
      } else {
        confirmDialog({
          message: "Możesz wybrać maksymalnie 5 kategorii",
          icon: "pi pi-info-circle",
          acceptLabel: "Ok",
          accept: () => {},
        });
        return prevSelected;
      }
    });
  };

  return (
    <>
      <div className="card flex justify-content-center">
        <Button
          label="Show"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
        <Dialog
          header="Lista kategorii"
          visible={visible}
          style={{
            width: "100vw",
            height: "100vh",
            maxHeight: "100%",
          }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <p className="m-0">Dodaj do ulubionych (max 5)</p>
          <ListBox
            filter
            value={selectedCategories}
            onChange={(e) => setSelectedCategories(e.value)}
            options={sortedCategories}
            optionLabel="name"
            className="w-full md:w-14rem"
            multiple
            itemTemplate={itemTemplate}
          />
        </Dialog>
      </div>

      <ConfirmDialog />
    </>
  );
};
