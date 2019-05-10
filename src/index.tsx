import * as React from "react";
import { render } from "react-dom";
// import styled from "@emotion/styled";
import { TextInput, Avatar, Button, ButtonProps, Share, Grid, GridItem, Modal} from "./ui";
// import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Modal>Foo</Modal>
      <Grid columns={['sm', 'md', 'lg']} rows={['sm', 'md']} areas={[{name: "foo", start: [0, 0], end: [2, 1]}]}>
        <GridItem area="foo" style={{backgroundColor: "yellow"}}>Foo</GridItem></Grid>
      <Avatar initials="MD" size="xs"></Avatar>
      <hr></hr>
      <Button xs outline={true}>Foo</Button>
      {/* <Button sm>Foo</Button>
      <Button md>Foo</Button>
      <Button lg>Foo</Button>
      <Button xl>Foo</Button>
      <hr></hr>
      <Button xs outline>Foo</Button>
      <Button sm outline>Foo</Button>
      <Button md outline>Foo</Button>
      <Button lg outline>Foo</Button>
      <Button xl outline>Foo</Button>
      <hr></hr>
      <Button xs disabled>Foo</Button>
      <Button sm disabled>Foo</Button>
      <Button md disabled>Foo</Button>
      <Button lg disabled>Foo</Button>
      <Button xl disabled>Foo</Button>
      <hr></hr>
      <hr></hr>
      <Button xs type="warning">Foo</Button>
      <Button sm type="warning">Foo</Button>
      <Button md type="warning">Foo</Button>
      <Button lg type="warning">Foo</Button>
      <Button xl type="warning">Foo</Button> */}
      <Button></Button>

      <hr></hr>
      <TextInput></TextInput>

    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
