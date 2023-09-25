import React, { useState, useEffect } from "react";
import { Stack, Button, Box, Grid } from "@mui/material";
import { FETCH_USER_DATA_URL } from "../../constants";
import axios from "axios";
import UserCard from "./userCard";
import { User } from "../../types";

function UsersInfo() {
  const [users, setUsers] = useState<User[]>([]);

  const handleFetchData = async () => {
    try {
      const response = await axios.get<User[]>(FETCH_USER_DATA_URL);
      setUsers(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <Box className="root">
      <Stack
        gap={4}
        direction="row"
        sx={{ justifyContent: "center", margin: 3 }}
      >
        <Button
          onClick={handleFetchData}
          variant="contained"
          sx={{
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          Fetch Random
        </Button>
      </Stack>

      <Box p={3} mb={4} sx={{ backgroundColor: "#E2F7DB" }}>
        <Grid container spacing={2}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={user?.id}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default UsersInfo;
