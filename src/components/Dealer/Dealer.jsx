import React, { useState, useEffect, useContext } from "react";
import axiosConfig from "../../utils/axiosConfig";

import { DataContext } from "../../context/DataContext";
import styles from "./Dealer.module.css";
import ActionAreaCard from "../ActionAreaCard/ActionAreaCard";

const Dealer = (props) => {
  const { dealerIds, companyId } = useContext(DataContext);

  const [dealer, setDealer] = useState([]);

  console.log('dealerIds', dealerIds);


  const getCar = async () => {
    try {
      const res = await axiosConfig.post("dealer/dealerById", {
        dealerId: dealerIds,
        companyId,
      });

      const mapData = res.data.map((data) => {
        return {
          name: data.dealername,
          handler: props.actionProvider.handleDefault,
          id: data._id,
          data: {
            "Contact Number": data.contactnumber,
            "Area Name": data.areaname,
          },
        };
      });

      // mapData.push({
      //   name: "Main menu",
      //   handler: props.actionProvider.handleDefault,
      //   id: "63b519819efca13ed8aa177c",
      // });
      setDealer(mapData);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getCar();
  }, []);

  const markup = dealer.map((option, index) => (
    <ActionAreaCard key={index} option={option} />
  ));

  return (
    <div className={styles.overview}>
      <div className={styles.options}>{markup}</div>
    </div>
  );
};

export default Dealer;
