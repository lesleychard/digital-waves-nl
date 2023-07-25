import { FormControlLabel, TextField, Typography, Checkbox, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@tanstack/react-query';
import fetchJsonp from 'fetch-jsonp';
import { ReactElement, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '../../components/Button';

type FormData = {
  FNAME: string;
  LNAME: string;
  EMAIL: string;
  ISNL: boolean | string;
  SPONSOR: boolean | string;
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
    textFieldLabel: {
      color: theme.palette.text.primary,
    },
    checkbox: {
      color: theme.palette.text.primary,
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

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>();

  const defaultErrorMsg = (
    'Something went wrong and we could not subscribe you to updates at this time.'
    + 'Please try again. If this error persists, please contact '
    + '<a href="mailto:info@digitalwavesnl.ca">info@digitalwavesnl.ca</a>'
  );

  const mutation = useMutation({
    mutationFn: async (newFormData: FormData) => {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormData),
      });
      if (!response.ok) {
        // fetch api doesn't handle errors. More info in the docs here:
        // https://tinyurl.com/fetchNoError
        setSubmitError(true);
        setSubmitLoading(false);
      }
      return response.json();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: async(data: Record<string, any>) => {
      console.log(`success!`);
      setSubmitSuccess(true);
    },
  });

  const onSubmit = (data: FormData) => {
    setSubmitLoading(true);
    setSubmitError(undefined);

    const subscribeData = {
      FNAME: data.FNAME || '',
      LNAME: data.LNAME || '',
      EMAIL: data.EMAIL || '',
      SPONSOR: String(data.SPONSOR),
      ISNL: String(data.ISNL || false),
    }

    console.log(`data: ${JSON.stringify(data)}`);

    mutation.mutate({ ...subscribeData });
  };

  return (
    <div className={classes.root}>
      <Typography variant="overline" component="h2" className={classes.typographyOverline}>
        Subscribe to Updates
      </Typography>
      <Typography gutterBottom>
        Stay updated on all news about future Digital Waves experiences.
        We will only send you the important stuff, like event announcements and other opportunities for local girls and 2SLGBTQIA+ youth.
      </Typography>
      {
        submitSuccess
          ? (
            <Typography className={classes.form}>
              <strong>
                Thanks for subscribing to Digital Waves NL.
                We will be in touch with important updates, announcements, and key contest reminders.
              </strong>
            </Typography>
          )
          : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={classes.form}
              id="subscribe-form"
            >
              {
                submitError
                  ? (
                    <Typography component="div" color="error">
                      <p dangerouslySetInnerHTML={{ __html: submitError }} />
                    </Typography>
                  )
                  : null
              }
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="FNAME"
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
                        InputLabelProps={{ className: classes.textFieldLabel }}
                        inputProps={{"data-testid": "subscribe-form-first-name"}}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="LNAME"
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
                        InputLabelProps={{ className: classes.textFieldLabel }}
                        inputProps={{"data-testid": "subscribe-form-last-name"}}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Controller
                name="EMAIL"
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
                    InputLabelProps={{ className: classes.textFieldLabel }}
                    inputProps={{"data-testid": "subscribe-form-email"}}
                  />
                )}
              />
              <Controller
                name="ISNL"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={(
                      <Checkbox
                        className={classes.checkbox}
                        {...field}
                      />
                    )}
                    label="I reside in the province of Newfoundland & Labrador."
                    data-testid="subscribe-form-isNL"
                  />
                )}
              />
              <Controller
                name="SPONSOR"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={(
                      <Checkbox
                        className={classes.checkbox}
                        {...field}
                        data-testid="subscribe-form-sponsor"
                      />
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
                  disabled={submitLoading}
                  data-testid="subscribe-request-button"
                >
                  Subscribe to Updates
                </Button>
              </div>
            </form>
          )
      }
    </div>
  );
};

export default SubscribeForm;
