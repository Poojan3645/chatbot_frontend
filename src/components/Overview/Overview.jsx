import React, { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import styles from "./Overview.module.css";

const Overview = (props) => {
  const { setMainOption, setButtonIds, buttonIds } = useContext(DataContext);

  const overviewHandler = (option) => {
    setMainOption(option.name);
    setButtonIds({ overviewButtonId: option.id });
    option.handler();
  };

  const options = [
    {
      name: "book a test drive",
      handler: props.actionProvider.handleGetCompany,
      id: 1,
    },
    {
      name: "find the dealer in your area",
      handler: props.actionProvider.handleGetCompany,
      id: 2,
    },
    {
      name: "find your best car here",
      handler: props.actionProvider.handleBudgetOption,
      id: 3,
    },
  ];

  const markup = options.map((option) => (
    <button
      key={option.id}
      className={
        buttonIds.overviewButtonId === option.id
          ? styles.active_option
          : styles.option
      }
      onClick={() => overviewHandler(option)}
    >
      {option?.name}
    </button>
  ));

  return (
    <div className={styles.overview}>
      <div className={styles.options}>{markup}</div>
    </div>
  );
};

export default Overview;
