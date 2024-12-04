import React from "react";
import { Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';





const create = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button type="submit" variant="contained" endIcon={<KeyboardArrowRightIcon/>}>
        Submit
      </Button>
    </Container>
  );
};

export default create;
