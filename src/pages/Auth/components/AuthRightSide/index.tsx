import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, googleAuthProvider } from "../../../../config";
const SignInIcon = styled.img`
  border-radius: 30px;
  background-color: #fff;
  margin: 5px;
  padding: 5px;
  height: 25px;
`;

const AuthRightSide = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Biroz kuting. Yuklanmoqda...");
  const handleSign = () => {
    setOpen(true)
    signInWithPopup(auth, googleAuthProvider).then(user => setOpen)
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 50px",
      }}
    >
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Hello</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "550px",
            }}
          >
            <Box sx={{ marginRight: "10px" }}>
              <CircularProgress />
            </Box>
            <Typography>{message}</Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Button onClick={handleSign} fullWidth variant="contained" color="info">
        <SignInIcon src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
        Google orqali ro'yhatdan o'tish
      </Button>
      <br />
      <Button fullWidth variant="contained" color="secondary">
        <SignInIcon src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />{" "}
        Github orqali davom etish
      </Button>
      <br />
      <Button fullWidth variant="contained" color="primary">
        <SignInIcon src="https://cdn-icons-png.flaticon.com/512/124/124010.png" />{" "}
        FaceBook orqali davom etish
      </Button>
    </Box>
  );
};

export default AuthRightSide;
