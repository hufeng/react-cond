import React from 'react';
import Case from './case';

export type StatelessComponent = () => JSX.Element;

export default class Default extends React.Component {
  props: {
    component: JSX.Element | StatelessComponent;
  };

  constructor(props: any) {
    super(props);

    if (process.env.NODE_ENV != 'production') {
      if (!props.test) {
        throw new Error('Could not modify default test props is false');
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (process.env.NODE_ENV != 'production') {
      if (!nextProps.test) {
        throw new Error('Could not modify default test props is false');
      }
    }
  }

  static defaultProps = {
    test: true,
    component: null
  };

  render() {
    return null;
  }
}
