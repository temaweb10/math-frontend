import MenuIcon from "@mui/icons-material/Menu";

import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Header/Header.module.scss";
function Header() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const navigate = useNavigate("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0px 0px 0px 0px rgba(34, 60, 80, 0.2)",
          borderBottom: "2px solid #f3f3f3",
        }}
      >
        <Toolbar>
          <React.Fragment>
            {/*       <Button onClick={toggleDrawer("left", true)}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleDrawer("left", true)}
              >
                ааа
              </IconButton>
            </Button> */}
            <IconButton
              size="large"
              edge="start"
              color="#111"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              <Box
                sx={{
                  width: "left" === "top" || "left" === "bottom" ? "auto" : 250,
                }}
                role="presentation"
                onClick={toggleDrawer("left", false)}
                onKeyDown={toggleDrawer("left", false)}
                style={{ backgroundColor: "#fff " }}
              >
                <List>
                  {[
                    { title: "Главная", path: "/" },
                    {
                      title: "Система счистления",
                      path: "/calc/system-number",
                    },
                    { title: "Калькулятор процентов", path: "/calc/procent" },
                    {
                      title: "Калькулятор идеального веса",
                      path: "/calc/ideal-weight",
                    },
                  ].map((text, index) => (
                    <div
                      style={{
                        margin: "18px 0px",
                      }}
                    >
                      {" "}
                      <ListItem
                        key={text}
                        disablePadding
                        style={{
                          margin: "12px 10px!important",
                          backgroundColor: "rgb(244 244 244)  ",
                          borderRadius: "12px",
                          padding: "6px",
                          boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
                        }}
                        onClick={() => {
                          navigate(`${text.path}`);
                        }}
                      >
                        <ListItemButton>
                          {/*    <ListItemIcon>
                         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                       </ListItemIcon> */}
                          {/*  <ListItemText
                            primary={text}
                            className={styles["menu-text"]}
                          /> */}
                          <span className={styles["menu-text"]}>
                            {text.title}
                          </span>
                        </ListItemButton>
                      </ListItem>
                    </div>
                  ))}
                </List>
                <Divider />
              </Box>
            </Drawer>
          </React.Fragment>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className={styles["header-logo"]}
          >
            AOMATH
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
