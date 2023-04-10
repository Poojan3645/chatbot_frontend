import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [companyId, setCompanyId] = useState("");
  const [areaIds, setAreaIds] = useState([]);
  const [dealerIds, setDealerIds] = useState([]);
  const [carFilter, setCarFilter] = useState({});
  const [mainOption, setMainOption] = useState("");
  const [buttonIds, setButtonIds] = useState([]);

  return (
    <DataContext.Provider
      value={{
        companyId,
        setCompanyId,
        areaIds,
        setAreaIds,
        dealerIds,
        setDealerIds,
        carFilter,
        setCarFilter,
        mainOption,
        setMainOption,
        buttonIds,
        setButtonIds,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
