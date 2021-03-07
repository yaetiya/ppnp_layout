import { Box, Typography } from "@material-ui/core";
import React from "react";
import ParagraphText from "../ParagraphText/ParagraphText";
import { IPriceCard } from "./Models";

const PriceCard = ({ price, headline, description }: IPriceCard) => {
  return (
    <Box>
      <Typography
        color="textPrimary"
        style={{ fontWeight: "bold", fontSize: 48 }}
      >
        {price}
      </Typography>
      <Typography
        color="secondary"
        style={{ fontWeight: "bold", fontSize: 24 }}
      >
        {headline}
      </Typography>
      <ParagraphText text={description} fontSize={20} />
    </Box>
  );
};

export default PriceCard;
