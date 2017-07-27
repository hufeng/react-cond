/// <reference types="react" />
import React from 'react';
import Case from './case';
import D from './d';
export default class Cond extends React.Component {
    props: {
        children?: any;
    };
    static Case: typeof Case;
    static Default: typeof D;
    render(): any;
    _renderComponent(component: any): any;
}
