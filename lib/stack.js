'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.storage = [];
  }

  _createClass(Stack, [{
    key: 'push',
    value: function push(element) {
      return this.storage.push(element);
    }
  }, {
    key: 'length',
    value: function length() {
      return this.storage.length;
    }
  }, {
    key: 'pop',
    value: function pop() {
      if (this.storage.length === 0) {
        return null;
      } else {
        return this.storage.pop();
      }
    }
  }, {
    key: 'peek',
    value: function peek() {
      if (this.storage.length === 0) {
        return null;
      } else {
        return this.storage[this.storage.length - 1];
      }
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      if (this.storage.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Stack;
}();

exports.default = Stack;