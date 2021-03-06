'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _passengers = require('../../commonGameAssets/collective/passengers.png');

var _passengers2 = _interopRequireDefault(_passengers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coin = function (_Component) {
  _inherits(Coin, _Component);

  function Coin(props) {
    _classCallCheck(this, Coin);

    return _possibleConstructorReturn(this, (Coin.__proto__ || Object.getPrototypeOf(Coin)).call(this, props));
  }

  _createClass(Coin, [{
    key: 'getWrapperStyles',
    value: function getWrapperStyles() {
      var collectiveData = this.props.collectiveData;
      return {
        position: 'absolute',
        transform: 'translate(' + this.props.collectiveData.x + 'px, ' + this.props.collectiveData.y + 'px) translateZ(0)',
        transformOrigin: 'top left',
        width: collectiveData.size,
        height: collectiveData.size
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'collective', 'data-key': this.props.index, style: this.getWrapperStyles() },
        _react2.default.createElement('img', {
          style: { 'width': '100%', 'height': '100%' },
          src: _passengers2.default
        })
      );
    }
  }]);

  return Coin;
}(_react.Component);

exports.default = Coin;