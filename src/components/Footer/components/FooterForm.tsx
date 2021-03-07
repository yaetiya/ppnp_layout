import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { ContactFormInput } from "../../../styledComponents/ContactFormInput/ContactFormInput";

const FooterForm = () => {
  return (
    <Paper elevation={0} style={{ padding: 34 }}>
      <Box>
        <form>
          <Box>
            <ContactFormInput
              fullWidth
              type="text"
              label="Как Вас зовут?"
              name="headline"
              autoComplete="off"
              variant="filled"
            />
          </Box>
          <Box paddingTop={3}>
            <ContactFormInput
              fullWidth
              type="text"
              label="Ваш телефон"
              name="headline"
              autoComplete="off"
              variant="filled"
            />
          </Box>
          <Box paddingTop={3}>
            <ContactFormInput
              fullWidth
              type="text"
              label="Ваша почта"
              name="headline"
              autoComplete="off"
              variant="filled"
            />
          </Box>
          <Box paddingTop={3}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
              style={{ height: 66, borderRadius: 12, textTransform: "none" }}
              disableRipple
            >
              <Typography
                style={{ fontWeight: "bold", color: "#FFF", fontSize: 24 }}
              >
                Отправить
              </Typography>
            </Button>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};

export default FooterForm;
