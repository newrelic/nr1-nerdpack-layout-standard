import React from 'react';
import PropTypes from 'prop-types';
import { Stack, StackItem } from 'nr1';

export default class EmptyState extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { heading, description } = this.props;
    return (
      <>
        <Stack
          className="empty-state"
          verticalType={Stack.VERTICAL_TYPE.CENTER}
          horizontalType={Stack.HORIZONTAL_TYPE.CENTER}
          directionType={Stack.DIRECTION_TYPE.VERTICAL}
          gapType={Stack.GAP_TYPE.NONE}
        >
          <StackItem>
            <h4 className="empty-state-header">
              {heading || 'How to use this layout'}
            </h4>
          </StackItem>
          <StackItem>
            <p className="empty-state-description">
              {description || (
                <>
                  Check out our tutorial on{' '}
                  <a
                    href="https://discuss.newrelic.com/t/how-to-populate-your-nerdpack-layout-template-with-data/90955"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    how to populate your Nerdpack layout template with data.
                  </a>{' '}
                  Have suggestions, concerns, or ideas for how this template
                  could be better? Feel free to{' '}
                  <a
                    href="https://github.com/newrelic/nr1-nerdpack-layout-standard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    submit an issue or PR :)
                  </a>
                  .
                </>
              )}
            </p>
          </StackItem>
        </Stack>
      </>
    );
  }
}
