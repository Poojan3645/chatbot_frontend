import React, { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import styles from "./CarTypeOption.module.css";

const CarTypeOption = (props) => {
  const { setCarFilter, buttonIds, setButtonIds } = useContext(DataContext);
  const carType = ["hathback", "sedan", "muv", "suv", "any"];

  const carTypeHandler = (option) => {
    let type = option.name;

    if (option.name === "any") type = "";

    setCarFilter((pre) => {
      return { ...pre, type };
    });

    setButtonIds((pre) => {
      return { ...pre, carTypeButtonId: option.id };
    });

    option.handler();
  };

  const mapData = carType.map((data, index) => {
    return {
      name: data,
      handler: props.actionProvider.handleGetCar,
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
        buttonIds.carTypeButtonId === option.id
          ? styles.active_option
          : styles.option
      }
      onClick={() => carTypeHandler(option)}
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

export default CarTypeOption;
