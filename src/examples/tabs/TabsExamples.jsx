import React, { useState } from "react";
import { Header, Icon, ShiftStyle, Tabs, Tab } from "../../ui"
import { render } from "react-dom";

function TabsExamples() {

  const [versionsTabSelected, setVersionsTabSelected] = useState(true)
  const [activityTabSelected, setActivityTabSelected] = useState(false)
  const [infoTabSelected, setInfoTabSelected] = useState(false)

  const onClickVersionsTab = () => {
    setVersionsTabSelected(true)
    setActivityTabSelected(false)
    setInfoTabSelected(false)
  }

  const onClickActivityTab = () => {
    setVersionsTabSelected(false)
    setActivityTabSelected(true)
    setInfoTabSelected(false)
  }

  const onClickInfoTab = () => {
    setVersionsTabSelected(false)
    setActivityTabSelected(false)
    setInfoTabSelected(true)
  }

  return (
    <div className="App">
      <ShiftStyle></ShiftStyle>
      <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Header>Small Tabs</Header>
        <Tabs align="center">
            <Tab xs active={versionsTabSelected} onClick={onClickVersionsTab}><Header as="h5">Versions</Header></Tab>
            <Tab xs active={activityTabSelected} onClick={onClickActivityTab}><Header as="h5">Activity</Header></Tab>
            <Tab xs active={infoTabSelected} onClick={onClickInfoTab}><Header as="h5">Info</Header></Tab>
        </Tabs>
      </div>
      <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Header>Large Tabs</Header>
        <Tabs align="center">
            <Tab lg active={versionsTabSelected} onClick={onClickVersionsTab}><Header as="h5">Versions</Header></Tab>
            <Tab lg active={activityTabSelected} onClick={onClickActivityTab}><Header as="h5">Activity</Header></Tab>
            <Tab lg active={infoTabSelected} onClick={onClickInfoTab}><Header as="h5">Info</Header></Tab>
        </Tabs>
      </div>
      <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Header>Tabs That Fill</Header>
        <Tabs align="center">
            <Tab lg fill active={versionsTabSelected} onClick={onClickVersionsTab}><Header as="h5">Versions</Header></Tab>
            <Tab lg fill active={activityTabSelected} onClick={onClickActivityTab}><Header as="h5">Activity</Header></Tab>
            <Tab lg fill active={infoTabSelected} onClick={onClickInfoTab}><Header as="h5">Info</Header></Tab>
        </Tabs>
      </div>
      <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Header>Centered Tabs</Header>
        <Tabs align="center">
            <Tab md active={versionsTabSelected} onClick={onClickVersionsTab}><Header as="h5">Versions</Header></Tab>
            <Tab md active={activityTabSelected} onClick={onClickActivityTab}><Header as="h5">Activity</Header></Tab>
            <Tab md active={infoTabSelected} onClick={onClickInfoTab}><Header as="h5">Info</Header></Tab>
        </Tabs>
      </div>

      <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Header>Right Aligned Tabs</Header>
        <Tabs align="end">
            <Tab md active={versionsTabSelected} onClick={onClickVersionsTab}><Header as="h5">Versions</Header></Tab>
            <Tab md active={activityTabSelected} onClick={onClickActivityTab}><Header as="h5">Activity</Header></Tab>
            <Tab md active={infoTabSelected} onClick={onClickInfoTab}><Header as="h5">Info</Header></Tab>
        </Tabs>
      </div>

      <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Header>Left Aligned Tabs</Header>
        <Tabs align="start">
            <Tab md active={versionsTabSelected} onClick={onClickVersionsTab}><Header as="h5">Versions</Header></Tab>
            <Tab md active={activityTabSelected} onClick={onClickActivityTab}><Header as="h5">Activity</Header></Tab>
            <Tab md active={infoTabSelected} onClick={onClickInfoTab}><Header as="h5">Info</Header></Tab>
        </Tabs>
      </div>

      <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Header>Icon Tabs</Header>
        <Tabs align="center">
            <Tab md><Icon name="settings" sm></Icon></Tab>
            <Tab md active={infoTabSelected}><Icon name="people" sm></Icon></Tab>
        </Tabs>
      </div>
    </div>

  );
};

const rootElement = document.getElementById("root");
render(<TabsExamples />, rootElement);