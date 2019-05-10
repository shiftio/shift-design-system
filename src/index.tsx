import React, { useState } from "react";
import { render } from "react-dom";
// import styled from "@emotion/styled";
import { TextInput, Avatar, Button, Grid, GridItem, Icon, Modal} from "./ui";
// import styled from "styled-components";

function App() {

  const [open, setOpen] = useState(false)
  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div className="App" >
      <Icon name="add"></Icon>
      <Icon name="arrow-drop-down"></Icon>
      <Icon name="arrow-forward"></Icon>
      <Icon name="aspect-ratio"></Icon>
      <Icon name="back-arrow"></Icon>
      <Icon name="check"></Icon>
      <Icon name="close"></Icon>
      <Icon name="delete"></Icon>
      <Icon name="download"></Icon>
      <Icon name="download-cloud"></Icon>
      <Icon name="eraser"></Icon>
      <Icon name="filter"></Icon>
      <Icon name="flag"></Icon>
      <Icon name="open-folder"></Icon>
      <Icon name="closed-folder"></Icon>
      <Icon name="forward"></Icon>
      <Icon name="halt"></Icon>
      <Icon name="heart"></Icon>
      <Icon name="info-outline"></Icon>
      <Icon name="open-library"></Icon>
      <Icon name="library-feed"></Icon>
      <Icon name="list"></Icon>
      <Icon name="masonry"></Icon>
      <Icon name="minus"></Icon>
      <Icon name="mode-comment"></Icon>
      <Icon name="mode-edit"></Icon>
      <Icon name="more"></Icon>
      <Icon name="more-vert"></Icon>
      <Icon name="notification"></Icon>
      <Icon name="people"></Icon>
      <Icon name="person"></Icon>
      <Icon name="play"></Icon>
      <Icon name="plug"></Icon>
      <Icon name="plus"></Icon>
      <Icon name="present"></Icon>
      <Icon name="projects"></Icon>
      <Icon name="search"></Icon>
      <Icon name="send"></Icon>
      <Icon name="sent"></Icon>
      <Icon name="settings"></Icon>
      <Icon name="settings-large"></Icon>
      <Icon name="subscriptions"></Icon>
      <Icon name="tag"></Icon>
      <Icon name="thumbs-up"></Icon>
      <Icon name="view"></Icon>

      {/* <Button onClick={()=>{setOpen(true)}}>Open Modal</Button>
      {open ? <Modal xs onClose={closeModal} closeOnBlur={true}>Foo</Modal> : ""} */}
      {/* <Grid columns={['sm', 'md', 'lg']} rows={['sm', 'md']} areas={[{name: "foo", start: [0, 0], end: [2, 1]}]}>
        <GridItem area="foo" style={{backgroundColor: "yellow"}}>Foo</GridItem></Grid>
      <Avatar initials="MD" size="xs"></Avatar>
      <hr></hr> */}
      {/* <Button lg >Save</Button> */}
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

      {/* <hr></hr> */}
      {/* <TextInput></TextInput> */}

    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
