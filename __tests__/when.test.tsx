import React from 'react';
import renderer from 'react-test-renderer';
import When from '../src/when';

describe('when test suite', () => {
  it('when true', () => {
    const WhenTrue = () =>
      <When test={true}>
        <div>Hello I am Success</div>
      </When>;

    const component = renderer.create(<WhenTrue />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when false', () => {
    const WhenFalse = () =>
      <When test={false}>
        <div>I am Success</div>
      </When>;

    const component = renderer.create(<WhenFalse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when no children', () => {
    const WhenNoChildren = () => <When test={true} />;

    const component = renderer.create(<WhenNoChildren />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when true has two childrens', () => {
    const WhenElse = () =>
      <When test={true}>
        <div>hello I am Success</div>
        <div>Oop, I am failed</div>
      </When>;

    const component = renderer.create(<WhenElse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when false has two childrens', () => {
    const WhenElse = () =>
      <When test={false}>
        <div>hello I am Success</div>
        <div>Oop, I am failed</div>
      </When>;

    const component = renderer.create(<WhenElse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when children over 2', () => {
    const WhenMultiple = () =>
      <When test={true}>
        <div>hello I am Success</div>
        <div>Oop, I am failed</div>
        <div>error</div>
      </When>;

    try {
      renderer.create(<WhenMultiple />);
    } catch (err) {
      expect(err).toEqual(
        new Error('When Container can contain a maximum of two childrens')
      );
    }
  });
});
