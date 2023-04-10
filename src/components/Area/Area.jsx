import React, { useState, useEffect, useContext } from "react";
import axiosConfig from "../../utils/axiosConfig";

import { DataContext } from "../../context/DataContext";
import styles from "./Area.module.css";

const Area = (props) => {
  const { areaIds, setDealerIds, buttonIds, setButtonIds } =
    useContext(DataContext);

  const [area, setArea] = useState([]);

  const areaHandler = (option) => {
    setDealerIds(option.dealerIds);

    setButtonIds((pre) => {
      return { ...pre, areaButtonId: option.id };
    });

    option.handler();
  };

  const getArea = async () => {
    try {
      const res = await axiosConfig.post("area/areaById", {
        areaId: areaIds,
      });

      const mapData = res.data.map((data) => {
        return {
          name: data.areaname,
          handler: props.actionProvider.handleGetDealer,
          id: data._id,
          dealerIds: data.dealerId,
        };
      });

      mapData.push({
        name: "Main menu",
        handler: props.actionProvider.handleDefault,
        id: "63b519819efca13ed8aa177c",
      });

      setArea(mapData);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getArea();
  }, []);

  const markup = area.map((option) => (
    <button
      key={option.id}
      className={
        buttonIds.areaButtonId === option.id
          ? styles.active_option
          : styles.option
      }
      onClick={() => areaHandler(option)}
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

export default Area;
