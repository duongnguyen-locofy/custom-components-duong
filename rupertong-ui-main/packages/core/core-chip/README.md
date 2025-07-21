# Chip

> Chips are compact elements that represent an input, attribute, or action.

Note: As of right now, we support only two types of Chip - Filter & Action variants.

## Usage

```tsx
// Imports
import { Chip, ChipType } from '@rupertong-ui/core-chip';

// Render a Filter Chip
<Chip
  label="MyChip"
  value="mychip"
  variant="outlined"
  size="small"
  avatar={<Avatar>A</Avatar>}
/>;

// Render an Action Chip
<Chip
  type={ChipType.Action}
  label="MyChip"
  value="mychip"
  variant="default"
  size="small"
  avatar={<Avatar>A</Avatar>}
/>;
```

## Properties

- Props for the Chip component are listed under: [Chip Props MUI](https://v4.mui.com/api/chip/)

- Added props are as follows:

| propName                      | type                                                 | default           | isRequired |
| ----------------------------- | ---------------------------------------------------- | ----------------- | ---------- |
| label                         | `ReactNode`                                          |                   | Yes        |
| maintainInternalSelectedState | boolean                                              | true              | No         |
| onSelect                      | (value: string or number, selected: boolean) => void |                   | No         |
| selected                      | boolean                                              | false             | No         |
| type                          | `filter` or `action`                                 | `ChipType.Action` | No         |
| value                         | `string` or `number`                                 |                   | No         |
| variant                       | `default` or `outlined`                              | `default`         | No         |
