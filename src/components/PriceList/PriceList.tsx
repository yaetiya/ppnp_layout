import { Box, Grid } from "@material-ui/core";
import React from "react";
import GroupSection from "../GroupSection/GroupSection";
import { IPriceCard } from "../PriceCard/Models";
import PriceCard from "../PriceCard/PriceCard";

const items: IPriceCard[] = [
  {
    price: "2000р",
    headline: "Починить раковину",
    description:
      "Механическое устранение засоров, электронная диагностика причины засоров",
  },
  {
    price: "2000р",
    headline: "Починить раковину",
    description:
      "Механическое устранение засоров, электронная диагностика причины засоров",
  },
  {
    price: "2000р",
    headline: "Починить раковину",
    description:
      "Механическое устранение засоров, электронная диагностика причины засоров",
  },
  {
    price: "2000р",
    headline: "Починить раковину",
    description:
      "Механическое устранение засоров, электронная диагностика причины засоров",
  },
];

const PriceList = () => {
  return (
    <GroupSection headline="Прайс-лист">
      <Grid container spacing={5}>
        {items.map((item, index) => (
          <Grid item lg={3} md={6} xs={12} key={index}>
            <Box marginTop={3}>
              <PriceCard {...item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </GroupSection>
  );
};

export default PriceList;
