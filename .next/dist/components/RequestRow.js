'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/daly/kickstart/components/RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdFJvdyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsIm9uQXBwcm92ZSIsIm1hcmsiLCJfY2FsbGVlIiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsInNlbnQiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwic3RvcCIsIm9uRmluYWxpemUiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImZpbmFsaXplUmVxdWVzdCIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiUm93IiwiQ2VsbCIsIl9wcm9wcyIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjcmVhdGVFbGVtZW50IiwiZGlzYWJsZWQiLCJjb21wbGV0ZSIsInBvc2l0aXZlIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInJlY2lwaWVudCIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSwrQ0FBbkI7OztBQU1BLElBQUlDLGFBQWEsVUFBVUMsVUFBVixFQUFzQjtBQUNyQywwQkFBVUQsVUFBVixFQUFzQkMsVUFBdEI7O0FBRUEsV0FBU0QsVUFBVCxHQUFzQjtBQUNwQixRQUFJRSxJQUFKO0FBQUEsUUFDSUMsU0FBUyxJQURiOztBQUdBLFFBQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEI7O0FBRUEsa0NBQWdCLElBQWhCLEVBQXNCTixVQUF0Qjs7QUFFQSxTQUFLLElBQUlPLE9BQU9DLFVBQVVDLE1BQXJCLEVBQTZCQyxPQUFPQyxNQUFNSixJQUFOLENBQXBDLEVBQWlESyxPQUFPLENBQTdELEVBQWdFQSxPQUFPTCxJQUF2RSxFQUE2RUssTUFBN0UsRUFBcUY7QUFDbkZGLFdBQUtFLElBQUwsSUFBYUosVUFBVUksSUFBVixDQUFiO0FBQ0Q7O0FBRUQsV0FBT04sUUFBUUYsU0FBU0MsUUFBUSx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0gsT0FBT0YsV0FBV2EsU0FBWCxJQUF3Qiw4QkFBdUJiLFVBQXZCLENBQWhDLEVBQW9FYyxJQUFwRSxDQUF5RUMsS0FBekUsQ0FBK0ViLElBQS9FLEVBQXFGLENBQUMsSUFBRCxFQUFPYyxNQUFQLENBQWNOLElBQWQsQ0FBckYsQ0FBakMsQ0FBUixFQUFxSkwsS0FBOUosR0FBc0tBLE1BQU1ZLFNBQU4sR0FBa0IsaUNBQW1CLGFBQWEsc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxPQUFULEdBQW1CO0FBQ2pSLFVBQUlDLFFBQUosRUFBY0MsUUFBZDtBQUNBLGFBQU8sc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUMxRCxlQUFPLENBQVAsRUFBVTtBQUNSLGtCQUFRQSxTQUFTQyxJQUFULEdBQWdCRCxTQUFTRSxJQUFqQztBQUNFLGlCQUFLLENBQUw7QUFDRU4seUJBQVcsd0JBQVNmLE1BQU1zQixLQUFOLENBQVlDLE9BQXJCLENBQVg7QUFDQUosdUJBQVNFLElBQVQsR0FBZ0IsQ0FBaEI7QUFDQSxxQkFBTyxjQUFLRyxHQUFMLENBQVNDLFdBQVQsRUFBUDs7QUFFRixpQkFBSyxDQUFMO0FBQ0VULHlCQUFXRyxTQUFTTyxJQUFwQjtBQUNBUCx1QkFBU0UsSUFBVCxHQUFnQixDQUFoQjtBQUNBLHFCQUFPTixTQUFTWSxPQUFULENBQWlCQyxjQUFqQixDQUFnQzVCLE1BQU1zQixLQUFOLENBQVlPLEVBQTVDLEVBQWdEQyxJQUFoRCxDQUFxRCxFQUFFQyxNQUFNZixTQUFTLENBQVQsQ0FBUixFQUFyRCxDQUFQOztBQUVGLGlCQUFLLENBQUw7QUFDQSxpQkFBSyxLQUFMO0FBQ0UscUJBQU9HLFNBQVNhLElBQVQsRUFBUDtBQWJKO0FBZUQ7QUFDRixPQWxCTSxFQWtCSmxCLE9BbEJJLEVBa0JLaEIsTUFsQkwsQ0FBUDtBQW1CRCxLQXJCc08sQ0FBaEMsQ0FBeEwsRUFxQlZFLE1BQU1pQyxVQUFOLEdBQW1CLGlDQUFtQixhQUFhLHNCQUFvQnBCLElBQXBCLENBQXlCLFNBQVNxQixRQUFULEdBQW9CO0FBQ25HLFVBQUluQixRQUFKLEVBQWNDLFFBQWQ7QUFDQSxhQUFPLHNCQUFvQkMsSUFBcEIsQ0FBeUIsU0FBU2tCLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQThCO0FBQzVELGVBQU8sQ0FBUCxFQUFVO0FBQ1Isa0JBQVFBLFVBQVVoQixJQUFWLEdBQWlCZ0IsVUFBVWYsSUFBbkM7QUFDRSxpQkFBSyxDQUFMO0FBQ0VOLHlCQUFXLHdCQUFTZixNQUFNc0IsS0FBTixDQUFZQyxPQUFyQixDQUFYO0FBQ0FhLHdCQUFVZixJQUFWLEdBQWlCLENBQWpCO0FBQ0EscUJBQU8sY0FBS0csR0FBTCxDQUFTQyxXQUFULEVBQVA7O0FBRUYsaUJBQUssQ0FBTDtBQUNFVCx5QkFBV29CLFVBQVVWLElBQXJCO0FBQ0FVLHdCQUFVZixJQUFWLEdBQWlCLENBQWpCO0FBQ0EscUJBQU9OLFNBQVNZLE9BQVQsQ0FBaUJVLGVBQWpCLENBQWlDckMsTUFBTXNCLEtBQU4sQ0FBWU8sRUFBN0MsRUFBaURDLElBQWpELENBQXNELEVBQUVDLE1BQU1mLFNBQVMsQ0FBVCxDQUFSLEVBQXRELENBQVA7O0FBRUYsaUJBQUssQ0FBTDtBQUNBLGlCQUFLLEtBQUw7QUFDRSxxQkFBT29CLFVBQVVKLElBQVYsRUFBUDtBQWJKO0FBZUQ7QUFDRixPQWxCTSxFQWtCSkUsUUFsQkksRUFrQk1wQyxNQWxCTixDQUFQO0FBbUJELEtBckJ1RCxDQUFoQyxDQXJCVCxFQTBDVkMsS0ExQ0UsR0EwQ00seUNBQTJCQyxLQUEzQixFQUFrQ0MsSUFBbEMsQ0ExQ2I7QUEyQ0Q7O0FBRUQsNkJBQWFOLFVBQWIsRUFBeUIsQ0FBQztBQUN4QjJDLFNBQUssUUFEbUI7QUFFeEJDLFdBQU8sU0FBU0MsTUFBVCxHQUFrQjtBQUN2QixVQUFJQyxNQUFNLHVCQUFNQSxHQUFoQjtBQUFBLFVBQ0lDLE9BQU8sdUJBQU1BLElBRGpCO0FBRUEsVUFBSUMsU0FBUyxLQUFLckIsS0FBbEI7QUFBQSxVQUNJTyxLQUFLYyxPQUFPZCxFQURoQjtBQUFBLFVBRUllLFVBQVVELE9BQU9DLE9BRnJCO0FBQUEsVUFHSUMsaUJBQWlCRixPQUFPRSxjQUg1Qjs7QUFLQSxVQUFJQyxrQkFBa0JGLFFBQVFHLGFBQVIsR0FBd0JGLGlCQUFpQixDQUEvRDs7QUFFQSxhQUFPLGdCQUFNRyxhQUFOLENBQ0xQLEdBREssRUFFTCxFQUFFUSxVQUFVTCxRQUFRTSxRQUFwQixFQUE4QkMsVUFBVUwsbUJBQW1CLENBQUNGLFFBQVFNLFFBQXBFLEVBQThFRSxVQUFVO0FBQ3BGQyxvQkFBVTNELFlBRDBFO0FBRXBGNEQsc0JBQVk7QUFGd0U7QUFBeEYsT0FGSyxFQU9MLGdCQUFNTixhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUV6QixFQVJGLENBUEssRUFpQkwsZ0JBQU1tQixhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUVWLFFBQVFXLFdBUlYsQ0FqQkssRUEyQkwsZ0JBQU1QLGFBQU4sQ0FDRU4sSUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxjQUFLRSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJiLFFBQVFMLEtBQTNCLEVBQWtDLE9BQWxDLENBUkYsQ0EzQkssRUFxQ0wsZ0JBQU1TLGFBQU4sQ0FDRU4sSUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRVYsUUFBUWMsU0FSVixDQXJDSyxFQStDTCxnQkFBTVYsYUFBTixDQUNFTixJQURGLEVBRUU7QUFDRVUsa0JBQVU7QUFDUkMsb0JBQVUzRCxZQURGO0FBRVI0RCxzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFVixRQUFRRyxhQVJWLEVBU0UsR0FURixFQVVFRixjQVZGLENBL0NLLEVBMkRMLGdCQUFNRyxhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUVWLFFBQVFNLFFBQVIsR0FBbUIsSUFBbkIsR0FBMEIsZ0JBQU1GLGFBQU4sMEJBRXhCLEVBQUVXLE9BQU8sT0FBVCxFQUFrQkMsT0FBTyxJQUF6QixFQUErQkMsU0FBUyxLQUFLakQsU0FBN0MsRUFBd0R3QyxVQUFVO0FBQzlEQyxvQkFBVTNELFlBRG9EO0FBRTlENEQsc0JBQVk7QUFGa0Q7QUFBbEUsT0FGd0IsRUFPeEIsU0FQd0IsQ0FSNUIsQ0EzREssRUE2RUwsZ0JBQU1OLGFBQU4sQ0FDRU4sSUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRVYsUUFBUU0sUUFBUixHQUFtQixJQUFuQixHQUEwQixnQkFBTUYsYUFBTiwwQkFFeEIsRUFBRVcsT0FBTyxNQUFULEVBQWlCQyxPQUFPLElBQXhCLEVBQThCQyxTQUFTLEtBQUs1QixVQUE1QyxFQUF3RG1CLFVBQVU7QUFDOURDLG9CQUFVM0QsWUFEb0Q7QUFFOUQ0RCxzQkFBWTtBQUZrRDtBQUFsRSxPQUZ3QixFQU94QixVQVB3QixDQVI1QixDQTdFSyxDQUFQO0FBZ0dEO0FBNUd1QixHQUFELENBQXpCOztBQStHQSxTQUFPM0QsVUFBUDtBQUNELENBNUtnQixrQkFBakI7O2tCQThLZUEsVSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJy9ob21lL2RhbHkva2lja3N0YXJ0L2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcblxudmFyIFJlcXVlc3RSb3cgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVxdWVzdFJvdywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVxdWVzdFJvdygpIHtcbiAgICB2YXIgX3JlZixcbiAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVxdWVzdFJvdyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUmVxdWVzdFJvdy5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihSZXF1ZXN0Um93KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMub25BcHByb3ZlID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgIHZhciBjYW1wYWlnbiwgYWNjb3VudHM7XG4gICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBjYW1wYWlnbiA9IENhbXBhaWduKF90aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgcmV0dXJuIHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgYWNjb3VudHMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZVJlcXVlc3QoX3RoaXMucHJvcHMuaWQpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUsIF90aGlzMik7XG4gICAgfSkpLCBfdGhpcy5vbkZpbmFsaXplID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICB2YXIgY2FtcGFpZ24sIGFjY291bnRzO1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGNhbXBhaWduID0gQ2FtcGFpZ24oX3RoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMztcbiAgICAgICAgICAgICAgcmV0dXJuIHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgYWNjb3VudHMgPSBfY29udGV4dDIuc2VudDtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA2O1xuICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QoX3RoaXMucHJvcHMuaWQpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlMiwgX3RoaXMyKTtcbiAgICB9KSksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlcXVlc3RSb3csIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIFJvdyA9IFRhYmxlLlJvdyxcbiAgICAgICAgICBDZWxsID0gVGFibGUuQ2VsbDtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlkID0gX3Byb3BzLmlkLFxuICAgICAgICAgIHJlcXVlc3QgPSBfcHJvcHMucmVxdWVzdCxcbiAgICAgICAgICBhcHByb3ZlcnNDb3VudCA9IF9wcm9wcy5hcHByb3ZlcnNDb3VudDtcblxuICAgICAgdmFyIHJlYWR5VG9GaW5hbGl6ZSA9IHJlcXVlc3QuYXBwcm92YWxDb3VudCA+IGFwcHJvdmVyc0NvdW50IC8gMjtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFJvdyxcbiAgICAgICAgeyBkaXNhYmxlZDogcmVxdWVzdC5jb21wbGV0ZSwgcG9zaXRpdmU6IHJlYWR5VG9GaW5hbGl6ZSAmJiAhcmVxdWVzdC5jb21wbGV0ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAyOFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDZWxsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZFxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENlbGwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMzBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3QuZGVzY3JpcHRpb25cbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDZWxsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDMxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgXCJldGhlclwiKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENlbGwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMzJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3QucmVjaXBpZW50XG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQ2VsbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWVzdC5hcHByb3ZhbENvdW50LFxuICAgICAgICAgICcvJyxcbiAgICAgICAgICBhcHByb3ZlcnNDb3VudFxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENlbGwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMzRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3QuY29tcGxldGUgPyBudWxsIDogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgIHsgY29sb3I6ICdncmVlbicsIGJhc2ljOiB0cnVlLCBvbkNsaWNrOiB0aGlzLm9uQXBwcm92ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM2XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnQXBwcm92ZSdcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQ2VsbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0MVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgeyBjb2xvcjogJ3RlYWwnLCBiYXNpYzogdHJ1ZSwgb25DbGljazogdGhpcy5vbkZpbmFsaXplLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdGaW5hbGl6ZSdcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlcXVlc3RSb3c7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdFJvdyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsIm9uQXBwcm92ZSIsIm1hcmsiLCJfY2FsbGVlIiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsInNlbnQiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwic3RvcCIsIm9uRmluYWxpemUiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImZpbmFsaXplUmVxdWVzdCIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiUm93IiwiQ2VsbCIsIl9wcm9wcyIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjcmVhdGVFbGVtZW50IiwiZGlzYWJsZWQiLCJjb21wbGV0ZSIsInBvc2l0aXZlIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInJlY2lwaWVudCIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSwrQ0FBbkI7OztBQU1BLElBQUlDLGFBQWEsVUFBVUMsVUFBVixFQUFzQjtBQUNyQyww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SUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxjQUFLRSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJiLFFBQVFMLEtBQTNCLEVBQWtDLE9BQWxDLENBUkYsQ0EzQkssRUFxQ0wsZ0JBQU1TLGFBQU4sQ0FDRU4sSUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRVYsUUFBUWMsU0FSVixDQXJDSyxFQStDTCxnQkFBTVYsYUFBTixDQUNFTixJQURGLEVBRUU7QUFDRVUsa0JBQVU7QUFDUkMsb0JBQVUzRCxZQURGO0FBRVI0RCxzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFVixRQUFRRyxhQVJWLEVBU0UsR0FURixFQVVFRixjQVZGLENBL0NLLEVBMkRMLGdCQUFNRyxhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUVWLFFBQVFNLFFBQVIsR0FBbUIsSUFBbkIsR0FBMEIsZ0JBQU1GLGFBQU4sMEJBRXhCLEVBQUVXLE9BQU8sT0FBVCxFQUFrQkMsT0FBTyxJQUF6QixFQUErQkMsU0FBUyxLQUFLakQsU0FBN0MsRUFBd0R3QyxVQUFVO0FBQzlEQyxvQkFBVTNELFlBRG9EO0FBRTlENEQsc0JBQVk7QUFGa0Q7QUFBbEUsT0FGd0IsRUFPeEIsU0FQd0IsQ0FSNUIsQ0EzREssRUE2RUwsZ0JBQU1OLGFBQU4sQ0FDRU4sSUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRVYsUUFBUU0sUUFBUixHQUFtQixJQUFuQixHQUEwQixnQkFBTUYsYUFBTiwwQkFFeEIsRUFBRVcsT0FBTyxNQUFULEVBQWlCQyxPQUFPLElBQXhCLEVBQThCQyxTQUFTLEtBQUs1QixVQUE1QyxFQUF3RG1CLFVBQVU7QUFDOURDLG9CQUFVM0QsWUFEb0Q7QUFFOUQ0RCxzQkFBWTtBQUZrRDtBQUFsRSxPQUZ3QixFQU94QixVQVB3QixDQVI1QixDQTdFSyxDQUFQO0FBZ0dEO0FBNUd1QixHQUFELENBQXpCOztBQStHQSxTQUFPM0QsVUFBUDtBQUNELENBNUtnQixrQkFBakI7O2tCQThLZUEsVSIsImZpbGUiOiJ1bmtub3duIn0=