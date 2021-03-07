import { Box, Grid, Hidden } from "@material-ui/core";
import React from "react";
import UserInformation from "./components/UserInformation/UserInformation";
import UserSkills from "./components/UserSkills/UserSkills";
import "./styles.css";

const UserHeader = () => {
  return (
    <Box marginTop={9}>
      <Grid container spacing={0}>
        <Grid item lg={3}>
          <img
            src="./assets/headerImage.png"
            alt="user_image"
            className="header-img"
          />
        </Grid>
        <Hidden lgUp>
          <Grid item lg={9}>
            <>
              <div style={{ marginLeft: 24, marginBottom: 28 }}>
                <UserInformation />
              </div>
              <UserSkills />
            </>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item lg={9} style={{ paddingLeft: 50 }}>
            <>
              <div style={{ marginLeft: 24, marginBottom: 28 }}>
                <UserInformation />
              </div>
              <UserSkills />
            </>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};

export default UserHeader;
