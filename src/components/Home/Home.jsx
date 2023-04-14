import React from "react";
import Chatbot from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import GradientBackground from "../GradientBackground/GradientBackground";
import Accordion from "../Accordion/Accordion";
import config from "../../bots/config";
import MessageParser from "../../bots/MessageParser";
import ActionProvider from "../../bots/ActionProvider";

import './Home.css';
export default function Home() {
  return (
    <>
      <Box component="main" sx={{ p: 3 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          columnSpacing={{ md: 6 }}
        >
          <Grid item xs={6} md={6}>
            <div>
              <h1 className="title">Car Dealer Bot</h1>
              <p>
                Generating leads and providing customer service is super easy
                for automotive dealers now. You don't have to hire hundreds of
                customer service agents to interact with your customers on a
                daily basis. Using AI-powered chatbots, automobile dealers can
                automate their customer interactions, and personalize their
                customer's car-buying experience without them even stepping foot
                in the showroom.
              </p>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <ConditionallyRender
              ifTrue={true}
              show={
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
              }
            />
          </Grid>
        </Grid>
      </Box>

      <Box component="main" sx={{ p: 3 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item md={9}>
            <h1 className="title">Frequently Asked Questions</h1>
            <Accordion />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
