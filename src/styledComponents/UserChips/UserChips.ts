import { Chip, withStyles } from "@material-ui/core";
import { theme } from "../../theme";

export const UserChips = withStyles({
  root: {
    borderRadius: 12,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 69,
    "& .MuiChip-label": {
      paddingLeft: 24,
      paddingRight: 24,
      fontWeight: "bold",
      fontSize: 30,
      [theme.breakpoints.down('md')]: {
        fontSize: 20,
      },
    },
  },
})(Chip);
