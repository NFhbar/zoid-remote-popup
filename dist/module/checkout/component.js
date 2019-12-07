"use strict";

exports.__esModule = true;
exports.ButtonComponent = exports.CheckoutComponent = void 0;

var _src = require("zoid/src");

var zoid = _interopRequireWildcard(require("zoid/dist/zoid.frameworks.js"));

var _src2 = require("jsx-pragmatic/src");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** @jsx node */
// Component
const CheckoutComponent = (0, _src.create)({
  tag: 'checkout-component',
  dimensions: {
    width: '500px',
    height: '500px'
  },
  url: ({
    props
  }) => {
    return {
      demo: 'http://localhost:3000',
      production: 'https://my-site.com/login',
      test: 'mock://www.my-site.com/base/test/windows/login/index.htm'
    }[props.env];
  },
  defaultContext: 'popup',
  props: {
    env: {
      type: 'string',
      default: () => 'production'
    },
    prefilledEmail: {
      type: 'string'
    }
  }
});
exports.CheckoutComponent = CheckoutComponent;
const ButtonComponent = zoid.create({
  tag: 'button-component',
  dimensions: {
    width: '300px',
    height: '300px'
  },
  url: ({
    props
  }) => {
    return {
      demo: './button.htm',
      production: 'https://my-site.com/login',
      test: 'mock://www.my-site.com/base/test/windows/login/index.htm'
    }[props.env];
  },
  props: {
    env: {
      type: 'string',
      default: () => 'production'
    },
    prefilledEmail: {
      type: 'string'
    }
  },
  defaultContext: __DEFAULT_CONTEXT__,

  prerenderTemplate({
    doc
  }) {
    return (0, _src2.node)("html", null, (0, _src2.node)("head", null, (0, _src2.node)("style", null, `
                        .spinner {
                            position: absolute;
                            max-height: 60vmin;
                            max-width: 60vmin;
                            height: 40px;
                            width: 40px;
                            top: 50%;
                            left: 50%;
                            transform: translateX(-50%) translateY(-50%);
                            z-index: 10;
                        }

                        .spinner .loader {
                            height: 100%;
                            width: 100%;
                            box-sizing: border-box;
                            border: 3px solid rgba(0, 0, 0, .2);
                            border-top-color: rgba(33, 128, 192, 0.8);
                            border-radius: 100%;
                            animation: rotation .7s infinite linear;

                        }

                        @keyframes rotation {
                            from {
                                transform: rotate(0deg)
                            }
                            to {
                                transform: rotate(359deg)
                            }
                        }
                    `)), (0, _src2.node)("body", null, (0, _src2.node)("div", {
      class: "spinner"
    }, (0, _src2.node)("div", {
      id: "loader",
      class: "loader"
    })))).render((0, _src2.dom)({
      doc
    }));
  }

});
exports.ButtonComponent = ButtonComponent;