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
const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AuthLeftSide = () => {
  return (
    <Container>
      <ContainerList>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h3"
          gutterBottom
        >
          TODOGA A'ZO BO'LING
        </Typography>
      </ContainerList>
      <ContainerList>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "text.primary",
          }}
        ></Box>
      </ContainerList>
      <ContainerList>
        <Typography
          sx={{
            margin: "10px auto",
          }}
          variant="h4"
        >
          Hoziroq boshlang
        </Typography>
      </ContainerList>
    </Container>
  );
};

export default AuthLeftSide;
