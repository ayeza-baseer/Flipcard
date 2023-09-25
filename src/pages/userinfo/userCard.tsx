import React from "react";
import { Typography, Stack } from "@mui/material";
import FlipCard from "../../components/FlipCard";
import { User } from "../../types";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <FlipCard
      frontContent={
        <Stack
          sx={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ maxWidth: "50%" }}
            src={user?.avatar}
            alt="user profile"
          />
          <Typography gutterBottom sx={{ mt: "10px", fontWeight: "bold" }}>
            {`${user?.first_name} ${user.last_name}`}
          </Typography>
          <Typography>{user.employment.title}</Typography>
        </Stack>
      }
      backContent={
        <Stack
          sx={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mt: "5px", fontWeight: "bold" }}
          >
            More Information Here
          </Typography>
          <Typography gutterBottom>{user?.email}</Typography>
          <Typography gutterBottom>{user.gender}</Typography>
          <Typography gutterBottom>{user.phone_number}</Typography>
          <Typography gutterBottom>{user.date_of_birth}</Typography>
        </Stack>
      }
    />
  );
}

export default UserCard;
