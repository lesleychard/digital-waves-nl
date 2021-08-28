import { FormControlLabel, TextField, Typography, Checkbox, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '../../components/Button';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  inProvince: boolean;
  canSponsor: boolean;
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      zIndex: 1,
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
      },
    },
    typographyOverline: {
      marginBottom: theme.spacing(2),
      opacity: 0.5,
    },
    form: {
      position: 'relative',
      marginTop: theme.spacing(3),
    },
    textField: {
      margin: `${theme.spacing(2)}px 0`,
    },
    containerSubmit: {
      marginTop: theme.spacing(2),
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
    },
  })
);

const SubscribeForm = (): ReactElement => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className={classes.root}>
      <Typography variant="overline" component="h2" className={classes.typographyOverline}>
        Subscribe to Updates
      </Typography>
      <Typography gutterBottom>
        Stay updated on all news for the 2021 Digital Waves experience.
        We will only send you the important stuff, like prize announcements and reminders of key contest dates.
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
        <Controller
          name="canSponsor"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              control={(
                <Checkbox {...field} />
              )}
              label="I am interested in becoming a sponsor."
            />
          )}
        />
        <div className={classes.containerSubmit}>
          <Button
            variant="raised"
            color="secondary"
            type="submit"
          >
            Subscribe to Updates
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
