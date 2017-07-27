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
var When = (function (_super) {
    __extends(When, _super);
    function When(props) {
        var _this = _super.call(this, props) || this;
        //dev check
        if (process.env.NODE_ENV != 'production') {
            var count = react_1.default.Children.count(_this.props.children);
            if (count > 2) {
                throw new Error('When Container can contain a maximum of two childrens');
            }
        }
        return _this;
    }
    When.prototype.render = function () {
        var _a = this.props, test = _a.test, children = _a.children;
        var count = react_1.default.Children.count(children);
        var Children = react_1.default.Children.toArray(children);
        //如果没有子组件，直接返回空
        if (count == 0) {
            return null;
        }
        /**
         * 如果判断条件成功，返回第一个children
         * 如果判断条件失败，如果有第二个chidlren返回，否则返回null
         */
        if (test) {
            return Children[0];
        }
        else {
            return (count == 2 ? children[1] : null);
        }
    };
    When.defaultProps = {
        test: true
    };
    return When;
}(react_1.default.Component));
exports.default = When;
