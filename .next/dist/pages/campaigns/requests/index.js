'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/daly/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Divider, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('i', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Requests')), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Found ', this.props.requestCount, ' requests.'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSb3dzIiwiX3RoaXMyIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJob3Jpem9udGFsIiwicm91dGUiLCJwcmltYXJ5IiwiZmxvYXRlZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicmVxdWVzdENvdW50IiwiX3JlZiIsIm1hcmsiLCJfY2FsbGVlIiwiY2FtcGFpZ24iLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJzZW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiYWJydXB0Iiwic3RvcCIsImdldEluaXRpYWxQcm9wcyIsIl94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBUEEsSUFBSUEsZUFBZSw4REFBbkI7OztBQVNBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUN2QywwQkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsV0FBU0QsWUFBVCxHQUF3QjtBQUN0QixrQ0FBZ0IsSUFBaEIsRUFBc0JBLFlBQXRCOztBQUVB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Q3JGLHlCQUFPdUIsU0FBU08sT0FBVCxDQUFpQmpDLFFBQWpCLENBQTBCRyxLQUExQixFQUFpQ2dDLElBQWpDLEVBQVA7QUFDRCxpQkFGbUIsQ0FBYixDQUFQOztBQUlGLG1CQUFLLEVBQUw7QUFDRW5DLDJCQUFXNkIsU0FBU08sSUFBcEI7QUFDQSx1QkFBT1AsU0FBU2EsTUFBVCxDQUFnQixRQUFoQixFQUEwQixFQUFFcEMsU0FBU0EsT0FBWCxFQUFvQk4sVUFBVUEsUUFBOUIsRUFBd0NzQixjQUFjQSxZQUF0RCxFQUFvRWYsZ0JBQWdCQSxjQUFwRixFQUExQixDQUFQOztBQUVGLG1CQUFLLEVBQUw7QUFDQSxtQkFBSyxLQUFMO0FBQ0UsdUJBQU9zQixTQUFTYyxJQUFULEVBQVA7QUF6Qko7QUEyQkQ7QUFDRixTQTlCTSxFQThCSmxCLE9BOUJJLEVBOEJLLElBOUJMLENBQVA7QUErQkQsT0FqQzBDLENBQWhDLENBQVg7O0FBbUNBLGVBQVNtQixlQUFULENBQXlCQyxFQUF6QixFQUE2QjtBQUMzQixlQUFPdEIsS0FBSzlCLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT2tELGVBQVA7QUFDRCxLQXpDTTtBQUZKLEdBQUQsQ0F6TUo7O0FBdVBBLFNBQU90RCxZQUFQO0FBQ0QsQ0FqUWtCLGtCQUFuQjs7a0JBbVFlQSxZIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfUHJvbWlzZSBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZSc7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJy9ob21lL2RhbHkva2lja3N0YXJ0L3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcz9lbnRyeSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgRGl2aWRlciwgR3JpZCwgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RSb3cnO1xuXG52YXIgUmVxdWVzdEluZGV4ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJlcXVlc3RJbmRleCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVxdWVzdEluZGV4KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXF1ZXN0SW5kZXgpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZXF1ZXN0SW5kZXguX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoUmVxdWVzdEluZGV4KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVxdWVzdEluZGV4LCBbe1xuICAgIGtleTogJ3JlbmRlclJvd3MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSb3dzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcChmdW5jdGlvbiAocmVxdWVzdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVxdWVzdFJvdywge1xuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICAgICAgYWRkcmVzczogX3RoaXMyLnByb3BzLmFkZHJlc3MsXG4gICAgICAgICAgYXBwcm92ZXJzQ291bnQ6IF90aGlzMi5wcm9wcy5hcHByb3ZlcnNDb3VudCxcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDMxXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBIZWFkZXIgPSBUYWJsZS5IZWFkZXIsXG4gICAgICAgICAgUm93ID0gVGFibGUuUm93LFxuICAgICAgICAgIEhlYWRlckNlbGwgPSBUYWJsZS5IZWFkZXJDZWxsLFxuICAgICAgICAgIEJvZHkgPSBUYWJsZS5Cb2R5O1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBMYXlvdXQsXG4gICAgICAgIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ2XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIERpdmlkZXIsXG4gICAgICAgICAgeyBob3Jpem9udGFsOiB0cnVlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0N1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdpJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ3XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnUmVxdWVzdHMnXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIExpbmssXG4gICAgICAgICAgeyByb3V0ZTogJy9jYW1wYWlnbnMvJyArIHRoaXMucHJvcHMuYWRkcmVzcyArICcvcmVxdWVzdHMvbmV3JywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNDhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnYScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0OVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICB7IHByaW1hcnk6IHRydWUsIGZsb2F0ZWQ6ICdyaWdodCcsIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTAgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ0FkZCBSZXF1ZXN0J1xuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBUYWJsZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1M1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBSb3csXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTZcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdJRCdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU3XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgSGVhZGVyQ2VsbCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1OFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ0Ftb3VudCdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU5XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnUmVjaXBpZW50J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdBcHByb3ZhbCBDb3VudCdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDYxXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnQXBwcm92ZSdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDYyXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnRmluYWxpemUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBCb2R5LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm93cygpXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDY5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnRm91bmQgJyxcbiAgICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RDb3VudCxcbiAgICAgICAgICAnIHJlcXVlc3RzLidcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShwcm9wcykge1xuICAgICAgICB2YXIgYWRkcmVzcywgY2FtcGFpZ24sIHJlcXVlc3RDb3VudCwgYXBwcm92ZXJzQ291bnQsIHJlcXVlc3RzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmVxdWVzdENvdW50ID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX1Byb21pc2UuYWxsKEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpLmZpbGwoKS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIHJlcXVlc3RzID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCB7IGFkZHJlc3M6IGFkZHJlc3MsIHJlcXVlc3RzOiByZXF1ZXN0cywgcmVxdWVzdENvdW50OiByZXF1ZXN0Q291bnQsIGFwcHJvdmVyc0NvdW50OiBhcHByb3ZlcnNDb3VudCB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gUmVxdWVzdEluZGV4O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSb3dzIiwiX3RoaXMyIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJob3Jpem9udGFsIiwicm91dGUiLCJwcmltYXJ5IiwiZmxvYXRlZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicmVxdWVzdENvdW50IiwiX3JlZiIsIm1hcmsiLCJfY2FsbGVlIiwiY2FtcGFpZ24iLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJzZW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiYWJydXB0Iiwic3RvcCIsImdldEluaXRpYWxQcm9wcyIsIl94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBUEEsSUFBSUEsZUFBZSw4REFBbkI7OztBQVNBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUN2QywwQkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsV0FBU0QsWUFBVCxHQUF3QjtBQUN0QixrQ0FBZ0IsSUFBaEIsRUFBc0JBLFlBQXRCOztBQUVB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