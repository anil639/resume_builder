import { React, useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";

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
  // Initialize the form using useForm hook from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Function to handle form submission
  const onSubmit = (data) => console.log(data);
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
        <Grid container spacing={2}>
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                sx={{ marginTop: "30px", marginRight: "50px" }}
                label="First Name"
                {...register("firstName", {
                  required: "First name is required", // Validation rule for the field
                })}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
              />
              <TextField
                sx={{ marginTop: "30px" }}
                label="Last Name"
                {...register("lastName", {
                  required: "Last name is required", // Validation rule for the field
                })}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px", marginRight: "50px" }}
                label="Email"
                {...register("email", {
                  required: "Email is required", // Validation rule for the field
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address", // Validation rule for email format
                  },
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
              <TextField
                sx={{ marginTop: "30px" }}
                label="Mobile"
                {...register("mobile", {
                  required: "Mobile is required", // Validation rule for the field
                  pattern: {
                    value: /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/,
                    message: "Invalid Mobile Number", // Validation rule for number format
                  },
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px" }}
                label="Address"
                fullWidth
                {...register("address", {
                  required: "Address is required", // Validation rule for the field
                })}
                error={Boolean(errors.address)}
                helperText={errors.address?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px", marginRight: "50px" }}
                label="City"
                {...register("city", {
                  required: "City is required", // Validation rule for the field
                })}
                error={Boolean(errors.city)}
                helperText={errors.city?.message}
              />
              <TextField
                sx={{ marginTop: "30px" }}
                label="State"
                {...register("state", {
                  required: "State is required", // Validation rule for the field
                })}
                error={Boolean(errors.state)}
                helperText={errors.state?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px" }}
                label="Postal Code"
                {...register("postalCode", {
                  required: "Postal code is required", // Validation rule for the field
                })}
                error={Boolean(errors.postalCode)}
                helperText={errors.postalCode?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px" }}
                label="Objective"
                fullWidth
                multiline
                rows={4}
                {...register("objective", {
                  required: "Objective is required", // Validation rule for the field
                })}
                error={Boolean(errors.objective)}
                helperText={errors.objective?.message}
              />
            </div>
            <Divider style={{ width: "100%" }} />
            <div style={{ marginTop: "25px", float: "right" }}>
              <Button variant="outlined" sx={{ marginRight: "10px" }}>
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </div>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default PersionalInfo;
