import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { db } from "../../config";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
async function getData() {
  const data = await getDocs(collection(db, "todos"));
  return data;
}
const Main = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [data, setData] = useState<QuerySnapshot<DocumentData>>();
  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);
  return (
    <Container>
      <TextField label="Bugun nima ish qilmoqchisiz?" fullWidth />
      <Button variant="contained">Ro'yhatga qo'shish</Button>

      {data?.docs.map((e) => (
        <>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {e.data().title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{e.data().description}</Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </Container>
  );
};

export default Main;
