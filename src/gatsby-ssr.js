const React = require('react');

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions,
) => {
  const { config } = pluginOptions;

  setHeadComponents([
    <script
      key="gatsby-plugin-cookie-though"
      src="https://unpkg.com/cookie-though@1.0.0"
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
