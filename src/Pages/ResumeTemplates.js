import { React, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";

const ResumeTemplates = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Container>
        <Typography variant="h3" marginTop="50px">
          Templates
        </Typography>
        <Typography variant="h6" marginBottom={5}>
          Select a Template to get Started
        </Typography>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Card
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                maxWidth: 345,
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                image="https://media.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
              ></CardMedia>
              {isHovered && (
                <Link to="/DetailsFillng">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      whiteSpace: "nowrap",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Use Template
                  </Button>
                </Link>
              )}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ResumeTemplates;
