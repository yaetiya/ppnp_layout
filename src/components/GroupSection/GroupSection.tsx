import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useUserInformationStyles } from "../UserHeader/components/UserInformation/UserInformationStyles";
import { IGroupSection } from "./Models";

const GroupSection = ({ children, headline }: IGroupSection) => {
  const userInformationStyles = useUserInformationStyles();
  return (
    <Box marginTop={3}>
      <Typography
        variant="h4"
        color="primary"
        className={userInformationStyles.professionHeadline}
      >
        {headline}
      </Typography>
      {children}
    </Box>
  );
};

export default GroupSection;
