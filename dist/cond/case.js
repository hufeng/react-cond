'use strict';
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var Case = (function(_super) {
  __extends(Case, _super);
  function Case() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Case.prototype.render = function() {
    return null;
  };
  Case.defaultProps = {
    test: true,
    component: null
  };
  return Case;
})(react_1.default.Component);
exports.default = Case;
