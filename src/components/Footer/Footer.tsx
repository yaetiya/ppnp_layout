import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box/Box";
import React from "react";
import FooterContacts from "./components/FooterContacts";
import FooterForm from "./components/FooterForm";

const Footer = () => {
  return (
    <>
      <Box marginTop={4}>
        <Grid container spacing={5}>
          <Grid item lg={6} md={12}>
            <FooterForm />
          </Grid>
          <Grid item lg={6} md={12}>
            <FooterContacts />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={8} marginBottom={5} width="100%" textAlign="center">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" style={{ marginRight: 7 }}>
            Сделано в
          </Typography>
          <img
            style={{ marginTop: 8 }}
            src="./assets/footer_logo.png"
            alt="logo"
          />
        </div>
      </Box>
    </>
  );
};

export default Footer;
