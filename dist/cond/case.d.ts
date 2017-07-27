/// <reference types="react" />
import React from 'react';
export declare type StatelessComponent = () => JSX.Element;
export default class Case extends React.Component {
    props: {
        test: boolean;
        component?: JSX.Element | StatelessComponent;
        children?: any;
    };
    static defaultProps: {
        test: boolean;
        component: any;
    };
    render(): any;
}
