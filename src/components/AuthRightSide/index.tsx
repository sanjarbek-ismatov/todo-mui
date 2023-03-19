import { Box, Button, TextField } from "@mui/material";
import styled from "styled-components";
import { useFormik } from "formik";
const SignInIcon = styled.img`
  border-radius: 30px;
  background-color: #fff;
  margin: 5px;
  padding: 5px;
  height: 25px;
`;

const AuthRightSide = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(value) {
      console.log(value);
    },
  });
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
      <Button fullWidth variant="contained">
        <SignInIcon src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
        Google orqali ro'yhatdan o'tish
      </Button>
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          label="Email bilan boshlash"
        />
        <TextField
          fullWidth
          variant="outlined"
          value={values.password}
          type="password"
          name="password"
          onChange={handleChange}
          label="Parol"
          placeholder="parol kiriting"
        />
      </form>
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
