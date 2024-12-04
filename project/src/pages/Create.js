import React from "react";
import { Button, Container} from "@mui/material";
import Typography from "@mui/material/Typography";


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

      <Button type="submit" color="error" variant="contained">Submit</Button>
    </Container>
  );
};

export default create;
