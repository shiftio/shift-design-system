import * as React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";
import { TextInput, Avatar, Button } from "./ui";
// import styled from "styled-components";

const I = ({ className }) => (
  <input className={className} placeholder="Why You No Worky?" />
);

function App() {
  return (
    <div className="App">
      <TextInput placeHolder="Foo" name="bam" />

      <Avatar initials="MD" size="sm" source="https://picsum.photos/200/300" />
      <Button size="xs">Foo</Button>
      <Button size="sm">Foo</Button>
      <Button size="md">Foo</Button>
      <Button size="lg">Foo</Button>
      <Button size="xl">Foo</Button>
      <hr></hr>
      <Button size="xs" disabled>Foo</Button>
      <Button size="sm" disabled>Foo</Button>
      <Button size="md" disabled>Foo</Button>
      <Button size="lg" disabled>Foo</Button>
      <Button size="xl" disabled>Foo</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
