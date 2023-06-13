# React-Bootstrap

### Stylesheets

> In case you are using Sass in typical create-react-app...
> ```javascript
>  /* following line can be included in src/App.scss */
>  @import '~bootstrap/scss/bootstrap';
> 
>  /* following line can be included in src/index.js or App.js file */
>  import './App.scss';
> ```

> If you wish to customize theme or any variables you can create custom Sass file:
> ```javascript
>  /* following block can be included in custom.scss */
>  
>  /* make the customizations */
>  $theme-colors: (
>    'info': tomato,
>    'danger': teal
>  );
>  
>  /* import bootstrap to set changes */
>  @import '~bootstrap/scss/bootstrap';
> ```
> ... and import it on the main Sass file.
> ```javascript
>  /* The following line can be included in a src/App.scss */
>  @import 'custom';
> ```

- - -

### Available default breakpoints
Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.
  * _Mobile first, responsive design is the goal._
  * _Use media queries to architect your CSS by breakpoint._
  * _Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12._

|      Breakpoint   | infix | Dimensions |     Devices      |
|-------------------|-------|------------|------------------|
|     X-Small       |	xs    |	 <576px  	 |  portrait phones |
|      Small        |	sm	   |  ≥576px	   | landscape phones |
|      Medium       |	md	   |	 ≥768px	   |      tablets     |
|      Large        | lg	  	|	 ≥992px	   |      desktops    |
|    Extra large    | xl	   |  ≥1200px   |  large desktops  |
| Extra extra large | xxl   |	 ≥1400px   |  larger desktops |

>```sass
>  // Example
>  // Apply styles starting from medium devices and up to extra large devices
>  @media (min-width: 768px) and (max-width: 1199.98px) { ... }
>```

### Grid system
&emsp;It uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. 
* `<Container>` - _provides a means to center and horizontally pad your site’s contents_
* `<Container fluid />` - _for width: 100% across all viewport and device sizes_
  - > _Setting breakpoint (sm, md, lg, xl, xxl) for fluid prop will set Container as fluid until specified breakpoint._
* `<Col>` - _auto-layout - component will render equal width columns_
  - > _In general, the width of the container is divided into 12 equal parts._\
      _The value set for a column indicates how many columns it will occupy in the container._\
      _For example, `<Col xs={6}>` means that this column will occupy half width of container (ie 6 columns out of 12)._





