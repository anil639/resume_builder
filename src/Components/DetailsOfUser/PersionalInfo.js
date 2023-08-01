import { React, useState } from "react";
import { Paper, Grid, Typography, Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
const PersionalInfo = () => {
  const [image, setImage] = useState(null);

  //This function is called when user select a img
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          padding: "20mm",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <Grid container>
          <Grid xs={12} md={12}>
            <Avatar sx={{ height: "150px", width: "150px" }} src={image} />
            <input
              accept="image/*"
              id="avatar-upload"
              type="file"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <label htmlFor="avatar-upload" style={{ position: "absolute" }}>
              <Typography color="primary" marginLeft="5px">
                change Profile Photo
              </Typography>
            </label>
          </Grid>
          <Grid xs={12} md={6}></Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default PersionalInfo;
