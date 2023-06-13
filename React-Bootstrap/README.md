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

|      Breakpoint   | infix | Dimensions |     Devices      |
|-------------------|-------|------------|------------------|
|     X-Small       |	None	|	 <576px  	 |  portrait phones |
|      Small        |	sm	  |  ≥576px	   | landscape phones |
|      Medium       |	md	  |	 ≥768px	   |      tablets     |
|      Large        | lg		|	 ≥992px	   |      desktops    |
|    Extra large    | xl	  |  ≥1200px   |  large desktops  |
| Extra extra large | xxl   |	 ≥1400px   |  larger desktops |

> &emsp;_Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12._






