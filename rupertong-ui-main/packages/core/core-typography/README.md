# Typography

> Typography is used to apply rupertong-ui  formats to displayed text.

## Usage

```tsx
import { Typography } from "@rupertong-ui/core";

<Typography variant="h1">H1</Typography>
<Typography variant="h2">H2</Typography>
<Typography variant="h2.light">H2</Typography>
<Typography variant="h3.medium">H3 (MEDIUM)</Typography>
<Typography variant="h3">H3</Typography>
<Typography variant="h4.medium">H4 (MEDIUM)</Typography>
<Typography variant="h4">H4</Typography>
<Typography variant="subtitle1">Subtitle 1</Typography>
<Typography variant="body1">Body 1</Typography>
<Typography variant="subtitle2">Subtitle 2</Typography>
<Typography variant="body2">Body 2</Typography>
<Typography variant="button" component="div">
  Button
</Typography>
<Typography variant="caption.medium" component="div">
  Caption (medium)
</Typography>
<Typography variant="caption" component="div">
  Caption
</Typography>
<Typography variant="overline" component="div">
  Overline
</Typography>
<Typography fullWidth>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam metus nisl, vehicula eu rutrum
  pellentesque, rhoncus ut orci.
</Typography>
<Typography color="textDark">Dark</Typography>
<Typography color="textBlackHighEmphasis">Black (High Emphasis)</Typography>
<Typography color="textBlackMedEmphasis">Black (Med Emphasis)</Typography>
<Typography color="textBlackDisabled">Black (Disabled)</Typography>
<Typography color="textWhiteHighEmphasis">White (High Emphasis)</Typography>
<Typography color="textWhiteMedEmphasis">White (Med Emphasis)</Typography>
<Typography color="textWhiteDisabled">White (Disabled)</Typography>
```

## Properties

- Props are as provided under [Typography Props (Material UI)](https://v4.mui.com/api/typography/#props)

| propName  | type                                                                                                                                                                                                  | default   | isRequired |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- |
| variant   | As documented. Additional values are: One of ('h2.light', 'h3.medium', 'h4.medium')                                                                                                                   | 'body1'   | No         |
| fullWidth | boolean                                                                                                                                                                                               | false     | No         |
| color     | As documented. Additional values are: One of ('textDark', 'textBlackHighEmphasis', 'textBlackMedEmphasis', 'textBlackDisabled', 'textWhiteHighEmphasis', 'textWhiteMedEmphasis', 'textWhiteDisabled') | 'initial' | No         |
