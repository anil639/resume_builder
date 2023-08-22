import React from "react";
import { Paper, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const TemplateTwo = () => {
  //using useSelector hook to access data from redux store
  let updateInfo = useSelector((state) => state.Update_info); //for Personal Info
  let UpdateWork = useSelector((state) => state.Update_work.works || []); //For work Experience
  let updateEducation = useSelector((state) => state.Update_education || []); //for education Details
  let updateSkill = useSelector((state) => state.Update_skill.skills || []); //For skills

  return (
    <div>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "100%",
            padding: "20mm",

            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <Grid container spacing={1}>
            <Grid xs={8}>
              <Typography variant="h3">{`${updateInfo.firstName} ${updateInfo.lastName}`}</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography variant="p">{`${updateInfo.address}`}</Typography>
              <br />
              <Typography variant="p">{`City:${updateInfo.city}`}</Typography>
              <br />
              <Typography variant="p">{`State:${updateInfo.state}`}</Typography>
              <br />
              <Typography variant="p">{`Pin:${updateInfo.postalCode}`}</Typography>
              <br />
              <Typography variant="p">{`Email:${updateInfo.email}`}</Typography>
              <br />
              <Typography variant="p">{`Mob:${updateInfo.mobile}`}</Typography>
              <br />
            </Grid>

            <Grid
              xs={8}
              sx={{
                backgroundColor: "#F5B1A2",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Objective</Typography>
            </Grid>

            <Grid xs={1} sx={{ marginTop: "15px" }}></Grid>
            <Grid
              xs={3}
              sx={{
                backgroundColor: "#F5B1A2",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Skills</Typography>
            </Grid>
            <Grid
              xs={8}
              sx={{ marginTop: "10px" }}
            >{`${updateInfo.objective}`}</Grid>

            <Grid xs={1} sx={{ marginTop: "10px" }}></Grid>
            <Grid xs={3} sx={{ marginTop: "10px" }}>
              {updateSkill.map((skill, index) => (
                <Typography variant="body1" key={index}>
                  {skill.name}
                </Typography>
              ))}
            </Grid>
            <Grid
              xs={8}
              sx={{
                backgroundColor: "#F5B1A2",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Work Experience</Typography>
            </Grid>
            <Grid xs={1} sx={{ marginTop: "15px" }}></Grid>
            <Grid xs={3} sx={{ marginTop: "15px" }}></Grid>
            <Grid xs={8}>
              {UpdateWork.map((work, index) => (
                <div key={index}>
                  <p>Company: {work.company}</p>
                  <p>Position: {work.position}</p>
                  <p>Start Year: {work.startYear}</p>
                  <p>End Year: {work.endYear}</p>
                </div>
              ))}
            </Grid>
            <Grid xs={1} sx={{ marginTop: "15px" }}></Grid>
            <Grid xs={3} sx={{ marginTop: "15px" }}></Grid>
            <Grid
              xs={8}
              sx={{
                backgroundColor: "#F5B1A2",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Education Details</Typography>
            </Grid>
            <Grid xs={1} sx={{ marginTop: "15px" }}></Grid>
            <Grid xs={3} sx={{ marginTop: "15px" }}></Grid>
          </Grid>
          <Grid xs={12} sx={{ marginTop: "15px" }}>
            <Typography variant="p">{`University:${updateEducation.university}`}</Typography>
            <br />
            <Typography variant="p">{`Degree:${updateEducation.degree}`}</Typography>
            <br />
            <Typography variant="p">{`Course:${updateEducation.type}`}</Typography>
            <br />
            <Typography variant="p">{`Start Year:${updateEducation.startYear}`}</Typography>
            <br />
            <Typography variant="p">{`End Year:${updateEducation.endYear}`}</Typography>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default TemplateTwo;
