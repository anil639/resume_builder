import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import VerticalTabs from "../Components/VerticalTabs/VerticalTabs";
import PersionalInfo from "../Components/DetailsOfUser/PersionalInfo";
const DetailsFillng = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <VerticalTabs />
          </Grid>
          <Grid item xs={12} md={8}>
            <PersionalInfo />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DetailsFillng;
