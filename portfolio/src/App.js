import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavigationBar";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import  theme  from "./theme";
function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact />
            <Route path="/work" exact />
            <Route path="/resume" exact />
            <Route path="/contact" exact />
          </Switch>
        </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
