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
import { ReactElement, useState, ChangeEvent, ReactNode } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import DownloadIcon from '@material-ui/icons/GetApp';

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

const DEMOGRAPHIC_OPTIONS = [
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' },
  { value: 'not disclosed', label: 'Prefer not to say' },
];

type FormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  pronouns: string;
  city: string;
  school: string;
  grade: string;
  techAccess: string;
  referrer: string;
  referrerOther: string;
  indigenous: string;
  immigrant: string;
  racialized: string;
  disability: string;
  additionalSupports: string;
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  parentPhone: string;
  consent: boolean;
  rules: boolean;
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
    .min(new Date('2005-12-01'), 'Student must not be older than 18 on December 1, 2023 to register.')
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
  parentPhone: Yup.string()
    .required('Must provide parent or guardian\'s phone number.'),
  consent: Yup.boolean()
    .oneOf([true], 'You must consent to the above conditions to enter.'),
  rules: Yup.boolean()
    .oneOf([true], 'You must read and agree to the Rules and Regulations to enter.'),
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
      margin: `${theme.spacing(3)}px 0 0`,
    },
    formGroup: {
      margin: `${theme.spacing(2)}px 0`,
    },
    formLabel: {
      margin: `${theme.spacing(1)}px 0`,
      lineHeight: 1.5,
    },
    formControl: {
      margin: `${theme.spacing(1.5)}px 0`,
      textAlign: 'left',
    },
    textFieldSupports: {
      marginBottom: theme.spacing(1.5),
    },
    inputLabelShrink: {
      background: theme.palette.background.paper,
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
    buttonDownloadRules: {
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

type Props = {
  eligibility?: ReactNode,
};

const RegistrationForm = ({ eligibility }: Props): ReactElement => {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: useYupValidationResolver(VALIDATION_SCHEMA),
    shouldFocusError: true,
    mode: 'onChange',
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
      PRONOUNS: data.pronouns || '',
      CITY: data.city || '',
      SCHOOL: data.school || '',
      GRADE: data.grade || '',
      TECHACCESS: getTechAccessList() || '',
      REFERRER: data.referrer || '',
      REF_OTHER: data.referrerOther || '',
      INDIGENOUS: data.indigenous || '',
      IMMIGRANT: data.immigrant || '',
      RACIALIZED: data.racialized || '',
      DISABILITY: data.disability || '',
      SUPPORTS: data.additionalSupports || '',
      P_FNAME: data.parentFirstName || '',
      P_LNAME: data.parentLastName || '',
      P_EMAIL: data.parentEmail || '',
      P_PHONE: data.parentPhone || '',
      CONSENT: data.consent.toString() || '',
      RULES: data.rules.toString() || '',
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
              {eligibility}
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
                      onChange={
                        (date) => {
                          field.onChange(date ? new Date(date.toString()) : null);
                          console.log(date?.format(dateFormat));
                        }
                      }
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
                  name="pronouns"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textField}
                      variant="outlined"
                      label="Pronouns (Optional)"
                      fullWidth
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
                <Typography>
                  What supports, if any, can we provide to ensure your
                  accessibility needs are met while participating in Digital Waves Programing?
                </Typography>
                <Controller
                  name="additionalSupports"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className={classes.textFieldSupports}
                      {...field}
                      variant="outlined"
                      label="Enter additional supports if needed (optional)"
                      fullWidth
                    />
                  )}
                />
                <FormControl
                  className={classes.formControl}
                  variant="outlined"
                  required
                  fullWidth
                  error={Boolean(errors.referrer)}
                >
                  <InputLabel
                    id="referrer-label"
                    classes={{
                      shrink: classes.inputLabelShrink,
                    }}
                  >
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
                        onChange={(e) => field.onChange(e.target.value)}
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

                {/** STUDENT DEMOGRAPHICS SECTION */}

                <Typography
                  variant="h3"
                  className={classes.typographyH2Parent}
                >
                  Student Demographics (Optional):
                </Typography>
                <FormControl
                  className={classes.formControl}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel
                    id="indigenous-label"
                    classes={{
                      shrink: classes.inputLabelShrink,
                    }}
                  >
                    Do you consider yourself to be an Indigenous person?
                  </InputLabel>
                  <Controller
                    name="indigenous"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        labelId="indigenous-label"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                      >
                        {
                          DEMOGRAPHIC_OPTIONS.map((ref) => (
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
                </FormControl>
                <FormControl
                  className={classes.formControl}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel
                    id="immigrant-label"
                    classes={{
                      shrink: classes.inputLabelShrink,
                    }}
                  >
                    Do you identify as an immigrant or refugee?
                  </InputLabel>
                  <Controller
                    name="immigrant"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        labelId="immigrant-label"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                      >
                        {
                          DEMOGRAPHIC_OPTIONS.map((ref) => (
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
                </FormControl>
                <FormControl
                  className={classes.formControl}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel
                    id="racialized-label"
                    classes={{
                      shrink: classes.inputLabelShrink,
                    }}
                  >
                    Do you identify as a member of a racialized group?
                  </InputLabel>
                  <Controller
                    name="racialized"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        labelId="racialized-label"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                      >
                        {
                          DEMOGRAPHIC_OPTIONS.map((ref) => (
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
                </FormControl>
                <FormControl
                  className={classes.formControl}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel
                    id="disability-label"
                    classes={{
                      shrink: classes.inputLabelShrink,
                    }}
                  >
                    Do you identify as someone with a visible or invisible disability?
                  </InputLabel>
                  <Controller
                    name="disability"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        labelId="disability-label"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                      >
                        {
                          DEMOGRAPHIC_OPTIONS.map((ref) => (
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
                </FormControl>

                {/** PARENT GUARDIAN SECTION */}

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
                  name="parentPhone"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textField}
                      variant="outlined"
                      label="Phone Number"
                      type="tel"
                      required
                      fullWidth
                      error={Boolean(errors.parentPhone)}
                      helperText={errors.parentPhone?.message}
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
                          <Checkbox
                            {...field}
                          />
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
                <Controller
                  name="rules"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <>
                      <FormControlLabel
                        className={classes.formControlLabelConsent}
                        control={(
                          <Checkbox
                            {...field}
                          />
                        )}
                        label={(
                          <>
                            I have read and agree to the program&rsquo;s Rules and Regulations.
                          </>
                        )}
                      />
                      {
                        errors.rules
                          ? (
                            <FormHelperText
                              error
                              className={classes.formHelperTextConsent}
                            >
                              {errors.rules?.message}
                            </FormHelperText>
                          )
                          : null
                      }
                      <Button
                        className={classes.buttonDownloadRules}
                        component="a"
                        variant="outlined"
                        href="assets/documents/Digital-Waves-2023-Official-Rules-and-Regulations.pdf"
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download Rules and Regulations (PDF)
                        <DownloadIcon />
                      </Button>
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
                    disabled={submitLoading}
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
