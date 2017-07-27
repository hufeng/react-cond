/// <reference types="react" />
import React from 'react';
export default class When extends React.Component {
    props: {
        test: boolean;
        children?: any;
    };
    constructor(props: any);
    static defaultProps: {
        test: boolean;
    };
    render(): JSX.Element;
}
