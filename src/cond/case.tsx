import React from 'react';

export type StatelessComponent = () => JSX.Element;

export default class Case extends React.Component {
  props: {
    test: boolean;
    component?: JSX.Element | StatelessComponent;
    children?: any;
  };

  static defaultProps = {
    test: true,
    component: null
  };

  render() {
    return null;
  }
}
