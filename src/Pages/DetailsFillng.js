import { React, useState } from "react";
import { Grid, Container } from "@mui/material";
import VerticalTabs from "../Components/VerticalTabs/VerticalTabs";
import TabContent from "../Components/DetailsOfUser/TabContent";
const DetailsFillng = () => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);
  //funtion to handle tab change
  const handleChange = (e, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <VerticalTabs activeTab={activeTab} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={8}>
            <TabContent activeTab={activeTab} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DetailsFillng;
