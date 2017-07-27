import React from 'react';

export default class When extends React.Component {
  props: {
    test: boolean;
    children?: any;
  };

  constructor(props) {
    super(props);

    //dev check
    if (process.env.NODE_ENV != 'production') {
      const count = React.Children.count(this.props.children);
      if (count > 2) {
        throw new Error(
          'When Container can contain a maximum of two childrens'
        );
      }
    }
  }

  static defaultProps = {
    test: true
  };

  render() {
    const { test, children } = this.props;
    const count = React.Children.count(children);

    //如果没有子组件，直接返回空
    if (count == 0) {
      return null;
    }

    /**
     * 如果判断条件成功，返回第一个children
     * 如果判断条件失败，如果有第二个chidlren返回，否则返回null
     */
    const Children = React.Children.toArray(children);
    if (test) {
      return Children[0] as JSX.Element;
    } else {
      return (count == 2 ? children[1] : null) as JSX.Element;
    }
  }
}
