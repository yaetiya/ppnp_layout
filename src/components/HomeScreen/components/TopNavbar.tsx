import { Box } from "@material-ui/core";
import React from "react";
import CreateAccoutButton from "./CreateAccoutButton";
import TopNavbarMenuItem from "./TopNavbarMenuItem";

const TopNavbar = () => {
  const topMenuTabs = React.useCallback<
    () => { text: string; onClick?: () => void }[]
  >(
    () => [
      {
        text: "Маркетплейс",
      },
      {
        text: "Личный кабинет",
      },
    ],
    []
  );

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex">
        <img
          src="./assets/nav_logo.svg"
          alt="logo"
          style={{ marginRight: 34 }}
        />
        {topMenuTabs().map((x) => (
          <TopNavbarMenuItem {...x} />
        ))}
      </Box>
      <Box display="flex">
        <TopNavbarMenuItem text="Войти" />
        <Box style={{ marginTop: 18 }} marginLeft={3}>
          <CreateAccoutButton isSmall />
        </Box>
      </Box>
    </Box>
  );
};

export default TopNavbar;
