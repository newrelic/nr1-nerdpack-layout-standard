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
              <StackItem className="toolbar-item">
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
              {Array.from(Array(50).keys()).map(item => {
                return <li className="sidebar-list-item">List item {item}</li>;
              })}
            </ul>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={9}>
            <main className="primary-content full-height">
              <Stack
                className="empty-state"
                fullWidth
                fullHeight
                verticalType={Stack.VERTICAL_TYPE.CENTER}
                horizontalType={Stack.HORIZONTAL_TYPE.CENTER}
                directionType={Stack.DIRECTION_TYPE.VERTICAL}
                gapType={Stack.GAP_TYPE.NONE}
              >
                <StackItem>
                  <h4 className="empty-state-header">
                    Place your content here
                  </h4>
                </StackItem>
                <StackItem>
                  <p className="empty-state-description">
                    Open up
                    <code>nerdpack-layout-standard-nerdlet/index.js</code> and
                    replace the <code>.empty-state</code> div with your content.
                    Have suggestions, concerns, or ideas for how this template
                    could be better?{" "}
                    <a href="https://github.com/newrelic/nr1-nerdpack-layout-standard">
                      Submit an issue or PR :)
                    </a>
                    .
                  </p>
                </StackItem>
              </Stack>
            </main>
          </GridItem>
        </Grid>
      </React.Fragment>
    );
  }
}
