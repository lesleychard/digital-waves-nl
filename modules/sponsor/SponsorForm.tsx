import { Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '../../components/Button';

import { containerSm } from '../../styles/helpers/extend';

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

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="overline" component="h1">
          Sponsor Us
        </Typography>
        <Typography variant="h1" component="p" className={classes.typographyHeading}>
          Request To Sponsor
        </Typography>
        <Typography>
          Interested in sponsoring Digital Waves? Fill out the form below and a volunteer will be in touch.
        </Typography>
        
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
        >
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
                        value={pkg.value}
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
            >
              Request To Sponsor
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SponsorForm;
