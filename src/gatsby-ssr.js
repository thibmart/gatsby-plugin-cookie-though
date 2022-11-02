const React = require('react');

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions,
) => {
  const { config } = pluginOptions;

  setHeadComponents([
    <script
      key="gatsby-plugin-cookie-though"
      src="/cookie-though/lib.js"
    />,
  ]);

  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `CookieThough.init(${JSON.stringify(config)})`,
      }}
    />,
  ]);
};
