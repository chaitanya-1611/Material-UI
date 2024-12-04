import React from "react";

import Typography from "@mui/material/Typography";

const create = () => {
  return (
    <div>
      <Typography
        variant="h6"
        color="warning"
        component="h2"
        align="center"
        gutterBottom
      >
        Create a New Note
      </Typography>
    </div>
  );
};

export default create;
