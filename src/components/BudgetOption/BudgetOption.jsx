import React, { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import styles from "./BudgetOption.module.css";

const BudgetOption = (props) => {
  const { setCarFilter, buttonIds, setButtonIds } = useContext(DataContext);
  const price = [
    { minPrice: 0, maxPrice: 5 },
    { minPrice: 5, maxPrice: 10 },
    { minPrice: 10, maxPrice: 15 },
    { minPrice: 15, maxPrice: 20 },
    { minPrice: 20, maxPrice: 30 },
    { minPrice: 30, maxPrice: 40 },
    { minPrice: 40, maxPrice: 50 },
    { minPrice: 50, maxPrice: 70 },
    { minPrice: 70, maxPrice: 0 },
  ];

  const budgetHandler = (option) => {
    const minPrice = option.minPrice * 100000;
    const maxPrice = option.maxPrice * 100000;
    setCarFilter({ minPrice, maxPrice });

    setButtonIds((pre) => {
      return { ...pre, budgetButtonId: option.id };
    });
    option.handler();
  };

  const mapData = price.map((data, index) => {
    return {
      name: `${data.minPrice ? `${data.minPrice}lac` : "below"} - ${
        data.maxPrice ? `${data.maxPrice}lac` : "above"
      }`,
      handler: props.actionProvider.handleFuelOption,
      id: index + 1,
      minPrice: data.minPrice,
      maxPrice: data.maxPrice,
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
        buttonIds.budgetButtonId === option.id
          ? styles.active_option
          : styles.option
      }
      onClick={() => budgetHandler(option)}
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

export default BudgetOption;
