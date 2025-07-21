# TextField

TextFields allow users to enter text into a UI. They typically appear in forms and dialogs.

## Usage

```tsx
import { TextField } from "@rupertong-ui/core";

<TextField margin='dense' label='Input' />

<TextField margin='super-dense' label='Input' labelPosition="top" />

<TextField margin='super-dense' label='Input' labelPosition="left" startAdornment={<KeyboardArrowDown />} />
```

## Properties

- Props are as provided under [TextField Props (Material UI)](https://material-ui.com/api/text-field/#props)

| propName           | type                                              | default    | isRequired |
|--------------------|---------------------------------------------------|------------|------------|
| variant            | 'outlined'                                        | 'outlined' | No         |
| margin             | One of ('normal', 'dense', 'super-dense', 'none') | 'normal'   | No         |
| labelPosition      | One of ('top', 'left', 'none')                    | 'top'      | No         |
| startAdornment     | 'icon'                                            | undefined  | No         |
| endAdornment       | 'icon'                                            | undefined  | No         |
| clearable          | `boolean`                                         | false      | No         |
| preventMenuOverlap | `boolean`                                         | false      | No         |
