import { Typography } from "@material-ui/core";
import React from "react";
import { IParagraphText } from "./Models";

const ParagraphText = ({ text, fontSize }: IParagraphText) => {
  return (
    <Typography
      color="secondary"
      style={{
        fontSize: fontSize || 24,
        fontWeight: 500,
      }}
    >
      {text}
    </Typography>
  );
};

export default ParagraphText;
