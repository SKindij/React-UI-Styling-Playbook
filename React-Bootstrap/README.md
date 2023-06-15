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
  - > `<Container fluid />` - _for width: 100% across all viewport and device sizes_
* `<Row>` - _helps organize columns horizontally and creates space between them_
  - > _lets you specify column widths_
  - > ``<Row xs={2} md={4} lg={6}>``
  - > _Use **auto** to give columns their natural widths._
* `<Col>` - _auto-layout - component will render equal width columns_
  - > _In general, the width of the container is divided into 12 equal parts._\
      _The value set for a column indicates how many columns it will occupy in the container._\
  - > _For example,_ `<Col xs={12} md={9} xl={6} className='custom-row'>content: xs=12 md=8 xl=4</Col>`\
      &emsp;1 (8.33%), &emsp;2 (16.66%), &emsp;3 (25.00%), &emsp;4 (33.33%),\
      &emsp;5 (41.66%), &emsp;6 (50.00%), &emsp;7 (58.33%), &emsp;8 (66.66%),\
      &emsp;9 (75.00%), &emsp;10 (83.33%), &emsp;11 (91.66%), &emsp;12 (100%)
  - > _For offsetting grid columns you can set an offset value or for a more general layout, use the margin class utilities._
      
In general, you can place almost any content inside these components to create the desired layout and placement on the page.

### Stacks
&emsp;This is a component that allows you to group and place multiple child components next to each other, placing them vertically. by default.
* vertical items
  - ``gap`` _property that sets the gap (distance) between child components in pixels_
  - ``mx-auto`` _aligns the column horizontally (margin-left and margin-right)_
* horizontal items
  - ``<div className=".ms-auto"/>`` _adds a margin on the left side, thus shifting the element to the right_
  - ``<div className="vr"/>`` _draws a vertical stick between elements_
* inline form

### Forms
&emsp;It is used to create forms in React projects. It serves as a container for form elements such as input fields, select boxes, buttons, etc. It also allows you to save additional event handling, such as form submission.
* ``<Form.Group>`` is used to group form elements together
  - _It helps to create logical blocks, for example, a group of input fields that relate to one conceptual field or category._
* ``<Form.Label>`` is used to create a signature or label for form elements.
  - _It tells users what information they are expected to enter or select in the corresponding form element._
* ``<Form.Control>`` is used to create various input fields in a form.
  - _It can include text boxes, dropdown lists, radio buttons, date pickers, etc._
  - _It provides various properties that allow you to customize the appearance and functionality of the controls._
  - _It adds some additional styles for general appearance, focus state, sizing, and more._
    + sizing: ``<Form.Control size="lg|...|sm" type="text" placeholder="Large text" />``
    + ``disabled`` - _to give grayed out appearance and remove pointer events;_
    + ``readOnly`` - _to prevent modification of the input's value, but retain the standard cursor;_
* ``<Form.Text>`` is used to display additional text or a message that explains or provides context to form elements.
  - _For example, you can use it to provide input validation hints or warnings._











