import { Typography } from "@material-ui/core";
import React from "react";
import { IGalleryCard } from "../Models";

const GalleryCard = ({ headline, imageUrl, date }: IGalleryCard) => {
  return (
    <div
      className="gallery-card-wrapper"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="gallery-card-content">
        <Typography style={{ fontWeight: "bold", fontSize: 24, color: "#FFF" }}>
          {headline}
        </Typography>
        <Typography style={{ fontWeight: 500, fontSize: 20, color: "#FFF" }}>
          {date}
        </Typography>
      </div>
    </div>
  );
};

export default GalleryCard;
