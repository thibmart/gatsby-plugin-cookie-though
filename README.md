# gatsby-plugin-cookie-though 🍪

Easily add Cookie Though cookie consent to your Gatsby site. 😄

[![Package Version](https://img.shields.io/npm/v/gatsby-plugin-cookie-though.svg)](https://npm.im/gatsby-plugin-cookie-though)

<div align="center">
    <img src="https://cookiethough.dev/logo.png" width="100" height="auto"/>
</div>

## Install

`npm install --save gatsby-plugin-cookie-though`

OR

`yarn add gatsby-plugin-cookie-though`

## Usage
view the documentation on how to [configure](https://cookiethough.dev/configuration/) the app.

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-cookie-though`,
      options: {
        config: {
          policies: [
            {
              id: "essential",
              label: "Essential Cookies",
              description:
                "We need to save some technical cookies, for the website to function properly.",
              category: "essential",
            },
            {
              id: "functional",
              label: "Functional Cookies",
              category: "functional",
              description:
                "We need to save some basic preferences eg. language.",
            },
            {
              id: "statistics",
              label: "Statistics",
              category: "statistics",
              description:
                "We need to save some technical cookies, for the website to function properly.",
            },
            {
              id: "social",
              label: "Social Media Cookies",
              category: "social",
              description:
                "We need to save some social cookies, for the website to function properly.",
            },
          ],
          permissionLabels: {
            accept: "Accept",
            acceptAll: "Accept all",
            decline: "Decline",
          },
          cookiePreferenceKey: "cookie-preferences",
          header: {
            title: "cookie though?",
            subTitle: "You're probably fed up with these banners...",
            description:
              "Everybody wants to show his best side - and so do we. That’s why we use cookies to guarantee you a better experience.",
          },
          cookiePolicy: {
            url: "https://inthepocket.com/cookie-policy",
            label: "Read the full cookie declaration",
          },
        },
      },
    },
  ],
}
```