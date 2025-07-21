# Dialog

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

## Usage

This component is to be used for all use cases where we need multiple actions (say, Save, Cancel, etc.) to be performed in the Dialog.
There is an optional prop on this component called contentDividers which always maintains the dividers on the screen, even when the content container of the dialog would not actually be scrolled, but there is some internal scrolling (e.g. in a table). See the following:

```tsx
// Imports
import { Dialog, DialogContentText } from '@rupertong-ui/core';

// Sample data

// Header (Typography + Searchbar)
const Header = ({ handleSearch }: HeaderProps): ReactElement => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">Sample Header</Typography>
      <div className={classes.searchInput}>
        <SearchBar onSearchChange={handleSearch} />
      </div>
    </div>
  );
};

// Content to be rendered in the Dialog
const content = (
  <>
    Any React Component
    <DialogContentText>Optional Dialog Context Text</DialogContentText>
  </>
);

// Actions (Buttons on the Footer)
const actions = (
  <Button
    color="primary"
    label="Ok"
    onClick={onClick}
    size="small"
    variant="contained"
  />
);

// Rendering the component
<Dialog
  actions={actions}
  content={content}
  data-testid="dialog"
  open={true}
  title={<Header handleSearch={handleSearch} />}
  contentPadding="16px" // Acceptable Units: "16" (no unit) or "16px" or "1rem"
  contentDividers
/>;
```

## Properties

- Props are as provided under [Dialog Props (Material UI)](https://material-ui.com/api/dialog/)

| propName             | type                     | default | isRequired |
| -------------------- | ------------------------ | ------- | ---------- |
| open                 | boolean                  | false   | yes        |
| actions              | ReactNode                |         | yes        |
| content              | ReactNode                |         | yes        |
| title                | ReactNode                | null    | no         |
| contentPadding       | string                   | null    | no         |
| contentDividers      | boolean                  | false   | no         |
| isFullWidth          | boolean                  | true    | no         |
| isResponsive         | boolean                  | true    | no         |
| isShadow             | boolean                  | true    | no         |
| responsiveBreakpoint | `xs` `sm` `md` `lg` `xl` | `xs`    | no         |
