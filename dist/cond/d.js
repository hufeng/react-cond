"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Default = (function (_super) {
    __extends(Default, _super);
    function Default(props) {
        var _this = _super.call(this, props) || this;
        if (process.env.NODE_ENV != 'production') {
            if (!props.test) {
                throw new Error('Could not modify default test props is false');
            }
        }
        return _this;
    }
    Default.prototype.componentWillReceiveProps = function (nextProps) {
        if (process.env.NODE_ENV != 'production') {
            if (!nextProps.test) {
                throw new Error('Could not modify default test props is false');
            }
        }
    };
    Default.prototype.render = function () {
        return null;
    };
    Default.defaultProps = {
        test: true,
        component: null
    };
    return Default;
}(react_1.default.Component));
exports.default = Default;
