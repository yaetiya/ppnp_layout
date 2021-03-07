import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useUserInformationStyles } from "./UserInformationStyles";

const UserInformation = () => {
  const userInformationStyles = useUserInformationStyles();
  return (
    <Box>
      <Typography
        color="primary"
        component="h4"
        className={userInformationStyles.professionHeadline}
      >
        Пекарь-кондитер
      </Typography>
      <Typography
        color="secondary"
        component="h1"
        className={userInformationStyles.mainHeadline}
      >
        Сергей Кузьмич
      </Typography>
      <Typography
        color="secondary"
        component="h5"
        className={userInformationStyles.placeHeadline}
      >
        Кострома
      </Typography>
    </Box>
  );
};

export default UserInformation;
