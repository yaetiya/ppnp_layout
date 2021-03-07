import { Box } from "@material-ui/core";
import React from "react";
import { UserChips } from "../../../../styledComponents/UserChips/UserChips";

const userSkills = [
  "10 лет опыта",
  "Чемпион мира",
  "15 вариантов тортов",
  "Собственная пекарня",
];

const UserSkills = () => {
  return (
    <Box>
      {userSkills.map((skill, index) => (
        <UserChips
          key={index}
          label={skill}
          style={{ marginRight: 24, marginBottom: 20 }}
        />
      ))}
    </Box>
  );
};

export default UserSkills;
