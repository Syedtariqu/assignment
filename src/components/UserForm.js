import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useUserFormStore } from "../stores/userFormStore";
import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
  const { userData, setUserData } = useUserFormStore();
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    if (!userData.userId) {
      const generatedUserId = uuidv4();
      setUserData({ ...userData, userId: generatedUserId });
    }
  }, [userData, setUserData]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isFormChanged) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes!";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isFormChanged]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setIsFormChanged(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormChanged(false);
    alert("Data saved successfully!");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h5">User Data Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={userData.name || ""}
        />
        <TextField
          name="address"
          label="Address"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={userData.address || ""}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={userData.email || ""}
        />
        <TextField
          name="phone"
          label="Phone"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={userData.phone || ""}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Save Data
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
