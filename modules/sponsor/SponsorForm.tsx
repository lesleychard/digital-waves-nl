import { sendForm } from 'emailjs-com';
import { Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '../../components/Button';
import { containerSm } from '../../styles/helpers/extend';
import { useState } from 'react';
import FormFallback from '../../components/FormFallback';
import { getFormsEnabled } from '../../lib/getFormsEnabled';

const SPONSOR_PACKAGES = [
  { value: 'tb', label: 'Terrabyte Tier' },
  { value: 'gb', label: 'Gigabyte Tier' },
  { value: 'mb', label: 'Megabyte Tier' },
  { value: 'kb', label: 'Kilobyte Tier' },
  { value: 'custom', label: 'Build Your Own' },
];

type FormData = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName?: string;
  email: string;
  tier?: string;
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: 'url(assets/images/brand/section-bg-teal.jpg) no-repeat center center',
      backgroundSize: 'cover',
    },
    container: {
      ...containerSm(theme),
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
    },
    typographyHeading: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    containerSuccess: {
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.text.primary}`,
      margin: `${theme.spacing(3)}px auto`,
      position: 'relative',
      maxWidth: '30rem',
      padding: theme.spacing(3),
    },
    form: {
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.background.paper,
      padding: `${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(6)}px`,
      border: `1px solid ${theme.palette.text.primary}`,
      margin: `${theme.spacing(3)}px auto`,
      position: 'relative',
      maxWidth: '30rem',
    },
    textField: {
      margin: `${theme.spacing(1.5)}px 0`,
    },
    formControl: {
      margin: `${theme.spacing(1.5)}px 0`,
      textAlign: 'left',
    },
    containerSubmit: {
      position: 'absolute',
      bottom: '-1rem',
      left: 0,
      right: 0,
      zIndex: 2,
    },
    buttonSubmit: {
    },
  })
);

const SponsorForm = (): ReactElement => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm<FormData>();

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);

  const onSubmit = () => {
    setSubmitLoading(true);
    setSubmitError(false);

    sendForm('sponsor_us_form', 'sponsor_us_template', '#sponsor-form')
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
      <div className={classes.container}>
        <Typography variant="overline" component="h1">
          Sponsor Us
        </Typography>
        <Typography variant="h1" component="p" className={classes.typographyHeading}>
          Become a 2023 Sponsor
        </Typography>
        {
          getFormsEnabled()
            ? (
              <>
                <Typography>
                  Interested in sponsoring Digital Waves? Fill out the form below and a volunteer will be in touch.
                </Typography>
                
                {
                  submitSuccess
                    ? (
                      <Typography className={classes.containerSuccess}>
                        Thank you for your interest in sponsoring Digital Waves.
                        One of our team members will be in touch as soon as possible.
                      </Typography>
                    )
                    : (
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={classes.form}
                        id="sponsor-form"
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
                        <Controller
                          name="firstName"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              className={classes.textField}
                              variant="outlined"
                              label="First Name"
                              required
                              fullWidth
                            />
                          )}
                        />
                        <Controller
                          name="lastName"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              className={classes.textField}
                              variant="outlined"
                              label="Last Name"
                              required
                              fullWidth
                            />
                          )}
                        />
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
                        <Controller
                          name="tier"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl
                              className={classes.formControl}
                              variant="outlined"
                              fullWidth
                            >
                              <InputLabel id="sponsor-package-label">
                                Sponsor Package
                              </InputLabel>
                              <Select
                                {...field}
                                labelId="sponsor-package-label"
                              >
                                <MenuItem value="">
                                  <em>None Specified</em>
                                </MenuItem>
                                {
                                  SPONSOR_PACKAGES.map((pkg) => (
                                    <MenuItem
                                      key={pkg.value}
                                      value={pkg.label}
                                    >
                                      {pkg.label}
                                    </MenuItem>
                                  ))
                                }
                              </Select>
                            </FormControl>
                          )}
                        />
                        <div className={classes.containerSubmit}>
                          <Button
                            variant="raised"
                            color="secondary"
                            type="submit"
                            className={classes.buttonSubmit}
                            disabled={submitLoading}
                          >
                            Request To Sponsor
                          </Button>
                        </div>
                      </form>
                    )
                }
              </>
            )
            : (
              <FormFallback
                emailSubject="Sponsorship Inquiry"
                buttonProps={{ color: 'secondary' }}
              >
                <Typography>
                  Interested in becoming a Digital Waves sponsor or have additional questions about sponsoring our program?
                </Typography>
              </FormFallback>
            )
        }
      </div>
    </div>
  );
};

export default SponsorForm;
