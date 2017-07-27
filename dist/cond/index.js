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
var case_1 = require("./case");
var d_1 = require("./d");
var Cond = (function (_super) {
    __extends(Cond, _super);
    function Cond() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cond.prototype.render = function () {
        var children = this.props.children;
        var count = react_1.default.Children.count(children);
        //没有children
        if (count == 0) {
            return null;
        }
        if (count == 1) {
            var _a = children.props, test_1 = _a.test, component = _a.component;
            return test_1 ? this._renderComponent(component) : null;
        }
        var match = null;
        react_1.default.Children.forEach(children, function (element) {
            if (!react_1.default.isValidElement(element)) {
                return;
            }
            var _a = element.props, test = _a.test, component = _a.component;
            if (test && !match) {
                match = component;
            }
        });
        return match ? this._renderComponent(match) : null;
    };
    Cond.prototype._renderComponent = function (component) {
        return typeof component === 'function' ? component() : component;
    };
    Cond.Case = case_1.default;
    Cond.Default = d_1.default;
    return Cond;
}(react_1.default.Component));
exports.default = Cond;
