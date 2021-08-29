import { sendForm } from 'emailjs-com';
import { TextField, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '../../components/Button';

type FormData = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName?: string;
  email: string;
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
      margin: `${theme.spacing(2)}px 0 0`,
    },
    containerSubmit: {
      marginTop: theme.spacing(4),
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
    },
  })
);

const VolunteerForm = (): ReactElement => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm<FormData>();

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);

  const onSubmit = () => {
    setSubmitLoading(true);
    setSubmitError(false);

    sendForm('volunteer_form', 'volunteer_template', '#volunteer-form')
      .then(
        () => {
          setSubmitSuccess(true);
          setSubmitLoading(false);
        },
        (error) => {
          setSubmitError(true);
          setSubmitLoading(false);
          console.error(error);
        },
      );
  };
  return (
    <div className={classes.root}>
      <Typography variant="overline" component="h2" className={classes.typographyOverline}>
        Volunteer With Us
      </Typography>
      <Typography gutterBottom>
        Are you interested in helping the Digital Waves 2021 experience come to life? We are looking for people with all skill sets to help us make our vision a reality.
      </Typography>

      {
        submitSuccess
          ? (
            <Typography className={classes.form}>
              <strong>
                Thank you for your interest in volunteering with Digital Waves.
                One of our team members will be in touch as soon as possible.
              </strong>
            </Typography>
          )
          : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={classes.form}
              id="volunteer-form"
            >
              {
                submitError
                  ? (
                    <Typography color="error">
                      There was an error submitting your request. Please try again.
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
                name="jobTitle"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className={classes.textField}
                    variant="outlined"
                    label="Job Title"
                    required
                    fullWidth
                  />
                )}
              />
              <Controller
                name="companyName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    className={classes.textField}
                    variant="outlined"
                    label="Company Name"
                    fullWidth
                  />
                )}
              />
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
              <div className={classes.containerSubmit}>
                <Button
                  variant="raised"
                  color="secondary"
                  type="submit"
                  disabled={submitLoading}
                >
                  Request To Volunteer
                </Button>
              </div>
            </form>
          )
      }
    </div>
  );
};

export default VolunteerForm;
