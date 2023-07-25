import { TextField, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@tanstack/react-query';

import { ReactElement, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import Button from '../../components/Button';
import { getFormsEnabled } from '../../lib/getFormsEnabled';
import FormFallback from '../../components/FormFallback';

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
    typographyBody: {
      marginBottom: theme.spacing(2),
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
    setSubmitError(false);

    const volunteerData = {
      ...data,
      FNAME: data.firstName || '',
      LNAME: data.lastName || '',
      EMAIL: data.email || '',
      JOB: data.jobTitle || '',
      COMPANY: data.companyName || '',
      VOLUNTEER: 'true',
    }

    console.log(`data: ${data}`)

    mutation.mutate({ ...volunteerData });
  };
  return (
    <div className={classes.root}>
      <Typography variant="overline" component="h2" className={classes.typographyOverline}>
        Volunteer With Us
      </Typography>
      <Typography className={classes.typographyBody}>
        Are you interested in helping the Digital Waves 2023 experience come to life? We are looking for people with all skill sets to help us make our vision a reality.
      </Typography>
      {
        getFormsEnabled()
          ? (
            <>
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
                                inputProps={{"data-testid": "volunteer-form-first-name"}}
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
                                inputProps={{"data-testid": "volunteer-form-last-name"}}
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
                            inputProps={{"data-testid": "volunteer-form-job-title"}}
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
                            inputProps={{"data-testid": "volunteer-form-company-name"}}
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
                            inputProps={{"data-testid": "volunteer-form-email"}}
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
                          data-testid="volunteer-request-button"
                        >
                          Request To Volunteer
                        </Button>
                      </div>
                    </form>
                  )
              }
            </>
          )
          : (
            <FormFallback emailSubject="Volunteering Inquiry" />
          )
      }
    </div>
  );
};

export default VolunteerForm;
