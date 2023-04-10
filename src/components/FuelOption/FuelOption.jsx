import React, { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import styles from "./FuelOption.module.css";

const FuelOption = (props) => {
  const { setCarFilter, buttonIds, setButtonIds } = useContext(DataContext);
  const fuelType = ["petrol", "diesel", "electric", "any"];

  const fuelHandler = (option) => {
    let fuel = option.name;

    if (option.name === "any") fuel = "";

    setCarFilter((pre) => {
      return { ...pre, fuel };
    });
    setButtonIds((pre) => {
      return { ...pre, fuelButtonId: option.id };
    });

    option.handler();
  };

  const mapData = fuelType.map((data, index) => {
    return {
      name: data,
      handler: props.actionProvider.handleCarTypeOption,
      id: index + 1,
    };
  });

  mapData.push({
    name: "Main menu",
    handler: props.actionProvider.handleDefault,
    id: "63b519819efca13ed8aa177c",
  });

  const markup = mapData.map((option) => (
    <button
      key={option.id}
      className={
        buttonIds.fuelButtonId === option.id
          ? styles.active_option
          : styles.option
      }
      onClick={() => fuelHandler(option)}
    >
      {option.name}
    </button>
  ));

  return (
    <div className={styles.overview}>
      <div className={styles.options}>{markup}</div>
    </div>
  );
};

export default FuelOption;
