import { Box, Button, TextField } from "@mui/material";
import styled from "styled-components";

const SignInIcon = styled.img`
  border-radius: 30px;
  background-color: #fff;
  margin: 5px;
  padding: 5px;
  height: 25px;
`;

const AuthRightSide = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 10px",
      }}
    >
      <Button variant="contained">
        <SignInIcon src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
        Google orqali ro'yhatdan o'tish
      </Button>
      <br />
      <TextField
        sx={{
          width: "100%",
        }}
        variant="outlined"
        placeholder="Email"
        label="Email bilan boshlash"
      />
      <Box
        sx={{
          margin: "17px",
        }}
      >
        Yoki
      </Box>
      <Button variant="contained" color="secondary">
        <SignInIcon src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />{" "}
        Github orqali davom etish
      </Button>
    </Box>
  );
};

export default AuthRightSide;
