import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import {auth, db} from "../../../config/"
import {signUpWithEmail} from '../../../helpers/signup'
import { addDoc, collection } from "firebase/firestore";
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
  const submitEmail = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try{
      await signUpWithEmail(email, password)
   }
catch(ex){

}
   finally{
    setOpen(false)
   }
  };
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(value) {
      setOpen(true);
      submitEmail(value);
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
        <DialogActions>{/* <Button>Ok</Button> */}</DialogActions>
      </Dialog>
      <Button fullWidth variant="contained">
        <SignInIcon src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
        Google orqali ro'yhatdan o'tish
      </Button>
      <br />
      <form
        style={{
          textAlign: "center",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          required
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
          required
          placeholder="parol kiriting"
        />
        <Button
          sx={{
            margin: "10px 5px",
          }}
          type="submit"
          variant="outlined"
        >
          Boshlash
        </Button>
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
