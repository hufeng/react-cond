/// <reference types="react" />
import React from 'react';
export declare type StatelessComponent = () => JSX.Element;
export default class Default extends React.Component {
    props: {
        component: JSX.Element | StatelessComponent;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    static defaultProps: {
        test: boolean;
        component: any;
    };
    render(): any;
}
