"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onRenderBody = void 0;

const React = require('react');

const onRenderBody = ({
  setHeadComponents,
  setPostBodyComponents
}, pluginOptions) => {
  const config = pluginOptions.config;
  setHeadComponents([/*#__PURE__*/React.createElement("script", {
    key: "gatsby-plugin-cookie-though",
    src: "/cookie-though/lib.js"
  })]);
  setPostBodyComponents([/*#__PURE__*/React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `CookieThough.init(${JSON.stringify(config)})`
    }
  })]);
};

exports.onRenderBody = onRenderBody;
