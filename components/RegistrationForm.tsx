import {
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormGroup,
  FormLabel,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@tanstack/react-query';
import { DatePicker } from '@material-ui/pickers';
import { ReactElement, useState, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';

import Button from './Button';
import useYupValidationResolver from '../lib/useYupValidationResolver';
import { mergeFields } from '../lib/mailchimpHelpers';

const TECH_ACCESS = [
  { value: 'computer', label: 'Computer' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'smartphone', label: 'Smartphone' },
  { value: 'internet', label: 'Internet' },
];

const REFERRALS = [
  { value: 'friends', label: 'Friends' },
  { value: 'school', label: 'School/Teacher' },
  { value: 'socialmedia', label: 'Social Media' },
  { value: 'news', label: 'News' },
  { value: 'other', label: 'Other' },
];

type FormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  city: string;
  school: string;
  grade: string;
  techAccess: string;
  referrer: string;
  referrerOther: string;
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  consent: boolean;
};

const VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .required('Must provide student\'s first name.')
    .max(50, 'Student\'s first name cannot exceed 50 characters.'),
  lastName: Yup.string()
    .required('Must provide student\'s last name.')
    .max(50, 'Student\'s last name cannot exceed 50 characters.'),
  email: Yup.string()
    .required('Must provide student\'s email.')
    .email('Please provide a valid student email.'),
  dateOfBirth: Yup.date()
    .required('Must provide student\'s date of birth.')
    .nullable()
    .default(undefined)
    // @todo age min/max birthdates as prop 
    .min(new Date('2005-11-20'), 'Student must not be older than 18 on November 20, 2023 to register.')
    .max(new Date('2012-11-20'), 'Student must be at least 11 years old by November 20, 2023 to register.'),
  city: Yup.string()
    .required('Must provide student\'s city or town.')
    .max(100, 'Student\'s city or town name cannot exceed 100 characters.'),
  school: Yup.string()
    .required('Must provide student\'s school.')
    .max(100, 'Student\'s school name cannot exceed 100 characters.'),
  grade: Yup.number()
    .typeError('Must provide student\'s grade.')
    .required('Must provide student\'s grade.')
    // @todo min/max grade as prop
    .min(1, 'Student\'s grade cannot be lower than 1.')
    .max(12, 'Student\'s grade cannot be greater than 12.'),
  referrer: Yup.string()
    .required('Please tell us how you learned about Digital Waves'),
  referrerOther: Yup.string()
    .when('REFERRER', {
      is: 'other',
      then: Yup.string().required('Must provide how you learned about Digital Waves.'),
    }),
  parentFirstName: Yup.string()
    .required('Must provide parent or guardian\'s first name.')
    .max(50, 'Parent or guardian\'s first name cannot exceed 50 characters.'),
  parentLastName: Yup.string()
    .required('Must provide parent or guardian\'s last name.')
    .max(50, 'Parent or guardian\'s last name cannot exceed 50 characters.'),
  parentEmail: Yup.string()
    .required('Must provide parent or guardian\'s email.')
    .email('Please provide a valid parent or guardian email.'),
  consent: Yup.boolean()
    .oneOf([true], 'You must consent to the above conditions to enter.'),
});

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      zIndex: 1,
    },
    typographyH2: {
      marginBottom: theme.spacing(2),
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
    formGroup: {
      margin: `${theme.spacing(2)}px 0`,
    },
    formLabel: {
      marginBottom: theme.spacing(2),
      lineHeight: 1.5,
    },
    formControl: {
      margin: `${theme.spacing(1.5)}px 0`,
      textAlign: 'left',
    },
    typographyH2Parent: {
      margin: `${theme.spacing(2)}px 0`,
    },
    formControlLabelConsent: {
      margin: `${theme.spacing(2)}px 0`,
    },
    formHelperTextConsent: {
      marginBottom: theme.spacing(2),
    },
    containerSubmit: {
      marginTop: theme.spacing(4),
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
    },
    typographyError: {
      marginTop: theme.spacing(2),
    },
  })
);

const RegistrationForm = (): ReactElement => {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: useYupValidationResolver(VALIDATION_SCHEMA),
    shouldFocusError: true,
    mode: 'onBlur',
  });
  const watchReferrer = watch('referrer');
  const dateFormat = 'MM/DD/YYYY';

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const [techAccess, setTechAccess] = useState({
    computer: false,
    tablet: false,
    smartphone: false,
    internet: false,
  });

  const handleTechAccessChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTechAccess({
      ...techAccess,
      [event.target.name]: event.target.checked,
    });
  };

  const getTechAccessList = (): string => {
    let list = '';
    Object.entries(techAccess).forEach(([tech, access]) => {
      if (access) {
        list += `${list.length ? ', ' : ''}${tech}`;
      }
    });
    return list;
  };

  const mutation = useMutation({
    mutationFn: async (newFormData: mergeFields) => {
      const response = await fetch('/api/register2023', {
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
    onSuccess: async() => {
      setSubmitSuccess(true);
      window.location.hash = '#success';
    },
  });

  const onSubmit = (data: FormData) => {
    setSubmitLoading(true);
    setSubmitError(false);

    const participantData = {
      FNAME: data.firstName || '',
      LNAME: data.lastName || '',
      EMAIL: data.email || '',
      DOB: data.dateOfBirth || '',
      CITY: data.city || '',
      SCHOOL: data.school || '',
      GRADE: data.grade || '',
      TECHACCESS: getTechAccessList() || '',
      REFERRER: data.referrer || '',
      REF_OTHER: data.referrerOther || '',
      P_FNAME: data.parentFirstName || '',
      P_LNAME: data.parentLastName || '',
      P_EMAIL: data.parentEmail || '',
      CONSENT: data.consent.toString() || '',
    };

    mutation.mutate({ ...participantData });
  };

  return (
    <div className={classes.root}>
      {
        submitSuccess
          ? (
            <>
              <Typography
                variant="h2"
                className={classes.typographyH2}
              >
                Congrats, you&rsquo;re all set!
              </Typography>
              <Typography className={classes.form}>
                <strong>
                Thanks for registering to participate in Digital Waves 2023!
                You should receive an email from us within the next 24 hours with additional information and next steps.
                </strong>
              </Typography>
            </>
          )
          : (
            <>
              <Typography gutterBottom>
                Please review the program information on this page with your parent or guardian before registering to
                ensure you meet the eligibility requirements and understand your commitment to Digital Waves.
              </Typography>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.form}
                noValidate
              >
                <Typography
                  variant="h2"
                  className={classes.typographyH2}
                >
                  Student Information:
                </Typography>
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
                          className={classes.textField}
                          required
                          fullWidth
                          error={Boolean(errors.firstName)}
                          helperText={errors.firstName?.message}
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
                          className={classes.textField}
                          required
                          fullWidth
                          error={Boolean(errors.lastName)}
                          helperText={errors.lastName?.message}
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
                      required
                      fullWidth
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                    />
                  )}
                />
                <Controller
                  name="dateOfBirth"
                  control={control}
                  defaultValue={undefined}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <DatePicker
                      className={classes.textField}
                      inputVariant="outlined"
                      label="Date of Birth"
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                      fullWidth
                      format={dateFormat}
                      required
                      error={Boolean(errors.dateOfBirth)}
                      helperText={errors.dateOfBirth?.message}
                      openTo="year"
                    />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textField}
                      variant="outlined"
                      label="City/Town"
                      required
                      fullWidth
                      error={Boolean(errors.city)}
                      helperText={errors.city?.message}
                    />
                  )}
                />
                <Controller
                  name="school"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textField}
                      variant="outlined"
                      label="School"
                      required
                      fullWidth
                      error={Boolean(errors.school)}
                      helperText={errors.school?.message}
                    />
                  )}
                />
                <Controller
                  name="grade"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      className={classes.textField}
                      {...field}
                      variant="outlined"
                      label="Grade #"
                      required
                      fullWidth
                      type="number"
                      inputProps={{
                        min: 1,
                        max: 12,
                      }}
                      error={Boolean(errors.grade)}
                      helperText={errors.grade?.message}
                    />
                  )}
                />
                <FormGroup
                  className={classes.formGroup}
                >
                  <FormLabel className={classes.formLabel}>
                    What technology resources do you have reliable access to?
                    (Select all that apply)
                  </FormLabel>
                  {
                    TECH_ACCESS.map((tech) => (
                      <FormControlLabel
                        key={tech.value}
                        control={(
                          <Checkbox
                            name={tech.value}
                            onChange={handleTechAccessChange}
                          />
                        )}
                        label={tech.label}
                      />
                    ))
                  }
                </FormGroup>
                <FormControl
                  className={classes.formControl}
                  variant="outlined"
                  required
                  fullWidth
                  error={Boolean(errors.referrer)}
                >
                  <InputLabel id="referrer-label">
                    How did you learn about Digital Waves? 
                  </InputLabel>
                  <Controller
                    name="referrer"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        labelId="referrer-label"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                      >
                        {
                          REFERRALS.map((ref) => (
                            <MenuItem
                              key={ref.value}
                              value={ref.value}
                            >
                              {ref.label}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    )}
                  />
                  {
                    errors.referrer
                      ? (
                        <FormHelperText>
                          {errors.referrer?.message}
                        </FormHelperText>
                      )
                      : null
                  }
                </FormControl>
                {
                  watchReferrer === 'other'
                    ? (
                      <Controller
                        name="referrerOther"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            className={classes.textField}
                            variant="outlined"
                            label="I learned about Digital Waves through..."
                            required
                            fullWidth
                            error={Boolean(errors.referrerOther)}
                            helperText={errors.referrerOther?.message}
                          />
                        )}
                      />
                    )
                    : null
                }
                <Typography
                  variant="h2"
                  className={classes.typographyH2Parent}
                >
                  Parent/Guardian Information:
                </Typography>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="parentFirstName"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          variant="outlined"
                          label="First Name"
                          className={classes.textField}
                          required
                          fullWidth
                          error={Boolean(errors.parentFirstName)}
                          helperText={errors.parentFirstName?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="parentLastName"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          variant="outlined"
                          label="Last Name"
                          className={classes.textField}
                          required
                          fullWidth
                          error={Boolean(errors.parentLastName)}
                          helperText={errors.parentLastName?.message}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Controller
                  name="parentEmail"
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
                      required
                      fullWidth
                      error={Boolean(errors.parentEmail)}
                      helperText={errors.parentEmail?.message}
                    />
                  )}
                />
                <Controller
                  name="consent"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <>
                      <FormControlLabel
                        className={classes.formControlLabelConsent}
                        control={(
                          <Checkbox {...field} />
                        )}
                        label="I give my consent to Digital Waves to contact the above student and parent/guardian with program information."
                      />
                      {
                        errors.consent
                          ? (
                            <FormHelperText
                              error
                              className={classes.formHelperTextConsent}
                            >
                              {errors.consent?.message}
                            </FormHelperText>
                          )
                          : null
                      }
                    </>
                  )}
                />
                <Typography>
                  Your personal information is confidential to Digital Waves NL and STEMforGIRLS, and will never be shared with any third-party organizations.
                </Typography>
                <div className={classes.containerSubmit}>
                  <Button
                    variant="raised"
                    color="secondary"
                    type="submit"
                    disabled={submitLoading || isValid}
                  >
                    Register for Digital Waves
                  </Button>
                  {
                    isDirty && !isValid
                      ? (
                        <Typography color="error" className={classes.typographyError}>
                          Please fix all errors in your form before you register.
                        </Typography>
                      )
                      : null
                  }
                  {
                    submitError
                      ? (
                        <Typography color="error" className={classes.typographyError}>
                          Sorry, something went wrong processing your registration.
                          Please try refreshing the page and completing the form again.
                          If you continue to have issues submitting your registration form, please contact
                          <a href="mailto:info@digitalwavesnl.ca">info@digitalwavesnl.ca</a>
                          and we&rsquo;ll be happy to assist you.
                        </Typography>
                      )
                      : null
                  }
                </div>
              </form>
            </>
          )
      }
    </div>
  );
};

export default RegistrationForm;
