import { Typography } from "@mui/material";
import styled from "styled-components";
const WhiteHole = styled.div`
  width: 30px;
  height: 30px;
  background-color: #d8d8d8;
  border-radius: 50%;
  margin: 50px;
`;
const Container = styled.div`
  margin: 0 10px;
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
        <WhiteHole />
        <WhiteHole />
        <WhiteHole />
        <WhiteHole />
      </ContainerList>
      <ContainerList>
        <WhiteHole />
        <WhiteHole />
        <WhiteHole />
        <WhiteHole />
      </ContainerList>
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
        <WhiteHole />
        <WhiteHole />
        <WhiteHole />
        <WhiteHole />
      </ContainerList>
      <ContainerList>
        <WhiteHole />
        <WhiteHole />
        <WhiteHole />
        <WhiteHole />
      </ContainerList>
    </Container>
  );
};

export default AuthLeftSide;
