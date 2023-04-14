import React, { useState, useEffect, useContext } from "react";
import axiosConfig from "../../utils/axiosConfig";

import { DataContext } from "../../context/DataContext";
import styles from "./Area.module.css";

const Area = (props) => {
  const { areaIds, setDealerIds, buttonIds, setButtonIds } =
    useContext(DataContext);

  const [area, setArea] = useState([]);

  const areaHandler = (option) => {

    console.log('option.dealerIds', option);
    setDealerIds(option.dealerIds);

    setButtonIds((pre) => {
      return { ...pre, areaButtonId: option.id };
    });

    option.handler();
  };

  const getArea = async () => {
    try {

    console.log('areaIds', areaIds);


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

    console.log('res.data.areaIds', res.data);


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
