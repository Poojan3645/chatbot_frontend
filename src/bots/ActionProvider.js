class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleGetCompany = () => {
    const messages = this.createChatBotMessage("Please select company.", {
      widget: "getCompany",
      withAvatar: true,
    });

    this.addMessageToBotState(messages);
  };

  handleGetCar = (props) => {
    const messages = this.createChatBotMessage("Please select car.", {
      widget: "getCar",
      withAvatar: true,
    });

    this.addMessageToBotState(messages);
  };

  handleGetArea = (props) => {
    const messages = this.createChatBotMessage("Please select area.", {
      widget: "getArea",
      withAvatar: true,
    });

    this.addMessageToBotState(messages);
  };

  handleGetDealer = () => {
    const messages = this.createChatBotMessage(
      "Please check dealer information.",
      {
        widget: "getDealer",
        withAvatar: true,
      }
    );

    this.addMessageToBotState(messages);
  };

  handleBudgetOption = () => {
    const message = this.createChatBotMessage("please select price range", {
      withAvatar: true,
      widget: "budgetOption",
    });

    this.addMessageToBotState(message);
  };

  handleFuelOption = () => {
    const message = this.createChatBotMessage("please select fuel type", {
      withAvatar: true,
      widget: "fuelOption",
    });

    this.addMessageToBotState(message);
  };

  handleCarTypeOption = () => {
    const message = this.createChatBotMessage("please select car type", {
      withAvatar: true,
      widget: "carTypeOption",
    });

    this.addMessageToBotState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "How can I help? Here is the overview.",
      {
        withAvatar: true,
        widget: "overview",
      }
    );

    this.addMessageToBotState(message);
  };

  handleMessageParserDocs = (props) => {
    const messages = this.createChatBotMessage(
      "The message parser controls how the bot reads input and decides which action to invoke.",
      { widget: "messageParser", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleActionProviderDocs = () => {
    const messages = [
      this.createChatBotMessage(
        "The action provider defines the bots response after the message is parsed.",
        { widget: "actionProviderDocs", withAvatar: true }
      ),
    ];

    this.addMessageToBotState(messages);
  };

  handleConfigDocs = () => {
    const messages = this.createChatBotMessage(
      "The config controls every configurable aspect of the chatbot.",
      { widget: "config", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleWidgetDocs = () => {
    const messages = this.createChatBotMessage(
      "Widgets are custom components that you want to render with a chatbot response.",
      { widget: "widget", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
        gist: "",
        infoBox: "",
      }));
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
        gist: "",
        infoBox: "",
      }));
    }
  };
}

export default ActionProvider;
