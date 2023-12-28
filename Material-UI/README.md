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

## MUI LAYOUT

> _Stack is ideal for one-dimensional layouts, while Grid is preferable when you need both vertical and horizontal arrangement._

### 🧩 Grid
> _Responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts._\
> _Material Design's responsive UI is based on a 12-column grid layout._

* docs: https://mui.com/material-ui/react-grid/
* code: `import Grid from '@mui/material/Grid';`
  + There are two types of layout: containers and items.
  + Item are fluid and sized relative to their parent element.
  + Items have padding to create the spacing between individual items.
* docs: https://mui.com/material-ui/react-grid2/
* code: `import Grid from '@mui/material/Unstable_Grid2';`

#### Default breakpoints
> _Each breakpoint (a key) matches with a fixed screen width (a value):_
- **xs**, extra-small: 0px
- **sm**, small: 600px
-  **md**, medium: 900px
- **lg**, large: 1200px
- **xl**, extra-large: 1536px

#### Fluid grids
+ Components may have multiple widths defined, causing the layout to change at the defined breakpoint. 
+ Width values given to larger breakpoints override those given to smaller breakpoints.
+ The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently.

```jsx
  import Item from '@/views/Categories/Item';

   <Box sx={{ flexGrow: 1 }}>
      <Grid container
        rowSpacing={{ xs: 1, sm: 2 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
            Content occupy:
               100%  |   50%  |   34%  | 25%
             (12/12) | (6/12) | (4/12) | (3/12)
           </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
            Content occupy:
               100%  |   50%  |   34%  | 25%
             (12/12) | (6/12) | (4/12) | (3/12)
           </Item>
        </Grid>
      </Grid>
    </Box>
```

#### Grid container
* direction=
  + "row" | "column"
* justifyContent=
  + "center" | "space-around" | "space-between"
* alignItems=
  + "center" | "baseline" | "stretch"

### 📚 Stack
> _It is a container component for arranging elements vertically or horizontally._\

* docs: https://mui.com/material-ui/react-stack/
  + acts as a generic container, wrapping around the elements to be arranged;
* code: `import Stack from '@mui/material/Stack';`

```jsx
  import Item from '@/views/Categories/Item';

   <Box sx={{ width: '100%' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="space-around"
        
      >
        <Item> Some content </Item>
        <Item> Some content </Item>
        <Item> Some content </Item>
      </Stack>
    </Box>
```

### 🛢️ Container
>  _It's the most basic layout element._\
>  _It centers your content horizontally._\
>  _Most layouts do not require a nested container._

* docs: https://mui.com/material-ui/react-container/
* code: `import Container from '@mui/material/Container';`

```jsx
    /* Fluid - container width is bounded by the maxWidth prop value
        container will not expand beyond this width
    */
      <Container component="section"
        maxWidth="xs" >
        // or: 'sm' | 'md' | 'lg' | 'xl' | false | string

    // Fixed - max-width matches the min-width of the current breakpoint
      <Container fixed>
```

> component= "main" | "div" | "article" | "nav"

### 📦 Box
>  _It serves as a wrapper component for most of the CSS utility needs._\
>  _It packages all the style functions that are exposed in @mui/system._

* docs: https://mui.com/system/react-box/
  + generic container for grouping other components;
  + as a `<div>` with special features 
* code: `import Box from '@mui/material/Box';`
* code: `import Box from '@mui/system/Box';`

```jsx
    // All system properties and any other CSS rules are available via the sx prop
    <Box sx={{ 
        width: 250, height: 100,
        backgroundColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        my: 4, 
        }}>       
          MUI Box           
      </Box>
```

### [Properties reference table](https://mui.com/system/properties/)
> _Note that this table only lists custom properties._\
> _All other regular CSS properties and selectors are supported too._

- - -

## DATA GRID

### 📊 Data table

* docs: https://mui.com/material-ui/react-table/#data-table
* code: `import Table from '@mui/material/Table';`

### 📈 MIT version
_It's a clean abstraction with basic features like editing, pagination, sorting and filtering single columns, and column groups._

* docs: https://mui.com/x/react-data-grid/
* code: `import { DataGrid } from '@mui/x-data-grid';`


- - -

## NAVIGATION

### 📱 App Bar
It displays information and actions relating to the current screen.\
It's used for branding, screen titles, navigation, and actions.\
It can transform into a contextual action bar or be used as a navbar.

* docs: https://mui.com/material-ui/react-app-bar/
* code: `import AppBar from '@mui/material/AppBar';`


### 🗄️ Drawer 🚪

The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts.
A navigation drawer can either be permanently on-screen or controlled by a navigation menu icon.

* docs: https://mui.com/material-ui/react-drawer/
* code: `import Drawer from '@mui/material/Drawer';`

[Side sheets](https://m2.material.io/components/sheets-side) are supplementary surfaces primarily used on tablet and desktop.

Modal side sheets are used on mobile instead of standard side sheets, due to limited screen size.
They can display the same types of content as standard side sheets, but must be dismissed in order to interact with the underlying content.

Side sheets should be placed on the opposite side of a side navigation drawer to avoid obstructing the UI or causing confusion about the sheet’s functionality.

### 🔽 Bottom Navigation
_This bar allows movement between primary destinations in an app._

* docs: https://mui.com/material-ui/react-bottom-navigation/
  + require: `import {NextLinkComposed} from '@/NextMuiLink';`
* code: `import BottomNavigation from '@mui/material/BottomNavigation';`

### 🍞 Breadcrumbs 🧭
_It is a list of links that help visualize a page's location within a site's hierarchical structure, it allows navigation up to any of the ancestors._

* docs: https://mui.com/material-ui/react-breadcrumbs/
* code: `import Breadcrumbs from '@mui/material/Breadcrumbs';`

### 🍽️ Menu

* docs:
* code: ``

### 📄 Pagination
_This component enables the user to select a specific page from a range of pages._

* docs: https://mui.com/material-ui/react-pagination/
* code: `import Pagination from '@mui/material/Pagination';`

- - -

## INPUTS

> A component is controlled when it's managed by its parent using props.\
> A component is uncontrolled when it's managed by its own local state.

### 🔄 Select ▼
_This components are used for collecting user provided information from a list of options._

* docs: https://mui.com/material-ui/react-select/
* code: `import Select, { SelectChangeEvent } from '@mui/material/Select';`

### 🔍 Autocomplete
_It is a normal text input enhanced by a panel of suggested options._

* docs: https://mui.com/material-ui/react-autocomplete/
  + The value must be chosen from a predefined set of allowed values.
* code: `import Autocomplete from '@mui/material/Autocomplete';`

### 📝 Text Field
_It lets users enter and edit text._

* docs: https://mui.com/material-ui/react-text-field/
  + They typically appear in forms and dialogs.
* code: `import TextField from '@mui/material/TextField';`

- - -

## CUSNOMIZATION

### ⭐ Rating
_It provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own._

* docs: https://mui.com/material-ui/react-rating/
  + It can display any float number with the value prop.
  + You can display a label on hover to help the user pick the correct rating value.
* code: `import Rating from '@mui/material/Rating';`


### 🔘 Button API
_It allows users to take actions, and make choices, with a single tap._

* docs: https://mui.com/material-ui/react-button/
* code: `import Button from '@mui/material/Button';`

### 📄 Typography API

* docs:
* code: ``

- - -

## DATA DISPLAY

### 👤 Avatar

* docs:
* code: ``

### 🏅 Badge

* docs:
* code: ``

### ⚙️ Icons

* docs:
* code: ``

### 🚧 Divider
_It separates content into clear groups._

* docs: https://mui.com/material-ui/react-divider/
* code: `import Divider from '@mui/material/Divider';`

```jsx
  <Divider>CENTER</Divider>
```

- - -

## FEEDBACK

### 💬 Dialog

* docs:
* code: ``

### 💀 Skeleton


* docs:
* code: ``


- - -

### [React Templates](https://mui.com/material-ui/getting-started/templates/)
> _&emsp; Sections of each layout are clearly defined either by comments or use of separate files, making it simple to extract parts of a page (such as a "hero unit", or footer, for example) for reuse in other pages. For multi-part examples, a table in the README at the linked source code location describes the purpose of each file._

- - -

### [Some learning resources](https://mui.com/material-ui/getting-started/learn/)
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
