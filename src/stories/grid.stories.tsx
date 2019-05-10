import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Theme } from "./../"

import { Grid, GridItem } from '../ui'

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

storiesOf('Grid', module)
    .add('foo', () => (
        <div>
            <Grid
                columns={5}
                rows={5}
                areas={[
                    {name: "Header", start: [0, 0], end: [4, 0]},
                    {name: "Nav", start: [0, 1], end: [0, 4]},
                    {name: "Main", start: [1, 1], end: [4, 4]}]}>
                <GridItem area="Header" style={{backgroundColor: "yellow"}}>Header!</GridItem>
                <GridItem area="Nav" style={{backgroundColor: "green"}}>Nav!</GridItem>
                <GridItem area="Main" style={{backgroundColor: "blue"}}>Main!</GridItem>
            </Grid>
        </div>
    ))