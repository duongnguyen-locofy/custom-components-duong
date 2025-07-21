import { Autocomplete } from '@rupertong-ui/core-autocomplete';
import { Grid } from '@material-ui/core';
import Typography from '@rupertong-ui/core-typography';
import Button from '@rupertong-ui/core-button';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
];

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Autocomplete
          textFieldProps={{
            label: 'Select a film',
          }}
          multiple
          options={top100Films}
          getOptionLabel={(option) => option.label}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2">Second column content</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained">Button</Button>
      </Grid>
    </Grid>
  );
};

export default App;
