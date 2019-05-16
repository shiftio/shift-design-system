import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { render } from "react-dom";
import { Header, ShiftStyle, Box} from "./ui";
import { TabsExamples } from "./examples/tabs/TabsExamples"

function App() {
  return (
    <div className="App" >
      <Router>
        <div>
          <ShiftStyle></ShiftStyle>
          <Box wrapItems style={{minHeight:"30rem"}}>
            <Box style={{minWidth: "100%"}}>
              <Header as="h1">Controls</Header>
            </Box>
            <Box><Link to={`/tabs-examples`}><Header>Avatar</Header></Link></Box>
            <Box><Link to={`/tabs-examples`}><Header>Button</Header></Link></Box>
            <Box><Link to={`/tabs-examples`}><Header>Text Input</Header></Link></Box>
            <Box><Link to={`/tabs-examples`}><Header>Tabs</Header></Link></Box>
          </Box>
          <main>
            <Route exact path="/tabs-examples" component={TabsExamples} />
          </main>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
