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

| Breakpoint | Class infix | Dimensions |
|------------|-------------|------------|
|  X-Small   |		None		 |	<576px 		|
|  Small     |		 sm			 |	≥576px	 |
|  Medium    |			md		 |	≥768px	 |
|  Large     | 	  	lg		 |	≥992px	 |
|  Extra     | large	xl	 | 	≥1200px	 |
|  Extra     | extra large	xxl |	≥1400px |








