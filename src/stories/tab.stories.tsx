import React, { useState } from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Theme } from "../ui/theme"

import { Header, Tab, Tabs } from '../ui'
import { ShiftStyle } from "../ui"

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
function TabExample() {
    const [versionTabActive, setVersionTabActive] = useState(true)
    const [activityTabActive, setActivityTabActive] = useState(false)
    const [infoTabActive, setInfoTabActive] = useState(false)

    const onClickVersionsTab = () => {
        setVersionTabActive(true)
        setActivityTabActive(false)
        setInfoTabActive(false)
    }
    const onClickActivityTab = () => {
        setVersionTabActive(false)
        setActivityTabActive(true)
        setInfoTabActive(false)
    }
    const onClickInfoTab = () => {
        setVersionTabActive(false)
        setActivityTabActive(false)
        setInfoTabActive(true)
    }

    return (<div>
        <ShiftStyle></ShiftStyle>
        <Header as="h2">Centered Tabs</Header>
        <Tabs align="center">
            <Tab active={versionTabActive} onClick={onClickVersionsTab}><Header>Versions</Header></Tab>
            <Tab active={activityTabActive} onClick={onClickActivityTab}><Header>Activity</Header></Tab>
            <Tab active={infoTabActive} onClick={onClickInfoTab}><Header>Info</Header></Tab>
        </Tabs>
    </div>)
  }

storiesOf('Tabs', module)
    .add('foo', () => {
        return <TabExample></TabExample>

    })