import { Grid, TextField, Typography, Checkbox, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '../../components/Button';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  inProvince: boolean;
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(3),
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
      },
    },
    form: {
      textAlign: 'left',
      marginTop: theme.spacing(3),
    },
    textField: {
      margin: `${theme.spacing(2)}px 0`,
    },
    containerSubmit: {
      textAlign: 'center',
      marginTop: theme.spacing(3),
    },
  })
);

const ContestHeroIdeaDialog = (): ReactElement => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Got an Idea?
      </Typography>
      <Typography>
        Do you have an amazing idea on how to solve this year’s design challenge? Please subscribe to receive updates and we’ll let you know when registration opens.
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  label="First Name"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  label="Last Name"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              className={classes.textField}
              variant="outlined"
              label="Email"
              type="email"
              fullWidth
            />
          )}
        />
        <Controller
          name="inProvince"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              control={(
                <Checkbox {...field} />
              )}
              label="I reside in the province of Newfoundland & Labrador."
            />
          )}
        />
        <div className={classes.containerSubmit}>
          <Button
            variant="raised"
            color="secondary"
            type="submit"
          >
            Subscribe to Contest Updates
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContestHeroIdeaDialog;
