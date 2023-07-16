# MUI Core
It contains foundational React UI component libraries for shipping new features faster.
  * [Material UI](https://mui.com/material-ui/getting-started) - comprehensive library of components that features implementation of Google's Material Design system.
  * [Joy UI](https://github.com/SKindij/React-UI-Styling-Playbook/tree/main/Material-UI/Joy-UI) - beautifully designed library of React UI components.
  * [Base UI](https://github.com/SKindij/React-UI-Styling-Playbook/tree/main/Material-UI/Base-UI) - library of "unstyled" components and low-level hooks. You gain complete control over app's CSS and accessibility features.
  * [MUI System](https://github.com/SKindij/React-UI-Styling-Playbook/tree/main/Material-UI/MUI-System) - collection of CSS utilities to help you rapidly lay out custom designs.

&emsp; These sections help organize the MUI library and provide you with convenient tools for creating web applications using Material Design principles. Depending on your needs, you can use basic Material UI components, experiment with new features in Joy UI, use base components with Base UI, or create your own components with MUI System.

- - -

## Material UI
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
  
- - -

&emsp; Since Material UI components are built to function in isolation, they don't require any kind of globally scoped styles. For a better user experience and developer experience, we recommend adding the following globals to your app.
  * Responsive meta tag
    - > _Material UI is a mobile-first component library—we write code for mobile devices first, and then scale up the components as necessary using CSS media queries._
    - > run ``<meta name="viewport" content="initial-scale=1, width=device-width" />``
  * [CssBaseline](https://mui.com/material-ui/react-css-baseline/)
    - > _It helps to kickstart an elegant, consistent, and simple baseline to build upon._
    - > _It fixes some inconsistencies across browsers and devices while providing resets that are better tailored to fit Material UI._
    -  ```javascript
            import * as React from 'react';
            import CssBaseline from '@mui/material/CssBaseline';
            
            export default function MyApp() {
              return (
                <React.Fragment>
                  <CssBaseline />
                  {/* The rest of your application */}
                </React.Fragment>
              );
            } 
       ```
  * Default font
    - > _Material UI uses the Roboto font by default._
    - > run ``npm install @fontsource/roboto``,
      + then you can import it in your entry point like this:\
          ```javascript
            import '@fontsource/roboto/300.css';
            import '@fontsource/roboto/400.css';
            import '@fontsource/roboto/500.css';
            import '@fontsource/roboto/700.css';
          ```
    - using the Google Web Fonts CDN
      + inside your project's <head /> tag:
         ```html
            <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
          ```
  * Icons
    - > run ```npm install @mui/icons-material```

- - -

### [React Templates](https://mui.com/material-ui/getting-started/templates/)
> _&emsp; Sections of each layout are clearly defined either by comments or use of separate files, making it simple to extract parts of a page (such as a "hero unit", or footer, for example) for reuse in other pages. For multi-part examples, a table in the README at the linked source code location describes the purpose of each file._

### [Learning resources](https://mui.com/material-ui/getting-started/learn/)
> _List of some of the best third-party resources for learning how to build beautiful apps with our components._

* [MUI5 (Material UI) Crash Course](https://www.youtube.com/playlist?list=PLQg6GaokU5CyVrmVsYa9R3g1z2Tsmfpm-) video by Laith Academy:
  - _everything you need to know to start building with the latest version of Material UI;_
* [React + Material UI - From Zero to Hero](https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ) video series by The Atypical Developer:
  - _build along with this in-depth series, from basic installation through advanced component implementation;_
* [Next.js 11 Setup with Material UI v5](https://www.youtube.com/watch?v=IFaFFmPYyMI) by Leo Roese:
  - _learn how to integrate Material UI into your Next.js app, using Emotion as the style engine;_
* [MUI v5 Crash Intro to React](https://www.youtube.com/watch?v=_W3uuxDnySQ) by Anthony Sistilli:
  - _how and why to use Material UI, plus guidance on theming and style customization;_
* [MUI v5 Tutorial Playlist](https://www.youtube.com/playlist?list=PLlR2O33QQkfXnZMMZC0y22gLayBbB1UQd) by Nikhil Thadani (Indian Coders):
  - _detailed playlist covering almost every component of Material UI with Create React App;_
* [Clever Dev](https://www.youtube.com/channel/UCb6AZy0_D1y661PMZck3jOw) and [Smart Devpreneur](https://smartdevpreneur.com/category/javascript/material-ui/) by Jon M:
  - _dozens of high-quality videos and articles digging deep into the nuts and bolts of Material UI._

- - -

## LAYOUT

### Container
>  _It's the most basic layout element._\
>  _It centers your content horizontally._\
>  _Most layouts do not require a nested container._

+ **Fluid**
  - _container width is bounded by the maxWidth prop value_
  - ```jsx
      <Container maxWidth="xs">
      // or: 'sm' | 'md' | 'lg' | 'xl' | false | string
    ```
+ **Fixed**
  - _The max-width matches the min-width of the current breakpoint._
  - ```jsx
      <Container fixed>
    ```

### Box
>  _It serves as a wrapper component for most of the CSS utility needs._\
>  _It packages all the style functions that are exposed in @mui/system._

+ All system properties and any other CSS rules are available via the **sx** prop.









