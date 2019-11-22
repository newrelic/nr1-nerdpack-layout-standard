import React from "react";
import {
  Grid,
  GridItem,
  Stack,
  StackItem,
  Dropdown,
  DropdownItem,
  TextField,
  Button,
  TableChart
} from "nr1";

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class NerdpackLayoutStandard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Stack
          className="toolbar-container"
          fullWidth
          gapType={Stack.GAP_TYPE.NONE}
          horizontalType={Stack.HORIZONTAL_TYPE.FILL_EVENLY}
          verticalType={Stack.VERTICAL_TYPE.FILL}
        >
          <StackItem className="toolbar-section1">
            <Stack
              gapType={Stack.GAP_TYPE.NONE}
              fullWidth
              verticalType={Stack.VERTICAL_TYPE.FILL}
            >
              <StackItem className="toolbar-item has-separator">
                <Dropdown label="Dropdown" title="Choose an option">
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                </Dropdown>
              </StackItem>
              <StackItem className="toolbar-item has-separator">
                <TextField
                  label="Search"
                  placeholder="e.g. example query"
                ></TextField>
              </StackItem>
            </Stack>
          </StackItem>
          <StackItem className="toolbar-section2">
            <Stack
              fullWidth
              fullHeight
              verticalType={Stack.VERTICAL_TYPE.CENTER}
              horizontalType={Stack.HORIZONTAL_TYPE.RIGHT}
            >
              <StackItem>
                <Button
                  onClick={() => alert("You clicked me!")}
                  type={Button.TYPE.PRIMARY}
                >
                  Primary button
                </Button>
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>
        <Grid
          className="primary-grid"
          spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
        >
          <GridItem className="sidebar-container" columnSpan={3}>
            <ul className="sidebar-list">
              {/* Create an array that we'll use to display a bunch of list items */}
              {Array.from(Array(100).keys()).map(item => {
                return <li className="sidebar-list-item">List item {item}</li>;
              })}
            </ul>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={9}>
            <main className="primary-content">
              <h2>Your lovely content goes here</h2>

              <p>
                Etiam porta sem malesuada magna mollis euismod. Integer posuere
                erat a ante venenatis dapibus posuere velit aliquet. Aenean
                lacinia bibendum nulla sed consectetur. Integer posuere erat a
                ante venenatis dapibus posuere velit aliquet. Integer posuere
                erat a ante venenatis dapibus posuere velit aliquet. Aenean eu
                leo quam.
              </p>

              <ul>
                <li>Curabitur blandit tempus porttitor.</li>
                <li>Magna Fusce Cursus Nibh</li>
                <li>
                  Cras mattis consectetur purus sit amet fermentum. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                </li>
              </ul>

              <p>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Duis
                mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Nullam quis risus eget urna mollis ornare vel eu leo. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
                Donec sed odio dui. Cras mattis consectetur purus sit amet
                fermentum. Integer posuere erat a ante venenatis dapibus posuere
                velit aliquet. Curabitur blandit tempus porttitor. Curabitur
                blandit tempus porttitor. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus.
              </p>
            </main>
          </GridItem>
        </Grid>
      </React.Fragment>
    );
  }
}
