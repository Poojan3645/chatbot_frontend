import React, { useState, useEffect, useContext } from "react";
import axiosConfig from "../../utils/axiosConfig";

import { DataContext } from "../../context/DataContext";
import ActionAreaCard from "../ActionAreaCard/ActionAreaCard";
import styles from "./Car.module.css";

const Car = (props) => {
  const [company, setCompany] = useState([]);

  const {
    companyId,
    setAreaIds,
    carFilter,
    mainOption,
    setCompanyId,
    setButtonIds,
  } = useContext(DataContext);

  const carHandler = (option) => {
    setAreaIds(option.areaIds);
    setCompanyId(option.companyId);
    setButtonIds((pre) => {
      return { ...pre, carButtonId: option.id };
    });

    option.handler();
  };

  const getCompany = async () => {
    try {
      let res;
      if (mainOption === "find your best car here") {
        res = await axiosConfig.post("cars/findCarByPrice", carFilter);
      } else {
        res = await axiosConfig.post("cars/CarByCompany", {
          companyId,
        });
      }

      const mapData = res.data.map((data) => {
        return {
          name: data.carname,
          handler: props.actionProvider.handleGetArea,
          id: data._id,
          areaIds: data.areaId,
          companyId: data.companyId,
          image: `${process.env.REACT_APP_SERVER_URL}/${data.image}`,
          data: {
            "Fuel Type": data.fuel,
            "Car Type": data.type,
            Price: data.price,
          },
        };
      });

      // mapData.push({
      //   name: "Main menu",
      //   handler: props.actionProvider.handleDefault,
      //   id: "63b519819efca13ed8aa177c",
      // });

      setCompany(mapData);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getCompany();
  }, []);

  const markup = company.map((option) => (
    <ActionAreaCard key={option.id} option={option} carHandler={carHandler} />
  ));

  return (
    <div className={styles.overview}>
      <div className={styles.options}>{markup}</div>
    </div>
  );
};

export default Car;
