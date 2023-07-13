# Material UI
> _It is beautiful by design and features a suite of customization options that make it easy to implement your custom style._\
> _It is an open-source React component library that implements [Google's Material Design](https://m2.material.io/)._

* Default installation
  + run the following commands to add it to project: ``npm install @mui/material @emotion/react @emotion/styled``
* With styled-components
  + it uses [Emotion](https://emotion.sh/docs/introduction) as its default styling engine.
  + run ``npm install @mui/material @mui/styled-engine-sc styled-components``
* Peer dependencies
  + "react": "^17.0.0 || ^18.0.0",
  + "react-dom": "^17.0.0 || ^18.0.0"
* Roboto font
  + run ``npm install @fontsource/roboto``,
    - then you can import it in your entry point like this:\
        ```javascript
          import '@fontsource/roboto/300.css';
          import '@fontsource/roboto/400.css';
          import '@fontsource/roboto/500.css';
          import '@fontsource/roboto/700.css';
        ```
  + using the Google Web Fonts CDN
    - inside your project's <head /> tag:
        ```html
          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        ```
* Icons
  + run ```npm install @mui/icons-material```
  
- - -

## MUI Core
It contains foundational React UI component libraries for shipping new features faster.
  * [Material UI](https://mui.com/material-ui/getting-started) - comprehensive library of components that features implementation of Google's Material Design system.
  * [Joy UI](https://github.com/SKindij/React-UI-Styling-Playbook/tree/main/Material-UI/Joy-UI) - beautifully designed library of React UI components.
  * [Base UI](https://github.com/SKindij/React-UI-Styling-Playbook/tree/main/Material-UI/Base-UI) - library of "unstyled" components and low-level hooks. You gain complete control over app's CSS and accessibility features.
  * [MUI System](https://github.com/SKindij/React-UI-Styling-Playbook/tree/main/Material-UI/MUI-System) - collection of CSS utilities to help you rapidly lay out custom designs.




