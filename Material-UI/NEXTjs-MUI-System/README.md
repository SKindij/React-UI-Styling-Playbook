# NEXTjs & Material UI




## [MUI System](https://mui.com/system/getting-started/)
MUI System's core utility is the `sx` prop, which gives you a quick and efficient way to apply the correct design tokens directly to a React element.
This prop provides a superset of **CSS** (i.e. it contains all CSS properties and selectors in addition to custom ones) that maps values directly from the `theme`, depending on the CSS property used. 
It also simplifies the process of defining responsive values by referring to the breakpoints defined in the theme.

### sx prop
It is a shortcut for defining custom styles that has access to the `theme`.

+ **Borders**
  + ```typescript
      <Box sx={{
        border: 1, // additive
        borderTop: 1 | borderRight: 1 | borderBottom: 1 | borderLeft: 1,
        border: 0, // subtractive
        borderTop: 0 | borderRight: 0 | borderBottom: 0 | borderLeft: 0,
        // rainbow
        borderColor: 'primary.main', | 'secondary.main' | 'error.main' | 'grey.500' | 'text.primary',
        // element shape
        borderRadius: '50%' | 1 | '16px',       
      }} >…
    ```
+ **Borders**
  + ```typescript


    ```
+ **Borders**
  + ```typescript


    ```



### Superset of CSS
The `sx` prop supports CSS syntax including child and pseudo-selectors, media queries, raw CSS values, and more. 
Here are a few examples of how you can implement these CSS features:

* Using pseudo-selectors:
  + ```typescript
      <Box
        sx={{
          // some styles
          ":hover": {
            boxShadow: 6,
          },
        }}
      >
    ```
* Using media queries:
  + ```typescript
      <Box
        sx={{
          // some styles
          '@media print': {
            width: 300,
          },
        }}
      >
    ```
* Using nested selector:
  + ```typescript
      <Box
        sx={{
          // some styles
          '& .ChildSelector': {
            bgcolor: 'primary.main',
          },
        }}
      >
    ```






















