import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { isFunction } from "lodash";

interface IProps {
  text: string;
  onClick?: () => void;
}

const TopNavbarMenuItem = ({ text, onClick }: IProps) => {
  const clickHandler = () => {
    isFunction(onClick) && onClick();
  };
  return (
    <Box marginY={3}>
      <Button
        onClick={clickHandler}
        variant="text"
        style={{
          textTransform: "none",
          marginRight: 18,
        }}
      >
        <Typography
          variant="body2"
          style={{ fontSize: 18, fontWeight: 600, color: "#FFF" }}
        >
          {text}
        </Typography>
      </Button>
    </Box>
  );
};

export default TopNavbarMenuItem;
