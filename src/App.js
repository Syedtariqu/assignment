import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";

const theme = createTheme();

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Assignment
            </Typography>
            {isMobile ? (
              <>
                <Button color="inherit" onClick={() => toggleDrawer(true)}>
                  Menu
                </Button>
                <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
                  <List>
                    <ListItem button component={Link} to="/" onClick={() => toggleDrawer(false)}>
                      Counter
                    </ListItem>
                    <ListItem button component={Link} to="/form" onClick={() => toggleDrawer(false)}>
                      User Form
                    </ListItem>
                    <ListItem button component={Link} to="/editor" onClick={() => toggleDrawer(false)}>
                      Rich Text Editor
                    </ListItem>
                  </List>
                </Drawer>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/">
                  Counter
                </Button>
                <Button color="inherit" component={Link} to="/form">
                  User Form
                </Button>
                <Button color="inherit" component={Link} to="/editor">
                  Rich Text Editor
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
