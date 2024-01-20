# NEXTjs & Material UI










- - -

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
+ **Display**
  + ```typescript
      // blocks are placed next to each other on the same line
      <Box component="div" sx={{ display: 'inline block' }}>inline</Box>
      <Box component="div" sx={{ display: 'inline block' }}>inline</Box>
      // blocks are located one under the other in a column
      <Box component="span" sx={{ display: 'column block' }}>block</Box>
      <Box component="span" sx={{ display: 'column block' }}>block</Box>
      // responsive classes for showing and hiding elements by device
      sx={{ display: 'none' }} // hidden on all
      sx={{ display: { xs: 'none', sm: 'block' } }} // hidden only on xs
      sx={{ display: { xs: 'block', sm: 'none' } }} // visible only on xs	

    ```
+ **Palette**
  + ```typescript
      // handful of color utility classes
      <Box sx={{
        color: 'primary.main' | 'secondary.main' | 'error.main' | 'warning.main' | 'info.main' | 'success.main',
        color: 'text.primary' | 'text.secondary' | 'text.disabled',
        bgcolor: 'primary.main' | 'secondary.main' | 'error.main' | 'warning.main' | 'info.main' | 'success.main',
        bgcolor: 'text.primary' | 'text.secondary' | 'text.disabled',
      }}>…

    ```
+ **Positions**
  + ```typescript
      import * as React from 'react';
      import Typography from '@mui/material/Typography';
      import Box from '@mui/material/Box';

      export default function ZIndex() {
        return (
          <Typography
            component="div" variant="body1"
            style={{
             height: 100, width: '100%',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                bgcolor: (theme) => theme.palette.mode === 'dark' ? '#101010' : 'grey.600',
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
                border: '1px solid', borderRadius: 2,
                borderColor: (theme) => theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 2, fontSize: '0.875rem', fontWeight: '700',
                position: 'absolute',
                top: 40, left: '40%',
                zIndex: 'tooltip',
              }}
            >
              z-index tooltip
            </Box>
            <Box
              sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#fff'),
                color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid', borderRadius: 2,
                borderColor: (theme) => theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 2, fontSize: '0.875rem', fontWeight: '700',
                position: 'absolute',
                top: 0, left: '43%',
                zIndex: 'modal',
              }}
            >
              z-index modal
            </Box>
          </Typography>
        );
      }
    ```
+ **Shadows**
  + ```typescript
      <Box sx={{ boxShadow: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 }}>…
    ```
+ **Sizing**
  + ```typescript
      <Box sx={{
        width: 1/4 | '25%',
        width: 300 | 500, // converted to pixel
        width: 1 | '100%' | 'auto',
        // setting a constraint on breakpoints
        maxWidth: 'sm' | 'md' | 'lg',
        height: '50%' | '100%'
      }}>
    ```
+ **B**
  + ```typescript

    ```
+ **B**
  + ```typescript

    ```




### Superset of CSS
The `sx` prop supports CSS syntax including child and pseudo-selectors, media queries, raw CSS values, and more. 
Here are a few examples of how you can implement these CSS features:

* Using pseudo-selectors:
  + ```typescript
      <Box sx={{
        // some styles
        ":hover": {
          boxShadow: 6,
        },
      }} >
    ```
* Using media queries:
  + ```typescript
      <Box sx={{
          // some styles
          '@media print': {
            width: 300,
          },
      }} >
    ```
* Using nested selector:
  + ```typescript
      <Box sx={{
          // some styles
          '& .ChildSelector': {
            bgcolor: 'primary.main',
          },
      }} >
    ```
