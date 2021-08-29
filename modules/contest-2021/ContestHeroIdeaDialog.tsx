import fetchJsonp from 'fetch-jsonp';
import { Grid, TextField, Typography, Checkbox, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, useState } from 'react';
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

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>();

  const defaultErrorMsg = (
    'Something went wrong and we could not subscribe you to updates at this time.'
    + 'Please try again. If this error persists, please contact '
    + '<a href="mailto:info@digitalwavesnl.ca">info@digitalwavesnl.ca</a>'
  );

  const onSubmit = (data: FormData) => {
    setSubmitLoading(true);
    setSubmitError(undefined);

    const formData = new URLSearchParams(data as unknown as URLSearchParams).toString();
    const submitUrl = `${process.env.MAILCHIMP_SUBSCRIBE_URL}&amp;c=?&${formData}`;
    fetchJsonp(submitUrl, { jsonpCallback: 'c', jsonpCallbackFunction: '' })
      .then((response) => {
        return response.json();
      })
      .then((jsonRes) => {
        if (jsonRes.result === 'success') {
          setSubmitSuccess(true);
        }
        else {
          const errorMsg = jsonRes.msg
            ? jsonRes.msg
            : defaultErrorMsg;
          setSubmitError(errorMsg);
          setSubmitLoading(false);
        }
      })
      .catch((e) => {
        console.error(e);
        setSubmitError(defaultErrorMsg);
        setSubmitLoading(false);
      });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Got an Idea?
      </Typography>
      <Typography>
        Do you have an amazing idea on how to solve this year’s design challenge? Please subscribe to receive updates and we’ll let you know when registration opens.
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
                  disabled={submitLoading}
                >
                  Subscribe to Contest Updates
                </Button>
              </div>
            </form>
          )
      }
    </div>
  );
};

export default ContestHeroIdeaDialog;
