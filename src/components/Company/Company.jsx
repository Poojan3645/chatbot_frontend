import React, { useState, useEffect, useContext } from "react";

import { DataContext } from "../../context/DataContext";
import styles from "./Company.module.css";
import axiosConfig from "../../utils/axiosConfig";

const Company = (props) => {
  const { setCompanyId, mainOption, setAreaIds, buttonIds, setButtonIds } =
    useContext(DataContext);

  const [car, setCar] = useState([]);

  const companyHandler = (option) => {
    setAreaIds(option.areaIds);
    setCompanyId(option.id);
    setButtonIds((pre) => {
      return { ...pre, companyButtonId: option.id };
    });
    option.handler();
  };

  const handler =
    mainOption === "find the dealer in your area"
      ? props.actionProvider.handleGetArea
      : props.actionProvider.handleGetCar;
  const getCompany = async () => {
    try {
      const res = await axiosConfig.get("company");
      const mapData = res.data.map((data) => {
        return {
          name: data.companyname,
          handler,
          id: data._id,
          areaIds: data.areaId,
        };
      });

      mapData.push({
        name: "Main menu",
        handler: props.actionProvider.handleDefault,
        id: "63b519819efca13ed8aa177c",
      });
      setCar(mapData);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getCompany();
  }, []);

  const markup = car.map((option) => (
    <button
      key={option.id}
      className={
        buttonIds.companyButtonId === option.id
          ? styles.active_option
          : styles.option
      }
      onClick={() => companyHandler(option)}
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

export default Company;
