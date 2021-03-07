import { Box, Typography } from "@material-ui/core";
import React from "react";
import GroupSection from "../../GroupSection/GroupSection";
import ParagraphText from "../../ParagraphText/ParagraphText";

const FooterContacts = () => {
  return (
    <GroupSection headline="Контакты">
      <>
        <ParagraphText text="Свяжитесь со мной по телефону или в социальных сетях " />
        <Box marginTop={3}>
          <Typography variant="body1">Мой телефон</Typography>
          <Typography variant="body1" color="primary">
            +7(985)544-56-37
          </Typography>
        </Box>
        <Box marginTop={3}>
          <Typography variant="body1">Мои социальные сети</Typography>
          <img
            src="./assets/vk.png"
            width={48}
            style={{ marginTop: 10 }}
            alt="vk_icon"
          />
        </Box>
      </>
    </GroupSection>
  );
};

export default FooterContacts;
