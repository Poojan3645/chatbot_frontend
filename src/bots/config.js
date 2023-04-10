import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Company from "../components/Company/Company";
import Car from "../components/Car/Car";
import Area from "../components/Area/Area";
import Dealer from "../components/Dealer/Dealer";
import BudgetOption from "../components/BudgetOption/BudgetOption";
import FuelOption from "../components/FuelOption/FuelOption";
import CarTypeOption from "../components/CarTypeOption/CarTypeOption";
import Overview from "../components/Overview/Overview";

const botName = "DocsBot";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help you explain how I work.`
    ),
    createChatBotMessage("Please select option.", {
      withAvatar: false,
      delay: 500,
      widget: "overview",
    }),
  ],
  state: {
    carId: "",
    gist: "",
    infoBox: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "getCompany",
      widgetFunc: (props) => <Company {...props} />,
      mapStateToProps: ["gist", "carId"],
    },
    {
      widgetName: "getCar",
      widgetFunc: (props) => <Car {...props} />,
      mapStateToProps: ["gist", "carId"],
    },
    {
      widgetName: "getArea",
      widgetFunc: (props) => <Area {...props} />,
      mapStateToProps: ["gist", "carId"],
    },
    {
      widgetName: "getDealer",
      widgetFunc: (props) => <Dealer {...props} />,
      mapStateToProps: ["gist", "carId"],
    },
    {
      widgetName: "budgetOption",
      widgetFunc: (props) => <BudgetOption {...props} />,
      mapStateToProps: ["gist", "carId"],
    },
    {
      widgetName: "fuelOption",
      widgetFunc: (props) => <FuelOption {...props} />,
      mapStateToProps: ["gist", "carId"],
    },
    {
      widgetName: "carTypeOption",
      widgetFunc: (props) => <CarTypeOption {...props} />,
      mapStateToProps: ["gist", "carId"],
    },
  ],
};

export default config;
