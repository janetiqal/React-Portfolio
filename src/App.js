import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavigationBar";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import  theme  from "./theme.js";

import HomePage from "./Pages/Home";
import WorkPage from "./Pages/Work";
import ResumePage from "./Pages/Resume";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/work" exact component={WorkPage}/>
            <Route path="/resume" exact component={ResumePage}/>
            <Route path="/contact" exact  component={ContactPage}/>
          </Switch>
        </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
