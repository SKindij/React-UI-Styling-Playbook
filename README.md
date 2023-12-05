# React-UI-Styling-Playbook
Guidance for styling UI elements using Tailwind CSS, SCSS, React Bootstrap, and Material UI

## 🌟 [Tailwind CSS with Next.js](https://github.com/SKindij/React-UI-Styling-Playbook/tree/main/TailwindCSS) 🌟

### Setting up Tailwind CSS in a Next.js project.
1. Create your project
```go
  npx create-next-app@latest price-pulse --typescript --eslint
  cd price-pulse
```
2. Start your build process
```go
  npm run dev
```

The official **Tailwind CSS IntelliSense** extension for Visual Studio Code enhances the Tailwind development experience by providing users with advanced features such as autocomplete, syntax highlighting, and linting.






## 🌟 [React-Bootstrap](https://github.com/SKindij/React-UI-Styling-Playbook/tree/main/React-Bootstrap) 🌟
  - provides user interface elements for web and mobile applications;
  - serves as a complete upgrade for React in general;
      * ``npm install react-bootstrap bootstrap``
      * ``npm install sass``
  - with its components, it works without dependencies on bootstrap.js or jQuery;

  - instead of importing whole library, you can simply import individual components:
      * > ```javascript
        >    import { Button } from 'react-bootstrap';
        > ```
  - has an extensive list of components, each with full control over its behavior;
      * > web: https://react-bootstrap.github.io/

- - -

## 🌟 [Material UI](https://github.com/SKindij/React-UI-Styling-Playbook/tree/main/Material-UI) 🌟
  - used in Google's Material Design;
  - is well-known for its faster and easier web development;
  - you can quickly create your own design system or start with Material Design;
      *	``npm install @mui/material @emotion/react @emotion/styled``
  - includes set of interesting, ready-to-use components that can be integrated into any application;
  - also offers a range of tools and APIs to enhance application development;	
      * > GitHub: https://github.com/mui/material-ui
      * > web: https://mui.com/core/

- - -

## Lighthouse features



### React Helmet
This reusable React component will manage all of your changes to the document head.
[Helmet](https://github.com/nfl/react-helmet) takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.
+ Supports all valid head tags: title, base, meta, link, script, noscript, and style tags.
+ upports attributes for body, html and title tags.
+ + Supports server-side rendering.


### Robots Exclusion Protocol
You can put a [robots.txt](https://www.robotstxt.org/robotstxt.html) file in the directory dedicated to your domain.
> ```text
>  # To allow all robots complete access
>  User-agent: *
>  Disallow:
> ```





### WAVE 
[Web Accessibility Evaluation Tools](https://wave.webaim.org/)
> _WAVE® is a suite of evaluation tools that helps authors make their web content more accessible to individuals with disabilities. WAVE can identify many accessibility and Web Content Accessibility Guideline (WCAG) errors, but also facilitates human evaluation of web content. Our philosophy is to focus on issues that we know impact end users, facilitate human evaluation, and to educate about web accessibility._



### W3C
[Markup Validation Service](https://validator.w3.org/)
This validator checks the markup validity of Web documents in HTML, XHTML, SMIL, MathML, etc. If you wish to validate specific content such as RSS/Atom feeds or CSS stylesheets, MobileOK content, or to find broken links, there are other validators and tools available. As an alternative you can also try our non-DTD-based validator.

