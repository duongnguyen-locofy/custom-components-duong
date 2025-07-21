# UnderlinedTextField

TextField component with fill styling and an ability to auto grow based on its content. Primarily used for human readable input forms.

## Usage

```tsx
import { UnderlinedTextField } from "@rupertong-ui/core";

<UnderlinedTextField typographyVariant="h3" autoGrow helperText="My helper text" />

<UnderlinedTextField multiline autoGrow />

<UnderlinedTextField error helperText="This is an error" />

<UnderlinedTextField
    InputProps= {{
        startAdornment: <InputAdornment position="start">$</InputAdornment>
    }} />

<UnderlinedTextField select autoGrow>
    <MenuItem key="cdn" value="cdn">Canada</MenuItem>
    <MenuItem key="usa" value="usa">United States of America</MenuItem>
</UnderlinedTextField>
```

## Properties

- Props are as provided under [TextField Props (Material UI)](https://material-ui.com/api/text-field/#props)

| propName          | type            | default | isRequired |
| ----------------- | --------------- | ------- | ---------- |
| typographyVariant | 'body2' \| 'h3' | 'body2' | No         |
| autoGrow          | boolean         | false   | No         |
