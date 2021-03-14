import { Box, Container, Grid, GridSize, Typography } from "@material-ui/core";
import React from "react";

interface IProps {
  headline: string;
  text: string;
  children: React.ReactNode;
  leftPartW?: GridSize;
  rightPartW?: GridSize;
  isLeftText?: boolean;
}

const LandingSection = ({
  headline,
  text,
  children,
  leftPartW = 6,
  rightPartW = 6,
  isLeftText = true,
}: IProps) => {
  const content = (val: boolean) =>
    val ? (
      <Box textAlign={isLeftText ? "left" : "right"}>
        <Typography
          variant="h4"
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            whiteSpace: "pre-line",
            color: isLeftText ? "#FFFFFF" : "#191E34",
          }}
        >
          {headline}
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            fontSize: 30,
            fontWeight: 300,
            color: isLeftText ? "#FFFFFF" : "#191E34",
          }}
        >
          {text}
        </Typography>
      </Box>
    ) : (
      <>{children} </>
    );
  return (
    <Box
      minHeight={"300px"}
      style={{
        backgroundColor: isLeftText ? "initial" : "#FFF",
      }}
    >
      <Container style={{ paddingTop: 200, paddingBottom: 200 }}>
        <Box>
          <Grid container spacing={0}>
            <Grid item lg={leftPartW} md={12}>
              {content(isLeftText)}
            </Grid>
            <Grid item lg={rightPartW} md={12}>
              {content(!isLeftText)}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingSection;
