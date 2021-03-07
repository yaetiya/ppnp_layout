import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useUserInformationStyles = makeStyles((theme: Theme) =>
  createStyles({
    professionHeadline: {
      fontSize: 32,
      fontWeight: "bold",
      lineHeight: "135%",
    },
    mainHeadline: { fontSize: 64, fontWeight: "bold", lineHeight: "135%" },
    placeHeadline: {
      fontSize: 30,
      fontWeight: 500,
      marginTop: 8,
      lineHeight: "135%",
    },
  })
);
