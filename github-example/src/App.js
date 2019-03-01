import React from "react";
import { connect } from "react-redux";

import AppShell from "./AppShell";
import TopBar from "./components_bak/TopBar";

// Contains 'Home', 'User', 'About, and 'NotFound'
import * as components from "./components";

const App = ({ page }) => {
  const PageComponent = components[page];
  return <AppShell Content={PageComponent} TopBar={TopBar} />;
};

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(App);
