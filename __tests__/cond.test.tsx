import React from 'react';
import renderer from 'react-test-renderer';
import Cond from '../src/cond/';
const { Case, Default } = Cond;

describe('cond test suite', () => {
  it('cond no children', () => {
    const CondEmpty = () => <Cond />;

    const component = renderer.create(<CondEmpty />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('cond one children test is true', () => {
    const CondOne = () =>
      <Cond>
        <Case test={1 == 1} component={<div>I am match</div>} />
      </Cond>;

    const component = renderer.create(<CondOne />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('cond one chidld test is false', () => {
    const CondOne = () =>
      <Cond>
        <Case test={1 != 1} component={<div>I am match</div>} />
      </Cond>;

    const component = renderer.create(<CondOne />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('cond multiple test ', () => {
    const MulCond = () =>
      <Cond>
        <Case test={1 != 1} component={<div>I am match1</div>} />
        <Case test={1 != 1} component={<div>I am match2</div>} />
        <Case test={1 != 1} component={<div>I am match3</div>} />
        <Case test={1 != 1} component={<div>I am match4</div>} />
        <Case test={1 == 1} component={<div>I am match5</div>} />
      </Cond>;

    const component = renderer.create(<MulCond />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('cond one default', () => {
    const CondDefault = () =>
      <Cond>
        <Default component={<div>I Am Default</div>} />
      </Cond>;

    const component = renderer.create(<CondDefault />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('cond case and default', () => {
    const MulCond1 = () =>
      <Cond>
        <Case test={1 != 1} component={<div>I am match1</div>} />
        <Case test={1 != 1} component={<div>I am match2</div>} />
        <Case test={1 != 1} component={<div>I am match3</div>} />
        <Case test={1 != 1} component={<div>I am match4</div>} />
        <Case test={1 == 1} component={<div>I am match5</div>} />
        <Default component={<div>I am default</div>} />
      </Cond>;

    const MulCond2 = () =>
      <Cond>
        <Case test={1 != 1} component={<div>I am match1</div>} />
        <Case test={1 != 1} component={<div>I am match2</div>} />
        <Case test={1 != 1} component={<div>I am match3</div>} />
        <Case test={1 != 1} component={<div>I am match4</div>} />
        <Case test={1 != 1} component={<div>I am match5</div>} />
        <Default component={<div>I am default</div>} />
      </Cond>;

    const component = renderer.create(<MulCond1 />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const component2 = renderer.create(<MulCond2 />);
    const tree2 = component2.toJSON();
    expect(tree2).toMatchSnapshot();
  });

  it('modify default props is error', () => {
    // const MulCond = () =>
    //   <Cond>
    //     <Case test={1 != 1} component={<div>I am match1</div>} />
    //     <Default test={1 != 1} component={<div>I am match3</div>} />
    //   </Cond>;
    // try {
    //   const component = renderer.create(<MulCond />);
    // } catch (err) {
    //   expect(err).toBe(
    //     new Error('Could not modify default test props is false')
    //   );
    // }
  });
});
