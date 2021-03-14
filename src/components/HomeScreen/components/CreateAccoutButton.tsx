import React from "react";
import { Button } from "@material-ui/core";
interface IProps {
  isSmall?: boolean;
}
const CreateAccoutButton = ({ isSmall }: IProps) => {
  return (
    <Button
      endIcon={
        isSmall ? undefined : <img src="./assets/RightArrow.svg" alt="right" />
      }
      style={{
        fontWeight: 700,
        backgroundColor: "#FFF",
        textTransform: "none",
        borderRadius: 30,
        height: isSmall ? 50 : "auto",
        paddingLeft: isSmall ? 26 : 24,
        paddingRight: isSmall ? 26 : 24,
        fontSize: isSmall ? 18 : 24,
        filter: "drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.25))",
      }}
      color="primary"
    >
      Создать аккаунт
    </Button>
  );
};

export default CreateAccoutButton;
