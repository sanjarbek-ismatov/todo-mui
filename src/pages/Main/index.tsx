import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
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

  const [data, setData] = useState<DocumentData[]>([]);
  useEffect(() => {
    getData().then((data) => setData(data.docs.map((e) => e.data())));
  }, []);
  return (
    <List>
      {data?.map((e, i) => (
        <ListItem
          key={i}
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon></ListItemIcon>
            <ListItemText>{e.title}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Main;
