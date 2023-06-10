import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Send as SendIcon } from '@material-ui/icons';
import { ReactNode, ReactElement } from 'react';
import Button, { ButtonProps } from './Button';

type Props = {
  children?: ReactNode,
  buttonProps?: ButtonProps,
  emailSubject?: string,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
    },
    containerCta: {
      marginTop: theme.spacing(2),
    },
    linkEmail: {
      color: theme.palette.text.primary,
    },
  })
);

const FormFallback = ({ children, emailSubject, buttonProps }: Props): ReactElement => {
  const classes = useStyles();
  const mailTo = 'mailto:info@digitalwavesnl.ca';
  const mailToSubject = emailSubject ? `?subject=${emailSubject}` : null;

  return (
    <div className={classes.root}>
      {children}
      <Typography>
        Email
        &nbsp;
        <a
          href={mailTo + mailToSubject}
          className={classes.linkEmail}
          target="_blank"
          rel="noopener noreferrer"
        >
          info@digitalwavesnl.ca
        </a>
        &nbsp;
        and a team member will be in touch within 2-5 business days.
      </Typography>
      <div className={classes.containerCta}>
        <Button
          variant="raised"
          component="a"
          href={mailTo + mailToSubject}
          color="primary"
          endIcon={<SendIcon />}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          target="_blank"
          rel="noopener noreferrer"
          {...buttonProps}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default FormFallback;

