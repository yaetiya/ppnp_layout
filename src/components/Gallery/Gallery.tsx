import { Box, Grid } from "@material-ui/core";
import React from "react";
import GroupSection from "../GroupSection/GroupSection";
import GalleryCard from "./components/GalleryCard";
import { IGalleryCard } from "./Models";
import "./styles.css";

const items: IGalleryCard[] = [
  {
    headline: "Починил раковину",
    date: "20.09.2019",
    imageUrl: "./assets/prev.png",
  },
  {
    headline: "Починил раковину",
    date: "20.09.2019",
    imageUrl: "./assets/prev.png",
  },
  {
    headline: "Починил раковину",
    date: "20.09.2019",
    imageUrl: "./assets/prev.png",
  },
];

const Gallery = () => {
  return (
    <GroupSection headline="Галерея">
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item lg={4} md={12}>
            <Box marginTop={3}>
              <GalleryCard {...item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </GroupSection>
  );
};

export default Gallery;
