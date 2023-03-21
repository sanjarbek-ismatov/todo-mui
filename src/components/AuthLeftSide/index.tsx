import { Box, Typography } from "@mui/material";
import styled from "styled-components";
const WhiteHole = styled.div`
  width: 30px;
  height: 30px;
  background-color: #d8d8d8;
  border-radius: 50%;
  margin: 50px;
`;
const Container = styled.div`
  margin: 0 50px 0 0;
`;

const AuthLeftSide = () => {
  return (
    <Container>
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h2"
          gutterBottom
        >
          ToDoga a'zo bo'ling
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "divider",
          }}
        ></Box>
      </Box>
      <Box>
        <Typography
          sx={{
            margin: "10px auto",
            color: "text.secondary",
          }}
          variant="h4"
        >
          Hoziroq boshlang
        </Typography>
      </Box>
    </Container>
  );
};

export default AuthLeftSide;
