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
import { DatePicker } from '@material-ui/pickers';
import Link from 'next/link';
import {
  ReactElement,
  useState,
  ChangeEvent,
  useEffect,
  ReactNode,
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import moment from 'moment';
import * as Yup from 'yup';

import Button from './Button';
import useYupValidationResolver from '../lib/useYupValidationResolver';
import { container } from '../styles/helpers/extend';
import { fade } from '../styles/helpers/color';

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
  ISPARTIC?: string;
  PARTIC_23?: string;
  FNAME: string;
  LNAME: string;
  DOB?: string;
  EMAIL: string;
  CITY?: string;
  SCHOOL?: string;
  GRADE?: string;
  TECHACCESS?: string;
  REFERRER?: string;
  REF_OTHER?: string;
  P_FNAME?: string;
  P_LNAME?: string;
  P_EMAIL?: string;
  CONSENT?: boolean;
  PARENT?: string;
};

const VALIDATION_SCHEMA = Yup.object().shape({
  FNAME: Yup.string()
    .required('Must provide student\'s first name.')
    .max(50, 'Student\'s first name cannot exceed 50 characters.'),
  LNAME: Yup.string()
    .required('Must provide student\'s last name.')
    .max(50, 'Student\'s last name cannot exceed 50 characters.'),
  EMAIL: Yup.string()
    .required('Must provide student\'s email.')
    .email('Please provide a valid student email.'),
  DOB: Yup.date()
    .required('Must provide student\'s date of birth.')
    .nullable()
    .default(undefined)
    // @todo age min/max birthdates as prop 
    .min(new Date('2005-12-03'), 'Student must not be older than 18 on March 7, 2023 to register.')
    .max(new Date('2012-12-03'), 'Student must be at least 11 years old by April 1, 2023 to register.'),
  CITY: Yup.string()
    .required('Must provide student\'s city or town.')
    .max(100, 'Student\'s city or town name cannot exceed 100 characters.'),
  SCHOOL: Yup.string()
    .required('Must provide student\'s school.')
    .max(100, 'Student\'s school name cannot exceed 100 characters.'),
  GRADE: Yup.number()
    .typeError('Must provide student\'s grade.')
    .required('Must provide student\'s grade.')
    // @todo min/max grade as prop
    .min(5, 'Student\'s grade cannot be lower than 5.')
    .max(12, 'Student\'s grade cannot be greater than 12.'),
  REFERRER: Yup.string()
    .required('Please tell us how you learned about Digital Waves'),
  REF_OTHER: Yup.string()
    .when('REFERRER', {
      is: 'other',
      then: Yup.string().required('Must provide how you learned about Digital Waves.'),
    }),
  P_FNAME: Yup.string()
    .required('Must provide parent or guardian\'s first name.')
    .max(50, 'Parent or guardian\'s first name cannot exceed 50 characters.'),
  P_LNAME: Yup.string()
    .required('Must provide parent or guardian\'s last name.')
    .max(50, 'Parent or guardian\'s last name cannot exceed 50 characters.'),
  P_EMAIL: Yup.string()
    .required('Must provide parent or guardian\'s email.')
    .email('Please provide a valid parent or guardian email.'),
  CONSENT: Yup.boolean()
    .oneOf([true], 'You must consent to the above conditions to enter.'),
});

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      background: theme.palette.background.paper,
    },
    container: {
      ...container(theme),
      [theme.breakpoints.up('md')]: {
        margin: 0,
        padding: '10vw 20vw 10vw 15vw',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '20vw',
        paddingRight: '25vw',
      },
      [theme.breakpoints.up('xl')]: {
        paddingRight: '30vw',
      },
    },
    typographyH1: {
      fontSize: '3rem',
      marginBottom: theme.spacing(4),
      '& > span': {
        color: theme.palette.primary.main,
      },
    },
    form: {
      textAlign: 'left',
      marginTop: theme.spacing(4),
    },
    typographyH2: {
      marginBottom: theme.spacing(2),
    },
    textField: {
      margin: `${theme.spacing(2)}px 0`,
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
      marginTop: theme.spacing(3),
      position: 'relative',
      zIndex: 1,
    },
    typographyDuplicateParent: {
      background: fade(theme.palette.secondary.light, 0.5),
      padding: theme.spacing(2),
      margin: `${theme.spacing(2)}px 0`,
      '& a': {
        color: theme.palette.text.primary,
      },
    },
    containerClosed: {
      position: 'relative',
      zIndex: 1,
    },
    buttonSubscribe: {
      marginTop: theme.spacing(2),
    },
    aside: {
      background: 'url(assets/images/home/home-about-us-aside.jpg) no-repeat center center',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      margin: `0 ${theme.spacing(3)}px`,
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        right: 0,
        top: '2vw',
        bottom: '2vw',
        width: '36vw',
        margin: 0,
      },
    },
  })
);

type Props = {
  title: ReactNode,
  isRegistrationOpen?: boolean,
  consentLabel: string,
  parentMergeTag?: string,
  participantMergeTag: string,
};

const RegistrationForm = ({
  isRegistrationOpen = true,
  title,
  consentLabel,
  parentMergeTag,
  participantMergeTag,
}: Props): ReactElement => {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: useYupValidationResolver(VALIDATION_SCHEMA),
  });
  const mutation = useMutation({
    mutationFn: (newFormData: FormData) => {
      return fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormData),
      });
    },
  });
  
  const watchReferrer = watch('REFERRER');
  const dateFormat = 'MM/DD/YYYY';

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [submitError, setSubmitError] = useState<any>();
  const [techAccess, setTechAccess] = useState({
    computer: false,
    tablet: false,
    smartphone: false,
    internet: false,
  });
  const [duplicateParentWarning, setDuplicateParentWarning] = useState<boolean>(false);

  const defaultErrorMsg = (
    'Something went wrong and we could not register you at this time. '
    + 'Please try again. If this error persists, please contact '
    + '<a href="mailto:info@digitalwavesnl.ca">info@digitalwavesnl.ca</a>'
  );

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

  const onSubmit = (data: FormData) => {
    setSubmitSuccess(false);
    setSubmitLoading(true);
    setDuplicateParentWarning(false);
    setSubmitError(undefined);

    const participantData = {
      ...data,
      DOB: moment(data.DOB).format(dateFormat),
      TECHACCESS: getTechAccessList(),
      [participantMergeTag]: 'true',
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const parentData: any = {
      FNAME: data.P_FNAME || '',
      LNAME: data.P_LNAME || '',
      EMAIL: data.P_EMAIL || '',
    };

    if (parentMergeTag) {
      parentData[parentMergeTag] = 'true';
    }

    mutation.mutate({ ...participantData });
  };

  useEffect(
    () => {
      if (mutation.error) {
        setSubmitError(mutation.error);
        setSubmitLoading(false);
        return undefined;
      }
      if (mutation.isSuccess) {
        setSubmitSuccess(true);
        setSubmitLoading(false);
        return undefined;
      }

      if (
        submitLoading
        && !mutation.isLoading
      ) {
        setSubmitError(new Error(defaultErrorMsg));
        setSubmitLoading(false);
      }
    },
    [mutation.error, mutation.isSuccess, submitLoading, mutation.isLoading] // rules of hook eslint
  );

  let render;

  if (isRegistrationOpen) {
    render = (
      <>
        <Typography gutterBottom>
          Please review the&nbsp;
          <a href="#contest-outline">
            Contest Outline
          </a>
          &nbsp;with your parent or guardian before registering to ensure you meet the eligibility requirements and understand your commitment to Digital Waves.
        </Typography>
        <Typography>
          You may also register for our event on&nbsp;
          <a
            href="https://www.eventbrite.ca/e/digital-waves-participant-registration-tickets-189810657787"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eventbrite
          </a>
          .
        </Typography>
        {
          submitSuccess
            ? (
              <>
                {
                  duplicateParentWarning
                    ? (
                      <Typography className={classes.typographyDuplicateParent}>
                        <strong>Heads up!</strong>
                        <br /><br />
                        The parent/guardian email associated with this registration is already subscribed to Digital Waves updates.
                        To reduce clutter in their inbox, they will not receieve the registration information again.
                        <br /><br />
                        If you feel like this is in error, please contact&nbsp;
                        <a href="mailto:info@digitalwavesnl.ca">
                          info@digitalwavesnl.ca
                        </a>
                        &nbsp;and we will be happy to assist you.
                      </Typography>
                    )
                    : null
                }
                <Typography className={classes.form}>
                  <strong>
                    Thanks for registering to participate in Digital Waves!
                    You should receive an email from us within the next 24 hours.
                  </strong>
                </Typography>
                <Typography>
                  <strong>
                    If you don&rsquo;t see anything in your inbox after this time,
                    check your spam folder or contact&nbsp;
                    <a href="mailto:info@digitalwavesnl.ca">
                      info@digitalwavesnl.ca
                    </a>
                    &nbsp;to verify your registration.
                  </strong>
                </Typography>
              </>
            )
            : (
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
                      name="FNAME"
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
                          error={Boolean(errors.FNAME)}
                          helperText={errors.FNAME?.message}
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
                          className={classes.textField}
                          required
                          fullWidth
                          error={Boolean(errors.LNAME)}
                          helperText={errors.LNAME?.message}
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
                      required
                      fullWidth
                      error={Boolean(errors.EMAIL)}
                      helperText={errors.EMAIL?.message}
                    />
                  )}
                />
                <Controller
                  name="DOB"
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
                      error={Boolean(errors.DOB)}
                      helperText={errors.DOB?.message}
                      openTo="year"
                    />
                  )}
                />
                <Controller
                  name="CITY"
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
                      error={Boolean(errors.CITY)}
                      helperText={errors.CITY?.message}
                    />
                  )}
                />
                <Controller
                  name="SCHOOL"
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
                      error={Boolean(errors.SCHOOL)}
                      helperText={errors.SCHOOL?.message}
                    />
                  )}
                />
                <Controller
                  name="GRADE"
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
                        min: 6,
                        max: 12,
                      }}
                      error={Boolean(errors.GRADE)}
                      helperText={errors.GRADE?.message}
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
                  error={Boolean(errors.REFERRER)}
                >
                  <InputLabel id="referrer-label">
                    How did you learn about Digital Waves? 
                  </InputLabel>
                  <Controller
                    name="REFERRER"
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
                    errors.REFERRER
                      ? (
                        <FormHelperText>
                          {errors.REFERRER?.message}
                        </FormHelperText>
                      )
                      : null
                  }
                </FormControl>
                {
                  watchReferrer === 'other'
                    ? (
                      <Controller
                        name="REF_OTHER"
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
                            error={Boolean(errors.REF_OTHER)}
                            helperText={errors.REF_OTHER?.message}
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
                      name="P_FNAME"
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
                          error={Boolean(errors.P_FNAME)}
                          helperText={errors.P_FNAME?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="P_LNAME"
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
                          error={Boolean(errors.P_LNAME)}
                          helperText={errors.P_LNAME?.message}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Controller
                  name="P_EMAIL"
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
                      error={Boolean(errors.P_EMAIL)}
                      helperText={errors.P_EMAIL?.message}
                    />
                  )}
                />
                <Controller
                  name="CONSENT"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <>
                      <FormControlLabel
                        className={classes.formControlLabelConsent}
                        control={(
                          <Checkbox {...field} />
                        )}
                        label={consentLabel}
                      />
                      {
                        errors.CONSENT
                          ? (
                            <FormHelperText
                              error
                              className={classes.formHelperTextConsent}
                            >
                              {errors.CONSENT?.message}
                            </FormHelperText>
                          )
                          : null
                      }
                    </>
                  )}
                />
                <Typography>
                  Your personal information will not be shared with any third-party organizations with your explicit consent.
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
                </div>
                {
                  submitError
                    ? (
                      <Typography component="div" color="error">
                        <p dangerouslySetInnerHTML={{ __html: submitError.toString() }} />
                      </Typography>
                    )
                    : null
                }
              </form>
            )
        }
      </>
    );
  }
  // Registration closed
  else {
    render = (
      <div className={classes.containerClosed}>
        <Typography gutterBottom>
          Registration for this years eperience is now closed.
          Want to join our future events?
          Subscribe to our mailing list to be notified about future workshops, contests, and more!
        </Typography>
        <Link href='/subscribe'>
          <Button
            className={classes.buttonSubscribe}
            component="a"
            variant="raised"
            color="secondary"
          >
            Subscribe to Updates
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.root} id="contest-register">
      <div className={classes.container}>
        <Typography
          variant="h1"
          className={classes.typographyH1}
        >
          {title}
        </Typography>
        {render}
      </div>
      <div className={classes.aside} />
    </div>
  );
};

export default RegistrationForm;
