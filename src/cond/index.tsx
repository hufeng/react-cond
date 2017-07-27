import React from 'react';
import Case from './case';
import D from './d';

type StatelessComponent = () => JSX.Element;

export default class Cond extends React.Component {
  props: {
    children?: any;
  };

  static Case = Case;
  static Default = D;

  render() {
    const { children } = this.props;
    const count = React.Children.count(children);

    //没有children
    if (count == 0) {
      return null;
    }

    if (count == 1) {
      const { test, component } = children.props;
      return test ? this._renderComponent(component) : null;
    }

    let match = null;

    React.Children.forEach(children, (element: any) => {
      if (!React.isValidElement(element)) {
        return;
      }
      const { test, component } = element.props as {
        test: boolean;
        component: JSX.Element | StatelessComponent;
      };

      if (test && !match) {
        match = component;
      }
    });

    return match ? this._renderComponent(match) : null;
  }

  _renderComponent(component) {
    return typeof component === 'function' ? component() : component;
  }
}
